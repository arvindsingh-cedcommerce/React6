
import './App.css';
import { Grid, Typography } from '@mui/material';
import { styled } from "@mui/system";
import Balance from './Components/Balance.js';
import ExpenseCard from './Components/ExpenseCard.js';
import NewTransaction from './Components/NewTransaction.js';
import Transactions from './Components/Transactions';
import { createContext, useState } from 'react';

export const ExpenseContext = createContext();

const Header = styled(Typography)(() => ({
  fontSize: '36px',
  color: 'blue',
  textTransform: 'uppercase'
}))

const Container = styled(Grid)`
 background: #fff;
 width: 1000px;
 padding:10px;
 border-radius:20px;
 margin: auto;
 & > div {
  height: 70vh;
  width: 50%;
  padding: 10px;
 }
`
function App() {
// array to store new transactions
  const [transaction, setTransaction] = useState([]);
  const [id, setId] = useState(false);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [index, setIndex] = useState("");
  const [flag, setFlag] = useState('');
  return (
    <div className="App">
      <Header>Expense Manager</Header>
      <ExpenseContext.Provider
        value={{ id, setId, text, setText, amount, setAmount, index, setIndex,flag, setFlag }}
      >
        <Container container justifyContent="center">
          <Grid item>
            <Balance transactions={transaction} />
            <ExpenseCard transactions={transaction} />
            <NewTransaction
              transactions={transaction}
              setTransaction={setTransaction}
            />
          </Grid>
          {transaction.length > 0 ? 
          <Grid item>
          <Transactions
            transactions={transaction}
            setTransaction={setTransaction}
          />
        </Grid> :
        null}
        </Container>
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;