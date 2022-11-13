import React, {useState} from 'react';
import styled from "styled-components";

const Kwadrat1 = styled.div`
  width:${(props) => props.size}px ;
  height:${(props) => props.size}px;
  background-color:blue;
`

const Kwadrat2 = styled.div`
  width:${(props) => props.size}px ;
  height:${(props) => props.size}px;
  background-color:red;
`

const STEP =5
const SIZE =150
const Square = () => {const [Size1,SetSize1] = useState(SIZE)
    const [Size2,SetSize2] = useState(SIZE)
    const handleClick1 = ()=>{
    if(Size2>0) {
        SetSize1(Size1 + STEP)
        SetSize2(Size2 - STEP)
    }

    }
    const handleClick2 = ()=>{
        if(Size1>0) {
            SetSize1(Size1 - STEP)
            SetSize2(Size2 + STEP)


    }
    }


    return (
        <div style={{display:"flex",width:"1000px"}}>
            <Kwadrat1 onClick={handleClick1} size={Size1}></Kwadrat1>
          <Kwadrat2 onClick={handleClick2} size={Size2}></Kwadrat2>
            {/*<div onClick={handleClick1}  id='first' style={{background:"green" , width:"100px",height:"100px"}}></div>*/}
            {/*<div onClick={handleClick2} id='second' style={{background:"blue", width:"100px",height:"100px"}}></div>*/}

        </div>
    );
};

export default Square;