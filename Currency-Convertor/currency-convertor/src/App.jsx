import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6266638/pexels-photo-6266638.jpeg')",
      }}
    >
      {/* Option 1: Full width container */}
      <div className="w-full h-full min-h-screen border border-gray-600 backdrop-blur-sm bg-white/30 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Currency Converter</h1>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-6"
          >
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                className="text-lg p-6"
              />
            </div>

            <div className="relative w-full h-0.5 my-8">
              <button
                type="button"
                className="absolute left-1/2 -top-4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                className="text-lg p-6"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;