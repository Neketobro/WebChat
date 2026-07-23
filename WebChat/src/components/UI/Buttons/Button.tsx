import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "main" | "destructive";
};

export function Button({ children, onClick, color = "main" }: ButtonProps) {
  const COLORS = {
    main: "bg-(--accent-bg) hover:bg-(--social-bg) text-(--accent)",
    destructive:
      "bg-(--destructive-bg) hover:bg-(--destructive-hover) text-(--destructive)",
  };

  return (
    <button
      onClick={onClick}
      className={`p-1 px-2 active:scale-95 transition duration-100 cursor-pointer text-[16px] font-bold rounded-[5px] ${COLORS[color]}`}
    >
      {children ? children : "Click"}
    </button>
  );
}
