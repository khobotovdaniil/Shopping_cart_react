import React, { useRef, useEffect, useContext } from 'react'
import propTypes from './props';

import style from './style.module.css';
import SettingContext from './../contexts/settings'

MinMaxLazy.propTypes = propTypes;

function MinMaxLazy({ min = 1, max, current, onChange }){
	let inp = useRef();
	let settings = useContext(SettingContext);

	function onKeyPress(e){
		if(e.key === 'Enter'){
			parseCurrentStr(e);
		}
	}

	function parseCurrentStr(){
		let num = parseInt(inp.current.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	function applyCurrent(num){
		let validNum = Math.max(min, Math.min(max, num));
		inp.current.value = validNum;
		onChange(validNum);
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);
	
	useEffect(() => {
		inp.current.value = current;
	}, [ current ]);

	return <div>
		<button className="btn btn-warning" type="button" onClick={ dec }>-</button>
		<input 
			ref={inp}
			type="text" 
			className={style.inp}
			defaultValue={current} 
			onBlur={parseCurrentStr} 
			onKeyPress={onKeyPress}
		/>
		<button className="btn btn-success" type="button" onClick={ inc }
			title={ settings.lang == 'ru' ? 'Увеличить' : 'Increase' }
		>+</button>
	</div>
}

export default MinMaxLazy;