import { useState } from 'react';
import { Modal, Button, TextField, TextareaAutosize, CardContent } from '@mui/material';
import Message from '../Alert';
import { handleErrorForm } from '../../utils/Task'

const TaskModal = (props: any) => {

  const [error, setError] = useState('');
  const [description, setDescription] = useState(props.description || '');
  const [title, setTitle] = useState(props.title || '');
  const titleModal = props.id ? 'Edit' : 'Add'

  const validationForm = (): boolean => {
    const errorForm = handleErrorForm(title, description)
    setError(errorForm);
    if (!props.id) {
      setDescription('')
      setTitle('')
    }
    if (errorForm === '') {
      return true;
    }
    return false
  }

  const onChange = (field: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError('')
    if (field === 'title') {
      setTitle(event.target.value);
    } else {
      setDescription(event.target.value)
    }
  }

  return (
    <Modal
      open={props.openTaskModal}
    >
      <div className='open-task'>
        <p className='title-open-task'>{titleModal} Task</p>
        <TextField
          style = {{width: 365}}
          placeholder={`${titleModal} Task Title`}
          value={title}
          onChange={(event) => onChange('title', event)}
        ></TextField>
        <p></p>
        <TextareaAutosize
          style = {{width: 360}}
          placeholder={`${titleModal} Task Description`}
          minRows={6}
          value={description}
          onChange={(event) => onChange('description', event)}
        ></TextareaAutosize>
        <p></p>
        <Button style={{width: 85}} variant="contained" sx={{marginRight:'50px'}} onClick={() => {
          if (validationForm()) {
            props.handleSaveTask(title, description)
          }
        }}>
          Save
        </Button>
        <Button style={{width: 85}} variant="contained" onClick={props.handleCloseTaskModal}>Cancel</Button>
        {error && (
          <CardContent>
            <Message type='error' message={error} />
          </CardContent>
        )}
      </div>
    </Modal>
  )
}

export default TaskModal
