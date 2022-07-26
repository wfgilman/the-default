import React, { ReactNode, Component } from 'react'
import Header from './Header'
import {
  Segment,
  Menu,
  Container,
  Button
} from 'semantic-ui-react'

interface Props {
  children?: ReactNode
}

class DesktopContainer extends Component<Props> {
  render() {
    return (
      <Container fluid>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed='top'
            size='large'
          >
            <Container>
              <Menu.Item as='a'>Learn More</Menu.Item>
              <Menu.Item as='a'>Pre-Order</Menu.Item>
            </Container>
          </Menu>
          <Header />
        </Segment>
        {this.props.children}
      </Container>
    )
  }
}

export default DesktopContainer
