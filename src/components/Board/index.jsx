import { useState, useEffect } from "react";
import Card from "../Card";
import styles from "./styles.module.scss";

const Board = () => {
  const [deck, setDeck] = useState([]);

  const shuffleCards = (arr) => {
    let l = arr.length;
    let lastElem;
    // decrease the random length pool as we swap random index to the end
    while (--l > 0) {
      let randomIndex = Math.floor(Math.random() * (l + 1));
      lastElem = arr[l];
      // swap last element with the random element
      arr[l] = arr[randomIndex];
      arr[randomIndex] = lastElem;
    }
    return arr;
  };

  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 8; i++) {
      array.push(i);
      array.push(i);
    }
    setDeck(shuffleCards(array));
  }, []);
  return (
    <div className={styles.outer}>
      {deck &&
        deck.map((cardValue, i) => {
          const onClick = () => {
            console.log(cardValue, "clicked");
          };
          return <Card value={cardValue} key={i} onClick={onClick} />;
        })}
    </div>
  );
};
export default Board;
