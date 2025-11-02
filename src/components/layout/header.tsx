import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Catálogo", href: "/catalogo" },
    { title: "Orçamento", href: "/orcamento" },
    { title: "Acompanhar Pedido", href: "/pedidos" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex mx-16 h-16 items-center">
        <div className="hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Gráfica Paradise</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <Button asChild className="w-full md:w-auto">
            <Link href="/orcamento">Fazer Orçamento</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
