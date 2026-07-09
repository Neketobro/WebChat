type Props = {
  size?: "sm" | "md" | 'lg';
};

export function Avatar({ size = "sm" }: Props) {
     const currentSize = {
        sm: "p-3",
        md: "p-5",
        lg: "p-10"
     }

  return (
    <span className={`${currentSize[size]} rounded-[50%] bg-(--social-bg) font-medium`}>NA</span>
  );
}
