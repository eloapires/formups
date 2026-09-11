import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseLanchonete from "@/assets/case-lanchonete.jpg";
import caseDoceria from "@/assets/case-doceria.jpg";
import heroLaptop from "@/assets/hero-laptop-chrome.png";
import moonAsset from "@/assets/moon.asset.json";
import spaceGalaxy from "@/assets/space-galaxy.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "formup — Landing pages de alta conversão" },
      {
        name: "description",
        content:
          "A formup desenvolve landing pages minimalistas, ultra-rápidas e focadas em vendas para pequenos negócios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Archivo:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const heroSpecs = [
  {
    title: "Processo ágil",
    description: "Tiramos sua ideia do papel e colocamos seu negócio online de forma rápida e eficiente.",
  },
  {
    title: "Performance",
    description: "Páginas leves, responsivas e otimizadas para uma experiência rápida.",
  },
  {
    title: "Contato direto",
    description: "Seu cliente encontra o que precisa e chega até você em poucos cliques.",
  },
];

const cases = [
  {
    index: "01",
    title: "Lanchonete Gourmet",
    tag: "Alimentação",
    image: caseLanchonete,
    alt: "Prévia da landing page mobile de uma lanchonete gourmet",
  },
  {
    index: "02",
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

const process = [
  { step: "01", title: "Conversa", text: "Entendemos o negócio, a oferta e quem compra." },
  { step: "02", title: "Desenho", text: "Layout sob medida, com foco total na ação principal." },
  { step: "03", title: "Construção", text: "Código leve, imagens tratadas, tudo medido." },
  { step: "04", title: "No ar", text: "Publicação, ajustes finos e acompanhamento." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-4 px-6 py-6 sm:grid-cols-3">
          <nav className="hidden gap-6 sm:flex">
            <a href="#trabalhos" className="label-micro text-surface-inverse-foreground/60 transition-colors hover:text-surface-inverse-foreground">
              Trabalhos
            </a>
            <a href="#metodo" className="label-micro text-surface-inverse-foreground/60 transition-colors hover:text-surface-inverse-foreground">
              Método
            </a>
          </nav>
          <span className="display-xl text-base text-surface-inverse-foreground sm:text-center">
            formup
          </span>
          <div className="flex justify-end">
            <Button variant="hairlineInverse" size="sm" asChild>
              <a href="#contato">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-surface-inverse text-surface-inverse-foreground">
          {/* lua ao fundo */}
          <img
            aria-hidden
            src={moonAsset.url}
            alt=""
            className="pointer-events-none absolute inset-x-0 top-0 h-[90%] w-full select-none object-cover object-top opacity-70"
            style={{
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-inverse/40 via-surface-inverse/20 to-surface-inverse"
          />

          {/* grade técnica */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden sm:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "25% 33.333%",
            }}
          />

          <div className="relative mx-auto max-w-[1400px] px-6 pt-28 sm:pt-32">
            {/* metadados */}
            <div className="grid gap-6 border-b border-surface-inverse-foreground/15 pb-6 sm:grid-cols-2">
              <div className="flex justify-between sm:max-w-xs">
                <span className="label-micro text-surface-inverse-muted">Web Design</span>
                <span className="label-micro text-surface-inverse-muted">Landing Pages</span>
              </div>
              <div className="flex justify-between sm:justify-self-end sm:min-w-[18rem]">
                <span className="label-micro text-surface-inverse-muted">formup Studio</span>
                <span className="label-micro text-surface-inverse-muted">2026</span>
              </div>
            </div>

            {/* wordmark fantasma + notebook */}
            <div className="relative mt-10 sm:mt-4">
              <span
                aria-hidden
                className="display-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[24vw] leading-none text-surface-inverse-foreground/20 [text-shadow:0_0_80px_rgba(255,255,255,0.15)]"
              >
                formup
              </span>
              <img
                src={heroLaptop}
                alt="Notebook exibindo a landing page criada pela formup"
                width={1024}
                height={1024}
                className="relative mx-auto w-full max-w-[820px] drop-shadow-[0_60px_80px_rgba(0,0,0,0.55)]"
              />
            </div>

            <div className="grid gap-10 border-t border-surface-inverse-foreground/15 pt-8 sm:grid-cols-2">
              <div>
                <p className="max-w-md text-lg leading-snug sm:text-xl">
                  Agilidade sem abrir mão
                  <br />
                  da qualidade.
                </p>
                <div className="mt-7">
                  <Button variant="hairlineInverse" size="xl" asChild>
                    <a href="#trabalhos">
                      Ver trabalhos <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
              <p className="max-w-md justify-self-start text-sm leading-relaxed text-surface-inverse-muted sm:justify-self-end">
                Desenvolvemos páginas com um processo eficiente, pensado para colocar seu
                negócio online rapidamente.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 border-t border-surface-inverse-foreground/15 sm:grid-cols-3">
              {heroSpecs.map((spec, i) => (
                <div
                  key={spec.title}
                  className={`py-6 sm:px-8 ${i > 0 ? "border-t border-surface-inverse-foreground/15 sm:border-l sm:border-t-0" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
                >
                  <p className="display-xl text-xl">{spec.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-surface-inverse-muted">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* TRABALHOS */}
        <section id="trabalhos" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
              <h2 className="display-xl max-w-xl text-4xl sm:text-6xl">
                Interfaces que
                <br />
                geram desejo
              </h2>
              <span className="label-micro text-muted-foreground">Seleção — 2026</span>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-3">
              {cases.map((item) => (
                <article key={item.title} className="group bg-background p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="label-micro text-muted-foreground">{item.index}</span>
                    <span className="label-micro text-muted-foreground">{item.tag}</span>
                  </div>
                  <div className="mt-6 overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width={800}
                      height={1008}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="display-xl mt-6 text-xl">{item.title}</h3>
                </article>
              ))}

              <article className="flex flex-col justify-between bg-background p-6 sm:p-8">
                <span className="label-micro text-muted-foreground">03</span>
                <div>
                  <h3 className="display-xl text-xl">Seu negócio aqui</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Vagas limitadas por mês para manter o nível de acabamento.
                  </p>
                  <a
                    href="#contato"
                    className="label-micro mt-6 inline-flex items-center gap-1.5 text-foreground"
                  >
                    Reservar vaga <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PILARES */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
            <span className="label-micro text-muted-foreground">Princípios</span>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.number}
                  className={`py-10 sm:px-10 sm:py-0 ${i > 0 ? "border-t border-border-strong sm:border-l sm:border-t-0" : "sm:pl-0"}`}
                >
                  <span className="label-micro text-muted-foreground">{pillar.number}</span>
                  <h3 className="display-xl mt-5 text-2xl">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section id="metodo" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display-xl text-4xl sm:text-6xl">Como funciona</h2>
              <span className="label-micro text-muted-foreground">Quatro etapas</span>
            </div>
            <div className="mt-12 divide-y divide-border border-t border-border">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="label-micro text-muted-foreground sm:col-span-2">
                    {item.step}
                  </span>
                  <h3 className="display-xl text-2xl sm:col-span-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="relative overflow-hidden bg-surface-inverse text-surface-inverse-foreground">
          {/* galáxia ao fundo */}
          <img
            aria-hidden
            src={spaceGalaxy.url}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-inverse via-surface-inverse/70 to-surface-inverse/30"
          />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
            <span className="label-micro text-surface-inverse-muted">Contato</span>
            <h2 className="display-xl mt-8 text-[13vw] leading-[0.85] sm:text-[9vw]">
              Vamos
              <br />
              construir
            </h2>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-surface-inverse-foreground/15 pt-8">
              <p className="max-w-md text-sm leading-relaxed text-surface-inverse-muted">
                Conte sobre o seu negócio e devolvemos uma proposta clara, sem enrolação.
              </p>
              <Button variant="hairlineInverse" size="xl" asChild>
                <a href="#contato">
                  Iniciar projeto <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-inverse text-surface-inverse-foreground">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 border-t border-surface-inverse-foreground/15 px-6 py-10 sm:flex-row sm:items-center">
          <span className="display-xl text-base">formup</span>
          <p className="label-micro text-surface-inverse-muted">
            © 2026 formup — Digital Architecture Studio
          </p>
        </div>
      </footer>
    </div>
  );
}
