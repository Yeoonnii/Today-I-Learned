import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>
    <h3>Diary</h3>
    {params.id}번 일기
    </div>;
};

export default Diary;
