import './styles/main.css';
import BgClock from './components/BgClock';
import WidgetNav from './components/WidgetNav';
import MenuPanel from './components/MenuPanel';
import SettingsButton from './components/SettingsButton';
import { useState } from 'react';

function App() {
  const [isOpenWidgets, setOpenWidgets] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleOpenWidget = (id) => {
    setOpenWidgets((prev) => {
      prev.includes(id) ? prev : [...prev, id];
    });
  };

  const closeWidget = (id) => {
    setOpenWidgets((prev) => prev.filter((widgetId) => widgetId !== id));
  };
  
  return (
    <>
      <WidgetNav openWidget={handleOpenWidget} />
      <MenuPanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="content">
        <BgClock />
        <SettingsButton onClick={() => setMenuOpen(true)} />
        {/*isOpenWidgets.includes("todo") && <TodoWidget />*/}
        {/*isOpenWidgets.includes("pomodoro") && <PomodoroWidget />*/}
        {/*isOpenWidgets.includes("notes") && <NotesWidget />*/}
        {/*isOpenWidgets.includes("timer") && <TimerWidget />*/}
        {/*isOpenWidgets.includes("music") && <MusicWidget />*/}
      </div>
    </>
  );
};

export default App;