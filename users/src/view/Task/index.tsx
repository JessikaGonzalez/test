import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Table,
  TableContainer,
  Paper,
  Card,
  CardContent,
  MenuItem,
  Select,
} from '@mui/material'

import TaskBody from '../../components/TaskBody'
import Header from '../../components/Header'
import TaskHeader from '../../components/TaskHeader'
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts'
import { fetchTasks } from '../../actions/task.ts'
import { ITask, STATES } from '../../interfaces/task.ts'
import './style.scss'

const TaskList = () => {
  const [searchWord, setSearchWord] = useState('');
  const [stateTask, setStateTask] = useState('all');
  let tasksState = useAppSelector((state) => state.tasksSlice.tasks);
  const dispatch = useAppDispatch();

  const handleUpdate = async (search: string) => {
    await dispatch(fetchTasks());
    setSearchWord(search);
  }

  const handleChangeFilterState = async (value: string) => {
    setStateTask(value)
  }

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  tasksState = Array.from(tasksState).reverse()
  tasksState = stateTask === 'all' ? tasksState : tasksState.filter((task: ITask) => task.state === stateTask);

  return (
    <>
      <Card variant="outlined" sx={{padding:'30px', width:'800px', margin:'30px'}}>
        <Header type='task' title='Task List' titleSearch="Task Title" handleUpdate={handleUpdate} />
        <CardContent>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stateTask}
            label="States"
            onChange={(e) => {handleChangeFilterState(e.target.value)}}
          >
            <MenuItem key='all' value='all'>All</MenuItem>
            {Object.values(STATES).map((state: STATES, index) => {
              return (<MenuItem key={index} value={state}>{state}</MenuItem>)
            })}
          </Select>
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TaskHeader />
              <TaskBody tasks={tasksState} searchWord={searchWord} handleUpdate={handleUpdate} />
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
