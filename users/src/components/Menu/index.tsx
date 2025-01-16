import { Typography, Box, Button } from '@mui/material';

const Menu = () => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Typography sx={{ minWidth: 100 }}><Button href='/users'>Users</Button></Typography>
      <Typography sx={{ minWidth: 100 }}><Button href='/tasks'>Tasks</Button></Typography>
    </Box>
  );
}

export default Menu;