"use client";

import Image from "next/image";

export default function Clients() {
  const clients = [
    "/Logo_Cultura.png",
    "/Logo_Dauge.png",
    "/Logo_DHL.png",
    "/Logo_Prumo.png",
    "/Logo_Record.png",
    "/Logo_SBT.png",
    "/Logo_Sesc.png",
    "/Logo_TVE.png",
  ];

  const duplicated = [...clients, ...clients];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-14">Clientes atendidos</h3>

        <div className="overflow-hidden relative w-full">
          <div
            className="flex gap-20"
            style={{
              width: "fit-content",
              animation: "slide 25s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {duplicated.map((src, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center 
                  h-28 w-48 
                  shrink-0 
                  rounded-lg
                "
              >
                <Image
                  src={src}
                  alt={`Cliente ${i}`}
                  width={200}
                  height={200}
                  className="object-contain max-h-24"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS da animação */}
        <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
