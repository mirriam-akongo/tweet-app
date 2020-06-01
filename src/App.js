import React from "react";
import Tweet from "./Tweet";

function App() {
  // const style = {text-align: center;
  // display: block;}
  return (
    <div className="app">
      <h1 style={({ display: "block" }, { marginBottom: "45px" })}>
        My Three Sisters and I
      </h1>
      <div className="App">
        <Tweet name="Brenda" message="Great being an advocate" likes="500k" />
        <Tweet name="Winnie" message="Wonderful to be an HR" likes="499k" />
        <Tweet name="Mirriam" message="Yay Software Engineers" likes="498k" />
        <Tweet name="Martha" message="Bravo to Doctors" likes="497k" />
      </div>
    </div>
  );
}

export default App;
