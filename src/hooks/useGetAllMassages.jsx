import axios from "axios";
import { useEffect } from "react";
import { MASSAGE } from "../constant/global";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/massageSlicer";

const useGegAllMassages = () => {
  let { selUser } = useSelector((store) => store?.auth);

  let dispatch = useDispatch();

  useEffect(() => {
    selUser && getAllMassages();
  }, [selUser]);

  let getAllMassages = async () => {
    try {
      let res = await axios.post(
        `${MASSAGE}/allMassages/`,
        { id: selUser?._id },
        {
          withCredentials: true,
        }
      );

      // this is for when the res is empty then
      !res?.data?.matchConversation
        ? dispatch(setText(''))
        : dispatch(setText(res?.data?.matchConversation?.allMassages));

      // console.log(res?.data?.matchConversation?.allMassages);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGegAllMassages;
