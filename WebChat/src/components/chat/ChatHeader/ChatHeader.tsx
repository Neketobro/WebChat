import { Button, IconButton } from "../../UI";
import { ChatUserInfo } from "../ChatUserInfo";

type Props = {
  openUserSidebar: () => void;
};

export function ChatHeader({ openUserSidebar }: Props) {
  return (
    <>
      <div className="flex gap-4">
        <div>back btn</div>
        <ChatUserInfo />
      </div>
      <div className="flex gap-4">
        <div>menu btn</div>
        <Button onClick={openUserSidebar}>Open</Button>
      </div>
    </>
  );
}
