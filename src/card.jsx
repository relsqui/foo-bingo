import * as React from "react";

function Item({ content }) {
  return (
    <>
      <div class="item">
        <div class="item-content">
          {content}
        </div>
      </div>
    </>
  );
}

export default function Card() {
  const cardItems = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return (
    <>
      <div class="card">
        {cardItems.map((item) => (
          <Item content={item} />
        ))}
      </div>
    </>
  );
}
