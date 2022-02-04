import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Pages/LoginForm/LoginForm';
import { BrowserRouter } from 'react-router-dom';
import RoutesTrack from './RoutesTrack';

export const UpcomingAPI =
	'https://api.themoviedb.org/3/movie/upcoming?api_key=de6ceff124cc836aa2f6526a5541ab2b&';
export const PopularAPI =
	'https://api.themoviedb.org/3/movie/popular?api_key=de6ceff124cc836aa2f6526a5541ab2b&';
export const TopRatedAPI =
	'https://api.themoviedb.org/3/movie/top_rated?api_key=de6ceff124cc836aa2f6526a5541ab2b&';
export const imageAPI = 'https://image.tmdb.org/t/p/w500/';
export const QuerySearchAPI =
	'https://api.themoviedb.org/3/search/movie?api_key=de6ceff124cc836aa2f6526a5541ab2b&';
export const api_key = 'de6ceff124cc836aa2f6526a5541ab2b';
export const MovieDetailAPI = movies_id => {
	return `https://api.themoviedb.org/3/movie/${movies_id}?api_key=de6ceff124cc836aa2f6526a5541ab2b&language=en-US`;
};
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RoutesTrack />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
