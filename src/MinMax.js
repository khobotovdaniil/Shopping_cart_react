import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

MinMax.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

function MinMax({ min = 1, max, current, onChange }){
	let [inpVal, setInpVal] = useState(current);

	function applyCurrent(num){
		let validNum = Math.max(min, Math.min(max, num));
		setInpVal(validNum);
		onChange(validNum);
	}

	function parseCurrentStr(){
		let num = parseInt(inpVal);
		applyCurrent(isNaN(num) ? min : num);
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);

	let onInput = e => setInpVal(e.target.value);

	useEffect(() => {
		setInpVal(current);
	}, [current]);

	function onKeyPress(e) {
		if (e.key === 'Enter') {
			parseCurrentStr(e);
		}
	}

	return <div>
		<button type="button" onClick={ dec }>-</button>
		<input type="text" value={ inpVal } onBlur={parseCurrentStr} onChange={onInput} onKeyPress={onKeyPress}/>
		<button type="button" onClick={ inc }>+</button>
	</div>
}

export default MinMax;