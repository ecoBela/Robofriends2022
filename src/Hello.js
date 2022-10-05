import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: red;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

class Hello extends Component {
  render() {
    return (
      <div>
        <Header>Hello world</Header>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;
