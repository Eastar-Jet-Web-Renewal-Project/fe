import { Position } from "@commons/types/math";
import { useEffect, useRef, useState } from "react";

export const useTrackElementPosition = (
  trackElementRef: React.RefObject<HTMLElement>,
) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const rafRef = useRef<number | null>(null);

  const getTrackElementPosition = () => {
    if (trackElementRef.current) {
      const { x, y } = trackElementRef.current.getBoundingClientRect();
      setPosition({ x, y });
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

  return position;
};
