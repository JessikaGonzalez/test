import { useState } from 'react';
import Cookies from 'js-cookie';
import { CardHeader, Divider, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import Search from '../../components/Search'
import TaskModal from '../TaskModal';
import MenuHeader from '../Menu'
import { addTask } from '../../controllers/tasks';
import './style.scss'

const email = Cookies.get('email')

const Header = ({ title, titleSearch, handleUpdate, type }: any) => {

  const [openTaskModal, setOpenTaskModal] = useState(false);

  const handleOpenTaskModal = () => {
    setOpenTaskModal(true);
  };

  const handleCloseTaskModal = () => {
    setOpenTaskModal(false);
  };

  const handleSaveTask = async (title: string, description: string) => {
    await addTask(title, description, (email || ''));
    setOpenTaskModal(false);
    handleUpdate('')
  };

  return (
    <>
      <div className='header-menu'>
        <MenuHeader />
      </div>
      <div className='user-email'>{email}</div>
      <Divider />
      <div className="header-container">
        <div className='header-title'><CardHeader title={title}></CardHeader></div>
        {type === 'task' && (
          <div className='header-icon-add'>
            <Tooltip title="Add a New Task">
              <Button onClick={handleOpenTaskModal}>
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
        )}
        <Search onChange={handleUpdate} title={titleSearch} />
      </div>
      <TaskModal handleSaveTask={handleSaveTask} openTaskModal={openTaskModal} handleCloseTaskModal={handleCloseTaskModal} />
    </>
  );
}

export default Header;
