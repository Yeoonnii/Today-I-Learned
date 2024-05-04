import React, { useState } from "react";

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

  // 통합 onChange 객체
  const onChange = (e) => {
    // element에 지정한 name 속성을 key로 사용하고, value 속성을 값으로 사용하여 업데이트
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
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
    </div>
  );
};

export default Register;
