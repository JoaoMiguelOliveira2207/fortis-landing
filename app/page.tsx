import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Differentials from "@/app/components/Diferentials";
import Clients from "@/app/components/Client";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="sobre" className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Sobre nós</h2>
            <p className="text-gray-700">
              Mais de 20 anos de experiência, histórico com DHL, Prumo Engenharia, SBT e outros.
              Empresa familiar com atendimento direto do dono e foco em comida de qualidade.
            </p>
          </div>
        </section>

        <Services />
        <Differentials />
        <Clients />

        <section className="py-16 bg-fortis-lightblue/5 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Sua empresa precisa de um refeitório?</h2>
            <p className="mb-6">Nós levamos até você — fale com o Júlio agora mesmo.</p>
            <a
              href="https://wa.me/55SEUNUMERO"
              className="btn-primary bg-fortis-orange text-white"
              target="_blank"
              rel="noreferrer"
            >
              Fale com Júlio
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
