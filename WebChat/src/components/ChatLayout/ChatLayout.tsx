import { Sidebar } from "../Sidebar";
import { MainContent } from "../MainContent";
import { UserProfileSidebar } from "../UserProfileSidebar";
import { useState } from "react";

export function ChatLayout() {
  const [isOpenUserProfileSB, setOpenUserProfileSB] = useState<boolean>(false);

  return (
    <div className="h-[92vh] flex flex-row justify-between px-3 py-1 gap-x-2 overflow-hidden">
      <Sidebar />
      <MainContent onOpen={() => setOpenUserProfileSB(prev => !prev)} />

       <UserProfileSidebar isOpen={isOpenUserProfileSB} onClose={() => setOpenUserProfileSB(false)} />
    </div>
  );
}
