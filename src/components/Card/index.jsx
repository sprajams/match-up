// import { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Card = ({ value, onClick, active, matched, disabled }) => {
  return (
    <button className={styles.outer} onClick={onClick} disabled={disabled}>
      {matched ? (
        <div className={clsx(styles.matched, styles.card)}></div>
      ) : (
        <div
          className={clsx(
            styles.card,
            active ? styles.frontOfCard : styles.backOfCard
          )}
        >
          {active && value}
        </div>
      )}
    </button>
  );
};

export default Card;
