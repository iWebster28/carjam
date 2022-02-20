import logo from './logo.svg';
import './App.css';

import MicInput from './components/MicInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          CarJam
        </h1>

        <h3 className="tagline">
          A car-jamming  music-playing  energy-level  sentimental-analysis  music-picker
        </h3>
        {/* <h4>Step 1. Click "Record" to allow CarJam to listen to your environment. Click again to stop.</h4>
        <h4>Step 2. Enjoy your spotify suggestion!</h4> */}
      </header>


      <br></br>
      <MicInput/>
      <br></br>
      <iframe id="player" src="https://open.spotify.com/embed/track/3wz6PzV1b7cEFPPSz76H8S" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
}

export default App;
