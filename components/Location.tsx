export default function Location() {
  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20 flex items-center justify-center">

      <div className="text-center max-w-2xl">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Ubicación
        </p>

        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          Recepción
        </h2>

        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <p className="text-gray-300 text-lg leading-relaxed">
          Te esperamos para celebrar este momento tan especial.
        </p>


        <p className="mt-8 text-[#D4AF37] text-xl font-serif">
          23 de enero de 2027
        </p>


        <p className="mt-3 text-gray-300">
          7:00 PM
        </p>


        <a
          href="https://maps.app.goo.gl/Lywr1dKUnQbqDHr6A"
          target="_blank"
          className="inline-block mt-8 px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#00120f] transition"
        >
          Ver ubicación
        </a>


      </div>

    </section>
  );
}