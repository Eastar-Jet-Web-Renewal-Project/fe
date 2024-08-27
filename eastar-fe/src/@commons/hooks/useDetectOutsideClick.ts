import { RefObject, useCallback, useEffect } from "react";

export const useDetectOutsideClick = (
  refs: RefObject<HTMLElement>[],
  onClickOutside: () => void,
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target;

      if (target instanceof Node) {
        if (refs.some((ref) => ref.current?.contains(target))) return;
      }

      console.log("down");
      onClickOutside();
    },
    [onClickOutside, refs],
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClickOutside]);
};
