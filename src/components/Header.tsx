import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'

const H = () => {
  return (
    <Container fluid>
      <Header
        as='h1'
        content='The Default'
        inverted
        style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '3em'
        }}
      />
      <Header
        as='h2'
        content='Set and Forget Stock Preset Device'
        inverted
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          marginTop: '1.5em'
        }}
      />
      <Button primary size='huge'>
        Pre-Order Now
      </Button>
    </Container>
  )
}

export default H
