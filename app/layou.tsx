// src/app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Fortis Refeições",
  description: "Refeições coletivas com sabor caseiro — Fortis Refeições"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
