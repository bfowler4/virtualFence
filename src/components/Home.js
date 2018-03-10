import React, { Component } from 'react';
import Login from '../containers/Login';

const Home = () => {
  return (
    <div className="Home">
      <main>
        <header className="welcome">
          <h1>Welcome to Yield Protect</h1>
          <p>Please login to access your dashboard</p>
        </header>
        <section className="login">
          <Login />
        </section>
      </main>
    </div>
  )
}

export default Home;