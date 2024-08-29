import { useState } from "react";
import Popover from "../Popover/Popover";
import DropdownContent, {
  DropdownContentProps,
} from "./DropdownContent/DropdownContent";
import DropdownTrigger, {
  DropdownTriggerProps,
} from "./DropdownTrigger/DropdownTrigger";
import { Option } from "@commons/types/commons";

type DropdownProps<T> = {
  triggerProps: DropdownTriggerProps;
  contentProps: DropdownContentProps<T>;
  isCloseWhenClick?: boolean;
};

export default function Dropdown<T>({
  triggerProps,
  contentProps,
  isCloseWhenClick,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const handleContentClick = (option: Option<T>) => {
    contentProps.onClick?.(option);
    if (isCloseWhenClick) {
      setIsOpen(false);
    }
  };

  return (
    <Popover
      Trigger={<DropdownTrigger {...triggerProps} />}
      PopoverContent={
        contentProps.options && (
          <DropdownContent {...contentProps} onClick={handleContentClick} />
        )
      }
      isOpen={isOpen}
      onToggle={handleToggle}
    />
  );
}
