import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';





axios.get('/api/contests')
	.then(resp => {
		ReactDOM.render(
			<App initialContests={resp.data.contests} />,
			document.getElementById('root')
		);
	})
	.catch(console.error);

// ReactDOM.render(
//   <App initialContests={[]} />,
//   document.getElementById('root')
// );

// cd Desktop
// cd Root  
// cd Programming\ Projects/
// cd namingContests

// npm run dev
// npm start

