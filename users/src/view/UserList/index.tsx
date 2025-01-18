import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from '@mui/material'

import UserBody from '../../components/UserBody'
import Header from '../../components/Header'
import Message from '../../components/Alert';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { fetchUsers } from '../../actions/user.ts'

const UserList = () => {
  const [searchWord, setSearchWord] = useState('')
  const users = useAppSelector((state: any) => state.usersSlice.users);
  const dispatch = useAppDispatch();

  const handleUpdate = (search: string) => {
    setSearchWord(search);
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Card variant="outlined" sx={{padding:'30px', width:'800px', margin:'30px'}}>
        {users.error && (
          <CardContent>
            <Message type='error' message={'Page not found'} />
          </CardContent>
        )}
        {!users.error && (
          <>
            <Header type='user' title='User List' titleSearch="User Name" handleUpdate={handleUpdate} />
            <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{bgcolor:'#f0f8ff'}}>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align='center'>User Email</TableCell>
                      <TableCell align='center'>User Name</TableCell>
                    </TableRow>
                  </TableHead>
                  {users?.length > 0 && (
                    <UserBody users={users} searchWord={searchWord} />
                  )}
                </Table>
              </TableContainer>
            </CardContent>
          </>
        )}
      </Card>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    users: state.usersSlice,
    logIn: state.logIn,
  }
};

const connector = connect(mapStateToProps, {
  fetchUsers,
});

export default connector(UserList);
