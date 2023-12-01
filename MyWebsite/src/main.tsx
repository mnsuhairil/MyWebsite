import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './Dashboard.tsx';
import MyLogin from './MyLogin.tsx';
import Profile from './Profile.tsx';
import MyLearning from './MyLearning.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLogin/>,
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/MyLearning",
    element: <MyLearning/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
