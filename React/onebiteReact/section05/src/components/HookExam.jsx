import useInput from '../hooks/useInput';

// React Hooks - Custom Hook 만들어 사용하기
const HookExam = () => {
  // Custom Hook - useInput을 사용 
  const [input1, onChange] = useInput();
  const [input2, onChange2] = useInput();
  const [input3, onChange3] = useInput();

  return (
    <div>
      <input value={input1} onChange={onChange} /><br />
      <input value={input2} onChange={onChange2} /><br />
      <input value={input3} onChange={onChange3} /><br />
    </div>
  )
}

export default HookExam