import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot) => {
    return <Card name={robot.name} email={robot.email} id={robot.id} />;
  });

  return (
    <div>
      <Container>{cardComponent}</Container>
    </div>
  );
};

export default CardList;
