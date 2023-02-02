import React, {useState} from 'react';
import styled from "styled-components";

const Counter = ({total, onclick}) => {
    const [count, setCount] = useState(0);

    const handle = () => {
        setCount((prevState)=>
        prevState + 1 )
    }
    return (
        <Box>
            <Number>{count}/{total}</Number>
            <Btn onClick={()=>{
                onclick();
                handle();
            }}>Add +</Btn>
        </Box>
    );
};

const Box = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  border: darkcyan 1px solid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
const Number = styled.span`
  color: black;
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 20px;
`
const Btn = styled.button`
  outline: none;
  width: 70px;
  height: 20px;
`
export default Counter;
