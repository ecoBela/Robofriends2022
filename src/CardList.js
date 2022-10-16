import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = ({ robots }) => {
  return (
    <div>
      <Container>
        {robots.map((robot) => {
          return <Card key={robot.id} name={robot.name} email={robot.email} />;
        })}
      </Container>
    </div>
  );
};

export default CardList;
