import React from 'react';
import { Matcher } from './components/Matcher';
import { Sidebar } from './components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { apis } from './utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [],
      rangoEdad: {
        min: 18,
        max: 80
      },
      genero: 'o'
    };
    this.onChangeGenero = this.onChangeGenero.bind(this);
    this.onChangeRangoEdad = this.onChangeRangoEdad.bind(this);
  }

  componentDidMount() {
    this.setState({
      personas: apis.getPersonas()
    });
  }

  onChangeGenero(genero) {
    this.setState({ genero });
  }

  onChangeRangoEdad(rangoEdad) {
    this.setState({ rangoEdad });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar
          genero={this.state.genero}
          rangoEdad={this.state.rangoEdad}
          onChangeGenero={this.onChangeGenero}
          onChangeRangoEdad={this.onChangeRangoEdad}
        />
        <Matcher />
      </div>
    )
  }
}

{/* <div className="App">
        <Container>
          <Row>
            <Col md={4}>
              <Sidebar />
            </Col>
            <Col md={8}>
              <Matcher />
            </Col>
          </Row>
        </Container>
      </div> */}
export default App;
