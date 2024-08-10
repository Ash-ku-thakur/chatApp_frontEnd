import useOtherUsers from "../hooks/useOtherUsers";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Container = () => {
  useOtherUsers();

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="min-h-[80%] w-[80%] flex gap-3 ">
        <div className="w-[40%] border-black border-[1px]">
          <LeftSideBar />
        </div>
        <div className="w-[60%] border-black border-[1px]">
          <RightSideBar/>
        </div>
      </div>
    </div>
  );
};

export default Container;
