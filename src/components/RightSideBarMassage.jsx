import { useSelector } from "react-redux";

const RightSideBarMassage = ({ mass }) => {
  let { authUser } = useSelector((store) => store?.auth);

  return (
    <div className="">
      <div
        className={`chat ${
          authUser?._id == mass?.senderId ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-bubble">{mass?.massage}</div>
      </div>
    </div>
  );
};

export default RightSideBarMassage;
