const CurrencyInput = ({ currencyType, currency, handleCurrency }) => {
  return (
    <div>
      {currencyType} : &nbsp;
        <input 
            type="number" 
            name={currencyType}
            value={currency}
            onChange={handleCurrency}
        />
    </div>
  );
};

export default CurrencyInput;
