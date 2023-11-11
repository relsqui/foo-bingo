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
  // https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array#get-multiple-random-elements-from-an-array-in-javascript
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 25);
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
