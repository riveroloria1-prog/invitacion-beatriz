export default function DressCode() {
  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20 flex items-center justify-center">

      <div className="text-center max-w-2xl">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Código de vestimenta
        </p>

        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          Elegante
        </h2>

        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Te invitamos a acompañarnos con un estilo elegante
          para celebrar esta noche tan especial.
        </p>

        <p className="mt-8 text-[#D4AF37] text-2xl font-serif">
          Formal
        </p>

        <p className="mt-6 text-gray-300 text-base">
          Favor de evitar el color verde, y dorado, ya que será parte de la
          decoración especial del evento.
        </p>

      </div>

    </section>
  );
}