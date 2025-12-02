import Image from "next/image";

export default function TransportedKitchen() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGEM */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Cozinha-Industrial.jpg" // troque pela imagem real
              alt="Cozinha industrial central"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Cozinha Transportada</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Preparação em cozinha industrial central, sendo transportada com
            segurança e qualidade até a sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
