import React, { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

export default function({ showed, title, onClose, children }){
	let classes = ['alert', 'alert-success'];

	if(!showed){
		classes.push('d-none');
	}

	let root = useRef();

	useClickOutside(root, function(){
		if(showed){
			onClose();
		}
	});

	let content = !children ? null : <>
		{children}
		<hr/>
	</>

	return <div className={classes.join(' ')} ref={root}>
		<h2>{ title }</h2>
		<hr/>
		{ content }
		<button className="btn btn-success" onClick={onClose}>Ok</button>
	</div>
}