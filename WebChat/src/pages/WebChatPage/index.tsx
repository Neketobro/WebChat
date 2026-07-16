import { ChatLayout, Header } from "../../components";

export function WebChatPage() {
  return (
    <div className="flex flex-col gap-x-[10px] h-screen bg-[--bg]">
      <Header />
      <ChatLayout />
    </div>
  );
}
