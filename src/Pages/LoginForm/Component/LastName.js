import './LastName.css';

export default function LastName() {
	return (
		<div className='inputBox last'>
			<input type='text' required />
			<label>Last Name</label>
			<i className='fas fa-id-card'></i>
		</div>
	);
}
