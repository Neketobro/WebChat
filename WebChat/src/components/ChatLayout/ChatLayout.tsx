import { Sidebar } from "../Sidebar";
import { MainContent } from "../MainContent";
import { UserInfo } from "../UserInfo";
import { useState } from "react";

export function ChatLayout() {
  const [chatActive, setChatActive] = useState<boolean>(true);

  return (
    <div className="flex flex-row justify-between p-[20px]">
      <Sidebar />
      <MainContent />
      {chatActive && <UserInfo />}
    </div>
  );
}
