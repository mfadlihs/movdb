/* global $ */

import logo from './logo.svg';
import './App.css';
import Nav from './Pages/Home/Component/nav';
import { Outlet } from 'react-router-dom';
import { api_key } from '.';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
	const [changeQuery, setChangeQuery] = useState(0);
	const [changePage, setChangePage] = useState(0);

	return (
		<Context.Provider
			value={{
				changeQuery: changeQuery,
				setChangeQuery: setChangeQuery,
				changePage: changePage,
				setChangePage: setChangePage,
			}}
		>
			<div id='container'>
				<Nav></Nav>
				{/* <div className='content'> */}
				<Outlet />
				{/* </div> */}
			</div>
		</Context.Provider>
	);
}

export default App;
