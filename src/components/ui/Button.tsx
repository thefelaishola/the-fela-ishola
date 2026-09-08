import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "onDark";
  showArrow?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  solid: "bg-ink text-paper border border-ink hover:bg-ember hover:border-ember",
  outline: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-ink border border-transparent hover:border-ink",
  onDark: "bg-paper text-ink border border-paper hover:bg-ember hover:text-paper hover:border-ember",
};

const base =
  "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-ember";

export function LinkButton({
  to,
  children,
  variant = "solid",
  showArrow = true,
  className = "",
}: ButtonBaseProps & { to: string }) {
  return (
    <Link to={to} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRightIcon width={16} height={16} aria-hidden="true" />}
    </Link>
  );
}

export function ActionButton({
  onClick,
  children,
  variant = "solid",
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
}: ButtonBaseProps & {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variantClasses[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
      {showArrow && <ArrowRightIcon width={16} height={16} aria-hidden="true" />}
    </button>
  );
}
