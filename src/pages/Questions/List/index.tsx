import { useEffect, useState } from "react";
import api from "../../../services/api/api";
import Question from "../../../models/question";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";
import "./list.css";
import InfiniteScroll from "react-infinite-scroll-component";
import QuestionInfo from "../../../components/ComponentsInfo/QuestionsInfo/questionInfo";

const List = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    api.get(`questions`).then(({ data }) => {
      setQuestions(data as Question[]);
    });
  }, []);

  const useData = () => {
    let response: Question[] = [];
    return response;
  };

  const navigate = useNavigate();

  return (
    <div className="list">
      <h1>Questions</h1>
      {questions.length && (
        <InfiniteScroll
          dataLength={questions.length}
          next={useData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
            {questions.map((question) => (
              <div
                key={question.id}
                onClick={() => navigate(`/questions/${question.id}`)}
              >
                <Card
                  class="cardList"
                  children={
                    <QuestionInfo
                      image={question.thumb_url}
                      title={question.question}
                      date={question.published_at}
                    />
                  }
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default List;
