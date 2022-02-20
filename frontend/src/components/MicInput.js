import React from 'react';
import { ReactMic } from 'react-mic';
import RecordButton from './RecordButton';
export default class MicInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  // startRecording = () => {
  //   this.setState({ record: true });
  // }
 
  // stopRecording = () => {
  //   this.setState({ record: false });
  // }

  toggleRecording = () => {
    this.setState({record: !this.state.record});
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    fetch_audio(recordedBlob);
  }
 
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          channelCount={1}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        {/* <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button> */}
        {/* <button onClick={this.toggleRecording} type="button">Start</button> */}
        <br></br>
        <RecordButton clickFn={this.toggleRecording}/>
      </div>
    );
  }
}

const fetch_audio = (recordedBlob) => {
  let formData = new FormData();
  // console.log(recordedBlob.blobURL.replace('blob:', ''));

  // Fetch audio data from react-mic
  fetch(recordedBlob.blobURL)
    .then(r => r.blob())
    .then(audioBlob => {
      formData.append('file', audioBlob, `recording-${recordedBlob.blobURL.split('/')[3]}.webm`);
      console.log(audioBlob);
    
      const options = {
        method: 'POST',
        mode: 'cors',
        body: formData,
      };

      // Upload audio to backend 
      fetch(`http://localhost:3001/audioUpload`, options)
          .then(res => res.json())
          .then(data => {
              console.log(data.spotify_url);
              let player = document.getElementById('player');
              player.src = data.spotify_url;
          })
          .catch((err) => ('Error occurred', err)
      )
    });
}