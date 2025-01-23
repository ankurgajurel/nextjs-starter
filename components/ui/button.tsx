import { cn } from "@/lib/utils";

type buttonVariants = "primary" | "secondary";

const getVarientClassname = (variant: buttonVariants) => {
  const baseClassname = "rounded-full px-6 py-3 text-xs font-bold h-fit";
  switch (variant) {
    case "primary":
      return baseClassname + " border-2 border-[#ffffff] ";

    case "secondary":
      return baseClassname + "";
  }
};

type Props = {
  variant?: buttonVariants;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = "primary", ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(getVarientClassname(variant), props.className)}
    >
      {props.children}
    </button>
  );
}
