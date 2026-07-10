import { Sidebar } from "../Sidebar";
import { ChatWindow } from "../ChatWindow";
import { UserProfileSidebar } from "../../profile";
import { useState } from "react";

export function ChatLayout() {
  const [isOpenUserProfileSB, setOpenUserProfileSB] = useState<boolean>(false);

  return (
    <div className="h-[92vh] flex flex-row justify-between px-3 py-1 gap-x-2 overflow-hidden">
      <Sidebar />
      <ChatWindow openUserSidebar={() => setOpenUserProfileSB(prev => !prev)} />

       <UserProfileSidebar isOpen={isOpenUserProfileSB} onClose={() => setOpenUserProfileSB(false)} />
    </div>
  );
}
