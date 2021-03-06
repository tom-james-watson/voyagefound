import React, { Component } from 'react';

class RandomButton extends Component {
  render() {
    return (
      <div className='RandomButton' onClick={this.props.newRandom}>
        <div className='expandedShow'>Show me a</div>
        <div className='button'>
          <div>
            Random
          </div>
        </div>
        <div className='expandedShow'>
          place <span className='inTheWorld'>in the world</span>
        </div>
      </div>
    );
  }
}

export default RandomButton
