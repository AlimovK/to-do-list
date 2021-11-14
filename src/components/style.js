import styled from "styled-components";
import { ReactComponent as trash } from "../assets/icon/trash2.svg";

export const Container = styled.div`
  margin-top: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
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
  font-family: "Courier New", Courier, bold;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  max-width: 865px;
  min-width: 865px;
  box-sizing: border-box;
  border-radius: 3px;
  min-height: 600px;
  max-height: fit-content;
  background: #fff;
  padding: 25px;
  border: 1px solid #d1d1cd;
`;

export const Title = styled.div`
  font-size: 25px;
  margin-top: 50px;
  background: #fff;
  border: 1px solid #d1d1cd;
  max-width: 865px;
  min-width: 865px;
  border-radius: 3px;
  padding: 15px;
`;
Title.Value = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  font-size: 19px;
  border-bottom: 1px solid #d1d1cd;
  padding: 5px;
  margin-bottom: 10px;
  opacity: 0.6;
`;
Title.None = styled.div`
  font-size: 23px;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 450px;
`;

export const IconWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Trash = styled(trash)`
  width: 22px;
  height: 22px;
  fill: #e11300;
  border-width: 2px;
`;
