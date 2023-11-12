import React from "react";

// Import the Home page component
import Card from "./card.jsx";

// Import and apply CSS stylesheet
import "./styles.css";

export default function App() {
  return (
    <>
      <div class="content">
        <h1 class="title">First of October Bingo</h1>
        <Card />
      </div>
    </>
  );
}
