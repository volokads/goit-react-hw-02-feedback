import './App.css';
import { Component } from 'react'
import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './components/Statistics'
import { Notification} from './components/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) => {
    this.setState((prev) => {
    return { [e.target.name]: prev[e.target.name] +=1 };
  })
  }
  countTotalFeedback = () => {
    return  this.state.good + this.state.bad+ this.state.neutral
  }
  countPositiveFeedbackPercentage = () => {
    return   (this.state.good /  this.countTotalFeedback() * 100).toFixed(2)
  }

  render() {
    const { good, bad, neutral, } = this.state
    const { handleClick, countTotalFeedback, countPositiveFeedbackPercentage} = this
      return (
        <div className="App">
          <Section title = 'Please leave feedback'>
            <FeedbackOptions options={this.state} onLeaveFeedback={handleClick} />
          </Section>
          <Section title="Statistic">
            {countTotalFeedback() === 0 ?
              (<Notification message='There is no feedback' />) :
              (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />)}
          </Section>
        </div>
        )
    }
}

export default App;
