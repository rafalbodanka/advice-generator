import React, { useState } from "react";

import AdviceWindow from "./components/AdviceWindow";

function App() {
  const [advice, setAdvice] = useState("");

  return (
    <div className="bg-darkBlue w-screen h-screen font-manrope flex justify-center items-center">
      <AdviceWindow advice={advice} setAdvice={setAdvice}></AdviceWindow>
    </div>
  );
}

export default App;
