// src/components/PasteText.jsx
import { useState, useEffect } from "react";

export default function PasteText({ pageId }) {
  const [text, setText] = useState("");

  // Load text from localStorage when component mounts
  useEffect(() => {
    const savedText = localStorage.getItem(pageId);
    if (savedText) setText(savedText);
  }, [pageId]);

  // Save text to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(pageId, text);
  }, [pageId, text]);

  const handleClear = () => setText("");

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Paste & Listen - {pageId}</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        style={{ width: "100%", height: "150px", marginBottom: "10px" }}
      />
      <div>
        <button onClick={handleClear} style={{ marginRight: "10px" }}>
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
