import React, { Component } from 'react';
import Login from '../containers/Login';

const Home = () => {
  return (
    <main className="Home">
      <header className="welcome">
        <h1>Welcome to Yield Protect</h1>
        <p>Please login to access your dashboard</p>
      </header>
      <section className="login">
        <Login />
      </section>
    </main>
  )
}

export default Home;