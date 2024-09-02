import { Option } from "@commons/types/commons";
import {
  DefaultStyleFormElement,
  DefaultStyleFormElementVariant,
} from "../../DefaultFormElementStyle";

type CheckboxProps = {
  name: string;
  options: Option[];
  selectedOptions: Option[];
  onCheckboxClick: (selectedOptions: Option[]) => void;
  variant?: DefaultStyleFormElementVariant;
  isDisabled?: boolean;
};

export default function Checkbox({
  name,
  options,
  selectedOptions,
  onCheckboxClick,
  variant,
  isDisabled,
}: CheckboxProps) {
  const handleCheckboxClick = (option: Option) => {
    if (isDisabled) return;

    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];
    onCheckboxClick(newSelectedOptions);
  };

  return (
    <DefaultStyleFormElement $variant={variant || "Filled"}>
      {options.map((option) => (
        <div key={option.label}>
          <input
            type="checkbox"
            id={option.label}
            name={name}
            value={option.value}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxClick(option)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </div>
      ))}
    </DefaultStyleFormElement>
  );
}
