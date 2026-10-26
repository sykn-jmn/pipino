"use client";

import { cva, VariantProps } from "class-variance-authority";
import { useId } from "react";

const labelVariants = cva("font-semibold text-[13px]", {
  variants: {
    error: {
      true: "text-error group-focus-within:text-error",
      false: "text-on-surface group-focus-within:text-primary",
    },
  },
  defaultVariants: {
    error: false,
  },
});

const inputVariants = cva(
  "bg-surface-container-low h-11 pr-space-md rounded-lg focus:outline focus:outline-2 text-sm placeholder:text-outline w-full",
  {
    variants: {
      error: {
        true: "outline-2 outline-error focus:outline-error text-error",
        false: "focus:outline-primary text-on-surface",
      },
      hasLeftIcon: {
        true: "pl-10",
        false: "pl-space-md",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

const helperVariants = cva("text-xs group-focus-within:text-primary", {
  variants: {
    error: {
      true: "text-error",
      false: "text-outline",
    },
  },
  defaultVariants: {},
});

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    errorMessage?: string;
    helperMessage?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

export default function Input({
  className,
  label,
  errorMessage,
  helperMessage,
  error,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  const id = useId();

  return (
    <div className="group flex flex-col items-start gap-1 w-full">
      {label && (
        <label htmlFor={id} className={labelVariants({ error })}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        <span className="absolute top-1/2 -translate-y-1/2 left-3 [&_svg]:size-5 text-on-surface-variant">
          {leftIcon}
        </span>
        <input
          id={id}
          className={inputVariants({
            hasLeftIcon: !!leftIcon,
            error,
            className,
          })}
          {...props}
        />
        {rightIcon && <button className="absolute top-1/2 -translate-y-1/2 right-3 [&_svg]:size-5 text-on-surface-variant text-primary h-8 w-8 rounded-md bg-surface-container flex items-center justify-center hover:bg-surface-container-high hover:cursor-pointer">
          {rightIcon}
        </button>}
      </div>
      {(error ? errorMessage : helperMessage) && (
        <p className={helperVariants({ error })}>
          {error ? errorMessage : helperMessage}
        </p>
      )}
    </div>
  );
}
