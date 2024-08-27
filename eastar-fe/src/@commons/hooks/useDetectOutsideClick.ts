import { RefObject, useCallback, useEffect } from "react";

export const useDetectOutSideClick = (
  refs: RefObject<HTMLElement>[],
  onClickOutside: () => void,
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target;

      if (target instanceof Node) {
        if (refs.some((ref) => ref.current?.contains(target))) return;
      }

      onClickOutside();
    },
    [onClickOutside, refs],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClickOutside]);
};
