import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// import { useSnackbar } from 'notistack';
import Snackbar from '@material-ui/core/Snackbar';
import copyFill from '@iconify/icons-eva/copy-fill';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MuiAlert from '@material-ui/lab/Alert';
// material
import {
  Tooltip,
  TextField,
  IconButton,
  InputAdornment
} from '@material-ui/core';

// ----------------------------------------------------------------------
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

CopyClipboard.propTypes = {
  value: PropTypes.string
};

export default function CopyClipboard({ value, ...other }) {
  // const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    value,
    copied: false
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setState({ value: event.target.value, copied: false });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onCopy = () => {
    setState({ ...state, copied: true });
    if (state.value) {
      setOpen(true);
      // enqueueSnackbar('Copied', { variant: 'success' });
    }
  };

  return (
    <>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar> */}
      <TextField
        value={state.value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CopyToClipboard text={state.value} onCopy={onCopy}>
                <Tooltip title="Copy">
                  <IconButton>
                    <Icon icon={copyFill} width={24} height={24} />
                  </IconButton>
                </Tooltip>
              </CopyToClipboard>
            </InputAdornment>
          )
        }}
        {...other}
      />
    </>
  );
}
