import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-500"
      : "border border-slate-600 bg-slate-900 text-white hover:border-violet-500 hover:text-violet-200";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${styles}`}
    >
      {children}
    </Link>
  );
}
