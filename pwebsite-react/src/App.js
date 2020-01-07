import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage.js'
import pdf from './components/Andrew_Hsu_Resume.pdf'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage/>
        <p>
          Andrew Hsu
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/andrew-hsu-297965b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href = {pdf}>Resume</a>
      </header>
    </div>
  );
}

export default App;
