import React, { Component } from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react'

const SidebarMenu = () => {
  return (
    <div>
      <Menu attached='top' borderless>
        <Dropdown item icon='bars'>
          <Dropdown.Menu>
            <Dropdown.Item>Contact</Dropdown.Item>
            <Dropdown.Item>Pre-Order</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Button
            primary
            style={{ marginTop: 5, marginBottom: 5, marginRight: 5 }}
          >
            Pre-Order Now
          </Button>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default SidebarMenu
