import { useSelector } from "react-redux";
import RightSideBarMassage from "./RightSideBarMassage";
import useGetRealTimeMassage from "../hooks/useGetRealTimeMassage";

const RightSideBarBox = () => {
  let { text } = useSelector((store) => store?.massage);
  useGetRealTimeMassage()

  if (!text) {
    return null;
  }

  return (
    <div>
      {text &&
        text?.map((mass) => (
          <RightSideBarMassage key={mass?._id} mass={mass} />
        ))}
    </div>
  );
};

export default RightSideBarBox;
