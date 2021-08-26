/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

import {
  Button,
  Card,
  CardContent,
  TextField,
  Container,
  Box,
  Typography
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

// hooks
import useGeneral from '../../hooks/useGeneral';

import CopyClipboard from './CopyClipboard';

function createData(id, email) {
  return { id, email };
}

InviteLists.propTypes = {
  domain: PropTypes.string
};

export default function InviteLists({ domain }) {
  const theme = useTheme();
  const { sendingInviteEmail } = useGeneral();
  const [inviteEmails, setInviteEmails] = useState([]);

  useEffect(() => {
    const initValue = [];
    initValue.push(createData(0, `employee@${domain}`));
    setInviteEmails(initValue);
  }, [domain]);

  const handleAddInviteEmail = () => {
    const rows = inviteEmails;
    let lastId = 0;
    if (rows.length > 0) {
      lastId = rows[rows.length - 1].id;
    }
    console.log(lastId);
    rows.push(createData(lastId + 1, ''));
    setInviteEmails([...rows]);
  };

  const handleClickDelete = (id) => {
    const rows = inviteEmails;
    rows.splice(id, 1);
    setInviteEmails([...rows]);
  };

  const handleSendEmail = () => {
    sendingInviteEmail({ emails: inviteEmails });
  };

  return (
    <>
      <Card>
        <CardContent sx={{ padding: theme.spacing(3, 0) }}>
          <Container maxWidth="sm">
            {inviteEmails.map((row, index) => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}
                key={row.id}
              >
                <Box sx={{ width: '100%', mr: 1 }}>
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    sx={{ width: '100%' }}
                    value={row.email}
                    onChange={(e) => {
                      const tmpList = inviteEmails;
                      tmpList[index].email = e.target.value;
                      setInviteEmails([...tmpList]);
                    }}
                  />
                </Box>
                <Box>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleClickDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Button
              onClick={handleAddInviteEmail}
              sx={{ width: '100%', mt: 2 }}
            >
              <AddIcon />
            </Button>
          </Container>
          <Container maxWidth="md">
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Box m={3} />
              <Button
                variant="contained"
                color="secondary"
                endIcon={<SendIcon />}
                onClick={handleSendEmail}
              >
                Send Invitations
              </Button>
            </Box>
          </Container>
          <Box m={2} />
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="body1">Or share an invite link:</Typography>
            <CopyClipboard value="https://thimble.io/get" />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
