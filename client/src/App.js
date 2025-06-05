import logo from './logo.svg';
import './App.css';
import './components/BgClock';
import './components/MenuPanel';
import './components/SettingsButton';
import './components/WidgetNav';
import './components/WidgetWrapper';
import './widgets/MusicWidget';
import './widgets/NoteWidget';
import './widgets/PomodoroWidget';
import './widgets/TimerWidget';
import './widgets/TodoWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
