import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { login } from '../../store/actions/userActions'
import './login.scss';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [searchParams] = useSearchParams();
  const redirect = [...searchParams].length > 0 ? [...searchParams][0][1] : '/';

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='login-container'>
      <div className='login-wrap'>
        <div className='box' id='sign-up'>
          <a className='back' href='/home'>
            <span className='back-arrow'>Back</span>
          </a>
          <div className='brand'>
            <h2 className='title'>Sign In</h2>
          </div>
          <div className='form'>
            <input
              placeholder='Username'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className='reg-sign-up'>
              <p>Not a User?</p>
              <Link to='/register'>Register Here</Link>
            </div>
            <button onClick={submitHandler}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login

