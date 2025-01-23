import { cn } from "@/lib/utils";

type Props = {} & React.HTMLAttributes<HTMLSpanElement>;

export default function Text({ ...props }: Props) {
  return <p className={cn("", props.className)}>{props.children}</p>;
}