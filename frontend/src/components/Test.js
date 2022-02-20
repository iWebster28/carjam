import React from 'react';

const Test = () => {
    return (
        <div>
        <h1>Hello, this is a test component.</h1>
        <button onClick={() => fetch_test()}>Test button</button>
        <h1 id="song"></h1>
        </div>
    );
}

const fetch_test = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:3001/`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data) // log data in browser inspect menu
            let song = document.getElementById('song');
            song.innerHTML = data.current_song;
        });
}

export default Test;