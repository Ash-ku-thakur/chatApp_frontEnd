import RightSideBarBox from "./RightSideBarBox";
import RightSideBarInput from "./RightSideBarInput";
import RightSideBarTop from "./RightSideBarTop";

const RightSideBar = () => {
  return (
    <div className="h-full m-2">
     <div className="h-[15%] mb-2">
      <RightSideBarTop/>
     </div>
     <div className="h-[70%] border-black border-[1px] mb-2 bg-violet-200">
      <RightSideBarBox/>
     </div>
     <div className="h-[15%] mt-2">
      <RightSideBarInput/>
     </div>
    </div>
  );
};

export default RightSideBar;
