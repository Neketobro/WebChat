import { Avatar, Badge } from "../../UI";

type ChatItem = {
  userId: string;
  username: string;
  lastMess: string;
  lastMessTime: string;
  lastMessCountMess: number;
  key?: string;
};

export function ChatItem({
  userId,
  username,
  lastMess,
  lastMessTime,
  lastMessCountMess,
}: ChatItem) {
  return (
    <div
      key={userId}
      className="bg-(--accent-bg) rounded-[5px] p-2 grid grid-cols-4 items-center cursor-pointer hover:bg-(--accent) transtion-all duration-200"
    >
      <div className="col-span-1 row-span-2">
        <Avatar />
      </div>
      <div className="col-span-2 font-medium text-[18px]">{username}</div>
      <div className="col-span-1 text-[14px] text-(--social-bg) text-end">
        {lastMessTime}
      </div>
      <div className="col-span-2 text-[16px] text-(--social-bg)">
        {lastMess}
      </div>
      <div className="col-span-1 text-end">
        <Badge lastMessCountMess={lastMessCountMess} />
      </div>
    </div>
  );
}
