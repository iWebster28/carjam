import logo from './logo.svg';
import './App.css';

import Test from './components/Test';
import RecordButton from './components/RecordButton';
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
      </header>

      <br></br>
      <MicInput/>

      <iframe src="https://open.spotify.com/embed/track/3wz6PzV1b7cEFPPSz76H8S" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
}

export default App;

//<img src={logo} className="App-microphone" alt="microphone" />