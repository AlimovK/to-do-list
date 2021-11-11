import React from "react";
import {
  Button,
  Container,
  Input,
  TopSection,
  Title,
  Wrapper,
  Body,
} from "./style";

export const Todo = () => {
  return (
    <Container>
      <TopSection>
        <Input placeholder="What needs to be done" />
        <Button>Add</Button>
      </TopSection>
      <Body>
        <Title>Todo List</Title>
      </Body>
    </Container>
  );
};

export default Todo;
