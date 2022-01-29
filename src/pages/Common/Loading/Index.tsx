import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import api from "../../../services/api/api";

const Loading = () => {
  const [canRetry, setRetry] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`health`).then(({ data }) => {
      const isHealth = data.status === "OK" ? true : false;
      setRetry(!isHealth);

      isHealth && navigate("questions");
    });
  }, []);

  return (
    <>
      <p>
        {canRetry && (
          <Button text="Retry Action" action={() => window.location.reload()} />
        )}
      </p>
    </>
  );
};

export default Loading;
