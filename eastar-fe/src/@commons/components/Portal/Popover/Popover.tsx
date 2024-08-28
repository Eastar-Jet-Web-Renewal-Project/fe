import { useRef, useState } from "react";
import Portal from "../Portal";
import { StyledPopoverTrigger, StylePopoverContent } from "./Popover.styled";
import { useDetectOutsideClick } from "@commons/hooks/useDetectOutsideClick";
import { useTrackElementPosition } from "@commons/hooks/useTrackElementPosition";

type TriggerProps = {
  Trigger: React.ReactNode;
  PopoverContent: React.ReactNode;
  isOpen: boolean;
  onClick?: (isTrigger: boolean) => void;
  doNotCloseOnOutsideClick?: boolean;
};

export default function Popover({
  Trigger,
  PopoverContent,
  onClick,
  isOpen,
  doNotCloseOnOutsideClick,
}: TriggerProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const { x, y } = useTrackElementPosition(triggerRef);

  const handleOutsideClick = () => {
    if (doNotCloseOnOutsideClick) return;
    if (isOpen) onClick?.(false);
  };

  const handleToggle = () => {
    onClick?.(!isOpen);
  };

  useDetectOutsideClick([triggerRef, popoverRef], handleOutsideClick);

  return (
    <>
      <StyledPopoverTrigger onClick={handleToggle} ref={triggerRef}>
        {Trigger}
      </StyledPopoverTrigger>
      {isOpen && (
        <Portal>
          <StylePopoverContent
            $x={x}
            $y={y + triggerRef.current?.clientHeight!}
            ref={popoverRef}
          >
            {PopoverContent}
          </StylePopoverContent>
        </Portal>
      )}
    </>
  );
}
