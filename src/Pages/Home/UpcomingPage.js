import { useContext, useEffect, useState } from 'react';
import './Upcoming.css';
import $, { contains } from 'jquery';
import { MovieCard } from '../../Component/MovieCard';
import { UpcomingAPI } from '../..';
import { Link, useParams } from 'react-router-dom';
import Loading from './Component/Loading';
import { Context } from '../../App';

export default function UpcomingPage() {
	const { changePage, setChangePage } = useContext(Context);
	const page = useParams().page;
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		setLoading(false);
		$.ajax({
			url: UpcomingAPI,
			data: {
				page: page,
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
	}, [changePage]);

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
							<Link
								onClick={() => {
									setChangePage(changePage + 1);
								}}
								className='page'
								to={pageUrl}
								key={index}
							>
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
