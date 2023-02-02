import React, {useState} from 'react';
import styled from "styled-components";
import Counter from "./Counter";

const AppCounter = () => {
    const [count, setCount] = useState(0);
    const handleClick= () => {
        setCount(prevState => prevState+1);
    };

    return (
        <Box>
            <Banner>Total Count: {count} {count > 10 ? "🎈" : "🧵"}</Banner>
            <Counter total={count} onclick={handleClick}/>
            <Counter total={count} onclick={handleClick}/>
        </Box>
    );
};
const Box = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Banner = styled.div`
  font-size: medium;
  font-weight: bold;
  margin-bottom: 10px;
`
export default AppCounter;
