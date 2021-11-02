import "./App.css";
import React, { Component } from "react";
import SectionTitle from "./components/SectionTitle/SectionTitle";

import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getState() {
    return this.state;
  }
  handleClick = ({ target: { name } }) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedback() {
    let result = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return isNaN(result) ? "0%" : `${result}%`;
  }
  render() {
    return (
      <div className="App container">
        <SectionTitle title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </SectionTitle>

        {this.countTotalFeedback() ? (
          <SectionTitle title={"Statistics"}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              Percentage={this.countPositiveFeedback()}
            />
          </SectionTitle>
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </div>
    );
  }
}

export default App;
