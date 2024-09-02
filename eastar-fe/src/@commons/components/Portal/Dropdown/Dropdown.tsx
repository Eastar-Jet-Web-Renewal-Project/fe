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
  optionsProps: DropdownOptionsProps<T>;
  isCloseWhenClickOption?: boolean;
};

export default function Dropdown<T>({
  triggerProps,
  optionsProps,
  isCloseWhenClickOption,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const handleContentClick = (option: Option<T>) => {
    optionsProps.onClick?.(option);
    if (isCloseWhenClickOption) {
      setIsOpen(false);
    }
  };

  return (
    <Popover
      Trigger={<DropdownTrigger {...triggerProps} />}
      PopoverContent={
        optionsProps.options && (
          <DropdownOptions {...optionsProps} onClick={handleContentClick} />
        )
      }
      isOpen={isOpen}
      onToggle={handleToggle}
      isContentFitTriggerWidth
    />
  );
}
