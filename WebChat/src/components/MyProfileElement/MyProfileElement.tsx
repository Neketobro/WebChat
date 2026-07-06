import { Avatar, StatusBar } from "../UI";

export function MyProfileElement() {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-1 gap-x-4 items-center">
      <h3 className="col-span-2">Jhon Smith</h3>
      <StatusBar />
      <div className="row-span-3">
        <Avatar />
      </div>
    </div>
  );
}
