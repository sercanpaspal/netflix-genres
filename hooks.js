import { useState } from "react";

const useLoadItems = (all = [], size = 24) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  function loadMore() {
    setLoading(true);
    setItems(all.slice(0, pageIndex * size));
    setPageIndex(pageIndex + 1);
    setHasNextPage(pageIndex * size < all.length);
    setLoading(false);
  }

  return { loading, items, hasNextPage, loadMore };
}

export { useLoadItems };
