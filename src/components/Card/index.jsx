// import { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Card = ({ value, onClick, active, matched }) => {
  return (
    <button className={styles.outer} onClick={onClick}>
      {matched ? (
        <div></div>
      ) : active ? (
        <div className={clsx(active ? styles.frontOfCard : styles.hidden)}>
          {value}
        </div>
      ) : (
        <div className={styles.backOfCard}></div>
      )}
    </button>
  );
};

export default Card;
