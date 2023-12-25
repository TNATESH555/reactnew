import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Travel Explorer</h1>
      </header>

      <nav className="App-nav">
        <a href="#">Home</a>
        <a href="#">Destinations</a>
        <a href="#">Packages</a>
        <a href="#">Contact</a>
      </nav>

      <section className="App-section">
        <h2>Featured Destinations</h2>
        <div className="App-destination">
          <div className="App-destination-card">
            <img src="fairypools.jpg" alt="Destination 1" />
            <h3>Beautiful Beach Paradise</h3>
            <p>Explore the stunning beaches and relax in paradise.</p>
          </div>

          <div className="App-destination-card">
            <img src='./images/myImage.jpg' alt="Destination 2" />
            <h3>Mountain Retreat</h3>
            <p>Escape to the mountains for a peaceful retreat.</p>
          </div>

          <div className="App-destination-card">
            <img src="destination3.jpg" alt="Destination 3" />
            <h3>City Adventure</h3>
            <p>Experience the excitement of a bustling city.</p>
          </div>
        </div>
      </section>

      <footer className="App-footer">
        &copy; 2023 Travel Explorer. All rights reserved.
      </footer>
    </div>
  );
  }
export default App;
