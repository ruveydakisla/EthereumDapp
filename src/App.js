import React, { useEffect, useState } from 'react';
import { KiralamaKontrati } from './abi/abi';
import Web3 from 'web3';
import './App.css';
import AddTenant from './pages/AddTenant';
import AddProperty from './pages/AddProperty';
import CreateRental from './pages/CreateRental';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
} from 'react-router-dom';
// Access our wallet inside of our dapp
var web3 = new Web3(Web3.givenProvider);
// change provider
// Contract address of the deployed smart contract
const contractAddress = '0x60cFD3b6feeee893FF02c5c5B2fAAF2e8Df9c56d';
const storageContract = new web3.eth.Contract(
  KiralamaKontrati,
  contractAddress
);

function App() {
  useEffect(() => {
    web3 = new Web3(Web3.givenProvider);
  });
  // Hold variables that will interact with our contract and frontend
  const [number, setUint] = useState(0);
  const [getNumber, setGet] = useState('0');

  const numberSet = async (t) => {
    t.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    // Get permission to access user funds to pay for gas fees
    const gas = await storageContract.methods.set(number).estimateGas();
    const post = await storageContract.methods.set(number).send({
      from: account,
      gas,
    });
  };

  const numberGet = async (t) => {
    t.preventDefault();
    const post = await storageContract.methods.get().call();
    setGet(post);
  };

  return (
    <div className="main">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Add-Tenant" element={<AddTenant />} />
            <Route path="/Add-Property" element={<AddProperty />} />
            <Route path="/Create-Rental" element={<CreateRental />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
