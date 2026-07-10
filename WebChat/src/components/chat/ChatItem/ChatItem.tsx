import { Avatar, Badge } from "../../UI";

export function ChatItem() {
  return (
    <div className="bg-(--accent-bg) rounded-[5px] p-2 grid grid-cols-4 items-center">
      <div className="col-span-1 row-span-2">
        <Avatar />
      </div>
      <div className="col-span-2 font-medium text-[18px]">Name name</div>
      <div className="col-span-1 text-[14px] text-(--social-bg) text-end">19:02</div>
      <div className="col-span-2 text-[16px] text-(--social-bg)">last message</div>
      <div className="col-span-1 text-end"><Badge /></div>
    </div>
  );
}
