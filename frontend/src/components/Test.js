import React from 'react';

const Test = () => {
    return (
        <div>
        <h1>Hello, this is a test component.</h1>
        { fetch_test() }
        </div>
    );
}

const fetch_test = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      };
      let value;
    fetch(`http://localhost:3001/`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data) // log data in browser inspect menu
        });
}

export default Test;