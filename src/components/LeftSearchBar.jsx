import { CiSearch } from "react-icons/ci";

const LeftSearchBar = () => {
  return (
    <div className="border-black border-[1px]">
      <form action="">
        <div className="w-full flex ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-l-full w-full "
          />
          <button className="w-14 flex rounded-r-full items-center justify-center bg-violet-300 border-black border-[1px]">
            <CiSearch size={"24px"} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeftSearchBar;
