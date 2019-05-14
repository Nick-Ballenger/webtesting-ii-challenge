import React from 'react'
import 'react-testing-library/cleanup-after-each';


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