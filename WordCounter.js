import React, { useState, useEffect } from 'react';

import './WordCounter.css';

const WordCounter = () => {
    const [text, setText] = useState('');

    const countWords = () => {
        const words = text.split(/\s+/).filter(word => word !== '');
        return words.length;
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        document.title = 'Task 1';
    }, []);

    return (
        <div className="word-counter">
            <h1>
                <center> Responsive Paragraph Word Counter </center>
            </h1>
            <textarea
                placeholder="Enter your text here..."
                onChange={handleTextChange}
                value={text}
            />
            <p>Word Count: {countWords()}</p>
        </div>
    );
};

export default WordCounter;
