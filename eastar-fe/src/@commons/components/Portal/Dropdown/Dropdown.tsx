import { useState } from "react";
import Popover from "../Popover/Popover";
import DropdownOptions, {
  DropdownOptionsProps,
} from "./DropdownOptions/DropdownOptions";
import DropdownTrigger, {
  DropdownTriggerProps,
} from "./DropdownTrigger/DropdownTrigger";
import { Option } from "@commons/types/commons";

type DropdownProps<T> = {
  triggerProps: DropdownTriggerProps;
  contentProps: DropdownOptionsProps<T>;
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
          <DropdownOptions {...contentProps} onClick={handleContentClick} />
        )
      }
      isOpen={isOpen}
      onToggle={handleToggle}
    />
  );
}
