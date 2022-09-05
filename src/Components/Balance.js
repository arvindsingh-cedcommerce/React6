import { styled, Typography, Box } from '@mui/material'
// import { Component } from 'react';

const BalanceText = styled(Typography)(() => ({
  fontSize: '25px',
  marginBottom: '20px'
}))
// this Component displays balance 
const Balance = ({ transactions }) => {
  // amount array containing only amounts of all transactions
  const amount = transactions.map(transaction => transaction.amount);
  // total which stores the total of all transactions
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance: ₹{total}</BalanceText>
    </Box>
  );
}

export default Balance;