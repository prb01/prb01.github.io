import logo from './logo.svg';
import bulbDark from "./assets/img/bulb-dark.png"
import bulbLight from "./assets/img/bulb-light2.png"
import profilePic from "./assets/img/profile.png"
import './App.css';

function App() {
  return (
    <>
      <div class="bulb-container">
        <img id="bulb-dark" src={bulbDark} alt="bla" />
        <img id="bulb-light" src={bulbLight} alt="bla" />
      </div>

      <div class="main-container">
        <nav class="main-nav">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>

        <main>
          <section class="content-container profile">
            <img src={profilePic} />
          </section>

          {/* <section class="content-container contact">
          <form action="">
            <div class="form-group">
              <label for="form-name">Name</label>
              <input type="text" name="" id="" />
            </div>

            <div class="form-group">
              <label for="form-email">Email</label>
              <input type="email" name="" id="" />
            </div>

            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button type="submit">Contact</button>
          </form>
        </section> */}
        </main>

        <footer>© 2022 Patrick Bergstroem</footer>
      </div>
    </>
  )
}

export default App;
