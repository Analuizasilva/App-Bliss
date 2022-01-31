import { useEffect, useState } from "react";
import api from "../../../services/api/api";
import Question from "../../../models/question";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    api.get(`questions`).then(({ data }) => {
      setQuestions(data as Question[]);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>Questions</h1>
      <div className="card">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              navigate(`/questions/${question.id}`);
            }}
          >
            <Card
              image={question.thumb_url}
              date={question.published_at}
              title={question.question}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
