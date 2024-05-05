import { useEffect } from "react"

const Even = () => {
    
  // 3.unMount : 컴포넌트 렌더링이 종료되는 시점
    useEffect(() => {
        // useEffect의 콜백함수가 반환하는 함수 : 클린업, 정리함수 라고 부른다.
        // useEffect가 unMount(종료)될 때 실행된다.
        return () => {
            console.log("unMount");
        }
    }, [])
  return (
    <div>짝수입니다!</div>
  )
}

export default Even;