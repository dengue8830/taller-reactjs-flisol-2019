import React from 'react';
import { ListGroup, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  getGeneroLabel(genero) {
    switch (genero) {
      case 'h':
        return 'Hombres';
      case 'm':
        return 'Mujeres';
      default:
        return 'Otro'
    }
  }

  render() {
    return (
      <div>
        <DropdownButton title={this.getGeneroLabel(this.props.genero)} style={{ marginBottom: 30, textAlign: 'center' }}>
          <Dropdown.Item onClick={() => this.props.onChangeGenero('h')}>Hombres</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeGenero('m')}>Mujeres</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeGenero('o')}>Otro</Dropdown.Item>
        </DropdownButton>
        <InputRange
          style={{ height: '100px' }}
          maxValue={80}
          minValue={18}
          formatLabel={value => `${value} años`}
          value={this.props.rangoEdad}
          onChange={rangoEdad => this.props.onChangeRangoEdad(rangoEdad)}
          onChangeComplete={value => console.log(value)} />
      </div>
    )
  }
}

{/* <ListGroup variant="flush">
        <ListGroup.Item>
          <DropdownButton title={this.getGeneroLabel(this.state.genero)}>
            <Dropdown.Item onClick={() => this.setState({ genero: 'h' })}>Hombres</Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ genero: 'm' })}>Mujeres</Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ genero: 'o' })}>Otro</Dropdown.Item>
          </DropdownButton>
        </ListGroup.Item>
        <ListGroup.Item style={{ height: '80px' }}>
          <InputRange
            style={{ height: '100px' }}
            maxValue={80}
            minValue={18}
            formatLabel={value => `${value} años`}
            value={this.state.rangoEdad}
            onChange={value => this.setState({ rangoEdad: value })}
            onChangeComplete={value => console.log(value)} />
        </ListGroup.Item>
      </ListGroup> */}