import React, {useState} from 'react';
import styled from "styled-components";

const AppXY = () => {
    const [position, setPosition] = useState({x:0,y:0});

    return (
        <Box onPointerMove={(event) => {
            setPosition({x:event.clientX, y:event.clientY});
        }}>
            <Pointer style={{transform:`translate(${position.x}px,${position.y}px)`}}></Pointer>
        </Box>
    );
};

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`
const Pointer = styled.div`
  background-color: pink;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -15px;
  left: -15px;
`
export default AppXY;
