import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return(
    <header>
      <h1>{course}</h1>
    </header>
  )
}

const Part = ({name,exercices}) =>{
  return(
    <p>
      {name} {exercices}
    </p>
  ) 
}

const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {
  return(
    <div>
      <Part name={part1} exercices={exercises1}/>
      <Part name={part2} exercices={exercises2}/>
      <Part name={part3} exercices={exercises3}/>
    </div>
  )
}

const Total = ({exercises1,exercises2,exercises3}) => {
  const total = exercises1+exercises2+exercises3
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total 
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))