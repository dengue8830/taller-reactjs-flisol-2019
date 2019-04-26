import React from 'react'

// import Buttons from './Buttons'
import { CardDeck } from './CardDeck';
import { Card } from './Card';
import { apis } from '../utils/api';

const IMAGE_URLS = ["https://i.imgur.com/OMDehEK.png", "https://i.imgur.com/clq9lGO.jpg", "https://i.imgur.com/AJQrMa3.jpg", "https://i.imgur.com/R89Zajr.jpg", "https://i.imgur.com/2kwby38.jpg"]

export class Matcher extends React.Component {
  constructor() {
    super()
    this.state = {
      personas: []
    }
  }

  componentDidMount() {
    this.getDatos();
  }

  componentDidUpdate() {
    if (this.state.personas.length === 0) this.setState({ personas: IMAGE_URLS })
  }

  getDatos() {
    this.setState({
      personas: apis.getPersonas()
    });
  }

  shiftCard() {
    let personas = this.state.personas.slice()
    personas.splice(0, 1)
    this.setState({ personas })
  }

  render() {
    return (
      <div style={{flex: 6}}>
        {/* <CardDeck cards={this.state.personas} shiftCard={this.shiftCard.bind(this)} /> */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {this.state.personas.map((persona, idx) => {
            return <Card nombre={persona.nombre} fotoUrl={persona.fotoUrl} />;
          })}
        </div>
        {/* <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} /> */}
      </div>
    )
  }
}