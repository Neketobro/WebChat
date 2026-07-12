import { useState } from "react";
import { ChatFooter, ChatHeader } from "../../chat";

type Props = {
  openUserSidebar: () => void;
  isOpenUserProfileSB?: boolean;
  chatOpen: boolean;
};

export function ChatWindow({ openUserSidebar, isOpenUserProfileSB, chatOpen }: Props) {

  const isOpenUserSB = isOpenUserProfileSB
    ? `hidden lg:flex lg:flex-col md:w-full md:min-w-[300px]`
    : "sm:flex sm:flex-col w-full min-w-[300px]";

  const isOpenChat = chatOpen
    ? "flex flex-col justify-between"
    : "hidden md:flex justify-center items-center";
//  w-full min-w-[300px]
  return (
    <div
      className={`bg-(--bg) h-full p-2 overflow-hidden ${isOpenChat} ${isOpenUserSB}`}
    >
      {chatOpen ? (
        <>
          <div
            className={`p-2 flex items-center justify-between gap-4 border-b-[2px] border-(--border)`}
          >
            <ChatHeader openUserSidebar={openUserSidebar} />
          </div>
          <div>Chat messages</div>
          <div className="p-2 border-t-[2px] border-(--border) flex items-center">
            <ChatFooter />
          </div>
        </>
      ) : (
        <span className="px-3 rounded-xl bg-(--accent-bg) text-(--accent)">
          Please select a chat
        </span>
      )}
    </div>
  );
}
