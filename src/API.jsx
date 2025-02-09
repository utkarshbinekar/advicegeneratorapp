import React, { useEffect, useState } from "react";
import './API.css';

function API() {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const data = await response.json();
            setQuote(data.slip.advice);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    if (loading) return <div className="loading" id="loading">Loading...</div>;

    return (
        <div className="quote-container" id="quote-container">
            <h1 className="quote-title" id="quote-title">Advice of the Day</h1>
            <p className="quote-text" id="quote-text">{quote}</p>
            <button className="quote-button" id="quote-button" onClick={fetchQuote}>Get New Advice</button>
        </div>
    );
}

export default API;