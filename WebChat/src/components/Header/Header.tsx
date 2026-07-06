import { MyProfileElement } from "../MyProfileElement";
import { IconButton } from "../UI";

export function Header() {
    return(
        <div className="h-[80px] w-full bg-(--bg) flex items-center justify-between p-[20px]">
            <div>
                <IconButton />
                <IconButton />
            </div>
            <h1>WebChat</h1>
            <MyProfileElement />
        </div>
    )
}