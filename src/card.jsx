import * as React from "react";
import { items } from './items.json';

function Item({ content, hasChip }) {
  
  return (
    <>
      <button className="item">
          {content}
      </button>
    </>
  );
}

function chooseItems() {
  // TODO: better shuffle
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 16);
}

export default function Card() {
  const cardItems = chooseItems();

  return (
    <>
      <div className="card">
        {cardItems.map((item) => (
          <Item content={item} key={item} />
        ))}
      </div>
    </>
  );
}
