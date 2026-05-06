import stickyNote from '../assets/sticky-note.png';
import stopwatch from '../assets/stopwatch.png';
import pomodoro from '../assets/pomodoro-technique.png';
import todo from '../assets/checklist.png';
import music from '../assets/spotify.png';

const widgets = [
    {id: "notes", icon: stickyNote, alt: "Notes"},
    {id: "timer", icon: stopwatch, alt: "Timer"},
    {id: "pomodoro", icon: pomodoro, alt: "Pomodoro"},
    {id: "todo", icon: todo, alt: "To-do"},
    {id: "music", icon: music, alt: "Music"},
];
const WidgetNav = ({ setActiveWidget }) => {
    return(
       <nav>
        <table className="tabs">
            <tbody>
                {widgets.map(({ id, icon, alt}) => (
                    <tr key={id}>
                        <th className="tab">
                            <button 
                                className="open-widget"
                                onClick={() => setActiveWidget(id)}
                                title={alt}
                            >
                                <img className="icons" src={icon} alt={alt}/>
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
       </nav>
    );
};

export default WidgetNav;