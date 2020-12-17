import { Nav } from '@fluentui/react';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Estudiante } from '../../Containers/estudiante';
import { Curso } from '../../Containers/curso';
import { Header } from '../Header';

import './container.css'

export const ContainerMain = () => {

    const handleNavClick = () => {

    }

    return (
        <div className="container">

            <Header />
            <Nav
                onLinkClick={handleNavClick}
                selectedKey="key3"
                ariaLabel="Nav basic example"
                styles={{
                    root: {
                        width: 210,
                        height: '100%',
                        boxSizing: 'border-box',
                        border: '1px solid #eee',
                        overflowY: 'auto',
                    },
                }}
                groups={[{
                    links: [{
                        name: 'Estudiantes',
                        url: '/estudiantes',
                        icon: 'UserFollowed',
                        key: 'estudiantesNav',
                    },
                    {
                        name:'Cursos',
                        url:'/cursos',
                        icon:'News',
                        key:'CursosNav',
                    },]
                }]}
            />

            <Router>
                <Switch>
                    <Route path="/containers/estudiantes" component={Estudiante} />
                    <Route exact path="/cursos" component={Curso}/>
                </Switch>
            </Router>

        </div>
    )
}


