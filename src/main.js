import React from 'react'
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import props from './MinMax/props';

ReactDom.render(
	<App/>,
	document.querySelector('.app')
);
/* 
<A href="#">
	<strong></strong>
	<em></em>
</A>

React.createElement(
	A, 
	{ href: '#' },
	[
		React.createElement('strong'),
		React.createElement('em')
	]
)

props
	href: '#'
	children: [1,2] */