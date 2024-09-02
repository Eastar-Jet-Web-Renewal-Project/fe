import { useEffect, useRef, useState } from "react";

export const useTrackElementRect = (
  trackElementRef: React.RefObject<HTMLElement>,
) => {
  const [rect, setRect] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const rafRef = useRef<number | null>(null);

  const getTrackElementPosition = () => {
    if (trackElementRef.current) {
      const { x, y, width, height } =
        trackElementRef.current.getBoundingClientRect();
      setRect({ x, y, width, height });
    }

    rafRef.current = requestAnimationFrame(getTrackElementPosition);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(getTrackElementPosition);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return rect;
};
