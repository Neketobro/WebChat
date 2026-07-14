type Props = {
  size?: "sm" | "md" | 'lg';
};

export function Avatar({ size = "sm" }: Props) {
     const currentSize = {
        sm: "w-[55px] h-[55px]",
        md: "w-[100px] h-[100px]",
        lg: "w-[150px] h-[150px] text-3xl"
     }
  return (
    <span className={`flex items-center justify-center ${currentSize[size]} rounded-[50%] bg-(--social-bg) font-medium`}>NA</span>
  );
}
