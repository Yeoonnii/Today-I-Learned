import { useSearchParams } from "react-router-dom";

const New = () => {
  const [params, setParams] = useSearchParams();
  console.log('New --> ' ,params.get("value"));

  return (
    <div>New : {params.get("value")}</div>
  )
}

export default New