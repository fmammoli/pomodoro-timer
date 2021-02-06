import styled from 'styled-components';

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: tomato;
  border-color: tomato;
  color: #fff;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  margin: 5px;
  border-radius: 50%;
  &:focus {
    outline: 0;
  }
`;

export default Button;