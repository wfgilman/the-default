import React, { ReactNode } from 'react'

import { Container, Image } from 'semantic-ui-react'
import logo from '../logo.svg'

interface Props {
  children?: ReactNode
}

const Heading = ({ children }: Props) => {
  return (
    <Container>
      <Image src={logo} size='large' centered />
      {children}
    </Container>
  )
}

export default Heading
