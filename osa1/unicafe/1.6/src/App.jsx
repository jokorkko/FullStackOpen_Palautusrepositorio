import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text='Good' value={props.good} />
        <StatisticsLine text='Neutral' value={props.neutral} />
        <StatisticsLine text='Bad' value={props.bad} />
        <StatisticsLine text='All' value={total} />
        <StatisticsLine text='Average' value={average} />
        <StatisticsLine text='Positive' value={positive + ' %'} />
      </tbody>
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'></Button>
      <Button onClick={() => setBad(bad + 1)} text='bad'></Button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
