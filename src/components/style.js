import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  /* background: #fff; */
`;
export const TopSection = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 600px;
  height: 35px;
  padding: 10px;
  font-size: 18px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #d1d1cd;
`;
export const Button = styled.div`
  width: 250px;
  height: 35px;
  display: flex;
  font-family: "Courier New", Courier, monospace;
  align-items: center;
  justify-content: center;
  background: #174aff;
  color: white;
  font-size: 19px;
  outline: none;
  border: none;
  border-radius: 6px;
  margin-left: 15px;
  cursor: pointer;
`;

export const Body = styled.div`
  font-family: "Courier New", Courier,  bold;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 865px;
  min-width: 865px;
  margin-top: 50px;
  border-radius: 3px;
  min-height: fit-content;
  background: #fff;
  border: 1px solid #d1d1cd;
`;

export const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid #d1d1cd;
  padding: 15px;
`;
