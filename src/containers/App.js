import React, { useEffect, useState } from "react";
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

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Container>
        <h1>Robofriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </Container>
    </div>
  );
};

export default App;
