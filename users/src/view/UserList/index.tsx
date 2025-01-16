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
import Search from '../../components/Search'
import Header from '../../components/Header'
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { fetchUsers } from '../../actions/user.ts'

const UserList = () => {
  const [searchWord, setSearchWord] = useState('')
  const users = useAppSelector((state: any) => state.usersSlice.users);
  const dispatch = useAppDispatch();

  const handleUpdateUsers = (search: string) => {
    setSearchWord(search);
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Card variant="outlined" sx={{padding:'30px', width:'800px', margin:'30px'}}>
        <Header title='User List' />
        <Search onChange={handleUpdateUsers} title='User Name'></Search>
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
              <UserBody users={users} searchWord={searchWord} ></UserBody>
            </Table>
          </TableContainer>
        </CardContent>
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
