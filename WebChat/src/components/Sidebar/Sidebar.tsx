import { ChatList } from "../ChatList";
import { Button, Search } from "../UI";

export function Sidebar() {
  return (
    <div className="bg-(--bg)">
      <h1>Messages</h1>
      <Button>Cick</Button>
      <Search />
      <ChatList />
    </div>
  );
}
