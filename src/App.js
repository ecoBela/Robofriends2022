import React, { Component } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div>
        <Container>
          {" "}
          <h1>Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />;
        </Container>
      </div>
    );
  }
}

export default App;
