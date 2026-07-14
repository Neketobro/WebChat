import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar, IconButton } from "../../UI";
import { UserSideBarInfo } from "../UserSideBarInfo";
import { UserActionSidebar } from "../UserActionSidebar";

interface UserInfoProps {
  onClose: () => void;
  isOpen: boolean;
  style?: string;
}

export function UserProfileSidebar({ onClose, isOpen, style }: UserInfoProps) {
  const styles =
    "bg-(--bg) transition transition-[width] duration-500 overflow-hidden flex flex-col items-center gap-2";

  return (
    <div
      className={`${!isOpen ? `${styles} ${style} w-0` : `${styles} ${style} w-140 p-1`}`}
    >
      <span className="p-1 w-full flex justify-end">
        <IconButton onClick={onClose} icon={<XMarkIcon />} />
      </span>
      <div className="p-2 w-full min-w-[200px] max-w-[300px] flex flex-col items-center gap-3 border-b-2 border-(--border)">
        <Avatar size="lg" />
        <h2>Jhon Smith</h2>
      </div>
      <div className="p-2 w-full min-w-[200px] max-w-[300px] flex flex-col gap-2 border-b-2 border-(--border)">
        <UserSideBarInfo />
      </div>
      <div className="p-2 w-full min-w-[200px] max-w-[300px] flex flex-col gap-2 border-b-2 border-(--border)">
        <UserActionSidebar />
      </div>
    </div>
  );
}
