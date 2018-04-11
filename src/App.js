import React, { Component } from 'react';
import './styles/css/styles.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img className="chuckBackground" src="./img/ChuckBG.jpg" />
          <nav className="navTop">
            <div>
              <a href="#">lien 1</a> / <a href="#">lien 2</a> / <a href="#">lien 3</a>
            </div>
          </nav>
          <img className="chuckSeal" src="./img/ChuckSeal.png" alt="Chuck's Seal of Approval" />
        </header>
        <nav className="navSub">
          <div>
            <ul>
              <li><a href="#">Chuck 01</a></li> 
              <li><a href="#">Chuck 02</a></li> 
              <li><a href="#">Chuck 03</a></li> 
              <li><a href="#">Chuck 04</a></li> 
              <li><a href="#">Chuck 05</a></li> 
            </ul>
          </div>
        </nav>
        <main>
          <div>
            <section>
              <h4>
                <i className="far fa-star"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <p>
                Duis quis felis a mauris congue iaculis. In commodo massa eget tortor dignissim, in dapibus quam auctor. Quisque arcu velit, rutrum nec sapien id, rutrum varius leo. Mauris ultricies, metus ac imperdiet faucibus, elit ipsum sodales nibh, et dapibus lectus sem id ante. Aliquam ultrices lorem ut felis semper consequat. Donec sodales volutpat elit eget vestibulum. Mauris eu facilisis felis. Morbi in mauris pellentesque, molestie sapien nec, volutpat quam. Mauris tincidunt, ipsum sed ultricies iaculis, quam ex facilisis justo, vitae viverra magna risus a quam. Nam tristique tortor at hendrerit porttitor. Mauris feugiat ultrices massa non rutrum. Vivamus orci nulla, molestie sed tellus quis, auctor pellentesque elit. Ut ornare malesuada mi ultrices vehicula. Morbi pulvinar nulla vestibulum turpis elementum, et ultrices nunc ultrices. Donec nec massa tortor.
              </p>
            </section>
            <section>
              <h4>
                <i className="far fa-star"></i> Donec in est non elit rutrum tempor cursus ac est.
              </h4>
              <p>Sed scelerisque nibh in iaculis cursus. Nam volutpat, ex non blandit rutrum, ex enim luctus leo, consectetur sollicitudin velit eros id libero. Etiam eget magna sed magna bibendum egestas varius molestie magna. Nullam eu metus non tellus maximus malesuada. Etiam nec iaculis elit, at fermentum dui. In tellus nulla, pretium eu eleifend ut, tristique sit amet sem. Duis interdum finibus dictum. Fusce dolor nisl, aliquet eget risus eu, ultrices auctor dolor. Sed sed bibendum purus, facilisis iaculis purus.</p>
              <p>Nulla orci ex, ultrices eu vulputate vitae, fringilla ut turpis. Nullam et orci urna. Pellentesque venenatis lobortis nunc ut interdum. Aliquam accumsan dolor quis mi suscipit dictum. Aliquam sollicitudin est vitae mi posuere, nec hendrerit nisl maximus. Nullam finibus libero quis ligula luctus, quis cursus sem vehicula. Integer pharetra libero in finibus dignissim. Mauris posuere lorem ac turpis luctus, non rutrum nisi viverra. Nunc faucibus molestie magna, id commodo orci porta eget. Suspendisse lobortis sapien id tortor laoreet.</p>
            </section>
          </div>
          <div>
            <aside>
              <div>
                <h6>Chuck is the best</h6>
                <img src="./img/CheckDemGunzOut.jpg" />
                <p>Proin varius neque mauris, a pretium diam tristique id. Vivamus mattis rutrum lectus, in volutpat urna ornare ut. Duis volutpat lorem ac elit feugiat, in lacinia nisl sodales. Praesent quam risus, sodales in felis vel, fringilla posuere erat. Maecenas ut accumsan enim. Nulla non rhoncus leo. Nulla lacinia pretium neque sed vulputate.</p>
              </div>
            </aside>
          </div>
        </main>
        <footer>
          <div>&copy; Copyright Chuck Norris 2015.</div>
          <div>
            Suivez-nous sur&nbsp; 
              <a href="#"><i className="fab fa-twitter-square custom-fa-1pt6"></i></a>&nbsp;<a href="#"><i className="fab fa-facebook-square custom-fa-1pt6"></i></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
