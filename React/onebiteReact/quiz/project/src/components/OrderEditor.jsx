import { useRef, useState } from "react";
// 배달 음식 주문 페이지 업그레이드하기
// 1. State 하나로 합치기
// 2. input 이벤트 핸들러 하나로 합치기
// 3. Ref로 배달 주소 입력 강제하기
const OrderEditor = () => {
  // 주문 정보 State 객체
  const [orderInfo, setOrderInfo] = useState({
    menu: "",
    address: "",
    request: "",
  });
  
  // 배달주소 미입력 메시지 출력 여부
  const [renderMsg, setRenderMsg] = useState(false);
  // 배달주소 input 폼 Ref 객체
  const addressRef = useRef();

  // 공용 input 이벤트 핸들러
  const onChange = (e) => {
    setOrderInfo({
      ...orderInfo,
      [e.target.name]: e.target.value,
    });
  };

  // 주문버튼 클릭시 실행되는 함수
  const onSubmit = () => {
    if(orderInfo.menu === ""){
      alert("주문할 메뉴를 선택해주세요.")
      return;
    }
    if (addressRef.current.value === "") {
      // 배달주소 미입력 메시지 출력함
      setRenderMsg(true);
      // 주소값이 입력되지 않은 경우 입력폼 Focus
      addressRef.current.focus();
      return;
    } else {
      // 배달주소 미입력 메시지 출력 안함
      setRenderMsg(false);
      alert("주문이 완료되었습니다.");
      // 기존 주문정보 초기화
      setOrderInfo({
        ...orderInfo,
        menu: "",
        address: "",
        request: "",
      });
      return;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          name="menu"
          value={orderInfo.menu}
          onChange={onChange}
        >
          <option value={""} disabled hidden>
            메뉴를 선택하세요
          </option>
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 주소{" "}
          {/* 주소 미입력시 입력폼 Focus 후 안내메시지 렌더링 */}
          {renderMsg ? (
            <span
              style={{ color: "red", fontWeight: "bold", fontSize: "12px" }}
            >
              * 주소는 필수 입력값 입니다.
            </span>
          ) : (
            ""
          )}
        </div>
        <input
          style={{ width: 300, padding: 5 }}
          name="address"
          value={orderInfo.address}
          onChange={onChange}
          ref={addressRef}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5 }}
          name="request"
          value={orderInfo.request}
          onChange={onChange}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};
export default OrderEditor;
