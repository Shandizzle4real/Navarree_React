import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const launch = new Date("August 1, 2026").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launch - now;

      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {["days","hours","minutes","seconds"].map((unit) => (
        <div className="time-box" key={unit}>
          <span>{time[unit] || 0}</span>
          <small>{unit}</small>
        </div>
      ))}
    </div>
  );
}