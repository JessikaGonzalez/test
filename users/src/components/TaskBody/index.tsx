import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { ITask } from "../../interfaces/task";

const TaskBody = ({ tasks, searchWord }: any) => {
  const word = searchWord.toLowerCase();
  const filterTasks = word !== '' ? tasks.filter((task: ITask) => task.title.toLowerCase().includes(word )) : tasks;
  return (
    <TableBody>
      {filterTasks.map((task: ITask, index: number) => {
        return (
          <TableRow
              key={task._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {index+1}
              </TableCell>
              <TableCell>
                {task.title}
              </TableCell>
              <TableCell>
                {task.description}
              </TableCell>
              <TableCell>
                {task.state}
              </TableCell>
            </TableRow>
        )
      })}
    </TableBody>
  );
}

export default TaskBody;