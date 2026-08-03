export default function Timeline() {
  const events = [
    {
      time: "7:00 PM",
      title: "Recepción",
      description: "Inicio de la celebración y bienvenida a los invitados.",
    },
    {
      time: "8:30 PM",
      title: "Presentacion",
      description: "Una entrada especial para compartir con familia y amigos.",
    },
    {
      time: "9:00 PM",
      title: "Brindis",
      description: "Momento para celebrar los 50 años de Beatriz.",
    },
    {
      time: "1:00 AM",
      title: "Cierre",
      description: "Final de esta gran celebracion.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20 flex items-center justify-center">

      <div className="w-full max-w-3xl text-center">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Programa
        </p>

        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          La celebración
        </h2>

        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <div className="space-y-12">

          {events.map((event) => (
            <div key={event.time} className="text-center">

              <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
                {event.time}
              </p>

              <h3 className="mt-3 text-white text-3xl font-serif">
                {event.title}
              </h3>

              <p className="mt-3 text-gray-300 text-lg">
                {event.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}