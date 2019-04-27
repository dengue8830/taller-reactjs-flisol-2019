import React from 'react';
import { apis } from './utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [
        {
          nombre: 'Pepe Grillo',
          genero: 'h',
          edad: 18,
          fotoUrl: 'https://i.imgur.com/clq9lGO.jpg'
        },
        {
          nombre: 'Marta Peralta',
          genero: 'm',
          edad: 30,
          fotoUrl: 'https://i.imgur.com/R89Zajr.jpg'
        }
      ],
      rangoEdad: {
        min: 18,
        max: 80
      },
      genero: 'o'
    };
    this.onChangeGenero = this.onChangeGenero.bind(this);
    // this.onChangeRangoEdad = this.onChangeRangoEdad.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     personas: apis.getPersonas()
  //   });
  // }

  onChangeGenero(genero) {
    this.setState({ genero });
  }

  // onChangeRangoEdad(rangoEdad) {
  //   this.setState({ rangoEdad });
  // }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1, width: 240, height: '100vh', backgroundColor: '#F5F7FA' }}>
          <label
            style={{
              backgroundColor: '#FF246B',
              height: 40,
              width: '100%',
              color: 'white',
              fontWeight: 400,
              fontSize: 20,
              alignSelf: 'center',
              padding: 5
            }}
          >
            Busca tu match
          </label>
          <div style={{ padding: 5 }}>
            <select value={this.state.genero} onChange={(e) => this.onChangeGenero(e.currentTarget.value)}>
              <option value='m'>Mujeres</option>
              <option value='h'>Hombres</option>
              <option value='o'>Lo que venga</option>
            </select>
          </div>
        </div>
        <div style={{ flex: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            this.state.personas.filter(persona => persona.genero === this.state.genero || this.state.genero === 'o').map((persona, i) => {
              return (
                <div key={i} style={{ width: 300, height: 400, boxShadow: '2px 2px 10px 3px rgba(0, 0, 0, 0.2)', borderRadius: 15, position: 'absolute' }}>
                  <img src={persona.fotoUrl} style={{ width: 300, height: 400, borderRadius: 15 }} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
