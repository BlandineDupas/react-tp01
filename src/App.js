// import logo from './logo.svg';
import './App.css';
// import Student from './Student/Student';
import TrainingList from './TrainingList';

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
        <ul>
          <Student firstname="Aurélien" lastname="WILKOSZ"></Student>
          <Student firstname="Matthieu" lastname="KINT"></Student>
          <Student firstname="Guilhem" lastname="MANCHON"></Student>
          <Student firstname="Stéphane" lastname="MARIN"></Student>
        </ul> */}
        <TrainingList></TrainingList>
      {/* </header> */}
    </div>
  );
}

export default App;
