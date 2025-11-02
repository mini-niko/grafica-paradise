import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CatalogoPage() {
  const produtos = [
    {
      categoria: "Impressão Digital",
      items: [
        {
          nome: "Cartão de Visita",
          descricao: "Impressão 4x4 em papel couché 300g",
          preco: "a partir de R$ 50,00",
        },
        {
          nome: "Folder",
          descricao: "Impressão 4x4 em papel couché 115g",
          preco: "a partir de R$ 150,00",
        },
        {
          nome: "Panfleto",
          descricao: "Impressão 4x4 em papel couché 90g",
          preco: "a partir de R$ 100,00",
        },
      ],
    },
    {
      categoria: "Personalização",
      items: [
        {
          nome: "Canecas Personalizadas",
          descricao: "Canecas de cerâmica com impressão personalizada",
          preco: "a partir de R$ 25,00",
        },
        {
          nome: "Camisetas",
          descricao: "Impressão digital em tecido",
          preco: "a partir de R$ 45,00",
        },
      ],
    },
    {
      categoria: "Corte a Laser",
      items: [
        {
          nome: "Convites Especiais",
          descricao: "Corte a laser em papel especial",
          preco: "a partir de R$ 80,00",
        },
        {
          nome: "Caixas Personalizadas",
          descricao: "Corte e montagem personalizada",
          preco: "a partir de R$ 120,00",
        },
      ],
    },
    {
      categoria: "Linha Ecológica",
      items: [
        {
          nome: "Sacolas Ecológicas",
          descricao: "Papel kraft ou tecido reciclado",
          preco: "a partir de R$ 30,00",
        },
        {
          nome: "Cartões em Papel Semente",
          descricao: "Papel que pode ser plantado",
          preco: "a partir de R$ 70,00",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Catálogo de Produtos</h1>
        <p className="text-muted-foreground">
          Conheça nossa linha completa de produtos e serviços
        </p>
      </div>

      <div className="space-y-10">
        {produtos.map((categoria) => (
          <section key={categoria.categoria}>
            <h2 className="mb-6 text-2xl font-semibold">
              {categoria.categoria}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoria.items.map((produto) => (
                <Card key={produto.nome}>
                  <CardHeader>
                    <CardTitle>{produto.nome}</CardTitle>
                    <CardDescription>{produto.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-primary">
                      {produto.preco}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link
                        href={`/orcamento?produto=${encodeURIComponent(
                          produto.nome
                        )}`}
                      >
                        Solicitar Orçamento
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
