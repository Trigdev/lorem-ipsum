import React, { SyntheticEvent, useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState<string>("0");
  const [text, setText] = useState<Array<string>>([]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    let amount: number = parseInt(count);

    if (parseInt(count) <= 0) {
      amount = 1;
    }

    if (parseInt(count) > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
