import { useEffect } from "react";
import { Button, ChatLayout, Header } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCurrentUser } from "../../store/auth/userSlice";
import { useNavigate } from "react-router";

export function WebChatPage() {
  const userSelector = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("dispatch user");

    try {
      dispatch(getCurrentUser());
    } catch (e) {
      console.log("ERROR WEBCHATPAGE ->", e);
    }
  }, [dispatch]);

  console.log("user selector =>", userSelector);

  if (userSelector.loading === "failed") {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[--bg]">
        <p>Something error. Do you want reload the page ?</p>
        <p>error: {userSelector.error}</p>
        <Button onClick={() => navigate("/")}>Come back to main page!</Button>
        <Button onClick={() => navigate("/auth/login")}>Go to login!</Button>
      </div>
    );
  }

  return userSelector.loading === "succeeded" && userSelector.user ? (
    <div className="flex flex-col gap-x-[10px] h-screen bg-[--bg]">
      <Header user={userSelector.user} />
      <ChatLayout />
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-[--bg]">
      <p>loading ...</p>
    </div>
  );
}
