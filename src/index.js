import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 

ReactDOM.render(
	<App initialData={window.initialData} />,
	document.getElementById('root')
);

// cd Desktop
// cd Root  
// cd Programming\ Projects/
// cd namingContests

// npm run dev
// mongod
// npm start

// WORKING WITH DATABASE
// mongo <= in terminal
// db.contests.count()
// SHOW ALL NAMES BELOW
// db.names.find({})
// REMOVE NAME BELOW (will remove all)
// db.names.remove( { "name": "Poopy Pants" } )
