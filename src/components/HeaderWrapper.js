import React, {useState} from 'react';
import styled from "styled-components";
import backGroundImg from '../assets/bg.jpg'

import {Background,Logo,HeaderText,Theme,AccountLogo,Flexx} from './HeaderStyles'



const HeaderWrapper = () => {

    const [underline, setUnderline] = useState(true)

const HandleClick = (e)=>{

            setUnderline(!underline)

}

    return (

        <Background>

<Flexx>
<Logo>TripHouse</Logo>

            <HeaderText onClick={HandleClick}   underlined = {underline} margin={'77px 24px 0 668px'}>Stays</HeaderText>
            <HeaderText onClick={HandleClick}   underlined = {!underline}  margin={'77px 53px 0 24px'}>Attractions</HeaderText>
            <Theme></Theme>
            <AccountLogo></AccountLogo>
        </Flexx>
</Background>
    );
};

export default HeaderWrapper;