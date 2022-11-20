import React from 'react';
import styled from "styled-components";

const Table = styled.table`
width: 700px;
border: 1px black solid;
border-spacing: 0px;
    td{
      border: 1px solid black;
  
  }
  
`

const AddCarForm = styled.form`
width: 300px;
  

`

const StyledInput  = styled.input`

width: 200px;
  height: 40px;
  outline: none;
`




const Car = () => {

    return (
        <div style={{display:"flex"}}>
<Table>
<tr>
    <td>Марка Автомобиля</td>
    <td>Год выпуска</td>
    <td>Цена</td>
</tr>


</Table>


        </div>
    );
};

export default Car;