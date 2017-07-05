import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//-----HEADER COMPONENT CALLED IN APP COMPONENT-----
const Header = ({ message }) => {
	return (
		<h2 className="Header text-center">
			{message}
		</h2>
	);
};

Header.propTypes = {
	message: PropTypes.string
};

const App = () => {
	return (
		<div>
			<Header message="Naming Contests" />
			<div>
				...
			</div>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);




// cd Desktop
// cd Root  
// cd Programming\ Projects/
// cd namingContests


// npm run dev
// npm start

