import { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import { MovieCard } from '../../Component/MovieCard';
import { QuerySearchAPI } from '../..';
import { Link, useLinkClickHandler, useParams } from 'react-router-dom';
import Loading from '../Home/Component/Loading';
import { Context } from '../../App';

export default function Query() {
	const { changeQuery } = useContext(Context);
	const [loading, setLoading] = useState(false);
	const [moviesList, setMoviesList] = useState([]);
	const query = useParams().query;

	useEffect(() => {
		setLoading(false);
		// console.log(query);
		$.ajax({
			url: QuerySearchAPI,
			data: {
				query: query,
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
	}, [changeQuery]);

	return loading ? (
		<div className='query content'>
			<h1>
				"{query}"<span>.</span>
			</h1>
			<div className='cardContainer'>
				{moviesList.map((list, index) => {
					return <MovieCard key={index} data={list} />;
				})}
			</div>
		</div>
	) : (
		<div className='loading-container'>
			<Loading />
		</div>
	);
}
