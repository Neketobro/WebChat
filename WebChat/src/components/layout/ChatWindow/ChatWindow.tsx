import { ChatFooter, ChatHeader } from "../../chat";

type Props = {
  openUserSidebar: () => void;
  isOpenUserProfileSB?: boolean;
  chatOpen: boolean;
  onCloseChat: () => void;
};

export function ChatWindow({ openUserSidebar, isOpenUserProfileSB, chatOpen, onCloseChat }: Props) {

  const isOpenUserSB = isOpenUserProfileSB
    ? `w-0 lg:w-full lg:min-w-[300px] lg:p-2`
    : "w-full lg:min-w-[300px] p-2";

  const isOpenChat = chatOpen
    ? `${isOpenUserSB} flex flex-col justify-between`
    : "hidden sm:flex sm:justify-center sm:items-center sm:w-full";
  return (
    <div
      className={`bg-(--bg) h-full transition transition-all duration-500 overflow-hidden ${isOpenChat}`}
    >
      {chatOpen ? (
        <>
          <div
            className={`p-2 flex items-center justify-between gap-4 border-b-[2px] border-(--border)`}
          >
            <ChatHeader onCloseChat={onCloseChat} openUserSidebar={openUserSidebar} />
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
