import styled from "styled-components";
import backGroundImg from "../assets/bg.jpg";
import ThemeImg from '../assets/Night.png'
import AccountLogotype from '../assets/AccountCircle.png'

export const Logo = styled.p`
  margin: 57px 0 0 150px;
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&display=swap');
font-family: 'Maven Pro', sans-serif;
  font-size: 40px;
  color: #3077C6;
`
export const Background = styled.header`
  margin: auto;
  background: url(${backGroundImg});
  width: 1440px;
  height: 900px;`

export const HeaderText = styled.p`
  margin: ${props => props.margin};
  border-bottom: 4px solid ;
  border-bottom-color: ${(props) => props.underlined==true ? "#F5BD41" :"transparent "};
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&family=Roboto&display=swap');
  font-family: 'Maven Pro', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: white;
`

export const Theme = styled.p`
  margin: 75px 39px 0 0;
    background:url(${ThemeImg});
  width: 30px;
  height: 30px;

`

export const AccountLogo = styled.p`
  margin: 71px 44px 0 0;
width: 40px;
  height: 40px;
  background:url(${AccountLogotype});

`

export const Flexx = styled.div`
display: flex;
    
`