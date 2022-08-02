import clsx from "clsx";
import { useState } from "react";
import styles from "./styles.module.scss";

const End = ({ restart, pickDifficulty }) => {
  const [selectionActive, setSelectionActive] = useState(false);
  const onClick = () => {
    setSelectionActive(!selectionActive);
  };
  return (
    <div className={styles.outer}>
      {selectionActive ? (
        <div>
          <h3 onClick={onClick}>Select level of difficulty:</h3>
          <div className={styles.levelWrap}>
            <button
              onClick={pickDifficulty}
              value={4}
              className={clsx(styles.btn, styles.diffultyBtn)}
            >
              Easy
            </button>
            <button
              onClick={pickDifficulty}
              value={6}
              className={clsx(styles.btn, styles.diffultyBtn)}
            >
              Medium
            </button>
            <button
              onClick={pickDifficulty}
              value={8}
              className={clsx(styles.btn, styles.diffultyBtn)}
            >
              Hard
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onClick}
          className={clsx(styles.btn, styles.replayBtn)}
        >
          Play again
        </button>
      )}
    </div>
  );
};
export default End;
