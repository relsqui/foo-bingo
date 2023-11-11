import * as React from "react";
import { items } from './items.json';

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

function chooseItems() {
  
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
