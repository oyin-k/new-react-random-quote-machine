import React, { useState } from "react";
import "./styles.scss";

const QuoteBox = () => {
  const [quote, setQuote] = useState(
    "Whatever the mind of man can conceive and believe, it can achieve."
  );
  const [author, setAuthor] = useState("Napoleon Hill");

  return (
    <div className="app" id="quote-box">
      <div className="quote">
        <p id="text">{quote}</p>
      </div>
      <div className="quote-info-and-actions">
        <div className="new-quote-cta-box">
          <button id="new-quote">Get new quote</button>
          <a href="https://twitter.com/intent/tweet" id="tweet-quote">
            Tweet this quote
          </a>
        </div>
        <div className="quote-author" id="author">
          <img src="" alt="" className="author-image" />
          <p className="author-name">{author}</p>
          {/* <span className="author-field" ></span> */}
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
