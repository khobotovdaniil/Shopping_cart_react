import { useEffect, useState } from 'react';

function getWindowSizes(){
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
}

export default function(){
	let [ windowSize, setWindowSize ] = useState(getWindowSizes());
	let resizeHandler = () => setWindowSize(getWindowSizes());

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	return windowSize;
}