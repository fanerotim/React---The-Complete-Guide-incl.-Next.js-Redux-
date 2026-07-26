import { useState } from 'react';
import { AuthInputContainer } from './AuthInputContainer';
import { Controls } from './Controls';
import { Label } from './Label';
import { Input } from './Input';
import { Button } from './Button';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    // <div id="auth-inputs">
    <AuthInputContainer>
      {/* <div className="controls"> */}
      <Controls>
        <p>
          {/* <label>Email</label> */}
          <Label $emailNotValid={emailNotValid}>Email</Label>
          {/* <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          /> */}
          <Input
            type="email"
            $emailNotValid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          {/* <label>Password</label> */}
          <Label $passwordNotValid={passwordNotValid}>Password</Label>
          {/* <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          /> */}
          <Input
            type="password"
            $passwordNotValid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </Controls>
      {/* </div> */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>
            Sign in
        </Button>
        {/* <button className='button' onClick={handleLogin}>Sign In</button> */}
      </div>
      {/* </div> */}
    </AuthInputContainer>
  );
}
