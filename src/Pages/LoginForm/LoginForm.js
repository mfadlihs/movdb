import { useState } from 'react';
import Email from './Component/Email';
import Login from './Component/Login';
import Password from './Component/Password';
import Register from './Component/Register';
import './LoginForm.css';

export default function LoginForm() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<div className='container-login'>
			<div className='layer'>
				{isLogin ? (
					<Login setIsLogin={setIsLogin} />
				) : (
					<Register setIsLogin={setIsLogin} />
				)}
			</div>
		</div>
	);
}
