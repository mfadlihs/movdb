import Email from './Email';
import FirstName from './FirstName';
import LastName from './LastName';
import Password from './Password';
import './Register.css';
import { userKey } from '../../../RoutesTrack';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function Register(props) {
	const Navigate = useNavigate();

	const register = e => {
		e.preventDefault();
		sessionStorage.setItem(userKey, true);
		Navigate('/');
	};

	const setIsLogin = () => {
		props.setIsLogin(true);
	};

	return (
		<div className='register'>
			<form>
				<h3>START FOR FREE</h3>
				<h1>
					Create new account <span>.</span>
				</h1>
				<p>
					Already A Member? <span onClick={setIsLogin}>Login</span>
				</p>
				<div className='name'>
					<FirstName />
					<LastName />
				</div>
				<Email />
				<Password />
				<div className='submit'>
					<button onClick={register} className='method'>
						Change Method
					</button>
					<button onClick={register} className='create'>
						Create Account
					</button>
				</div>
			</form>
		</div>
	);
}
