import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void
  
};

export function Button({ children , onClick}: ButtonProps) {
  return <button onClick={onClick} className="p-1 px-2 bg-(--accent-bg) hover:bg-(--social-bg) active:scale-95 transition duration-100 cursor-pointer text-(--accent) text-[16px] font-bold rounded-[5px]">{children ? children : "Click"}</button>;
}
