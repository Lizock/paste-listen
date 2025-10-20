import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");

  // Load from localStorage when app starts
  useEffect(() => {
    const savedText = localStorage.getItem("pasteListenText");
    if (savedText) setText(savedText);
  }, []);

  // Save to localStorage whenever text changes
  useEffect(() => {
    localStorage.setItem("pasteListenText", text);
  }, [text]);

  const handleClear = () => setText("");

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Paste & Listen</h1>
      <textarea
        style={{ width: "100%", height: "300px", fontSize: "16px" }}
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleClear}>Clear Text</button>
      </div>
      <p style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>{text}</p>
    </div>
  );
}
