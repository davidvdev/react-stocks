import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Dashboard = (props) => {


    return (
        <div className="stocks-dash">
            <ul className='companies'>
                {props.stocks.map((company)=>{
                    const {name, symbol} = company
                    return (
                        <Link to={`/stocks/${symbol}`} key={symbol}>
                            <li>{name}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dashboard