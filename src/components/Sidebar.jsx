import React from 'react';
import { Filters } from './Filters';
import { Navbar } from 'react-bootstrap';

export class Sidebar extends React.Component {
  render() {
    return (
      <div style={{ width: 240, height: '100vh', backgroundColor: '#F5F7FA' }}>
        <Navbar style={{ backgroundColor: '#FF246B' }}>
          <Navbar.Brand style={{ color: 'white' }}>Busca tu match</Navbar.Brand>
        </Navbar>
        <SidebarContent>
          <Filters
            genero={this.props.genero}
            rangoEdad={this.props.rangoEdad}
            onChangeGenero={this.props.onChangeGenero}
            onChangeRangoEdad={this.props.onChangeRangoEdad}
          />
        </SidebarContent>
      </div>
    )
  }
}

function SidebarContent(props) {
  return (
    <div style={{ margin: 30, flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center' }}>{props.children}</div>
  );
}