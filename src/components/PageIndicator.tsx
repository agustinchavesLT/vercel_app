import { useState } from "react";

type PageIndicatorProps = {
  name: string;
};

export default function PageIndicator({ name }: PageIndicatorProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ margin: "1rem 0" }}>You are on: {name}</h1>
      <button
        onClick={() => setShowDetails((v) => !v)}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: 8,
          border: "1px solid #ccc",
          background: showDetails ? "#eef6ff" : "#f7f7f7",
          cursor: "pointer",
        }}
      >
        {showDetails ? "Hide" : "Show"} details
      </button>
      {showDetails && (
        <p style={{ marginTop: "0.75rem", color: "#444" }}>
          This message is hydrated with React. Redirects and rewrites will not
          reload this component when navigating client-side.
        </p>
      )}
    </section>
  );
}
