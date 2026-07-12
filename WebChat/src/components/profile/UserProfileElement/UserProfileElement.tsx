import { Avatar, StatusBar } from "../../UI";

export function UserProfileElement() {
  return (
    <button>
      <div className="grid grid-flow-col grid-rows-2 gap-1 gap-x-4 items-center">
        <div className="row-span-2">
        <Avatar />
        </div>
        <h3 className="col-span-2">Jhon Smith</h3>
        <StatusBar />
      </div>
    </button>
  );
}
