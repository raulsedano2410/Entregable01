import { useState } from 'react'
import './assets/App.css'
import QuoteBox from './components/QuoteBox '
import Author from './components/Author'
import Click from './components/Click'
import quotes from './assets/quotes.json'
import colors from './assets/colors.json'

function App() {
  const pickRandom = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[pickRandom]

  const randomC = Math.floor(Math.random() * colors.length)
  const randomColor = colors[randomC].hex

  const randomText = randomQuote.quote
  const randomAuthor = randomQuote.author

  const [text, setText] = useState(randomText)
  const [author, setAuthor] = useState(randomAuthor)

  const click = () => {

    const randomClick = Math.floor(Math.random() * quotes.length)

    setText(quotes[randomClick].quote)
    setAuthor(quotes[randomClick].author)
  }

  return (
    <header
      className="header"
      style={{ backgroundColor: randomColor, color: randomColor }}
    >
      <div className="card">
        <QuoteBox text={text} />
        <Author author={author} />
        <Click
          click={click}
          randomColor={randomColor}
        />
      </div>
    </header>
  )
}

export default App
