const App=()=>{
   const course={
   name: 'Half Stack application development',
   parts: [
     {
       name: 'Fundamentals of React',
       exercises: 10
     },
     {
       name: 'Using props to pass data',
       exercises: 7
     },
     {
       name: 'State of a component',
       exercises: 14
     }
   ]
}
   return (
      <>
     <Header name={course} />
     <Content part1={course} />
     <Total one={course} />
     </>
   )
 }

const Header=(props)=>{
   console.log(props)
   return(
      <>
       <h2>{props.name.name}</h2>
       </>
   )
}

const Content=(props)=>{
   console.log(props)
   return(
      <>
       <Part name={props.part1.parts[0].name} exercise={props.part1.parts[0].exercises}/>
       <Part name={props.part1.parts[1].name} exercise={props.part1.parts[1].exercises}/>
       <Part name={props.part1.parts[2].name} exercise={props.part1.parts[2].exercises}/>
      </>
   )
}

const Part=(props)=>{
    console.log(props)
    return(
      <>
       <h2>{props.name}</h2>
       <p>{props.exercise}</p>
       </>
    )
}
const Total=(props)=>{
    return(
       <p>Total={props.one.parts[0].exercises+props.one.parts[1].exercises+props.one.parts[2].exercises}</p>
    )
}
 
 export default App
