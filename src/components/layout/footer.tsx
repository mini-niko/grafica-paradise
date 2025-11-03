import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-16">
          <div className="text-center md:text-start">
            <h3 className="text-lg font-semibold">Gráfica Paradise</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Do esboço à realidade - criamos o que você imagina
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://wa.me/seunumero"
                  className="hover:underline"
                >
                  WhatsApp: (XX) XXXX-XXXX
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contato@graficaparadise.com.br"
                  className="hover:underline"
                >
                  Email: contato@graficaparadise.com.br
                </Link>
              </li>
              <li>Xanxerê - SC</li>
            </ul>
          </div>
          <div className="text-center md:text-end">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/catalogo" className="hover:underline">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="hover:underline">
                  Orçamento
                </Link>
              </li>
              <li>
                <Link href="/pedidos" className="hover:underline">
                  Acompanhar Pedido
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Gráfica Paradise. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
