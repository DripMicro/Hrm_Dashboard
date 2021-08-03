import PropTypes from 'prop-types';

import { useTheme } from '@material-ui/core/styles';

import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, Typography, Box, Divider } from '@material-ui/core';

import CreditCardIcon from '@material-ui/icons/CreditCard';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import CheckoutCard from './CheckoutCard';

CheckoutDialog.propTypes = {
  totalPrice: PropTypes.number,
  freeDays: PropTypes.number,
  planType: PropTypes.string
};

export default function CheckoutDialog({ totalPrice, freeDays, planType }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [plan, setPlan] = React.useState('year');

  useEffect(() => {
    const title = planType.replace('ly', '');
    setPlan(title);
  }, [planType]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        startIcon={<CreditCardIcon />}
        endIcon={<ArrowForwardIcon />}
        sx={{ minWidth: 210 }}
      >
        Upgrade plan now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">CheckOut</DialogTitle>
        <DialogContent
          sx={{
            minWidth: 465,
            [theme.breakpoints.down('sm')]: { minWidth: 10 }
          }}
        >
          <Typography variant="caption">Try Thimble Premium</Typography>
          <Typography variant="h4">{freeDays} days free</Typography>
          <Typography variant="caption">
            Then ${totalPrice} per {plan}
          </Typography>
          <Box m={3} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">Thimble Premium</Typography>
            <Box>
              <Typography variant="subtitle1">{freeDays} days free</Typography>
              <Typography variant="caption">
                ${totalPrice}.00 / {plan} after
              </Typography>
            </Box>
          </Box>
          <Box m={3} />
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">Subtotal</Typography>
            <Typography variant="subtitle1">${totalPrice}</Typography>
          </Box>
          <Box m={4} />
          <CheckoutCard totalPrice={totalPrice} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            color="secondary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
