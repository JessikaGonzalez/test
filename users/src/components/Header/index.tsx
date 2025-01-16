import { useState } from 'react';
import { Navigate } from 'react-router';
import { CardHeader, Button, Divider } from '@mui/material'
import Cookies from 'js-cookie';

import { useAppDispatch } from '../../utils/hooks.ts';
import { setLogOut } from '../../actions/user.ts'
import Menu from '../Menu'
import './style.scss'

const Header = ({ title }: any) => {

  const dispatch = useAppDispatch();

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const logOutClick = async (shouldRedirect: boolean) => {
    dispatch(setLogOut())
    setShouldRedirect(!shouldRedirect);
    Cookies.remove('email')
  }

  return (
    <>
      <div><Menu /></div>
      <Divider />
      <div className="header-container">
        <div><CardHeader title={title}></CardHeader></div>
        <div>
          <Button
            variant="contained"
            onClick={() => logOutClick(shouldRedirect)}
          >
            Log Out
          </Button>
          {shouldRedirect && <Navigate replace to="/" />}
        </div>
      </div>
    </>
  );
}

export default Header;