import { useEffect, useState } from "react";
import "./App.css";
import CurrencyInput from "./CurrencyInput";

function App() {
  // krwCurrency와 usdCurrency를 저장하는 state 객체
  const [currency, setCurrency] = useState({
    krwCurrency: 0,
    usdCurrency: 0,
  });

  // 현재 환율을 저장하는 객체 (기본환율 1300원)
  const [currentRate, setCurrentRate] = useState(1300);

  // 환율 변경을 감지하여 krwCurrency update
  useEffect(() => {
    setCurrency((prevCurrency) => ({
      ...prevCurrency,
      ['krwCurrency']: prevCurrency.usdCurrency * currentRate,
    }));
  }, [currentRate])

  // 입력값 초기화 함수
  const handleReset = () => {
    setCurrency({
      ...currency,
      ["krwCurrency"]: 0,
      ["usdCurrency"]: 0,
    });
  };
  
  // input Currency 변경시 값 update
  const handleCurrency = (e) => {
    const { value, name } = e.target;

    switch (name.toUpperCase()) {
      // krwCurrency 입력값 변경한 경우
      case "KRW":
        setCurrency({
          ...currency,
          ["krwCurrency"]: value,
          ["usdCurrency"]: value / currentRate,
        });
        break;
        
      // usdCurrency 입력값 변경한 경우
      case "USD":
        setCurrency({
          ...currency,
          ["usdCurrency"]: value,
          ["krwCurrency"]: value * currentRate,
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="App">
        <h1>환율 변환기 (KRW ↔ USD)</h1>
        <section>
          현재 환율 : &nbsp;
          <input 
            type="number" 
            name="currentRate"
            value={currentRate}
            onChange={(e) => setCurrentRate(e.target.value)}
        />
        </section>
        <section>
          <CurrencyInput
            currencyType="KRW"
            currency={currency.krwCurrency}
            handleCurrency={handleCurrency}
          />
        </section>
        <section>
          <CurrencyInput
            currencyType="USD"
            currency={currency.usdCurrency}
            handleCurrency={handleCurrency}
          />
        </section>
        <section>
          <button onClick={handleReset}>초기화</button>
        </section>
      </div>
    </>
  );
}

export default App;
