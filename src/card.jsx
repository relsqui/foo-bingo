import * as React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { items } from "./items.json";

const BaseChip = styled.span.attrs((props) => ({
  className: "chip",
  left: props.left,
  top: props.top,
}))`
  left: ${props => props.$left}em;
  top: ${props => props.$top}em;
`;

function makeOffset() {return Math.random() * 2 - 1;}

function Chip() {
  const left = makeOffset();
  const top = makeOffset();
  console.log(left, top);
  return (
    <span className="chipHolder">
      <BaseChip left={left} top={top} />
    </span>
  );
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
