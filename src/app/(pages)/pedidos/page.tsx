"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pedidoAtual = {
  numero: "12345",
  dataEnvio: "01/11/2025",
  produto: "Cartão de Visita",
  quantidade: "1000 unidades",
  status: "Em transporte",
  etapas: [
    {
      nome: "Pedido Recebido",
      descricao: "Pedido registrado no sistema",
      data: "01/11/2025",
      concluido: true,
    },
    {
      nome: "Fabricando",
      descricao: "Em produção",
      data: "02/11/2025",
      concluido: true,
    },
    {
      nome: "Em transporte",
      descricao: "Aguardando envio",
      data: "02/11/2025",
      concluido: false,
    },
    {
      nome: "Entregue",
      descricao: "Pedido finalizado",
      data: "",
      concluido: false,
    },
  ],
};

export default function PedidosPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Acompanhe seu Pedido</h1>
        <p className="text-muted-foreground">
          Verifique o status atual do seu pedido
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pedido #{pedidoAtual.numero}</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-2 text-sm">
              <div className="grid grid-cols-2">
                <dt className="font-medium">Data do Pedido:</dt>
                <dd>{pedidoAtual.dataEnvio}</dd>
              </div>
              <div className="grid grid-cols-2">
                <dt className="font-medium">Produto:</dt>
                <dd>{pedidoAtual.produto}</dd>
              </div>
              <div className="grid grid-cols-2">
                <dt className="font-medium">Quantidade:</dt>
                <dd>{pedidoAtual.quantidade}</dd>
              </div>
              <div className="grid grid-cols-2">
                <dt className="font-medium">Status Atual:</dt>
                <dd className="font-semibold text-primary">
                  {pedidoAtual.status}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="relative">
          <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-0.5 bg-muted">
            <div
              className="h-full w-full bg-primary transition-all duration-500"
              style={{
                height: `${
                  ((pedidoAtual.etapas.filter((e) => e.concluido).length - 1) *
                    100) /
                  (pedidoAtual.etapas.length - 1)
                }%`,
              }}
            />
          </div>

          {pedidoAtual.etapas.map((etapa, index) => (
            <div key={etapa.nome} className="mb-8 flex items-start">
              <div
                className={cn(
                  "relative z-10 mr-4 h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium",
                  etapa.concluido
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{etapa.nome}</h3>
                <p className="text-sm text-muted-foreground">
                  {etapa.descricao}
                </p>
                {etapa.data && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {etapa.data}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
