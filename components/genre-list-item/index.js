import styles from "./index.module.css";

const GenreListItem = ({ genre }) => (
  <li className={styles.item}>
    <a href={genre.url} target="_blank" className={styles.link}>
      {genre.name}
    </a>
  </li>
);

export default GenreListItem;
