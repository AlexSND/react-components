import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ButtonPage from './pages/ButtonPage'
import ButtonGroupPage from './pages/ButtonGroupPage'
import Nav from './components/Nav/Nav'
import Icon from './components/Icon/Icon'
import IconPage from './pages/IconPage'

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Nav/>
      </Header>
      <Main>
        <Switch>
          <Route path='/button'>
            <ButtonPage/>
          </Route>
          <Route path='/button-group'>
            <ButtonGroupPage/>
          </Route>
          <Route path='/icon'>
            <IconPage/>
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  )
}

export default App
