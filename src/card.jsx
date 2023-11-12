import * as React from "react";
import { useState } from "react";
import { items } from "./items.json";

function Chip() {
  return (
    <>
      <span className="chip">
        <span className="chip offset"></span>
      </span>
    </>
  );
}

function Item({ content, hasChip }) {
  const chip = hasChip ? <Chip /> : "";
  return (
    <>
      <button className="item">
        {content}
        {chip}
      </button>
    </>
  );
}

function chooseItems() {
  // TODO: better shuffle
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 16).map((item) => {
    return { item, hasChip: false };
  });
}

export default function Card() {
  const [ cardItems, setCardItems ] = useState(() => chooseItems());
  
  function toggle(index) {
    const newItems = {...cardItems};
  }

  return (
    <>
      <div className="card">
        {cardItems.map((item, index) => (
          <Item content={item.item} key={index} />
        ))}
      </div>
    </>
  );
}
