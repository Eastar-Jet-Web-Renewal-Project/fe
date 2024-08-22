import { useEffect, useState, useCallback, useRef } from "react";

export const useHoverEvent = <T extends HTMLElement>(
  onHover?: (e: EventTarget) => void,
  onLeave?: (e: EventTarget) => void,
) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T>(null);

  const handleHover = useCallback(
    (e: Event) => {
      if (!e.target) return;
      onHover?.(e.target);
      setIsHover(true);
    },
    [onHover],
  );

  const handleLeave = useCallback(
    (e: Event) => {
      if (!e.target) return;
      onLeave?.(e.target);
      setIsHover(false);
    },
    [onLeave],
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("pointerenter", handleHover);
    element.addEventListener("touchend", handleLeave);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("pointerenter", handleHover);
      element.removeEventListener("touchend", handleLeave);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, handleHover, handleLeave]);

  return { ref, isHover };
};
