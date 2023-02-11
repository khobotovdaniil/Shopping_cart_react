import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import StorageContext from './contexts/storage';
import cartStorage from './storage/cartStorage';

const storage = {
	cart: cartStorage
};

ReactDom.render(
	<StorageContext.Provider value={storage}>
		<App/>
	</StorageContext.Provider>,
	document.querySelector('.app')
);