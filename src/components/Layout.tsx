import React, { ReactNode } from 'react'
import { Container } from 'semantic-ui-react'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container fluid>
      {children}
    </Container>
  )
}

export default Layout
