import { useEffect, useState } from 'react';
import './Upcoming.css';
import $ from 'jquery';
import { MovieCard } from '../../Component/MovieCard';
import { UpcomingAPI } from '../..';
import { Link } from 'react-router-dom';
import Loading from './Component/Loading';

export default function Upcoming() {
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		$.ajax({
			url: UpcomingAPI,
			data: {
				page: 1,
			},
			success: response => {
				let moviesListTemp = response.results.filter(list => {
					let poster_path = list.poster_path;
					return poster_path !== null;
				});
				setMoviesList(moviesListTemp);
			},
		});
		setTimeout(() => {
			setLoading(true);
		}, 1000);
		return () => {};
	}, []);

	return loading ? (
		<div className='upcoming content'>
			<h1>
				Upcoming Movies <span>.</span>
			</h1>
			<div className='cardContainer'>
				{moviesList.map((list, index) => {
					return <MovieCard key={index} data={list} />;
				})}
			</div>
			<div className='changePage'>
				<div className='container'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page, index) => {
						const pageUrl = `/upcoming/${page}`;
						return (
							<Link className='page' to={pageUrl} key={index}>
								{page}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	) : (
		<div className='loading-container'>
			<Loading />
		</div>
	);
}
