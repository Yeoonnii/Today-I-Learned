import React, { useState } from "react";

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const onChangeBio = (e) => {
    setBio(e.target.value);
  }

  return (
    <div>
      <div>
        <input onChange={onChangeName} value={name} placeholder={"이름"} />
      </div>
      <div>
        <input type="date" onChange={onChangeBirth} value={birth}/>
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
