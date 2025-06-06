import { useState, useEffect } from "react";

const BgClock = () => {
    const [time, setTime] = useState(getCurrentTime());

    function getCurrentTime() {
        const now = new Date();
        let hour = now.getHours();
        let mins = now.getMinutes();
        return `${hour}:${mins < 10 ? "0" + mins : mins}`;
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div id="bg-clock">{time}</div>;

};

export default BgClock;
