import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Sign from "./components/Sign";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "./redux/socketSlicer";
import { setOnlineUsers } from "./redux/authSlicer";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  let { authUser } = useSelector((store) => store?.auth);
  let { socket } = useSelector((store) => store?.socket);

  let dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      let socket = io("http://localhost:8081", {
        query: {
          userId: authUser?._id,
        },
      });

      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      // cleanup
      return () => {
        socket.close();
      };
    } else {
      // cleanup
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }

    // console.log(soc);
  }, [authUser]);

  return (
    <div className="w-full h-screen flex border-black border-[1px]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
