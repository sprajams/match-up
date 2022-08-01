import styles from "./styles.module.scss";

const End = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.replayBtn}>
        Play again
      </button>
    </div>
  );
};
export default End;
