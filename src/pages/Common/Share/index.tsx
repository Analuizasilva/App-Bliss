import Card from "../../../components/Card";
import ShareInfo from "../../../components/ComponentsInfo/ShareInfo";
import "./share.css";

const Share = () => {
  return <Card class="card" children={<ShareInfo />} />;
};

export default Share;
