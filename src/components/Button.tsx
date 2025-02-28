import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="h-11 bg-slate-950 text-white cursor-pointer active:translate-y-1 transition-transform rounded-sm shadow px-8 text-base font-semibold"
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
