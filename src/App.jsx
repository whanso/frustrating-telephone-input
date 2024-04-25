import { useState } from "react";
import TelephoneDigit from "./components/TelephoneDigit";
import TelephoneInput from "./components/TelephoneInput";

function App() {
  const [input, setInput] = useState("");
  const [showNumbers, setShowNumbers] = useState(false);
  const handleOnFocus = (e) => {
    e.target.blur();
    setShowNumbers(true);
  };
  const onSelectNumber = (number) => {
    setInput(`${input}${number}`);
  };
  return (
    <div className="relative h-screen">
      <TelephoneInput value={input} onFocus={handleOnFocus} />
      <TelephoneDigit
        onSelect={() => onSelectNumber(0)}
        numerical={0}
        classNames="text-white bg-[#e60000]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(1)}
        numerical={1}
        classNames="text-white bg-[#ff9900]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(2)}
        numerical={2}
        classNames="text-white bg-[#ffff00]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(3)}
        numerical={3}
        classNames="text-white bg-[#00ff00]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(4)}
        numerical={4}
        classNames="text-white bg-[#660066]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(5)}
        numerical={5}
        classNames="text-white bg-[#A72D89]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(6)}
        numerical={6}
        classNames="text-white bg-[#1474BB]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(7)}
        numerical={7}
        classNames="text-white bg-[#8FC33E]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(8)}
        numerical={8}
        classNames="text-white bg-[#FEEE22]"
        show={showNumbers}
      />
      <TelephoneDigit
        onSelect={() => onSelectNumber(9)}
        numerical={9}
        classNames="text-white bg-[#E41E26]"
        show={showNumbers}
      />
    </div>
  );
}

export default App;
