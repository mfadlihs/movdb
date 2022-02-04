import './Password.css';

export default function Password() {
	return (
		<div className='inputBox password'>
			<input type='password' required name='password' id='password' />
			<label htmlFor='password'>Password</label>
			<i className='fas fa-key'></i>
		</div>
	);
}
