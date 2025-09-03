import { ComponentProps } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ContainerProps = ComponentProps<"div">;

const cn = (...inputs: unknown[]) => {
  return twMerge(clsx(inputs));
};

export const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={cn("max-w-[80vw] mx-auto", className)} {...rest}>
      {children}
    </div>
  );
};
