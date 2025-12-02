import Image from "next/image";

export default function KitchenAssembly() {
  return (
    <section className="py-20 bg-fortis-lightblue/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Montagem de Cozinhas</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Montagem de cozinhas conforme a sua necessidade.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Cozinha-Industrial.jpg" // troque pela imagem real
              alt="Montagem de cozinhas industriais"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
