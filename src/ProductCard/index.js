import React from 'react';

import style from './style.module.css';

import useWindowSize from '../hooks/useWindowSize';

export default function(){
	let { width } = useWindowSize();

	let paddingSize = Math.min(parseInt(width / 200), 5);
	let classNames = `card p-${paddingSize}`;

	return <div className={classNames}>
		<h2>Product card</h2>
		<input type="text" className={style.inp} />
	</div>
}