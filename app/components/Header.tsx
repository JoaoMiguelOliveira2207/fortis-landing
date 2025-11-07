import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image src="" alt="Fortis" width={140} height={48} />
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noreferrer"
            className="btn-primary bg-fortis-orange text-white hover:brightness-95"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
