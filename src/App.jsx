import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Paste & Listen</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste or type your text here..."
        style={{ width: "100%", height: "150px", marginBottom: "10px" }}
      />
      <div>
        <button onClick={() => setText(input)} style={{ marginRight: "10px" }}>
          Display Text
        </button>
        <button onClick={() => { setInput(""); setText(""); }}>
          Clear
        </button>
      </div>
      {text && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Text:</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{text}</p>
        </div>
      )}
    </div>
  );
}
