import { UserProfileElement } from "../../profile";
import { IconButton } from "../../UI";
import { ArrowUturnLeftIcon, Bars3Icon } from "@heroicons/react/24/outline";

type Props = {
  openUserSidebar: () => void;
  onCloseChat: () => void;
};

export function ChatHeader({ openUserSidebar, onCloseChat }: Props) {
  return (
    <>
      <div className="flex gap-4 items-center">
        <IconButton onClick={onCloseChat} icon={<ArrowUturnLeftIcon />} />
        <UserProfileElement />
      </div>
      <div className="flex gap-4 items-center">
        <IconButton onClick={openUserSidebar} icon={<Bars3Icon />} />
      </div>
    </>
  );
}
