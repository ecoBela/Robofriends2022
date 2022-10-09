import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
`;

const Searchbox = ({ searchChange }) => {
  return (
    <div>
      <Container>
        <input
          type="search"
          placeholder="Search Robots"
          onChange={searchChange}
        />
      </Container>
    </div>
  );
};

export default Searchbox;
