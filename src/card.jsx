import * as React from "react";
import { items } from './items.json';

function Item({ content }) {
  // I want to implement this here but I'm not sure how
  // https://stackoverflow.com/a/74008654/252125
  return (
    <>
      <div class="item">
          {content}
      </div>
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
      <div class="card">
        {cardItems.map((item) => (
          <Item content={item} />
        ))}
      </div>
    </>
  );
}
