import { useRef } from "react";
import Portal from "../Portal";
import { StyledPopoverTrigger, StylePopoverContent } from "./Popover.styled";
import { useDetectOutsideClick } from "@commons/hooks/useDetectOutsideClick";
import { useTrackElementRect } from "@commons/hooks/useTrackElementRect";

type TriggerProps = {
  Trigger: React.ReactNode;
  PopoverContent: React.ReactNode;
  isOpen: boolean;
  onToggle?: (isTrigger: boolean) => void;
  doNotCloseOnOutsideClick?: boolean;
  isContentFitTriggerWidth?: boolean;
  isDisabled?: boolean;
};

export default function Popover({
  Trigger,
  PopoverContent,
  onToggle,
  isOpen,
  doNotCloseOnOutsideClick,
  isContentFitTriggerWidth,
  isDisabled,
}: TriggerProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const { x, y, width } = useTrackElementRect(triggerRef);

  const handleOutsideClick = () => {
    if (doNotCloseOnOutsideClick) return;
    if (isOpen) onToggle?.(false);
  };

  const handleToggle = () => {
    onToggle?.(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        onToggle?.(false);
        break;
      case "Enter":
      case " ":
        onToggle?.(!isOpen);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (popoverRef.current) popoverRef.current.focus();
        break;
      default:
        break;
    }
  };

  useDetectOutsideClick([triggerRef, popoverRef], handleOutsideClick);

  return (
    <>
      <StyledPopoverTrigger
        onClick={handleToggle}
        ref={triggerRef}
        onKeyDown={handleKeyDown}
      >
        {Trigger}
      </StyledPopoverTrigger>
      {!isDisabled && isOpen && (
        <Portal>
          <StylePopoverContent
            $x={x}
            $y={y + triggerRef.current?.clientHeight!}
            $width={isContentFitTriggerWidth ? width : undefined}
            ref={popoverRef}
          >
            {PopoverContent}
          </StylePopoverContent>
        </Portal>
      )}
    </>
  );
}
