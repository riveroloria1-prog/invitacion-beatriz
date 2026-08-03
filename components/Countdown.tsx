"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2027-01-23T19:00:00");

  const [mounted, setMounted] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    setMounted(true);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;


      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }


      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (distance / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (distance / 1000) % 60
        ),
      });
    };


    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);

  }, []);


  const items = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];


  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20 flex items-center justify-center">

      <div className="text-center">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Falta poco
        </p>


        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          23 Enero 2027
        </h2>


        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {items.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >

              <div className="text-[#D4AF37] text-4xl md:text-5xl font-bold">
                {mounted ? item.value : 0}
              </div>

              <div className="mt-2 text-gray-300 uppercase tracking-widest text-sm">
                {item.label}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}