import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import PasteText from "./components/PasteText";

export default function App() {
  const pages = ["Page1", "Page2", "Page3", "Page4", "Page5"];

  return (
    <Router>
      <nav style={{ padding: "10px", textAlign: "center" }}>
        {pages.map((p) => (
          <Link key={p} to={`/${p}`} style={{ margin: "0 10px" }}>
            {p}
          </Link>
        ))}
      </nav>

      <Routes>
        {/* Redirect root "/" to Page1 */}
        <Route path="/" element={<Navigate to="/Page1" replace />} />

        {pages.map((p) => (
          <Route key={p} path={`/${p}`} element={<PasteText pageId={p} />} />
        ))}

        {/* Optional fallback for unknown routes */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center" }}>
              <h2>Page not found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
