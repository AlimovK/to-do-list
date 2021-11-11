import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  TopSection,
  Title,
  Body,
  Trash,
  TrashsWrapper,
  Done,
  IconWrapper,
  Right,
} from "./style";

export const Todo = () => {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState([]);
  const onAdd = () => {
    setTodo((prev) => [...prev, { id: prev.length + 1, name: name }]);
    console.log(todo);
    setName("");
  };

  return (
    <Container>
      <TopSection>
        <Input
          placeholder="What needs to be done"
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={onAdd}>Add</Button>
      </TopSection>
      <Title>Todo List </Title>
      <Body>
        {todo.map((value) => {
          return (
            <Title.Value key={value.id}>
              {value.name}
              <Right>
                <IconWrapper>
                  <Done />
                </IconWrapper>

                <IconWrapper>
                  <Trash />
                </IconWrapper>
              </Right>
            </Title.Value>
          );
        })}
      </Body>
    </Container>
  );
};

export default Todo;
