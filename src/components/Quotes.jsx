import React, { useState } from 'react'
import quotes from '../quotes.json'
import colors from '../colors.json'

const Quotes = () => {
    const randomQ = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomQ]

    const randomC = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomC].hex

    const randomText = randomQuote.quoteText
    const randomAuthor = randomQuote.quoteAuthor

    const [text, setText] = useState(randomText)
    const [author, setAuthor] = useState(randomAuthor)


    const click = () => {

        const randomClick =  Math.floor(Math.random() * quotes.length)

        setText(quotes[randomClick].quoteText)
        setAuthor(quotes[randomClick].quoteAuthor)
    }



    return (
        <header className="header" style={{backgroundColor: randomColor,color: randomColor}}>
            <div className="card">
                <p className='text'>" {text} "</p>
                <span className='author'>{author}.</span>
                <button onClick={click} className="click" ><i style={{color: randomColor}} className="fa-solid fa-arrow-rotate-left"></i></button>
            </div>
        </header>
    );
};

export default Quotes;