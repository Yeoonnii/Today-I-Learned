import { useState } from "react";
// 배달 음식 주문 페이지 만들기
const OrderEditor = () => {
    const [menu, setMenu] = useState("");
    const [address, setAddress] = useState("");
    const [request, setRequest] = useState("");

    // 메뉴 변경
    const handleMenu = (e) => {
        setMenu(e.target.value);
    }
    
    // 주소 변경
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
    
    // 요청사항 변경
    const handleRequest = (e) => {
        setRequest(e.target.value);
    }

    // 주문버튼 클릭시 alert
    const onSubmit = () => {
        alert(`주문이 완료되었습니다!\n- 메뉴 : ${menu}\n- 주소 : ${address}\n- 요청사항 : ${request}`);
        return;
    }


    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <h2>배달의민족 주문</h2>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            메뉴 선택
          </div>
          <select style={{ width: 300, padding: 5 }} onChange={handleMenu} value={menu}>
            <option value={"족발"}>족발</option>
            <option value={"떡볶이"}>떡볶이</option>
            <option value={"아이스크림"}>아이스크림</option>
            <option value={"샐러드"}>샐러드</option>
          </select>
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 주소
          </div>
          <input
            style={{ width: 300, padding: 5 }}
            value={address}
            onChange={handleAddress}
            placeholder="주소) 서울특별시 xx동 .."
          />
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 요청사항
          </div>
          <textarea
            style={{ width: 300, padding: 5 }}
            value={request}
            onChange={handleRequest}
            placeholder="배달 요청사항을 써 주세요..."
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            style={{ width: 300, padding: 5 }}
          >
            주문 완료
          </button>
        </div>
      </div>
    );
  };
export default OrderEditor;