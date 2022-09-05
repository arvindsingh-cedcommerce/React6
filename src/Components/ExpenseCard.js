import React from 'react'
import {Box, Card, CardContent,Typography, styled} from '@mui/material'

const Container = styled(Box)`
  display:flex;
  & > div {
   flex:1;
   padding:10px
`
const Content = styled(Typography)`
  font-size: 22px;
`
// this Component diaplays the income and expense
export default function ExpenseCard({transactions}) { 
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((amount, item) => (amount += item), 0).toFixed(2);
  const expense = amount.filter(item => item < 0).reduce((amount, item) => (amount += item), 0).toFixed(2);
 return (
   <Container>
     <Card>
       <CardContent>
         <Content>Income</Content>
         <Content color="green">₹{income}</Content>
       </CardContent>
     </Card>
     <Card>
       <CardContent>
         <Content>Expense</Content>
         <Content color="red">₹{expense}</Content>
       </CardContent>
     </Card>
   </Container>
 );
}
