import { Button, InputField, Title } from '../../components/common-components';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { requestUtil } from '../../utils';
import styles from './LoginPage.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log({username, password});
  }, [username, password]);

  const handleLogin =() => {
    
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