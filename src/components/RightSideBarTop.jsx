import { useSelector } from "react-redux";

const RightSideBarTop = () => {

    let {selUser} = useSelector(store=> store?.auth)
  return (
    <div>
      <div className="flex flex-col my-3">
        <div className="flex items-center w-full hover:bg-violet-300 rounded-2xl">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src={selUser?.profilePhoto} />
            </div>
          </div>
          <div></div>
          <p>{selUser?.firstname}</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBarTop;
