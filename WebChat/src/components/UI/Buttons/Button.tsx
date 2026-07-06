import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button className="w-[100px] h-[50px] bg-(--accent-bg) text-(--accent) font-semibold rounded-[5px]">{children ? children : "Click"}</button>;
}
