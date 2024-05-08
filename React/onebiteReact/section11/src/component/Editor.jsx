import { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../App";
import "./Editor.css";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState(""); // input 객체 값 저장을 위한 useState
  const contentRef = useRef();  // input 객체 포커싱을 위한 useRef

  // content 입력값 변경시 값 업데이트
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  // 추가 버튼 클릭시 onCreate 실행
  const onSubmit = () => {
    // content 값이 입력되지 않은 경우
    if(content === ""){
      alert('추가할 To-do를 입력해주세요');  // 알림창 출력
      contentRef.current.focus();  // content 입력창에 focus
      return;
    }
    // content 값이 입력된 경우
    onCreate(content);  // todos에 객체 값 추가
    setContent("");    // content 값 초기화
  }

  // enter 키 입력시 onSubmit 함수 실행
  const onKeyDown = (e) => {
    // e.keyCode === 13 (= Enter 키)
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="Editor">
      <input 
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        ref={contentRef}
        placeholder="새로운 To-do..."
      />
      <button
        onClick={onSubmit}
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
