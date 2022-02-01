import "./breadcrumb.css";
import { Link } from "react-router-dom";

interface props {
  path: string;
  text: string;
}

const Breadcrumb = (props: props) => {
  return (
    <>
      <nav>
        <ul className="breadcrumb">
          <li>
            <Link to={props.path}>{props.text}</Link>
          </li>
          <li>Share</li>
        </ul>
      </nav>
    </>
  );
};

export default Breadcrumb;
