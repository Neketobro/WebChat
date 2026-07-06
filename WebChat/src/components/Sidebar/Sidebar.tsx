import { ChatList } from "../ChatList";
import { Button, IconButton, SearchInput } from "../UI";

export function Sidebar() {
  return (
    <div className="flex flex-col bg-(--bg) min-w-3xs w-[20vw] h-full p-2 gap-2">
      <div className="flex justify-between items-center">
        <span className="text-[24px] font-medium">Messages</span>
        <div className="flex items-center gap-x-2">
          <IconButton />
          <Button>New chat +</Button>
        </div>
      </div>
      <SearchInput />
      <ChatList />
    </div>
  );
}
