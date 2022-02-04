import { Outlet, useNavigate } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import NoConnectivity from "../NoConnectivity";
import { useEffect, useState } from "react";
import api from "../../../services/api/api";
import Loading from "../Loading";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [canRetry, setRetry] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`health`).then(({ data }) => {
      const isLoading = data.status === "OK" ? false : true;
      setLoading(isLoading);
      setRetry(isLoading);
      !isLoading && navigate("questions");
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Loading canShowButton={canRetry} />
      ) : (
        <div>
          <Online>
            <Outlet />
          </Online>
          <Offline>
            <NoConnectivity />
          </Offline>
        </div>
      )}
    </div>
  );
};

export default Layout;
