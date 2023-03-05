import React from "react";
import * as S from './SocialMediaLink.styles'
import {FiGithub} from 'react-icons/fi'
import {TiSocialLinkedin} from 'react-icons/ti'
import {FaInstagram, FaCodepen} from 'react-icons/fa'
import Slide from 'react-reveal/Slide';


export default function SocialMideaLink () {


    return(
        <Slide left>
            <S.List>
            
                <S.Line></S.Line>
                <S.Icon>
                    <FiGithub/>
                </S.Icon>
                <S.SLine></S.SLine>
                <S.Icon>
                    <TiSocialLinkedin/>
                </S.Icon>
                <S.SLine></S.SLine>
                <S.Icon>
                    <FaInstagram/>
                </S.Icon>
                <S.SLine></S.SLine>
                <S.Icon>
                    <FaCodepen/>
                </S.Icon>
           
            </S.List>
        </Slide>
    )
} 