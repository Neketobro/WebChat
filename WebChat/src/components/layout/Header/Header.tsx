import type { User } from "../../../types/auth.types";
import { MyProfileElement } from "../../profile";
import { IconButton } from "../../UI";

import { Cog6ToothIcon, BellIcon } from "@heroicons/react/24/outline";
type Props = {
  user: User;
};

export function Header({ user }: Props) {
  console.log("USER->", user);

  return (
    <div className="h-[80px] w-full bg-(--bg) flex items-center justify-between p-[20px]">
      <div>
        <IconButton onClick={() => {}} icon={<Cog6ToothIcon />} />
        <IconButton onClick={() => {}} icon={<BellIcon />} />
      </div>
      <h1>WebChat</h1>
      <MyProfileElement username={user.username || `user-id_${user.id}`} />
    </div>
  );
}
