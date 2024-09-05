import { Option } from "@commons/types/commons";
import {
  DefaultStyleFormElement,
  DefaultStyleFormElementVariant,
} from "../../DefaultFormElementStyle";

type CheckboxProps<T> = {
  name: string;
  options: Option<T>[];
  selectedOptions: Option<T>[];
  onCheckboxClick: (selectedOptions: Option<T>[]) => void;
  variant?: DefaultStyleFormElementVariant;
  isDisabled?: boolean;
};

export default function Checkbox<
  T extends string | number | readonly string[] | undefined,
>({
  name,
  options,
  selectedOptions,
  onCheckboxClick,
  variant,
  isDisabled,
}: CheckboxProps<T>) {
  const handleCheckboxClick = (option: Option<T>) => {
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
