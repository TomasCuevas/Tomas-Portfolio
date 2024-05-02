//* INTERFACE *//
interface Props {
  className?: string;
  isDisabled: boolean;
  label: string;
  type: "button" | "submit" | "reset";
}

export const FormButtonPrimary: React.FC<Props> = ({
  className,
  isDisabled,
  label,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={
        className
          ? className
          : "border-text  my-[10px] mx-0 h-[50px] cursor-pointer rounded-md border bg-purple text-xl font-bold text-white opacity-80 shadow-sm  outline-none transition-all duration-300 hover:opacity-100 hover:shadow-lg hover:shadow-purple/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-sm"
      }
    >
      {label}
    </button>
  );
};
