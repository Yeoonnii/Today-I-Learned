import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"

const Home = () => {
  return (
    <div>
      <Header title={"2024년 6월"} leftChild={<Button text={"<"}/>} rightChild={<Button text={">"} />}/>
      <DiaryList />
      
    </div>
  )
}

export default Home 