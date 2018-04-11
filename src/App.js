import React, { Component } from 'react';
import './styles/css/styles.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>lien 1 / lien 2 / lien 3</nav>
          <div>
            <img className="chuckSeal" src="./img/ChuckSeal.png" alt="Chuck's Seal of Approval!" />
          </div>
          <nav></nav>
        </header>
        <main>
          <div>
            <section>
              <h4>
                <i className="far fa-star"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
            </section>
            <section>
              <h4>
                <i className="far fa-star"></i> Donec in est non elit rutrum tempor cursus ac est.
              </h4>
            </section>
          </div>
          <aside>
            <p>Chuck is the best</p>
            <img className="chuckGuns" src="./img/CheckDemGunzOut.jpg" />
          </aside>
        </main>
        <footer>
          <div>&copy; Copyright Chuck Norris 2015.</div>
          <div>Suivez-nous sur <i class="fab fa-twitter-square"></i> <i class="fab fa-facebook-square"></i></div>
        </footer>
      </div>
    );
  }
}

export default App;
