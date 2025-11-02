import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Palette, Scissors, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Impressão digital",
      description:
        "Alta qualidade em diversos materiais, com tecnologia de ponta para garantir cores vibrantes e acabamento perfeito.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Personalização",
      description:
        "Designs únicos e personalizados para sua marca, transformando suas ideias em realidade.",
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Corte a laser e acabamentos",
      description:
        "Precisão e qualidade garantida em cada detalhe, com acabamentos profissionais.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Linha ecológica",
      description:
        "Produtos sustentáveis e eco-friendly, contribuindo para um futuro mais verde.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background px-4 text-center">
        <div className="absolute inset-0 grid place-items-center opacity-30">
          <div className="h-[500px] w-[500px] rotate-45 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Do esboço à realidade
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Criamos o que você imagina com impressões de alta qualidade
          </p>
          <p className="mb-8 text-muted-foreground">
            Suprir as diversas necessidades de material gráfico, com qualidade e
            rapidez em Xanxerê.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/orcamento">
                Fazer orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/catalogo">Ver catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground">
            Soluções completas para suas necessidades gráficas
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="mb-2 font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container mx-auto py-16 px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Pronto para começar?</h2>
            <p className="mb-8 text-muted-foreground">
              Entre em contato conosco ou faça seu orçamento online agora mesmo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="default">
                <Link href="https://wa.me/seunumero">WhatsApp</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:contato@graficaparadise.com.br">Email</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
