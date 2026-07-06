import { Sidebar } from "../Sidebar";
import { MainContent } from "../MainContent";
import { UserInfo } from "../UserInfo";
import { useState } from "react";

export function ChatLayout() {
  const isChatActive = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between p-[10px]">
      <Sidebar />
      <MainContent />
      {isChatActive && <UserInfo />}
    </div>
  );
}
