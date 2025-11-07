import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    // b-gradient to b-linear
    <section className="w-full bg-linear-to-b from-fortis-lightblue/90 to-fortis-darkblue/90 text-white">
      <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Refeições Coletivas de <span className="text-fortis-beige">Força Superior!</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl">
            Fornecemos refeições de qualidade excepcional para empresas, obras e instituições.
            Tradição, confiabilidade e sabor em cada refeição.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noreferrer"
              className="btn-primary bg-fortis-orange text-white"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#sobre"
              className="btn-primary border border-white/20 text-white bg-white/10 hover:bg-white/20"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
            <Image src="/fortis-logo-azul.jpeg" alt="Refeições Fortis" width={700} height={500}  />
          </div>
        </div>
      </div>
    </section>
  );
}
