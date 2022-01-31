import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card";
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
      {question ? (
        <Card
          date={question.published_at}
          image={question.thumb_url}
          title={question.question}
        />
      ) : null}
    </>
  );
};

export default Detail;
