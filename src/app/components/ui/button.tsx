"use client";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg flex items-center justify-center font-semibold gap-1 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary shadow-sm enabled:hover:bg-secondary enabled:active:scale-[0.98]",
        secondary:
          "bg-surface-container-lowest text-on-surface shadow-sm enabled:hover:bg-surface-container",
        destructive:
          "bg-error-container text-error enabled:hover:opacity-90 transition-opacity",
        tertiary:
          "text-primary enabled:hover:bg-surface-container transition-colors",
      },
      size: {
        sm: "px-3 h-8 text-xs [&_svg]:size-3",
        md: "px-4 h-10 text-sm [&_svg]:size-4",
        lg: "px-6 h-12 text-base [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export default function Button({
  onClick,
  variant,
  size,
  className,
  iconLeft,
  iconRight,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      onClick={onClick}
      {...props}
    >
      {iconLeft} {children} {iconRight}
    </button>
  );
}
