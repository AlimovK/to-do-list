import React from "react";
import { Button, Container, Input, List, Title, Wrapper } from "./style";

export const Todo = () => {
  return (
    <Container>
      <Title>To do List</Title>
      <List>
        <Wrapper>
          <Input />
          <Button>Add</Button>
        </Wrapper>
      </List>
    </Container>
  );
};

export default Todo;
