import "../styles/menupanel.css"
import settings from "../assets/setting.png"

const SettingsButton = ({ onClick }) => {
  return (
    <button id="dashboard-settings" title="Themes and Settings" onClick={onClick}>
      <img src={settings} alt="Settings" />
    </button>
  );
};


export default SettingsButton;