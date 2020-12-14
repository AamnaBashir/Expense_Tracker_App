import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {Transaction} from './components/Transaction';
import {AddTransactions } from './components/AddTransactions';
import {GlobalProvider} from './components/GlobalState';
function App() {
  return (
    <div >
      <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <Transaction />
      <AddTransactions />
      </GlobalProvider>
    
    </div>
  );
}

export default App;
