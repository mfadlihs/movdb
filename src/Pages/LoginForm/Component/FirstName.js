import './FirstName.css';

export default function FirstName() {
	return (
		<div className='inputBox first'>
			<input type='text' required />
			<label>First Name</label>
			<i className='fas fa-id-card'></i>
		</div>
	);
}
