import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/massageSlicer";

const useGetRealTimeMassage = () => {
  let { socket } = useSelector((store) => store?.socket);
  let {text} = useSelector(store => store?.massage)
  let dispatch = useDispatch()

  useEffect(() => {
    socket.on("massageCreated", (realTimeMassage) =>{
        dispatch(setText([...text, realTimeMassage]))
    })
  }, [text, socket, setText]);
};

export default useGetRealTimeMassage;
