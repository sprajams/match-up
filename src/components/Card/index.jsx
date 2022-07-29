// import { useState } from "react";
import clsx from "clsx";
import { useState } from "react";
import styles from "./styles.module.scss";

const Card = ({ value, setClicked, clicked }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(true);
    setClicked((curr) => {
      if (curr.length < 2) {
        return [...curr, value];
      } else {
        return [];
      }
    });
  };
  return (
    <div>
      <button className={styles.outer} onClick={onClick}>
        {active ? (
          <div className={clsx(active ? styles.frontOfCard : styles.hidden)}>
            {value}
          </div>
        ) : (
          <div className={styles.backOfCard}></div>
        )}
        {/* {value} */}
      </button>
    </div>
  );
};

export default Card;
