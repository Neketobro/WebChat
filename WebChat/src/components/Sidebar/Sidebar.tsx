import { ChatList } from "../ChatList";
import { Button, IconButton, Search } from "../UI";

export function Sidebar() {
  return (
    <div className="bg-(--bg) min-w-3xs w-[20vw]">
      <span className="text-[24px] font-medium">Messages</span>
      <IconButton />
      <Button>Cick</Button>
      <Search />
      <ChatList />
    </div>
  );
}
