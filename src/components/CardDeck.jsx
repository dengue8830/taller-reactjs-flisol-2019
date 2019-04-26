import React, { Component } from 'react';

import { AnimatedCard } from './AnimatedCard';

export class CardDeck extends Component {
  render() {
    let { cards } = this.props
    return (
      <div className="CardDeck">
        {cards && cards.slice(0).reverse().map((card, idx) => {
          return <AnimatedCard imgUrl={card.fotoUrl} idx={idx} shiftCard={this.props.shiftCard} key={idx} />
        })}
      </div>
    );
  }
}