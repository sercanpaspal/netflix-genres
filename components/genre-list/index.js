import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useLoadItems } from "../../hooks";
import { useState, useEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';
import GenreListItem from "../genre-list-item";
import Loader from '../loader';
import styles from "./index.module.css";

const GenreList = ({ genres }) => {
  const { loading, items, hasNextPage, loadMore } = useLoadItems(genres, 64);
  const [showScroll, setShowScroll] = useState(false);
  const [wndw, setWindow] = useState({});

  useEffect(() => {
    setWindow(window);
    window.addEventListener('scroll', checkScrollTop)
  });

  const checkScrollTop = () => {
    if (!showScroll && wndw.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && wndw.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
  });

  const scrollTop = () => {
    wndw.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className={styles.title}>Tür Listesi ({genres.length})</h2>
      <ul className={styles.list}>
        {items.map((genre, _i) => (
          <GenreListItem genre={genre} key={_i} />
        ))}
      </ul>
      {hasNextPage &&
        <div ref={infiniteRef} >
          <Loader />
        </div >}
      <FaArrowCircleUp
        className="scrollTop"
        size={32}
        onClick={scrollTop}
        style={{
          right: 20,
          bottom: 20,
          position: 'fixed',
          display: showScroll ? 'flex' : 'none'
        }}
      />
    </div>
  );
};

export default GenreList;
