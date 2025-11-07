import React from "react";

export default function Services() {
  const cards = [
    { title: "Refeições coletivas", desc: "Cozinha in loco ou preparo industrial conforme necessidade." },
    { title: "Alimentação transportada", desc: "Produção em cozinha industrial e entrega segura até sua empresa." },
    { title: "Montagem de cozinhas", desc: "Projeto e montagem de refeitório interno para funcionários." },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="p-6 border rounded-xl shadow-sm text-left">
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
