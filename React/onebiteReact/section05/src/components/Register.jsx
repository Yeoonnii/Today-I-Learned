import React, { useRef, useState } from "react";

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // 통합 input 객체
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log('Register 리렌더링');

  // useRef
  const refObj = useRef(0);
  const countRef = useRef(0);
  const inputRef = useRef();


  // 통합 onChange 함수
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    // element에 지정한 name 속성을 key로 사용하고, value 속성을 값으로 사용하여 업데이트
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // 제출 버튼 클릭시 실행되는 함수
  const onSubmit = () => {
    console.log(inputRef);
    // inputRef의 값이 비어있는 경우 focus
    if(inputRef.current.value === ""){
      alert('이름이 입력되지 않았습니다.')
      inputRef.current.focus();
    }
    console.log(inputRef.current);
  }

  return (
    <div>
      <button
      onClick={(() => {
        refObj.current++;
        console.log(refObj.current);
      })}>
        ref + 1
      </button>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          ref={inputRef}
          placeholder={"이름"}
          />
      </div>
      <div>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
          />
      </div>
      <div>
        <select 
          name="country"
          value={input.country}
          onChange={onChange}
          >
          <option></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        />
      </div>

      <button
        onClick={onSubmit}
      >
        제출
      </button>
    </div>
  );
};

export default Register;
