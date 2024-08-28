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
  const [isTrigger, setIsTrigger] = useState(false);

  const handleContentClick = (option: Option<T>) => {
    contentProps.onClick?.(option);
    if (isCloseWhenClick) {
      setIsTrigger(false);
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
      isOpen={isTrigger}
      onClick={setIsTrigger}
    />
  );
}
