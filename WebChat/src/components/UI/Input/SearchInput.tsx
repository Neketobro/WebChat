import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IconButton } from "../Buttons";

export function SearchInput() {
  return (
    <div className="w-full p-[10px] border-[2px] flex flex-row items-center justify-between rounded-md border-(--border) overflow-y-hidden">
      <input type="text" placeholder="Search" className="resize-none outline-none" />
      <IconButton onClick={()=>{}} icon={<MagnifyingGlassIcon />} />
    </div>
  );
}
