import { memo } from "react";
import "./ContactItem.css";

const ContactItem = ({ id, name, contact, onDelete }) => {
  
  // Remove 버튼 클릭시 실행될 함수
  const onClickRemoveBtn = () => {
    onDelete(id)
  }

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickRemoveBtn}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);