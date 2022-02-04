import Email from './Email';
import './Login.css';
import Password from './Password';
import { userKey } from '../../../RoutesTrack';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function Login(props) {
	const Navigate = useNavigate();

	const login = e => {
		e.preventDefault();
		sessionStorage.setItem(userKey, true);
		Navigate('/');
	};

	const setIsLogin = () => {
		props.setIsLogin(false);
	};

	return (
		<div className='login'>
			<form>
				<h3>START FOR FREE</h3>
				<h1>
					Login <span>.</span>
				</h1>
				<p>
					Doesn't have an Account? <span onClick={setIsLogin}>Register</span>
				</p>
				<Email />
				<Password />
				<button onClick={login}>Login</button>
			</form>
		</div>
	);
}
