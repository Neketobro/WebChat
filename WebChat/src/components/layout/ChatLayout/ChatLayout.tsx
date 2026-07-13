import { Sidebar } from "../Sidebar";
import { ChatWindow } from "../ChatWindow";
import { UserProfileSidebar } from "../../profile";
import { useState } from "react";

export function ChatLayout() {
  const [isOpenUserProfileSB, setOpenUserProfileSB] = useState<boolean>(false);
  const [chatOpen, setChatOpen] = useState<boolean>(true);

  return (
    <div className="h-[92vh] flex flex-row justify-center px-3 py-1 gap-x-2 overflow-hidden">
      <Sidebar chatOpen={chatOpen} />
      <ChatWindow
        onCloseChat={() => setChatOpen((prev) => !prev)}
        chatOpen={chatOpen}
        isOpenUserProfileSB={isOpenUserProfileSB}
        openUserSidebar={() => setOpenUserProfileSB((prev) => !prev)}
      />
      <UserProfileSidebar
        isOpen={isOpenUserProfileSB}
        onClose={() => setOpenUserProfileSB(false)}
      />
    </div>
  );
}
