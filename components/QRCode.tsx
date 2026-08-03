"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {

  const locationUrl =
  "https://maps.app.goo.gl/Lywr1dKUnQbqDHr6A";


  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20 flex items-center justify-center">

      <div className="text-center">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Ubicación
        </p>


        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          Escanea el mapa
        </h2>


        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <div className="bg-white p-6 rounded-2xl inline-block">

          <QRCodeSVG
            value={locationUrl}
            size={220}
          />

        </div>


        <p className="mt-8 text-gray-300">
          Escanea el código para abrir la ubicación del evento.
        </p>


      </div>

    </section>
  );
}