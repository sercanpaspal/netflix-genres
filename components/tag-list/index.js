import useTranslation from "next-translate/useTranslation";
import TagListItem from "../tag-list-item";
import styles from "./index.module.css";

const TagList = ({ tags }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h2 className={styles.title}>
        {t("filter_by_tag")} ({tags.filter((t) => !t.disabled).length})
      </h2>
      <ul className={styles.list}>
        {tags.map((tag, _i) => (
          <TagListItem tag={tag} key={_i} />
        ))}
      </ul>
    </div>
  );
};

export default TagList;
