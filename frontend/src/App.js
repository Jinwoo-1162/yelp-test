import "./App.css";
import { useRef } from "react";

function App() {
  const reviewText = useRef();
  const reviewImage = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(reviewText.current.value);
    reviewText.current.value = "";
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="submission-box">
          <h1>Submit a review</h1>
          <form className="review-form" onSubmit={(e) => submitHandler(e)}>
            <textarea
              className="review-text"
              ref={reviewText}
              placeholder="What did you think?"
            ></textarea>
            <input className="review-button" type="file" accept="image/*" />

            <button className="review-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
