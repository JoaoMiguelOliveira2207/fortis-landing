import Image from "next/image";

export default function Clients() {
  const clients = ["/Logotipo_do_SBT.svg.png", "/Escudo_do_Sport_Club_Internacional.svg", "/logoSesc.png"];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Clientes atendidos</h3>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {clients.map((c, i) => (
            <div key={i} className="w-36 opacity-90">
              <Image src={c} alt={`Cliente ${i}`} width={200} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
