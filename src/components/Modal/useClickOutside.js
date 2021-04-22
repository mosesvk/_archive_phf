
import { useEffect } from "react";

function factoryClickOutsideHandler(containerRef, callback) {
  return (e) => {
    const container = containerRef.current;
    const isClickingOutside =
      container &&
      !container.contains(e.target) &&
      document.body.contains(e.target);
    if (isClickingOutside) {
      callback({ ...e, isClickingOutside });
    }
  };
}

export default function useClickOutside(containerRef, callback) {
  useEffect(() => {
    if (callback) {
      const handler = factoryClickOutsideHandler(containerRef, callback);
      const body = document.body;

      body.addEventListener("click", handler);
      // body.addEventListener("tap", handler);

      return () => {
        body.removeEventListener("click", handler);
        // body.removeEventListener("tap", handler);
      };
    }
  }, [containerRef, callback]);
}
