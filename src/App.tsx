import React from 'react';
import './App.css';
import {w3cwebsocket as websocket } from 'websocket';

const serverUrl = 'ws://localhost:8999/';
const client = new websocket(serverUrl);

const App = () => {
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
   client.onopen =
      () => {
        console.log('Websocket connected!')
      };
    client.onmessage = (message) =>{
      setMessage(message.data.toString());
    }
  });

  return (
    <div className="App">
      Websocket Client 
      <p>Message is {message}</p>
    </div>
  );
}

export default App;
