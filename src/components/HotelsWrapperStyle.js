import styled from "styled-components";

export const Container = styled.div`
width: 1440px;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const HotelCard = styled.div`
  background-image: url(${(props) => props.src});
width: 296px;
  height: 296px;
`