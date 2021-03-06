import styled from "styled-components";

export const Label = styled.label``;
export const Input = styled.input`
  border-color: var(--c-default);
  border-width: 2px;
  box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
  &:checked {
    border-color: var(--c-active);
  }
  &:not(:checked) {
    transition: box-shadow 0.25s;
    &:hover {
      border-width: 3px;
      border-color: var(--c-active);
    }
  }
`;
