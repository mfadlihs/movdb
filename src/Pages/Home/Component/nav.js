import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

import { Context } from '../../../App';

export default function Nav() {
	const { changeQuery, setChangeQuery } = useContext(Context);
	const Navigate = useNavigate();
	let hamburgerRef = useRef(null);
	let menuRef = useRef(null);
	const [query, setQuery] = useState('init');

	const searchMovie = e => {
		e.preventDefault();
		Navigate(`/search/${query}`);
		setChangeQuery(changeQuery + 1);
	};

	const hamburgerButton = () => {
		const Button = hamburgerRef.current.children[0];
		const Menu = menuRef.current;
		Button.classList.toggle('open');
		Menu.classList.toggle('open');
	};

	return (
		<nav>
			<Link to='/'>
				<h1>
					Mov<span>DB</span>
				</h1>
			</Link>
			<Link to='/top-rated' className='link topRated responsive'>
				Top Rated
			</Link>
			<Link to='/popular' className='link popular responsive'>
				Popular
			</Link>
			<div className='searchBox responsive'>
				<form onSubmit={searchMovie}>
					<input
						onChange={e => {
							let value = e.target.value;
							setQuery(value);
						}}
						type='text'
						required
						placeholder='search'
					/>
					<button>
						<i className='fas fa-search'></i>
					</button>
				</form>
			</div>

			<div
				onClick={hamburgerButton}
				ref={hamburgerRef}
				className='hamburgerContainer'
			>
				<div className='hamburgerButton'></div>
			</div>

			<div className='hamburgerMenu' ref={menuRef}>
				<Link to='/top-rated' className='link topRated'>
					Top Rated
				</Link>
				<Link to='/popular' className='link popular'>
					Popular
				</Link>
				<div className='searchBox'>
					<form onSubmit={searchMovie}>
						<input type='text' required placeholder='search' />
						<button>
							<i className='fas fa-search'></i>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
