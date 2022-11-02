import React from 'react';
import Transaction from './Transaction';

function TransactionContainer(props) {

    const tranactions = props.info.map((singleData)=>{
        return(
        <Transaction info={singleData}/>
        )
    })
    const uniqueAccountNumbers = props.info.map((singleTransaction)=>{
        return singleTransaction.Account}).filter((item,index,arr) => {
            return arr.indexOf(item) === index
            }).map((accountNumber)=>{
                return <button>{accountNumber} </button>
        } 
    )

    return (
        <div className='TContainer'>
            {uniqueAccountNumbers}
            <ul className='TList'>
                {props.info ? tranactions : null}
            </ul>
        </div>
    );
}

export default TransactionContainer;