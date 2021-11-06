import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;
export const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 50px;
  color: #fdbb2d;
  font-family: "Mochiy Pop One", sans-serif;
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  min-height: 700px;
  max-height: fit-content;
  color: black;
  background: #e7e6e6;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
  height: 50px;
`;
export const Input = styled.input`
  width: 60%;
  background: transparent;
  font-size: 22px;
  height: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 2px solid #fdbb2d;
`;
export const Button = styled.div`
  color: #fdbb2d;
  border: 2px solid #fdbb2d;
  background: #e7e6e6;
  font-family: "Mochiy Pop One", sans-serif;
  cursor: pointer;
  border-radius: 6px;
  font-size: 18px;
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #fdbb2d;
    color: #e7e6e6;
  }
`;
