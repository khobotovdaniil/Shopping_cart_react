import React from 'react';

export default function({products, orderData}){
	let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);

	return <div>
		<h1>Result screen</h1>
		<hr/>
		<div>{orderData.name}, your order is done!</div>
		<h2>Total: {total}</h2>
	</div>;
}