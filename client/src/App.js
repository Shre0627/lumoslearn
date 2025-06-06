import './styles/App.css';
import BgClock from './components/BgClock';
import WidgetNav from './components/WidgetNav';
import MenuPanel from './components/MenuPanel';
import SettingsButton from './components/SettingsButton';
import { useState } from 'react';

function App() {
  const [activeWidget, setActiveWidget] = useState(null);
  return (
    <>
      <WidgetNav setActiveWidget={setActiveWidget} />
      <div className="content">
        <BgClock />
      </div>
    </>
  );
};

export default App;