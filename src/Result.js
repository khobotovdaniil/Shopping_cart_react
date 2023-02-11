import React from 'react';
import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';

export default observer(function({orderData}){
	let [cart] = useStore('cart');

	return <div>
		<h1>Result screen</h1>
		<hr/>
		<div>{orderData.name}, your order is done!</div>
		<h2>Total: {cart.total}</h2>
	</div>;
});