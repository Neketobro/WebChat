export function StatusBar() {
    return <div className=" flex gap-x-2 items-center">
        <span className="w-2 h-2 rounded-[10px] bg-[lightgreen]"></span>
        <span className="text-sm text-(--text-h) font-medium">online</span>
    </div>
}