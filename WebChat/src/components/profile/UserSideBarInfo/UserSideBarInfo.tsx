export function UserSideBarInfo() {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-(--text-h)">Tag:</span>
        <span className="text-(--accent)">@asd123</span>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-(--text-h)">Phone:</span>
        <span className="text-(--accent)">+234234234234</span>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-(--text-h)">Email:</span>
        <span className="text-(--accent)">test@gmail.com</span>
      </div>
    </>
  );
}
