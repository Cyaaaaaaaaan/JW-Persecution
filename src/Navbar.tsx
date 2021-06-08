import React from 'react'
import * as S from './styles'

import Logo from './logo.png'
import Burger from './Burger'

type Props = {
  children?: any
}

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt='Stephanie Madayag' />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}
