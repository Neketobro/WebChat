import { Avatar, StatusBar } from "../../UI";

type Props = {
  username: string;
};

export function MyProfileElement({ username }: Props) {
  return (
    <button>
      <div className="grid grid-flow-col grid-rows-2 gap-1 gap-x-4 items-center">
        <h3 className="col-span-2 truncate">{username}</h3>
        <StatusBar />
        <div className="row-span-3">
          <Avatar />
        </div>
      </div>
    </button>
  );
}
