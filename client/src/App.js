import './styles/main.css';
import BgClock from './components/BgClock';
import WidgetNav from './components/WidgetNav';
import MenuPanel from './components/MenuPanel';
import SettingsButton from './components/SettingsButton';
import { useState } from 'react';

function App() {
  const [activeWidget, setActiveWidget] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <WidgetNav setActiveWidget={setActiveWidget} />
      <MenuPanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="content">
        <BgClock />
        <SettingsButton onClick={() => setMenuOpen(true)} />
        {/*activeWidget === "todo" && <TodoWidget />*/}
        {/*activeWidget === "pomodoro" && <PomodoroWidget />*/}
        {/*activeWidget === "notes" && <NotesWidget />*/}
        {/*activeWidget === "timer" && <TimerWidget />*/}
        {/*activeWidget === "music" && <MusicWidget />*/}
      </div>
    </>
  );
};

export default App;