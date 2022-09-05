import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import Transaction from './Transaction';


// this compoenent displays the history of all the transactions
const Transactions = ({ transactions, setTransaction }) => {
  return (
    <Box>
      <Typography variant="h5">Transaction History</Typography>
      <Divider />
      <List>
        {/* map on Transactions array to call the each transaction one by one */}
        {transactions.map((transaction,index) => (
          <Transaction transaction={transaction} setTransaction={setTransaction} transactions={transactions} index={index} /> 
        ))}
      </List>
    </Box>
  );
};

export default Transactions