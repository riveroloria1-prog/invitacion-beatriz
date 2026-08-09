
export default function Timeline() {
  const events = [
    {
      time: "7:00 PM",
      title: "Recepción",
      description: "Bienvenida a todos nuestros invitados.",
    },
    {
      time: "8:00 PM",
      title: "Entrada",
      description:
        "Coronación, brindis, baile sorpresa, bachata y vals.",
    },
    {
      time: "9:30 PM",
      title: "Comida",
      description: "Momento para disfrutar juntos de la cena.",
    },
    {
      time: "10:30 PM",
      title: "Baile moderno",
      description: "Una presentación especial llena de ritmo y energía.",
    },
    {
      time: "11:30 PM",
      title: "Fiesta",
      description: "¡A bailar y disfrutar de la noche!",
    },
    {
      time: "12:30 AM",
      title: "Show sorpresa",
      description: "Una sorpresa especial para cerrar la noche.",
    },
  ];

  return (
    <section className="w-full px-6 py-20 flex justify-center bg-[#00120f]">
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
            <div
              key={`${event.time}-${event.title}`}
              className="text-center"
            >
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

