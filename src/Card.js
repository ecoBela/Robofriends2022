import React from "react";
import styled, { keyframes } from "styled-components";

const CardAnimation = keyframes`
from {background-color: lightskyblue;}
  to {background-color: lightseagreen;}
`;
const Container = styled.div`
  animation: ${CardAnimation} 3s infinite;
  padding: 10px;
  margin: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Card = () => {
  return (
    <div>
      <Container>
        <Image src="https://robohash.org/test" alt="profile"></Image>
        <div>
          <h2>Jane Doe</h2>
          <p>jane.doe@gmail.com</p>
        </div>
      </Container>
    </div>
  );
};

export default Card;
