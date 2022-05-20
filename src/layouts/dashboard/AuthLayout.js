// import node module libraries
import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from 'react-bootstrap'

const AuthLayout = (props) => {
  return (
    <div id='db-wrapper'>
      <Container className='d-flex flex-column'>
        <Outlet />
      </Container>
    </div>
  )
}
export default AuthLayout
