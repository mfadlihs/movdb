import { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import App from './App';
import NotFound from './Component/NotFound';
import Upcoming from './Pages/Home/Upcoming';
import UpcomingPage from './Pages/Home/UpcomingPage';
import LoginForm from './Pages/LoginForm/LoginForm';
import Popular from './Pages/Popular/Popular';
import PopularPage from './Pages/Popular/PopularPage';
import Query from './Pages/QuerySearch/Query';
import TopRated from './Pages/TopRated/TopRated';
import TopRatedPage from './Pages/TopRated/TopRatedPage';
import './RoutesTrack.css';

export const userKey = 'user';

export default function RoutesTrack() {
	const Navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.getItem(userKey) === null) {
			sessionStorage.setItem(userKey, false);
		}

		let userTemp = sessionStorage.getItem(userKey);
		userTemp === 'true' ? Navigate('/') : Navigate('/login');
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/' element={<Upcoming />} />
					<Route path='upcoming/:page' element={<UpcomingPage />} />
					<Route path='top-rated' element={<TopRated />} />
					<Route path='top-rated/:page' element={<TopRatedPage />} />
					<Route path='popular' element={<Popular />} />
					<Route path='popular/:page' element={<PopularPage />} />
					<Route path='/search/:query/' element={<Query />} />
				</Route>
				<Route path='/login' element={<LoginForm />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
