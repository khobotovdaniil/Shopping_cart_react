import React, { useState } from 'react'
import MinMax from './MinMax';

export default function(){
	let [ products, setProducts ] = useState(productsStub());

	let setCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}

	let totalSum = products.reduce((sum, pr) => sum + pr.price*pr.cnt, 0);

	let removeProduct = (id) => {
		setProducts(products.filter(pr => pr.id != id));
	}

	return <div className="some">
		<h1>Products list</h1>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
					<th>Action</th>
				</tr>
				{ products.map((pr, i) => (
					<>
						<tr key={pr.id}>
							<td>{ i + 1 }</td>
							<td>{ pr.title }</td>
							<td>{ pr.price }</td>
							<td>
								<MinMax max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} />
							</td>
							<td>{pr.price * pr.cnt}</td>
							<button onClick={() => removeProduct(pr.id)}>Удалить</button>
						</tr>
					</>
				)) }
			</tbody>
		</table>
		<hr/>
		<strong>Total: {totalSum}</strong>
	</div>;
}

function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 100,
			cnt: 0
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 50,
			cnt: 0
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 30,
			cnt: 0
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 80,
			cnt: 0
		}
	];
}

/* 
let setCnt = (id, cnt) => {
	let newProducts = [ ...products ];
	let productInd = products.findIndex(pr => pr.id == id);
	let newProduct = { ...products[productInd] };
	newProduct.cnt = cnt;
	newProducts[productInd] = newProduct;
	setProducts(newProducts);
} */

/*

function fn(i, ev){

}

let elems = document.querySeelctorAll('some');

elems.forEach((el, i) => {
	el.addEventListener('click', e => fn(i, e))

});


*/