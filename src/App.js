import React, { Component } from 'react';
import Paralaxer from 'paralaxer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {docHeight: 0}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        docHeight: document.body.getBoundingClientRect().height - window.innerHeight
      })
    }, 1000)
  }
  render() {
    if(this.state.docHeight === 0) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
      <Paralaxer start={0} end={this.state.docHeight}>
        <h1 
        style={{ transformOrigin: 'top left'}}
        animation={{
          from:{ transform: 'rotate(-360deg) skew(30deg) scale(3)'}, 
          to:{ transform: 'rotate(0deg) skew(0deg) scale(1)'},
        }}>
        <Paralaxer start={0} end={this.state.docHeight}>
          <span 
              animation={{
                from:{ transform: 'translateY(-200vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >P</span>
            <span 
              animation={{
                from:{ transform: 'translateY(-150vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >a</span>
            <span 
              animation={{
                from:{ transform: 'translateY(-100vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >r</span>
            <span 
              animation={{
                from:{ transform: 'translateY(-70vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >a</span>
            <span 
            animation={{
              from:{ opacity: 0.5}, 
              to:{ opacity: 1},
            }}
              >l</span>
            <span 
              animation={{
                from:{ transform: 'translateY(70vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >a</span>
            <span 
             animation={{
              from:{ transform: 'translateY(100vh)'}, 
              to:{ transform: 'translateY(0)'},
            }}
              >x</span>
            <span 
              animation={{
                from:{ transform: 'translateY(150vh)'},
                to:{ transform: 'translateY(0)'},
              }}
              >e</span>
            <span 
              animation={{
                from:{ transform: 'translateY(200vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >r</span>

            </Paralaxer>
          </h1>
        </Paralaxer>
      </div>
    );
  }
}

export default App;