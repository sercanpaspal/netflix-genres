import { useEffect, useRef, useState } from "react";

export const usePagination = (all = [], size = 24) => {
  const [page, setPage] = useState(1);

  return [all.slice(0, page * size), page, setPage, page * size < all.length];
};

export const useObserver = (
  handler,
  options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  }
) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (target) => handler(target[0].isIntersecting),
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return ref;
};
