import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container} from "./HotelsWrapperStyle";

// const HotelCard = styled.div`
//   background-image: url(${(props) => props.src});
// width: 296px;
//   height: 296px;
// `
const List = styled.div`
  width: 1440px;
  margin: auto;
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Card = styled.div`
background-image: url(${props => props.url});
  width: 296px;
  height: 296px;
  margin-bottom: 130px; 
  h2{
    @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&family=Roboto&display=swap');
    font-family: 'Maven Pro', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color:#3077C6 ;
    margin-top:320px;
  }
  p{
    @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&family=Roboto&display=swap');
    font-family: 'Maven Pro', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #BFBFBF;

  }
`


const HotelsWrapper = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fe-student-api.herokuapp.com/api/hotels')
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })

    }, [])


    return (
      <List>
          {data.map((val)=>{
            return(  <Card key={val.id} url={val.imageUrl}>
                <h2>{val.name}</h2>
                <p>{val.city}, {val.country}</p>
            </Card>)
          })}
      </List>


        );
}

export default HotelsWrapper;