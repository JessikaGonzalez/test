import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import Cookies from 'js-cookie';

import { useAppDispatch } from '../../utils/hooks.ts';
import { logInUser } from '../../controllers/auth'
import { fetchUser } from '../../actions/user.ts'
import { emailNotValid } from '../../utils/LogIn'
import Message from '../../components/Alert';
const LogIn = () => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabledLogInButton, setDisableLogInButton] = useState(true);


  const dispatch = useAppDispatch();

  const setData = (errorEmail: string, disableButton: boolean, email: string) => {
    setError(errorEmail);
    setDisableLogInButton(disableButton);
    setEmail(email);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const errorEmail = emailNotValid(e.target.value);
    if (errorEmail) {
      setData(errorEmail, true, '')
    } else {

      setData('', false, e.target.value)
    }
  };

  const handleOnClick = async () => {
    const user = await logInUser(email);
    if(!user) {
      setData('User not found', true, '')
    } else {
      dispatch(fetchUser(email));
      Cookies.set('email', email, { expires: 1 });
      location.href = '/tasks';
    }
  }

  return (
    <React.Fragment>
      <Card variant="outlined" sx={{padding:'30px', width:'400px', margin:'30px'}}>
        <CardHeader title='Log In'></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Welcome
          </Typography>
        </CardContent>
        <CardContent>
          <TextField
            placeholder="example@gmail.com"
            focused={true}
            label="Email"
            variant="outlined"
            type='email'
            required={true}
            style = {{width: 365}}
            onChange={(event) => handleOnChange(event)}
          />
        </CardContent>
        {error && (
          <CardContent>
            <Message type='error' message={error} />
          </CardContent>
        )}
        <CardContent>
          <Button
            disabled={isDisabledLogInButton}
            variant="contained"
            onClick={() => handleOnClick()}
          >Log In</Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default LogIn
