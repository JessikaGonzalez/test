import { TableCell, TableHead, TableRow } from '@mui/material'

const TaskHeader = () => {
  return (
    <TableHead sx={{bgcolor:'#f0f8ff'}}>
      <TableRow>
        <TableCell></TableCell>
        <TableCell align='center'>Title</TableCell>
        <TableCell align='center'>Description</TableCell>
        <TableCell align='center'>State</TableCell>
        <TableCell align='center'>Creation Date</TableCell>
        <TableCell align='center'></TableCell>
        <TableCell align='center'></TableCell>
      </TableRow>
    </TableHead>
    );
}
export default TaskHeader;