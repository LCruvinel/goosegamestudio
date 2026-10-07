import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
      : "border border-slate-700 bg-slate-900 text-slate-100 hover:border-amber-400 hover:text-amber-200";

  return (
    <Link href={href} className={[baseClasses, variantClasses, className].join(" ")} target={target} rel={rel}>
      {children}
    </Link>
  );
}
