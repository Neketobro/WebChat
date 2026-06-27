import type React from "react";
import { Header } from "../Header";
type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-[10px] sm:px-[100px] w-full mb-[20px] gap-[5px] md:gap-[10px]">
        {children}
      </div> 
    </div>
  );
}
