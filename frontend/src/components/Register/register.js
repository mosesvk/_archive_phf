import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
import FormContainer from '../UI/FormContainer';
import { register } from '../../store/actions/userActions';

import './register.scss';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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
    // DISPATCH REGISTER
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <div className='register-container'>
        <div className='register-wrap'>
          <div className='box' id='sign-up'>
            <a className='back' href='/home'>
              <span className='back-arrow'>Back</span>
            </a>
            <div className='brand'>
              <div className='logo'>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
              </div>
              <h2 className='title'>Register & Join</h2>
            </div>
            <div className='form'>
              <form onSubmit={submitHandler}>
                <div className='row'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <input
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                {error ? <p className='errMsg'>{error.message}</p> : null}
                <div className='reg-sign-up'>
                  <p>Already a member?</p>
                  <Link to='/login'>Sign in</Link>
                </div>
                <button type='submit' name='submit'>
                  Sign up for free
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default Register;
