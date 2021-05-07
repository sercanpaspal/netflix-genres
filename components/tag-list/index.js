import TagListItem from "../tag-list-item";
import styles from "./index.module.css";

const TagList = ({ tags }) => {
  return (
    <div>
      <h2 className={styles.title}>Etikete Göre Filtrele ({tags.length})</h2>
      <ul className={styles.list}>
        {tags.map((tag, _i) => (
          <TagListItem tag={tag} key={_i} />
        ))}
      </ul>
    </div>
  );
};

export default TagList;
