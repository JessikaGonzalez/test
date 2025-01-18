import { useState } from 'react';
import moment from 'moment'
import { Button, TableBody, TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

import { ITask } from "../../interfaces/task";
import MessageBox from '../MessageBox'
import TaskModal from '../TaskModal';
import { removeTask, updateTask } from '../../controllers/tasks';

const TaskBody = ({ tasks, searchWord, handleUpdate }: any) => {
  const [idRow, setId] = useState(new Set<string>());
  const [open, setOpen] = useState(false);
  const [idSelected, setSelected] = useState('');
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const word = searchWord.toLowerCase();
  const arraySet = Array.from(idRow);
  const filterTasks = word !== '' ? tasks.filter((task: ITask) => task.title.toLowerCase().includes(word)) : tasks;
  const filterDeleted: any[] =
    arraySet.length === 0 ?
    filterTasks :
    filterTasks
      .filter((task: ITask) => !arraySet.includes(task._id.toString()));

  const handleRemove = async (idTask: string) => {
    const isRemoved = await removeTask(idTask);
    if (isRemoved) {
      let newRow = idRow;
      newRow.add(idTask);
      setId(newRow);
      setOpen(false);
    }
  }

  const handleOpen = (id: string) => {
    setOpen(true);
    setSelected(id);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleSaveTask = async (title: string, description: string) => {
    await updateTask(idSelected, title, description);
    setOpenTaskModal(false);
    handleUpdate('')
  };

  const handleOpenTaskModal = (id: string) => {
    setOpenTaskModal(true);
    setSelected(id);
  };

  const handleCloseTaskModal = () => {
    setOpenTaskModal(false);
  };

  return (
    <TableBody>
      {filterDeleted.map((task: ITask, index: number) => {
        const { _id, title, description, state, createdAt } = task;
        return (
          <TableRow
            key={_id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{index+1}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>
              {description.length > 25 ? `${description.substring(0, 25)}...` : description}
            </TableCell>
            <TableCell>{state}</TableCell>
            <TableCell>
              {!createdAt ? '' : moment(createdAt).format('MMMM Do YYYY')}
            </TableCell>
            <TableCell>
            <Tooltip title={`Edit Task \'${title}\'`}>
              <Button onClick={() => handleOpenTaskModal(_id.toString())}>
                <EditIcon />
              </Button>
            </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title={`Delete Task \'${title}\'`}>
                <Button onClick={() => handleOpen(_id.toString())}>
                  <DeleteIcon />
                </Button>
              </Tooltip>
            </TableCell>
            {idSelected === _id.toString() && (
              <MessageBox open={open} handleClose={handleClose} handleRemove={handleRemove} title={title} id={_id.toString()} />
            )}
            {idSelected === _id.toString() && (
              <TaskModal
                handleSaveTask={handleSaveTask}
                openTaskModal={openTaskModal}
                handleCloseTaskModal={handleCloseTaskModal}
                id={_id}
                title={title}
                description={description}/>
            )}
          </TableRow>
        )
      })}
    </TableBody>
  );
}

export default TaskBody;
