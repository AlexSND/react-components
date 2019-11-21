import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ButtonPage from './pages/ButtonPage'
import Nav from './components/Nav/Nav'

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
        </Switch>
      </Main>
    </BrowserRouter>
  )
}

export default App
