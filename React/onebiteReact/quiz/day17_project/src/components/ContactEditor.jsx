import { memo, useContext, useRef, useState } from "react";
import { ContactDispatchContext } from "../App";
import "./ContactEditor.css";

/* 1.ContactEditor 컴포넌트는 더 이상 Props를 필요로 하지 않음 */
const ContactEditor = () => {
    /* 2. useContext를 이용해 ContactDispatchContext로 부터 onCreateContact 함수를 공급받음 */
  const {onAdd} = useContext(ContactDispatchContext);
  // 입력할 정보를 저장할 useState 객체
  const [contactInfo, setContactInfo] = useState({
    name: "",
    contact: "",
  });

  const nameRef = useRef();     // name Ref 객체
  const contactRef = useRef();  // contact Ref 객체

  // Add 버튼 클릭시 실행될 함수
  const onClickAddBtn = () => {
    // 구조분해 할당으로 name, contact 가져오기
    const { name, contact } = contactInfo;
    
    // name 값이 비어있는 경우
    if (!name) {
      alert("이름을 입력해주세요");
      nameRef.current.focus();    // name input에 포커싱 
      return;
    }
    // contact 값이 비어있는 경우
    if (!contact) {
      alert("연락처를 입력해주세요");
      contactRef.current.focus();    // contact input에 포커싱
      return;
    }
    // name 과 conatct 값이 모두 입력된 경우
    // onAdd 함수 호출
    onAdd(contactInfo);
    // contactInfo 값 초기화
    setContactInfo({
      name: "",
      contact: "",
    });
  };

  // contactInfo 값 변경 함수 
  const handleContactInfo = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          name="name"
          value={contactInfo.name}
          onChange={handleContactInfo}
          ref={nameRef}
          placeholder="이름 ..."
        />
        <input
          className="contact"
          name="contact"
          value={contactInfo.contact}
          onChange={handleContactInfo}
          ref={contactRef}
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onClickAddBtn}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
