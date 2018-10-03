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
        docHeight: document.body.getBoundingClientRect().height - window.innerHeight - 50
      })
    }, 1000)

    window.addEventListener('scroll', this.onScroll)
  }

  onScroll() {
    document.webkitExitFullscreen? document.webkitExitFullscreen(): document.exitFullscreen();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  
  render() {
    if(this.state.docHeight === 0) {
      return <div>Just a sec...</div>
    }
    return (
      <div className="App">
      <Paralaxer start={0} end={this.state.docHeight / 1.5}>
        <h1 
        style={{ transformOrigin: 'center'}}
        animation={{
          from:{ transform: 'rotate(360deg) skew(0deg) scale(1)'}, 
          to:{ transform: 'rotate(0deg) skew(0deg) scale(1)'},
        }}>
          <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(-200vh)'}, 
                100:{ transform: 'translateY(0vh)'},
              }}
              >P</span>
            <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(-150vh)'}, 
                100:{ transform: 'translateY(0vh)'},
              }}
              >a</span>
            <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(-100vh)'}, 
                100:{ transform: 'translateY(0vh)'},
              }}
              >r</span>
            <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(-70vh)'}, 
                100:{ transform: 'translateY(0vh)'},
              }}
              >a</span>
            <span 
            animation={{
              0:{ opacity: 1},
              50:{ opacity: 0.5}, 
              100:{ opacity: 1},
            }}
              >l</span>
            <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(70vh)'}, 
                100:{ transform: 'translateY(0vh)'},
              }}
              >a</span>
            <span 
             animation={{
              0:{ transform: 'translateY(0vh)'},
              50:{ transform: 'translateY(100vh)'}, 
              100:{ transform: 'translateY(0vh)'},
            }}
              >x</span>
            <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(150vh)'},
                100:{ transform: 'translateY(0vh)'},
              }}
              >e</span>
            <span 
              animation={{
                0:{ transform: 'translateY(0vh)'},
                50:{ transform: 'translateY(200vh)'}, 
                100:{ transform: 'translateY(0vh)'},
              }}
              >r</span>

          </h1>
        </Paralaxer>
      </div>
    );
  }
}

export default App;
