import {useState} from 'react'

const Condition=(props)=>{
     if(props.total==0){
        return(<p>No feedback given</p>)
     }
     return(
    <>
    <h1>Statistics</h1>
    <table>
    <tbody>
    <Statistics text='Good' value={props.good}/>   
    <Statistics text='Bad' value={props.bad}/> 
    <Statistics text='Neutral' value={props.neutral}/>  
    <Statistics text='Total' value={props.total}/>   
    <Statistics text='Average' value={props.average}/>   
    <Statistics text='Positive' value={props.positive}/> 
    </tbody> 
    </table>
    </>   
     )
}
const Button=(props)=>{
    return(
    <button onClick={props.onClick}>{props.text}</button>)
}
const Statistics=(props)=>{
    return(   
      <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
      </> 
   )
}
const App=()=>{
    const [good,setGood]=useState(0)
    const [neutral,setNeutral]=useState(0)
    const [bad,setBad]=useState(0)
    const total=good+bad+neutral
    const positive=(good/total)*100
    const average=(good-bad)/total
    return(
        <>
    <h1>Give Feedback</h1>
    <Button onClick={()=> setGood(good+1)} text='Good'/>
    <Button onClick={()=> setNeutral(neutral+1)} text='Neutral'/>
    <Button onClick={()=> setBad(bad+1)} text='Bad'/>
    <Condition total={total} good={good} bad={bad} neutral={neutral} positive={positive} average={average}/>
    </>  
    )
}

export default App