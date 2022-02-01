import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Question from "../../../models/question";
import api from "../../../services/api/api";
import "./share.css";

const Share = () => {
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    api
      .post(
        `questions/share?destination_email=destination_email&content_url=content_url`
      )
      .then(({ data }) => {
        setQuestion(data as Question);
      });
  }, []);

  return (
    <>
      <h1>Share page</h1>
      <Breadcrumb path="/" text="Question" />
      <form>
        <label>
          Email: <input type={"email"} />
        </label>

        <button type="submit">Share</button>
      </form>
    </>
  );
};

export default Share;
