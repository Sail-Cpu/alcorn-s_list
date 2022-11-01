import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameListProvider } from './context/request/GameList';
import App from './App';
import './style/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GameListProvider>
    <App />
  </GameListProvider>
);