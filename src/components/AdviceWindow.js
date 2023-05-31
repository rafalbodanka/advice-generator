import React, { useEffect, useState } from "react";
import FetchAdvice from "./FetchAdvice";

import patternDividerDesktop from '../images/pattern-divider-desktop.svg'

const AdviceWindow = ({advice, setAdvice}) => {

    const [isCopiedToClipboardMessage, setIsCopiedToClipboardMessage] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(advice.advice)
        setIsCopiedToClipboardMessage(true);

        setTimeout(() => {
            setIsCopiedToClipboardMessage(false);
        }, 1500);
    }

    return (
    <div className="bg-darkGrayishBlue text-white w-full max-w-md rounded-2xl mx-4 sm:mx-8">
            <div className="text-neonGreen text-xs text-center mt-8 tracking-4"> ADVICE #{advice.id}</div>
            <div className="text-lightCyan text-lg text-center mt-6 ml-8 mr-8 mb-6">"{advice.advice}"</div>
            <div className="text-center cursor-pointer mt-4 mb-6 text-xs w-20 relative ml-auto mr-auto"onClick={copyToClipboard}>
                Copy
                {isCopiedToClipboardMessage && <div className="bg-lightCyan text-black text-center cursor-pointer text-xs w-32 absolute left-1/2 transform -translate-x-1/2">
Copied to clipboard</div>}
            </div>
            <img className="" src={patternDividerDesktop}></img>
            <FetchAdvice advice={advice} setAdvice={setAdvice}></FetchAdvice>
        </div>
    )
}

export default AdviceWindow;