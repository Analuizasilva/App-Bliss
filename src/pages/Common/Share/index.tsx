import "./share.css";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import ShareInfo from "../../../components/ComponentsInfo/ShareInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Share = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card class="cardShare" children={<ShareInfo />} />
      <a onClick={() => navigate(-1)}>
        <FontAwesomeIcon size="sm" icon={faChevronCircleLeft} /> Back to Detail
        Question
      </a>
    </>
  );
};

export default Share;
