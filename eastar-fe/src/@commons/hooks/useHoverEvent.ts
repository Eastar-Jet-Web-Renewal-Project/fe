import { useEffect, useState } from "react";

// 데스크탑과 모바일 환경에서 모두 hover 이벤트를 처리하기 위한 hook
export const useHoverEvent = (
  ref: React.RefObject<HTMLElement>,
  onHover?: (e: EventTarget) => void,
  onLeave?: (e: EventTarget) => void,
) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (e: Event) => {
    if (!e.target) return;
    onHover?.(e.target);
    setIsHover(true);
  };
  const handleLeave = (e: Event) => {
    if (!e.target) return;
    onLeave?.(e.target);
    setIsHover(false);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    handleLeave(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    handleLeave(e);
  };

  const handlePointerEnter = (e: PointerEvent) => {
    handleHover(e);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 텍스트 선택 방지를 위한 스타일 적용
    element.style.userSelect = "none";

    element.addEventListener("pointerenter", handleHover);
    element.addEventListener("touchend", handleTouchEnd);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("pointerenter", handlePointerEnter);
      element.removeEventListener("touchend", handleTouchEnd);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, onHover, onLeave]);

  return isHover;
};
