import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

MinMaxLazy.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

function MinMaxLazy({ min = 1, max, current, onChange }){
	let [ inpVal, setInpVal ] = useState(current);
	let onInput = e => setInpVal(e.target.value);

	function onKeyPress(e){
		if(e.key === 'Enter'){
			parseCurrentStr(e);
		}
	}

	function parseCurrentStr(){
		let num = parseInt(inpVal);
		applyCurrent(isNaN(num) ? min : num);
	}

	function applyCurrent(num){
		let validNum = Math.max(min, Math.min(max, num));
		setInpVal(validNum);
		onChange(validNum);
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);

	useEffect(() => {
		setInpVal(current);
	}, [current]);

	return <div>
		<button className="btn btn-warning" type="button" onClick={ dec }>-</button>
		<input type="text" value={inpVal} onChange={onInput} onBlur={parseCurrentStr} onKeyPress={onKeyPress}/>
		<button className="btn btn-success" type="button" onClick={ inc }>+</button>
	</div>
}

export default MinMaxLazy;