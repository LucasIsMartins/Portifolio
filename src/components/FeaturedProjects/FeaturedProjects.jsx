import React, {useRef} from "react";
import * as S from './FeaturedProjects.styles'
import {FiGithub, FiExternalLink} from 'react-icons/fi'
import Fade from 'react-reveal/Fade';

export default function FeaturedProjects() {
    const refFeaturedProjects = useRef(null)
    return(
        <S.Featured id="FeaturedProjectsID" ref={refFeaturedProjects}>
            <Fade left>
                <S.Title>
                    <p>Algumas coisas que eu fiz</p>
                </S.Title>
            </Fade>
            <Fade bottom>


                <S.List>
                    <S.Project>
                        <img src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png" alt="" />
                        <S.ContainerDescription>
                            <S.Details>
                                <span>Destaque</span>
                                <h3>Projeto Pica Sônica</h3>
                                <S.Description>
                                    <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </S.Description>
                                <S.Technologies>
                                    <li>React</li>
                                    <li>Styled Components</li>
                                    <li>MySql</li>
                                    <li>Heroku</li>
                                </S.Technologies>
                                <S.Redirect>
                                    <div>
                                        <FiGithub/>
                                    </div>
                                    <div>
                                        <FiExternalLink/>
                                    </div>
                                    
                                </S.Redirect>
                            </S.Details>
                        </S.ContainerDescription>
                    </S.Project>
                    <S.Project>
                        <img src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png" alt="" />
                        <S.ContainerDescription>
                            <S.Details>
                                <span>Destaque</span>
                                <h3>Projeto Botijão Cromado</h3>
                                <S.Description>
                                    <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </S.Description>
                                <S.Technologies>
                                    <li>React</li>
                                    <li>Styled Components</li>
                                    <li>MySql</li>
                                    <li>Heroku</li>
                                </S.Technologies>
                                <S.Redirect>
                                    <div>
                                        <FiGithub/>
                                    </div>
                                    <div>
                                        <FiExternalLink/>
                                    </div>
                                    
                                </S.Redirect>
                            </S.Details>
                        </S.ContainerDescription>
                    </S.Project>
                </S.List>
            </Fade>
        </S.Featured>
    )
}