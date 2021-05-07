import { useEffect, useState } from "react";

const usePagination = (all = [], size = 24) => {
  const [page, setPage] = useState(1);

  return [all.slice(0, page * size), page, setPage, page * size < all.length];
};

export { usePagination };
