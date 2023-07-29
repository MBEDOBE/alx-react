import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Notifications />
      <div className="App-body">
        <Header />
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
