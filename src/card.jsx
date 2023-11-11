import * as React from "react";

export default function Card() {
  const cardItems = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  return (
    <>
      <div class="card">
      {
          cardItems.map(item => <div class="item">{item}</div>)
        }
      </div>
    </>
  );
}
