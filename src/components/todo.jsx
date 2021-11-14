import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Input,
  TopSection,
  Title,
  Body,
  Trash,
  IconWrapper,
} from "./style";

export const Todo = () => {
  const todoData = localStorage.getItem("todos");
  const [name, setName] = useState("");
  const [todo, setTodo] = useState(todoData ? JSON.parse(todoData) : []);
  const onAdd = () => {
    if (name.length > 1) {
      return (
        setTodo((prev) => [...prev, { id: prev.length + 1, name: name }]),
        setName("")
      );
    } else alert("pleace fill on input");
  };
  const onDelete = (id) => {
    let data = todo.filter((i) => i.id !== id);
    setTodo(data);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <Container>
      <TopSection>
        <Input
          value={name}
          placeholder="What needs to be done"
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={onAdd}>Add</Button>
      </TopSection>
      <Title>Todo List </Title>
      <Body>
        {todo.length < 1 ? (
          <Title.None> Add your todo</Title.None>
        ) : (
          todo.map(({ name, id }) => (
            <Title.Value key={id}>
              {name}
              <IconWrapper onClick={() => onDelete(id)}>
                <Trash />
              </IconWrapper>
            </Title.Value>
          ))
        )}
      </Body>
    </Container>
  );
};

export default Todo;
