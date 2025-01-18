import { useState } from 'react';
import { Navigate } from 'react-router';
import Cookies from 'js-cookie';
import { Box, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

import { useAppDispatch } from '../../utils/hooks.ts';
import { setLogOut } from '../../actions/user.ts'
import './style.scss'

const MenuHeader = () => {

  const dispatch = useAppDispatch();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const logOutClick = async () => {
    dispatch(setLogOut())
    setShouldRedirect(!shouldRedirect);
    Cookies.remove('email')
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div className='menu-header'>
          <Button href='/tasks'>Tasks</Button>
        </div>
        <div className='icons'>
          <Button onClick={() => logOutClick()}>
            <Tooltip title={`Log Out`}>
              <LogoutIcon />
            </Tooltip>
          </Button>
          <Button href='/users'>
            <Tooltip title={`User List`}>
              <SettingsIcon />
            </Tooltip>
          </Button>
        </div>
      </Box>
      {shouldRedirect && <Navigate replace to="/" />}
    </>
  );
}

export default MenuHeader;
