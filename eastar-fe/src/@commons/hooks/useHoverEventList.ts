import { useState, useCallback, useRef, useEffect } from "react";

export const useHoverEventList = <T extends HTMLElement, K extends string>(
  keys: K[],
  onHover?: (key: K, e: EventTarget) => void,
  onLeave?: (key: K, e: EventTarget) => void,
) => {
  const [hoverStates, setHoverStates] = useState<Record<K, boolean>>(() =>
    keys.reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {} as Record<K, boolean>,
    ),
  );
  const refs = useRef<Record<K, T | null>>(
    keys.reduce(
      (acc, key) => ({ ...acc, [key]: null }),
      {} as Record<K, T | null>,
    ),
  );

  const handleHover = useCallback(
    (key: K) => (e: Event) => {
      if (!e.target) return;
      onHover?.(key, e.target);
      console.log(`hovered: ${key}`);
      setHoverStates((prev) => ({ ...prev, [key]: true }));
    },
    [onHover],
  );

  const handleLeave = useCallback(
    (key: K) => (e: Event) => {
      if (!e.target) return;
      onLeave?.(key, e.target);
      console.log(`left: ${key}`);
      setHoverStates((prev) => ({ ...prev, [key]: false }));
    },
    [onLeave],
  );

  useEffect(() => {
    Object.entries<T | null>(refs.current).forEach(([key, element]) => {
      if (!element) return;

      const hoverHandler = handleHover(key as K);
      const leaveHandler = handleLeave(key as K);

      element.addEventListener("pointerenter", hoverHandler);
      element.addEventListener("touchend", leaveHandler);
      element.addEventListener("mouseleave", leaveHandler);

      return () => {
        element.removeEventListener("pointerenter", hoverHandler);
        element.removeEventListener("touchend", leaveHandler);
        element.removeEventListener("mouseleave", leaveHandler);
      };
    });
  }, [handleHover, handleLeave]);

  const setRef = useCallback(
    (key: K) => (node: T | null) => {
      refs.current[key] = node;
    },
    [],
  );

  return { setRef, hoverStates };
};
