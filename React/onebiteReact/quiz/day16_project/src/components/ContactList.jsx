import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contactList, onDelete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactList.map((item) => {
        return <ContactItem key={item.id} {...item} onDelete={onDelete} />;
      })}
    </div>
  );
}
