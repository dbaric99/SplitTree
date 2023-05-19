import { Button, InputField, Title } from '../../components/common-components';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './LoginPage.module.css';
import { generalActions } from '../../state/actions';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =() => {
    dispatch(generalActions.setUser({username: username, password: password}));
    navigate('/dashboard');
    //navigate(`/${user.data.isAdmin ? 'admin' : 'user'}/dashboard`);
  }

  return (
    <div className={styles.background}>
      <div className={styles.logoHolder}></div>
      <div className={styles.formWrapper}>
        <Title classes={styles.title}>Log in to SplitTree</Title>
        <InputField type='text' labelText="Username" onChange={(e) => setUsername(e.target.value)}/>
        <InputField type='password' labelText="Password" onChange={(e) => setPassword(e.target.value)}/>
        <div className={styles.subText}>Forgot your password?</div>
        <Button classes={styles.logInButton} onClick={() => handleLogin()}>Log in</Button>
      </div>
    </div>
  )
}

export {LoginPage}