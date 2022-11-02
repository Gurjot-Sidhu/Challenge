import React from 'react';

function Navigation(props) {

    const uniqueAccountNumbers = props.info.map((singleTransaction)=>{
        return singleTransaction.Account}).filter((item,index,arr) => {
            return arr.indexOf(item) === index
            }).map((accountNumber)=>{
                return <button>{accountNumber} </button>
        } 
    )


    return (
        <div className='NavBar'>
           {uniqueAccountNumbers}
        </div>
    );
}

export default Navigation;