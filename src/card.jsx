import * as React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { items } from "./items.json";


const BaseChip = styled.span.attrs({ className: "chip"})`
  position: relative;
  left: 1em;
  top: 1em;
`;

function Chip() {
  return (<span class="chipHolder">
      <BaseChip />
    </span>);
}

function Item({ content, hasChip, clickHandler }) {
  const chip = hasChip ? <Chip /> : "";
  return (
    <>
      <button className="item" onClick={clickHandler}>
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
  const [cardItems, setCardItems] = useState(() => chooseItems());

  function toggle(index) {
    const newItems = [...cardItems];
    newItems[index].hasChip = !cardItems[index].hasChip;
    setCardItems(newItems);
  }

  return (
    <>
      <div className="card">
        {cardItems.map((item, index) => (
          <Item
            key={index}
            content={item.item}
            hasChip={item.hasChip}
            clickHandler={() => toggle(index)}
          />
        ))}
      </div>
    </>
  );
}
