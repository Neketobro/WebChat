import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChatList } from "../../chat/ChatList";
import { Button, IconButton, SearchInput } from "../../UI";

type Props = {
  chatOpen: boolean;
};

export function Sidebar({ chatOpen }: Props) {
  const isChatOpen = !chatOpen ? "flex flex-col" : "hidden sm:flex sm:flex-col";

  return (
    <div
      className={`${isChatOpen} w-full sm:min-w-[340px] sm:max-w-[340px] bg-(--bg) h-full p-2 gap-2`}
    >
      <div className="flex justify-between items-center">
        <span className="text-[24px] font-medium">Messages</span>
        <div className="flex items-center gap-x-2">
          <IconButton onClick={() => {}} icon={<PencilSquareIcon />} />
          <Button onClick={() => {}}>New chat +</Button>
        </div>
      </div>
      <SearchInput />

      <ChatList />
    </div>
  );
}
