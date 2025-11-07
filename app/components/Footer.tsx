export default function Footer() {
  return (
    <footer className="bg-fortis-darkblue text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h4 className="font-bold text-lg">Fortis Refeições</h4>
          <p className="text-sm mt-2">Refeições coletivas com sabor caseiro e confiança.</p>
        </div>

        <div className="text-sm">
          <p>Endereço: Rua Exemplo, 123 - Porto Alegre</p>
          <p>Telefone: (51) 9XXXX-XXXX</p>
          <p className="mt-2">© {new Date().getFullYear()} Fortis Refeições</p>
        </div>
      </div>
    </footer>
  );
}
