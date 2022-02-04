import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import './MovieCard.css';
import { imageAPI } from '..';

export function MovieCard(props) {
	// const [data, setData] = useState({});
	const { title, overview, vote_average, release_date, poster_path } =
		props.data;
	const bgFront = `${imageAPI}${poster_path}`;

	const yellow = {
		backgroundColor: 'yellow',
		color: 'black',
	};
	const green = {
		backgroundColor: 'green',
	};

	const bgCard = {
		backgroundImage: 'url(' + bgFront + ')',
		backgroundSize: 'cover',
	};

	return (
		<div className='card'>
			<div style={bgCard} className='front'>
				<div className='container'>
					<div className='topSide'>{release_date}</div>
					<div className='bottomSide'>
						<div style={vote_average > 7 ? green : yellow} className='rating'>
							{vote_average}
						</div>
						<div className='title'>
							<h2>{title}</h2>
						</div>
						<div className='clear' />
					</div>
				</div>
			</div>
			<div style={bgCard} className='back'>
				<div className='layer'>
					<h2>Overview</h2>
					<p>{overview}</p>
				</div>
			</div>
		</div>
	);
}
