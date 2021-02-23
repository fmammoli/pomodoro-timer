import styled from "styled-components";

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: tomato;
  border-color: tomato;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  cursor: pointer;
  //border-radius: 50%;
  &:focus {
    outline: 0;
  }
`;

export default Button;
