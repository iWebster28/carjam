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
          Tagline
        </h3>
      </header>


      <RecordButton />
      
      <Test />
      <MicInput/>

    </div>
  );
}

export default App;

//<img src={logo} className="App-microphone" alt="microphone" />