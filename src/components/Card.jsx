import React from 'react';
import { Card as BCard } from 'react-bootstrap';

export class Card extends React.Component {
  render() {
    return (
      // position: 'absolute', top: 0, right: 0, left: 0, bottom: 0
      <BCard style={{ width: '18rem', position: 'absolute', top: 0, boxShadow: '2px 2px 10px 3px rgba(0, 0, 0, 0.2)' }}>
        <BCard.Img variant="top" src={this.props.fotoUrl} style={{ height: '400px' }} />
        <BCard.Body>
          <BCard.Title>{this.props.nombre}</BCard.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
        </BCard.Body>
      </BCard>
    )
  }
}