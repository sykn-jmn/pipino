"use client";

import { Check, ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type DropdownOption = {
  value: string;
  name: string;
  icon?: React.ReactNode;
};

type DropdownCustomButton = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

type DropdownProps = React.ComponentProps<"input"> & {
  options: DropdownOption[];
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  customButton: DropdownCustomButton;
};

export default function Dropdown({
  name,
  label,
  options,
  placeholder,
  icon,
  customButton,
  ...props
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<DropdownOption>();
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const expand = () => {
    setExpanded((prev) => !prev);
  };

  const selectOption = (option: DropdownOption) => {
    setSelectedOption(option);
  };

  const isSelectedOption = (
    option: DropdownOption,
    selectedOption: DropdownOption | undefined,
  ) => {
    return option.value === selectedOption?.value;
  };

  useEffect(() => {
    if (!expanded) return;

    function handlePointerDown(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setExpanded(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [expanded]);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block select-none text-[13px] font-semibold text-on-surface mb-1"
      >
        {label}
      </label>
      <button
        id={name}
        className="text-[13px] h-11 w-full px-space-md rounded-lg text-on-surface text-body-md cursor-pointer bg-surface-container-low flex items-center justify-start gap-1"
        onClick={expand}
      >
        {selectedOption ? (
          <div className="text-primary [&_svg]:size-[18]">
            {selectedOption.icon}
          </div>
        ) : (
          icon && (
            <div className="text-on-surface-variant [&_svg]:size-[18]">
              {icon}
            </div>
          )
        )}
        {selectedOption ? (
          <p className="text-on-surface min-w-0 flex-1 text-left font-semibold">
            {selectedOption.name}
          </p>
        ) : (
          placeholder && (
            <p className="text-on-surface-variant min-w-0 flex-1 text-left">
              {placeholder}
            </p>
          )
        )}
        <div
          className={`[&_svg]:size-5 transition-all duration-200 ${expanded ? "text-primary rotate-180" : "text-outline rotate-0"}`}
        >
          <ChevronDown />
        </div>
      </button>
      <div
        ref={dropdownRef}
        className={`absolute z-50 top-full mt-1 overflow-y-hidden transition-[max-height] duration-200 ${expanded ? "max-h-100 py-1" : "max-h-0"} bg-surface-container-low w-full rounded-b-lg px-1 shadow-md`}
      >
        <ul role="listbox">
          {options.map((option) => (
            <li
              onClick={() => selectOption(option)}
              role="option"
              key={option.value}
              className={`mt-1 last:mb-1 flex items-center justify-left gap-1 px-space-md py-space-sm cursor-pointer rounded-lg [&_svg]:size-[18] text-outline transition-colors duration-50 ${isSelectedOption(option, selectedOption) ? "bg-secondary-container hover:bg-secondary-container" : "bg-transparent hover:bg-surface-container"}`}
            >
              {option.icon}
              <span
                className={`text-body-md flex-1 ${isSelectedOption(option, selectedOption) ? "font-bold text-on-secondary-container" : "text-on-surface"}`}
              >
                {option.name}
              </span>
              {isSelectedOption(option, selectedOption) && <Check />}
            </li>
          ))}
        </ul>
        {customButton && (
          <button className="px-space-md rounded-lg cursor-pointer py-space-sm flex items-center justify-left gap-1 hover:bg-surface-container [&_svg]:size-[18] text-primary w-full">
            {customButton.icon}
            <span className="text-label-md flex-1 text-left">
              {customButton.label}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
