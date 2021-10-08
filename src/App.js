import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './style.css'

import SideBloc from './components/SideBloc'
import Video from './components/Video'
import Echap from './components/Echap'
import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer'

import Starting from './pages/Starting'
import About from './pages/About'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


import HomeCss from './assets/images/homecss.png'
import HomeJsx from './assets/images/homejsx.png'

function App() {
    return (
        <Router>
            <div className="main">
                <SideBloc isActive={true} image={HomeCss} />
                <Header />
                <div className="containerApp">
                    <Video spd={1} />
                    <div className="body">
                        <div className="content">
                            <Switch>
                                <Route exact path="/portfolioMatthias/">
                                    <Starting />
                                </Route>
                                <Route path="/about">
                                    <Echap />
                                    <About />
                                    <Menu />
                                </Route>
                                <Route path="/skill">
                                    <Echap />  
                                    <Skill />
                                    <Menu />
                                </Route>
                                <Route path="/portfolioPage">
                                    <Echap />
                                    <Portfolio />
                                    <Menu />
                                </Route>
                                <Route path="/contact">
                                    <Echap />
                                    <Contact />
                                    <Menu />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                <SideBloc isActive={true} image={HomeJsx} />
                <Footer />
            </div>
        </Router>
    )
}

export default App