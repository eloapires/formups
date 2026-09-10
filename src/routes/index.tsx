import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import caseLanchonete from "@/assets/case-lanchonete.jpg";
import caseDoceria from "@/assets/case-doceria.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "formup — Landing pages de alta conversão" },
      {
        name: "description",
        content:
          "A formup desenvolve landing pages minimalistas, ultra-rápidas e focadas em vendas para pequenos negócios.",
      },
      { property: "og:title", content: "formup — Landing pages de alta conversão" },
      {
        property: "og:description",
        content:
          "Interfaces minimalistas, ultra-rápidas e focadas em conversão para pequenos negócios.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const cases = [
  {
    title: "Lanchonete Gourmet",
    tag: "Alimentação",
    image: caseLanchonete,
    alt: "Prévia da landing page mobile de uma lanchonete gourmet",
  },
  {
    title: "Doceria Artesanal",
    tag: "Delivery",
    image: caseDoceria,
    alt: "Prévia da landing page mobile de uma doceria artesanal",
  },
];

const pillars = [
  {
    number: "01",
    title: "Design Assinado",
    description:
      "Cada página é desenhada do zero, com hierarquia visual precisa e nenhum elemento sobrando.",
  },
  {
    number: "02",
    title: "Velocidade Máxima",
    description:
      "Código enxuto e otimizado. Sua página abre instantaneamente, mesmo no 4G do seu cliente.",
  },
  {
    number: "03",
    title: "Foco em Conversão",
    description:
      "Caminho direto até o WhatsApp. Menos cliques, menos dúvidas, mais pedidos fechados.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-bold tracking-tight lowercase">formup.</span>
          <Button variant="hairline" size="sm" asChild>
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
            <span className="inline-flex items-center rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              ⚡ O novo padrão de design local
            </span>
            <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Páginas de alta conversão. Criadas com precisão digital.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Desenvolvemos interfaces minimalistas, ultra-rápidas e focadas em vendas para pequenos
              negócios. Atraia mais clientes sem a lentidão das agências tradicionais.
            </p>
            <div className="mt-10">
              <Button variant="solid" size="xl" asChild>
                <a href="#contato">Quero Elevar Meu Negócio</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Interfaces que Geram Desejo
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Um recorte do que entregamos: páginas leves, elegantes e prontas para vender.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <article key={item.title} className="group">
                  <div className="overflow-hidden rounded-2xl border border-border bg-secondary transition-all duration-300 group-hover:border-border-strong">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width={800}
                      height={1008}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:opacity-90"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>
                </article>
              ))}

              <article className="flex flex-col justify-center rounded-2xl border border-dashed border-border p-8 text-center transition-all duration-300 hover:border-border-strong">
                <p className="text-sm font-semibold tracking-tight">Seu negócio aqui</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Vagas limitadas por mês para manter o nível de acabamento.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className={`py-14 sm:py-20 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0 sm:pl-10" : ""} ${i < 2 ? "sm:pr-10" : "sm:pl-10"}`}
              >
                <span className="text-xs font-medium text-muted-foreground">{pillar.number}</span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Pronto para ter a melhor página da sua cidade?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
              Conte sobre o seu negócio e devolvemos uma proposta clara, sem enrolação.
            </p>
            <div className="mt-10">
              <Button variant="solid" size="xl" asChild>
                <a href="#contato">Fale Conosco</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 sm:flex-row">
          <span className="text-sm font-bold tracking-tight lowercase">formup.</span>
          <p className="text-xs text-muted-foreground">
            © 2026 formup. Digital Architecture Studio.
          </p>
        </div>
      </footer>
    </div>
  );
}
