import { useEffect, useState } from 'react';
import $ from 'jquery';
import { MovieCard } from '../../Component/MovieCard';
import { PopularAPI } from '../..';
import { Link } from 'react-router-dom';
import Loading from '../Home/Component/Loading';

export default function Popular() {
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		let mounted = false;
		if (!mounted) {
			$.ajax({
				url: PopularAPI,
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
		}
		setTimeout(() => {
			setLoading(true);
		}, 1000);
		return () => {
			mounted = true;
		};
	}, []);

	return loading ? (
		<div className='popular content'>
			<h1>
				Popular Movies <span>.</span>
			</h1>
			<div className='cardContainer'>
				{moviesList.map((list, index) => {
					return <MovieCard key={index} data={list} />;
				})}
			</div>
			<div className='changePage'>
				<div className='container'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page, index) => {
						const pageUrl = `/popular/${page}`;
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
