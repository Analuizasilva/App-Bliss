import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Question from "../../../models/question";
import api from "../../../services/api/api";

const Detail = () => {
  let { id } = useParams();

  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    api.get(`questions/${id}`).then(({ data }) => {
      setQuestion(data as Question);
    });
  }, []);
  return (
    <>
      <h1>Question Detail</h1>

      <Breadcrumb path="/" text="Question" />

      {question ? <h3>{question.question}</h3> : null}
      {question ? <img src={question.image_url} /> : null}
      {question ? (
        <p>
          <strong>Published at: </strong>
          {question.published_at}
        </p>
      ) : null}
      {question ? (
        <p>
          <strong>Id:</strong> {question.id}
        </p>
      ) : null}
      {question ? (
        <p>
          {question.choices.map((choice) => (
            <ul>
              <li>
                {choice.choice} - {choice.votes} votes.
              </li>
            </ul>
          ))}
        </p>
      ) : null}
    </>
  );
};

export default Detail;
