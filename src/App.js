import React, { useState} from 'react';
import './App.css';
export default function App () {

  const [filter,setFilter] = useState(transactions)
  
  return (
    <div className="App">
        <button onClick={()=> setFilter(transactions)}>
          All
        </button>
        <button value={1000} onClick={(e)=> setFilter(transactions.filter(singleT=>{return singleT.Account === e.target.value}))}>
          1000
        </button>
        <button value={1001} onClick={(e)=> setFilter(transactions.filter(singleT=>{return singleT.Account === e.target.value}))}>
          1001
        </button>
        <button value={1002} onClick={(e)=> setFilter(transactions.filter(singleT=>{return singleT.Account === e.target.value}))}>
          1002
        </button>
        <ul>
          {filter.map( n =>(
            <li className='transaction' >
            Account: {n.Account} Timestamp: {n.Timestamp} Action: {n.Action} Description: {n.Description} From: {n.From} To: {n.To} 
            </li>
          ))}
        </ul>
        
    </div>
  );
}

export const transactions =[
  {
    "Account": "1001",
    "Timestamp": "01/01/2020",
    "Action": "Credit",
    "Amount": "$100,000",
    "Description": "rent",
    "From": "John Smith",
    "To": "Doe "
  },
  {
    "Account": "1000",
    "Timestamp": "01/01/2021",
    "Action": "Debit",
    "Amount": "$2,500.00",
    "Description": "refund",
    "From": "Autozone",
    "To": "John Smith"
  },
  {
    "Account": "1002",
    "Timestamp": "01/02/22",
    "Action": "Credit",
    "Amount": "100.00",
    "Description": "Birthday",
    "From": "Dad",
    "To": "Mom"
  },
  {
    "Account": "1002",
    "Timestamp": "06/25/22",
    "Action": "Credit",
    "Amount": "70.00",
    "Description": "Gas",
    "From": "Me",
    "To": "Shell"
  },
  {
    "Account": "1001",
    "Timestamp": "06/15/22",
    "Action": "Debit",
    "Amount": "100.00",
    "Description": "",
    "From": "Dad",
    "To": "Mom"
  },
  {
    "Account": "1002",
    "Timestamp": "10/22/22",
    "Action": "Credit",
    "Amount": "96.00",
    "Description": "Drinks",
    "From": "Me",
    "To": "Joe's Pub"
  },
  {
    "Account": "1001",
    "Timestamp": "01/01/22",
    "Action": "Credit",
    "Amount": "100.00",
    "Description": "Birthday",
    "From": "Me",
    "To": "Mom"
  },
  {
    "Account": "1000",
    "Timestamp": "09/09/21",
    "Action": "Credit",
    "Amount": "73.43",
    "Description": "Dinner",
    "From": "Me",
    "To": "Nippon Cha"
  },
  {
    "Account": "1000",
    "Timestamp": "01/02/21",
    "Action": "Credit",
    "Amount": "100.00",
    "Description": "Birthday",
    "From": "Dad",
    "To": "Mom"
  }
]
