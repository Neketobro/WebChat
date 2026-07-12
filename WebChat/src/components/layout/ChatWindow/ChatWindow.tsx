import { useState } from "react";
import { ChatFooter, ChatHeader } from "../../chat";

type Props = {
  openUserSidebar: () => void;
};

export function ChatWindow({ openUserSidebar }: Props) {
  const [chatOpen, setChatOpen] = useState<boolean>(true);

  return (
    <div className="bg-(--bg) w-full min-w-4xl h-full p-2 flex flex-col justify-between">
      {chatOpen ? (
        <>
          <div className="p-2 flex items-center justify-between gap-4 border-b-[2px] border-(--border)">
            <ChatHeader openUserSidebar={openUserSidebar} />
          </div>
          <div>Chat messages</div>
          <div className="p-2 border-t-[2px] border-(--border) flex items-center">
            <ChatFooter />
          </div>
        </>
      ) : (
        <p>Please select chat</p>
      )}
    </div>
  );
}
