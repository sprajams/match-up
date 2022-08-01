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

  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if (clicked.length === 2) {
      const timer = setTimeout(() => {
        if (deck[clicked[0]] === deck[clicked[1]]) {
          deck[clicked[1]] = "_";
          deck[clicked[0]] = "_";
        }
        setClicked([]);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [clicked, deck]);

  const gameOver = deck.length > 1 && deck.every((x) => x === "_");
  return (
    <div>
      <div className={styles.outer}>
        {gameOver ? (
          <div> game over</div>
        ) : (
          deck.length > 1 &&
          deck.map((cardValue, index) => {
            // if index is in current, then the card is open
            const onClick = () => {
              setClicked((curr) => {
                return [...curr, index];
              });
            };
            const active = clicked.includes(index);
            const matched = cardValue === "_";
            return (
              <div key={index}>
                <Card
                  index={index}
                  value={cardValue}
                  onClick={onClick}
                  disabled={clicked.length === 2}
                  active={active && !matched}
                  matched={matched}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Board;
