"use client";

import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");

  const confirmAttendance = () => {
    if (!name) return;

   const phone = "529992807822";// Cambiar por el WhatsApp real

    const message = `Hola, soy ${name}. Confirmo mi asistencia a la celebración de los 50 años de Beatriz.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };


  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20 flex items-center justify-center">

      <div className="text-center max-w-xl">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Confirmación
        </p>

        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          ¿Nos acompañas?
        </h2>


        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <p className="text-gray-300 text-lg">
          Confirma tu asistencia para compartir contigo esta noche especial.
        </p>


        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-8 w-full px-5 py-3 rounded-full bg-transparent border border-[#D4AF37]/50 text-white text-center outline-none"
        />


        <button
          onClick={confirmAttendance}
          className="mt-6 px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#00120f] transition"
        >
          Confirmar asistencia
        </button>


      </div>

    </section>
  );
}