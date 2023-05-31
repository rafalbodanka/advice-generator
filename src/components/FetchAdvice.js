import React, { useEffect, useState } from "react";
import axios from "axios";

import iconDice from '../images/icon-dice.svg'

const FetchAdvice = ({ advice, setAdvice }) => {
	
	const fetchAdvice = async () => {
		try {
			const response = await axios.get('https://api.adviceslip.com/advice')
			setAdvice(response.data.slip)
		} catch (err) {
		}
	};

	//fetch advice when user visit the page
  useEffect(() => {
    if (!advice) fetchAdvice();
  }, []);

	return (
		<div className="flex justify-center items-center translate-y-1/2">
			<div className="bg-green-400 p-3 rounded-full cursor-pointer inline-block">
			<img
					className=""
					src={iconDice}
					onClick={fetchAdvice}
					alt="Dice Icon">
					</img>
			</div>
		</div>
	);
	}

export default FetchAdvice;