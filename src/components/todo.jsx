import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Container,
  Input,
  TopSection,
  Title,
  Body,
  Trash,
  Done,
  IconWrapper,
  Right,
} from "./style";

export const Todo = () => {
  const todoData = localStorage.getItem("todos");
  const [name, setName] = useState("");
  const [todo, setTodo] = useState(todoData ? JSON.parse(todoData) : []);
  const onAdd = () => {
    setTodo((prev) => [...prev, { id: prev.length + 1, name: name }]);
    setName("");
  };
  const onDelete = (value) => {
    let data = todo.filter((i) => i.id !== value.id);
    setTodo(data);
    console.log(data);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <Container>
      <TopSection>
        <Input
          // value={name}
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
                {/* <IconWrapper>
                  <Done />
                </IconWrapper> */}
                <IconWrapper onClick={() => onDelete(value)}>
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
