import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";

const QuoteBox = () => {
  const [quote, setQuote] = useState("...Ops, something went wrong");
  const [author, setAuthor] = useState("something haappened");

  const api_url = "https://api.quotable.io/random";

  async function fetchData() {
    const res = await axios.get(`${api_url}`);
    const data = res.data;
    setQuote(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app" id="quote-box">
      <div className="quote">
        <p id="text">{quote}</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/random-quote-machine-7b8c5.appspot.com/o/quote.svg?alt=media&token=c07165c9-5317-4d7e-9549-77136e197032"
          alt="quote-icon"
        />
      </div>
      <div className="quote-info-and-actions">
        <div className="new-quote-cta-box">
          <button id="new-quote" onClick={() => fetchData()}>
            Get new quote
          </button>
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
