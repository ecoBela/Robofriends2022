import React from "react";
import styled, { keyframes } from "styled-components";

const CardAnimation = keyframes`
from {background-color: lightskyblue;}
  to {background-color: lightseagreen;}
`;
const Container = styled.div`
  animation: ${CardAnimation} 5s infinite;
  padding: 10px;
  margin: 10px;
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;

const Card = ({ name, email, id }) => {
  return (
    <div>
      <Container>
        <Image src={`https://robohash.org/${id}`} alt="profile"></Image>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </Container>
    </div>
  );
};

export default Card;
