import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchfield, setRobots } from "../actions";

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
  const dispatch = useDispatch();
  const { searchfield } = useSelector((state) => state.searchRobots);
  const { robots, isPending } = useSelector((state) => state.requestRobots);

  const onSearchChange = (event) => {
    dispatch(setSearchfield(event.target.value));
  };

  const onRequestRobots = () => {
    dispatch(setRobots());
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  useEffect(() => {
    onRequestRobots();
  }, []);

  return isPending ? (
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
