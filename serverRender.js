// fetch the data from the api

import config from './config';
import axios from 'axios';

axios.get(config.serverUrl + '/api/contests')
	.then(resp => {
		console.log(resp.data);
	})
	.catch(console.error);






			// axios.get('/api/contests')
			// .then(resp => {
			// 	this.setState({
			// 		contests: resp.data.contests
			// 	});
			// })
			// .catch(console.error);