import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../App';

const Listitem = styled(ListItem)`
  margin-top: 10px;
`

const Transaction = ({ transaction, setTransaction, transactions, index }) => {

  let { setId, text, setText, amount, setAmount, setIndex,flag,setFlag } =
    useContext(ExpenseContext);
  const color = transaction.amount < 0 ? "#F64545" : "#00C96D";
  // function to edit the transactions
  const Edit = (id, indx) => {
    // alert()
    transactions.map((transaction) => {
      if (transaction.id === id && transaction.amount < 0) {
        setFlag('expense');
        setId(true);
        setText(transaction.text)
        setAmount((transaction.amount) * -1)
        setIndex(indx);
      }
      if (transaction.id === id && transaction.amount > 0) {
        setFlag('income');
        setId(true);
        setText(transaction.text)
        setAmount((transaction.amount))
        setIndex(indx);
      }
    })
  }
  //function to delete the trasaction
  const Delete = (id) => {
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    <Listitem style={{ background: color, color: `#fff` }}>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
      <ListItemIcon onClick={() => Edit(transaction.id, index)}>
        <BorderColorIcon />
      </ListItemIcon>
      <ListItemIcon onClick={() => Delete(transaction.id)}>
        <DeleteIcon />
      </ListItemIcon>
    </Listitem>
  );
};

export default Transaction