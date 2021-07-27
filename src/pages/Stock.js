import React from 'react'

const Stock = (props) => {

    const symbol = props.match.params.symbol

    const loaded = () => {

        const getStock = () => {
            return props.stocks.filter((company)=>{
                 return company.symbol === symbol
             })[0]
         }

    return (<>
        <h1>{getStock().name}</h1>
        <h2>${getStock().lastPrice}</h2>
        <div className="high-low">
            <div className="high">
                <h3>High:</h3> 
                <h4>${getStock().high}</h4>
            </div>
            <div className="low">
                <h3>Low:</h3> 
                <h4>${getStock().low}</h4>
            </div>
        </div>
    </>)
    }

    const loading = () => {
        return <></>
    }

    return props.stocks ? loaded() : loading()
}

export default Stock