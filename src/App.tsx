import React, {
  SyntheticEvent,
  useState,
  useEffect,
  FC,
  ReactElement,
} from "react";
import data from "./data";

export interface IApp {}

const App: FC<IApp> = (): ReactElement => {
  const [count, setCount] = useState<string>("0");
  const [text, setText] = useState<Array<string>>([]);
  const [msg, setMsg] = useState<string>("copy");

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

  const copyTheGeneratedParagraphs = (): void => {
    navigator.clipboard.writeText(text.join(" "));
    setMsg("copied");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg("copy");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [msg]);

  return (
    <section className="section-center">
      <h3>paragraph generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="button-89">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index} className="robo-reg">
              {item}
            </p>
          );
        })}

        {text.length > 0 && (
          <button
            type="button"
            className="button-89"
            onClick={() => copyTheGeneratedParagraphs()}
          >
            {msg}
          </button>
        )}
      </article>
    </section>
  );
};

export default App;
