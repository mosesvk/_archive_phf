import { useCallback, useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

export default function useModalState (
  isInitiallyOpen = false,
  onClickOutsideHandler
) {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback((e) => {
    setIsOpen(false);
  }, []);
  const onClickOutside = useCallback(
    (e) => {
      const shouldClose =
        e.isClickingOutside || e.isClickingOutside === undefined;
      const next = () => setIsOpen(!shouldClose);

      if (onClickOutsideHandler) {
        onClickOutsideHandler(e, next);
      } else {
        next();
      }
    },
    [onClickOutsideHandler]
  );

  const ref = useRef(null);
  useClickOutside(ref, isOpen && onClickOutside);

  return { isOpen, setIsOpen, ref, onOpen, onClose };
}
