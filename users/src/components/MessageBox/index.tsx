import { Modal, Button} from '@mui/material';
import './style.scss'

const MessageBox = ({open, handleClose, handleRemove, id, title}: any) => {

  return (
    <Modal
      open={open}
      key={id.toString()}
    >
      <div className='div-modal'>
        <div className='title-modal'>
          <p>Are you sure you want to delete this Task?</p>
          <div>Task Title: {title}</div>
          <Button variant="contained" sx={{marginRight:'50px'}} onClick={() => {
            handleRemove(id)
          }}>Yes</Button>
          <Button variant="contained" onClick={handleClose}>No</Button>
        </div>
      </div>
    </Modal>
  )
}
export default MessageBox;
