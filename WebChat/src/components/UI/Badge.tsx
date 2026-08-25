type Props = {
  lastMessCountMess: number;
};

export function Badge({ lastMessCountMess }: Props) {
  return (
    <span className="px-[8px] py-[1px] rounded-[50px] text-(--accent-bg) text-sm bg-(--social-bg) font-semibold">
      {lastMessCountMess}
    </span>
  );
}
