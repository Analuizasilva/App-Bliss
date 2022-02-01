import "./layout.css";
import { Outlet } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import NoConnectivity from "../NoConnectivity";

const Layout = () => {
  return (
    <div className="App">
      <Online>
        <Outlet />
      </Online>
      <Offline>
        <NoConnectivity />
      </Offline>
    </div>
  );
};

export default Layout;
