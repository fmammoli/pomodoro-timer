import styled from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: tomato;
  border-color: tomato;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  margin: 1px;
  //border-radius: 50%;
  &:focus {
    outline: 0;
  }
`;

export default Button;