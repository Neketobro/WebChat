import { Sidebar } from "../Sidebar";
import { MainContent } from "../MainContent";
import { UserInfo } from "../UserInfo";
import { useState } from "react";

export function ChatLayout() {
  const [chatActive, setChatActive] = useState<boolean>(true);

  return (
    <div className="h-[92vh] flex flex-row justify-between px-3 py-1 gap-x-2 overflow-hidden">
      <Sidebar />
      <MainContent onOpen={() => setChatActive(true)} />

      {chatActive && <UserInfo onClose={() => setChatActive(false)} />}
    </div>
  );
}
