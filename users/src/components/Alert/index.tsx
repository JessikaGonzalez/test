import { Alert, AlertColor } from '@mui/material';

interface MessageProps {
  type: AlertColor;
  message: string;
}

function Message(props: MessageProps) {
  return (
    <Alert severity={props.type}>
      {props.message}
    </Alert>
  )
}

export default Message