import { IoMdSend } from "react-icons/io";
import { MASSAGE } from "../constant/global";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setText } from "../redux/massageSlicer";

const RightSideBarInput = () => {
  let [input, setInput] = useState("");

  let { selUser } = useSelector((store) => store?.auth);
  let dispatch = useDispatch();
  let { text } = useSelector((store) => store?.massage);

  // console.log(text);

  useEffect(() => {
    selUser && createMassage();
  }, []);

  let createMassage = async (e) => {
    e?.preventDefault();

    try {
      let res = await axios.post(
        `${MASSAGE}/create/${selUser?._id}`,
        { input },
        {
          withCredentials: true,
        }
      );

      //   massage set ho raha hai
      dispatch(setText([...text, res?.data?.massageCreated]));

      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <form action="" onSubmit={createMassage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e?.target?.value)}
          placeholder="Type here"
          className="input input-bordered input-primary w-full pr-9"
        />

        <button
          type="submit"
          className="absolute top-[50%] -transform-y-1/2 -translate-y-1/2 end-2 cursor-pointer"
        >
          <IoMdSend size={"22px"} />
        </button>
      </form>
    </div>
  );
};

export default RightSideBarInput;
