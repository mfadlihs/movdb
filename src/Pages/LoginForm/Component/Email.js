import './Email.css';

export default function Email() {
	return (
		<div className='inputBox email'>
			<input type='text' required />
			<label>Email</label>
			<i className='fas fa-envelope'></i>
		</div>
	);
}
