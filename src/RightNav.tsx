import React from 'react'
import * as S from './styles'

import Logo from './logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom'

type Props = {
  open: boolean
}

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={'Stephanie Madayag'} />

        <NavLink
          to='/home'
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffc106',
          }}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to='/history'
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffc106',
          }}
        >
          <li>HISTORY</li>
        </NavLink>
        <NavLink
          to='/now'
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffc106',
          }}
        >
          <li>NOW</li>
        </NavLink>
        <NavLink
          to='/genocide'
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffc106',
          }}
        >
          <li>8 STAGES OF GENOCIDE</li>
        </NavLink>
        <NavLink
          to='/story'
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffc106',
          }}
        >
          <li>STORY</li>
        </NavLink>
        <NavLink
          to='/prevention'
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffc106',
          }}
        >
          <li>PREVENTION</li>
        </NavLink>
      </S.Ul>

      <Switch>
        <Route exact path='https://github.com/Cyaaaaaaaaan/JW-Persecution/blob/main/public/index.html'>
          Menu 1
        </Route>
        <Route exact path='menu2'>
          Menu 2
        </Route>

        <Redirect to='/menu1' />
      </Switch>
    </Router>
  )
}

export default RightNav
