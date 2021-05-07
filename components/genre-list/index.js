import { useEffect } from "react";
import { usePagination } from "../../hooks";
import Button from "../button";
import GenreListItem from "../genre-list-item";
import styles from "./index.module.css";

const GenreList = ({ genres }) => {
  const [data, page, setPage, hasMore] = usePagination(genres);

  useEffect(() => {
    setPage(1);
  }, [genres]);

  return (
    <div>
      <h2 className={styles.title}>Tür Listesi ({genres.length})</h2>
      <ul className={styles.list}>
        {data.map((genre, _i) => (
          <GenreListItem genre={genre} key={_i} />
        ))}
      </ul>
      <div className="text-center p-5">
        {hasMore && (
          <Button onClick={() => setPage(page + 1)}>Daha fazla yükle</Button>
        )}
      </div>
    </div>
  );
};

export default GenreList;
