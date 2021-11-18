// import logo from './logo.svg';
import './App.css';
import Address from './Comp/Profile/Address';
import FullName from './Comp/Profile/FullName';
import ProfilePhoto from './Comp/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>


    </div>
  );
}

export default App;
