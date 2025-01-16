import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Button,
} from '@mui/material'

import TaskBody from '../../components/TaskBody'
import Search from '../../components/Search'
import Header from '../../components/Header'
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts'
import { fetchTasks } from '../../actions/task.ts'
import './style.scss'

const TaskList = () => {
  const [searchWord, setSearchWord] = useState('');
  const [open, setOpen] = useState(false);
  const tasks = useAppSelector((state: any) => state.tasksSlice.tasks);
  const dispatch = useAppDispatch();

  const handleUpdateTasks = (search: string) => {
    setSearchWord(search);
  }

  const handleOpenModal = () => {
    setOpen(!open);
  }

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Card variant="outlined" sx={{padding:'30px', width:'800px', margin:'30px'}}>
        <Header title='Task List' searchTitle='' />
        <Search onChange={handleUpdateTasks} title='Task Title'></Search>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{bgcolor:'#f0f8ff'}}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align='center'>Title</TableCell>
                  <TableCell align='center'>Description</TableCell>
                  <TableCell align='center'>State</TableCell>
                </TableRow>
              </TableHead>
              <TaskBody tasks={tasks} searchWord={searchWord} />
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasksSlice.task,
  }
};

const connector = connect(mapStateToProps, {
  fetchTasks,
});

export default connector(TaskList);
