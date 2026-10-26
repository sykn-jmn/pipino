"use client";

type ButtonIconProps = React.ComponentProps<"button"> & {
  icon: React.ReactNode;
};

const buttonIconClasses = `
  rounded-lg 
  enabled:active:[&_svg]:fill-white 
  enabled:active:[&_svg]:stroke-transparent 
  enabled:active:bg-primary 
  w-12 h-12 
  flex items-center justify-center
  disabled:contrast-0
  disabled:cursor-not-allowed
`;

export default function ButtonIcon({
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      type="button"
      className={`${buttonIconClasses} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
