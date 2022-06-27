import { useState } from 'react'
import Quotes from './components/Quotes'
import Author from './components/Author'
import Click from './components/Click'
import './App.css'
import quotes from './quotes.json'
import colors from './colors.json'

function App() {
    const randomQ = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomQ]

    const randomC = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomC].hex

    const randomText = randomQuote.quoteText
    const randomAuthor = randomQuote.quoteAuthor

    const [text, setText] = useState(randomText)
    const [author, setAuthor] = useState(randomAuthor)


    const click = () => {

        const randomClick = Math.floor(Math.random() * quotes.length)

        setText(quotes[randomClick].quoteText)
        setAuthor(quotes[randomClick].quoteAuthor)
    }

    return (
        <header className="header" style={{ backgroundColor: randomColor, color: randomColor }}>
            <div className="card">
                <Quotes textN={text} />
                <Author authorN={author} />
                <Click clickN={click} randomColorN={randomColor} />
            </div>
        </header>
    )
}
export default App
