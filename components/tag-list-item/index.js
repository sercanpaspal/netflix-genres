import React from "react";
import styles from "./index.module.css";
import { useStore, TOGGLE } from "../../store";
import Button from "../button";

const TagListItem = ({ tag }) => {
  const [{ selectedTags }, dispatch] = useStore();

  return (
    <li className={styles.item}>
      <Button
        disabled={tag.disabled}
        active={selectedTags.includes(tag.name)}
        onClick={() => dispatch({ type: TOGGLE, payload: tag.name })}
      >
        {tag.name}
      </Button>
    </li>
  );
};

export default TagListItem;
