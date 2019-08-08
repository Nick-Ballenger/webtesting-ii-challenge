import React from 'react'


const Dashboard = props =>{
    return(
        <div className='dashboard'>
            <button onClick={props.hit}>Hit</button>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.ball}>Ball</button>

    
            
        </div>
    )
}

export default Dashboard