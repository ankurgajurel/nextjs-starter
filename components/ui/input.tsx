import { cn } from "@/lib/utils";

type Props = {
  variant?: "input" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({ variant = "input", ...props }: Props) {
  if (variant === "textarea") {
    return (
      <textarea
        {...props}
        className={cn(
          "bg-transparent text-white px-5 py-3 outline outline-white rounded-3xl text-sm min-h-[150px]",
          props.className
        )}
      />
    );
  }
  return (
    <input
      {...props}
      className={cn(
        "bg-transparent text-white px-5 py-3 border border-white rounded-xl text-sm",
        props.className
      )}
    />
  );
}