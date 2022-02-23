import logo from './assets/logo.png';
import './App.css';

import MicInput from './components/MicInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3 className="tagline">
          A  car-jamming  music-playing  energy-level  sentimental-analysis  music-picker
        </h3>
        <h4>Click "Record". Click again to stop.</h4>
      </header>


      <br></br>
      <MicInput/>
      <br></br>
      <iframe id="player" src="https://open.spotify.com/embed/track/3wz6PzV1b7cEFPPSz76H8S" width="640" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        
      <div className="footer">
        <p>Built by Tong Yin Han! Jonathan Yan! David Song! Ian Webster!</p>
        <a href="https://github.com/iWebster28/carjam">Git Repo</a>
      </div>
    </div>
  );
}

export default App;
