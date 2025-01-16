import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { IUser } from "../../interfaces/users";

const UserBody = ({ users, searchWord }: any) => {
  const word = searchWord.toLowerCase()
  const filterUsers = word !== '' ? users.filter((user: IUser) => user.name.toLowerCase().includes(word )) : users;
  return (
    <TableBody>
      {filterUsers.map((user: IUser, index: number) => {
        return (
          <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {index+1}
              </TableCell>
              <TableCell>
                {user.email}
              </TableCell>
              <TableCell>
                {user.name}
              </TableCell>
            </TableRow>
        )
      })}
    </TableBody>
  );
}

export default UserBody;