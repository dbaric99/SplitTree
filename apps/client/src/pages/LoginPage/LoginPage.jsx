import { Button, InputField, Title } from '../../components/common-components';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './LoginPage.module.css';
import { generalActions } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

function LoginPage() {
  const navigate = useNavigate();
  const user = useSelector(state => state.general.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('user', user);
  }, [user])

  const handleLogin =() => {
    //TODO - handle url
    dispatch(generalActions.setUser({username: username, password: password}));
    //console.log(typeof(generalActions.setUser({username: username, password: password})))
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