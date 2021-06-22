/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

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

import CopyClipboard from './CopyClipboard';

function createData(id, email) {
  return { id, email };
}

const rows = [
  createData(0, 'demo@test.com'),
  createData(1, 'demo@test.com'),
  createData(2, 'demo@test.com')
];

export default function InviteLists() {
  const theme = useTheme();

  const [inviteEmails, setInviteEmails] = useState(rows);

  const handleAddInviteEmail = () => {
    rows.push(createData(rows.length, ''));
    setInviteEmails([...rows]);
  };

  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <Card>
        <CardContent sx={{ padding: theme.spacing(3, 0) }}>
          <Container maxWidth="sm">
            {inviteEmails.map((row) => (
              <Box sx={{ display: 'flex', mb: 2 }} key={row.id}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
                <Button
                  onClick={handleClick}
                  color="error"
                  sx={{
                    borderRadius: '50%',
                    minWidth: '0px',
                    width: 50,
                    height: 50,
                    ml: 2
                  }}
                >
                  <DeleteIcon />
                </Button>
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
              >
                Send Invitations
              </Button>
            </Box>
          </Container>
          <Box m={2} />
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="body1">Or share an invite link:</Typography>
            <CopyClipboard value="https://at.cafe/get" />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
