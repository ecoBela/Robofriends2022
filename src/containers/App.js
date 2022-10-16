import React, { Component } from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-image: linear-gradient(
    to right,
    rgba(55, 100, 200, 255),
    rgba(100, 200, 80, 255)
  );
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <Container>
          <h1>Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </Container>
      </div>
    );
  }
}

export default App;
