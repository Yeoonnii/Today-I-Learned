import Welcome from "./Welcome"

function App() {

  // Welcome 컴포넌트에 전달할 정보를 담은 객체
  const infoProps = {
    name: '여니',
    isMember: true
  }

  return (
    <>
    <Welcome {...infoProps}/>
    </>
  )
}

export default App
