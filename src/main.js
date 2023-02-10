import React from 'react'
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import props from './MinMax/props';

ReactDom.render(
	<App/>,
	document.querySelector('.app')
)

/*
import React from 'react'
import ReactDom from 'react-dom';
import MinMax from './MinMax'
import SettingContext from './contexts/settings'

let settings = { lang: 'en' };

ReactDom.render(
	<SettingContext.Provider value={settings}>
		<MinMax min={1} current={3} max={5} onChange={() => {}}/>
	</SettingContext.Provider>,
	document.querySelector('.app')
);  */