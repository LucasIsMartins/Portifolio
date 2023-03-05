import React, {useRef} from "react";
import * as S from './OtherProjects.styles'
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import Fade from 'react-reveal/Fade';

export default function MoreProjects() {
    const refOtherProjects = useRef(null)
    return(
        <S.Projects id="OthersProjectsID" ref={refOtherProjects}>
            <Fade left>
                <S.Title>
                    <p>Outros projetos</p>
                </S.Title>
            </Fade>
            <Fade bottom>
                <S.List>
                    
                    <S.Card>
                        <S.CardIcon>
                            <FiFolder/>
                            <div>
                                <FiExternalLink/>
                            </div>
                        </S.CardIcon>
                        <S.CardTItle>
                            <h3>Calculadora</h3>
                        </S.CardTItle>
                        <S.CardDescription>
                            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                        </S.CardDescription>

                        <S.Techs>
                            <li>React</li>
                            <li>Java Script</li>
                            <li>Styled Components</li>
                        </S.Techs>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>
                            <FiFolder/>
                            <div>
                                <FiExternalLink/>
                            </div>
                        </S.CardIcon>
                        <S.CardTItle>
                            <h3>Calculadora</h3>
                        </S.CardTItle>
                        <S.CardDescription>
                            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                        </S.CardDescription>

                        <S.Techs>
                            <li>React</li>
                            <li>Java Script</li>
                            <li>Styled Components</li>
                        </S.Techs>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>
                            <FiFolder/>
                            <div>
                                <FiExternalLink/>
                            </div>
                        </S.CardIcon>
                        <S.CardTItle>
                            <h3>Calculadora</h3>
                        </S.CardTItle>
                        <S.CardDescription>
                            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                        </S.CardDescription>

                        <S.Techs>
                            <li>React</li>
                            <li>Java Script</li>
                            <li>Styled Components</li>
                        </S.Techs>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>
                            <FiFolder/>
                            <div>
                                <FiExternalLink/>
                            </div>
                        </S.CardIcon>
                        <S.CardTItle>
                            <h3>Calculadora</h3>
                        </S.CardTItle>
                        <S.CardDescription>
                            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                        </S.CardDescription>

                        <S.Techs>
                            <li>React</li>
                            <li>Java Script</li>
                            <li>Styled Components</li>
                        </S.Techs>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>
                            <FiFolder/>
                            <div>
                                <FiExternalLink/>
                            </div>
                        </S.CardIcon>
                        <S.CardTItle>
                            <h3>Calculadora</h3>
                        </S.CardTItle>
                        <S.CardDescription>
                            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                        </S.CardDescription>

                        <S.Techs>
                            <li>React</li>
                            <li>Java Script</li>
                            <li>Styled Components</li>
                        </S.Techs>
                    </S.Card>
                </S.List>
            </Fade>
        </S.Projects>
    )
}