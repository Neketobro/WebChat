type Props = {
    children: string | undefined;
}

export function Alert({children}: Props) {
    return (
        <span className="px-4 text-sm rounded-xl bg-(--accent-bg) text-center text-(--accent)">
          {children}
        </span>
    )
}