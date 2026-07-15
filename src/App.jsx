import { useEffect, useState } from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import {
  ArrowRight,
  Building2,
  Check,
  CircleCheck,
  Clock3,
  FileCheck2,
  HardHat,
  Handshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessagesSquare,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  UsersRound,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import { siteContent as content } from "./data/siteContent";
import celsoLogo from "./assets/celso-ricardo-logo.png";
import celsoPhotoLarge from "./assets/celso-ricardo-1024.jpg";
import "./App.css";

const serviceIcons = {
  WalletCards,
  FileCheck2,
  UsersRound,
  Wrench,
  HardHat,
  Landmark,
  Handshake,
  TrendingDown,
  Scale,
  MessagesSquare,
  ShieldCheck,
};

const phoneLink = `tel:+${content.whatsapp}`;
const waLink = (
  message = "Olá, gostaria de conhecer melhor o serviço de síndico profissional.",
) => `https://wa.me/${content.whatsapp}?text=${encodeURIComponent(message)}`;

function ProfessionalPhoto({ priority = false, alt }) {
  return (
    <img
      className="portrait"
      src={celsoPhotoLarge}
      width="1024"
      height="1538"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      alt={alt}
    />
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-title ${light ? "light" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    ["Início", "inicio"],
    ["Sobre", "sobre"],
    ["Serviços", "servicos"],
    ["Diferenciais", "diferenciais"],
    ["Experiência", "experiencia"],
    ["Contato", "contato"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleKey = (event) => event.key === "Escape" && setOpen(false);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKey);
    document.body.classList.toggle("menu-open", open);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        <span className="brand-mark"><img src={celsoLogo} alt="" /></span>
        <div>
          <b>{content.name}</b>
          <small>{content.role}</small>
        </div>
      </a>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={open ? "open" : ""}
        aria-label="Navegação principal"
      >
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="button small"
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Solicitar proposta
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-shape" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="tag">
            <ShieldCheck size={16} /> Gestão condominial com experiência
          </div>
          <h1>
            Gestão profissional para um condomínio mais{" "}
            <em>organizado, seguro e valorizado.</em>
          </h1>
          <p>
            Há mais de 20 anos cuidando de condomínios de pequeno, médio e
            grande porte, com transparência e presença junto a moradores e
            conselhos.
          </p>
          <div className="actions">
            <a
              className="button"
              href={waLink()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppOutlined /> Solicitar proposta pelo WhatsApp
            </a>
            <a className="button ghost" href="#experiencia">
              Conhecer minha experiência <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <ProfessionalPhoto
            priority
            alt="Celso Ricardo, síndico profissional"
          />
          <div className="floating-card">
            <CircleCheck />
            <div>
              <b>Gestão presente</b>
              <span>Decisões claras e responsáveis</span>
            </div>
          </div>
        </div>
        <div className="trust-row" aria-label="Indicadores de experiência">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <div className="about-management-visual">
          <div className="management-orbit orbit-one" />
          <div className="management-orbit orbit-two" />
          <div className="management-building" aria-hidden="true">
            <Building2 />
          </div>
          <div className="management-heading">
            <span>Gestão em movimento</span>
            <strong>Planejamento que<br />vira ação.</strong>
          </div>
          <div className="management-points">
            <div><CircleCheck /><span>Rotina acompanhada</span></div>
            <div><CircleCheck /><span>Decisões documentadas</span></div>
            <div><CircleCheck /><span>Patrimônio protegido</span></div>
          </div>
          <div className="management-experience">
            <strong>20+</strong>
            <span>anos de experiência</span>
          </div>
        </div>
        <div>
          <SectionTitle
            eyebrow="Sobre o profissional"
            title="Experiência que gera confiança"
          />
          <p className="lead">
            Com mais de duas décadas de atuação, desenvolvi uma gestão baseada
            em planejamento, transparência e acompanhamento próximo.
          </p>
          <p>
            Ao longo da trajetória, já gerenciei mais de 15 condomínios, de
            empreendimentos menores a estruturas de grande porte. Essa vivência
            permite compreender diferentes realidades, antecipar necessidades e
            conduzir decisões com equilíbrio. A formação em educação e Direito
            também contribui para uma comunicação clara, análise responsável e
            mediação cuidadosa das relações condominiais.
          </p>
          <ul className="check-list">
            <li>
              <Check /> Proximidade com moradores, funcionários e conselho
            </li>
            <li>
              <Check /> Organização de processos e prioridades
            </li>
            <li>
              <Check /> Cuidado permanente com o patrimônio coletivo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="section muted">
      <div className="container">
        <SectionTitle
          eyebrow="Objetivos da gestão"
          title="Proposta de administração condominial"
          text="Uma atuação completa para acompanhar a rotina, organizar processos e manter moradores e conselho bem informados."
        />
        <div className="cards services">
          {content.services.map(([iconName, title, text]) => {
            const Icon = serviceIcons[iconName];
            return (
              <article className="card" key={title}>
                <div className="icon-box">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
        <div className="contract-banner">
          <div className="contract-icon"><FileCheck2 /></div>
          <div>
            <span>Condições de contratação</span>
            <h3>{content.contract.title}</h3>
            <p>{content.contract.text}</p>
          </div>
          <a href="#contato">Solicitar proposta <ArrowRight /></a>
        </div>
      </div>
    </section>
  );
}

const differentials = [
  "Mais de 20 anos de experiência",
  "Gestão próxima e acessível",
  "Transparência nas decisões",
  "Comunicação clara",
  "Planejamento preventivo",
  "Controle financeiro responsável",
  "Atuação em diferentes portes",
  "Rede de profissionais qualificados",
];

function Differentials() {
  return (
    <section id="diferenciais" className="section navy">
      <div className="container difference-grid">
        <div>
          <SectionTitle
            light
            eyebrow="Por que escolher"
            title="Uma gestão firme nas decisões e próxima das pessoas"
            text="Experiência prática aliada a processos claros para cuidar do presente e planejar o futuro do condomínio."
          />
          <a href="#contato" className="text-link">
            Converse sobre seu condomínio <ArrowRight />
          </a>
        </div>
        <div className="difference-list">
          {differentials.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
              <Check />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <SectionTitle
          eyebrow="Experiência comprovada"
          title="Números que traduzem uma trajetória"
        />
        <div className="stats-grid">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <div>
            <strong>
              <Building2 />
            </strong>
            <span>do pequeno ao grande porte</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section credentials-section">
      <div className="container">
        <SectionTitle
          eyebrow="Formação e trajetória"
          title="Conhecimento que fortalece a gestão"
          text="Uma formação multidisciplinar e experiência prática em diferentes empreendimentos para lidar com pessoas, normas e decisões com responsabilidade."
        />
        <div className="credentials-grid">
          <div className="education-panel">
            <span className="panel-label">Formação profissional</span>
            <div className="education-list">
              {content.education.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="portfolio-panel">
            <span className="panel-label">Condomínios da trajetória</span>
            <h3>Experiência construída em diferentes realidades</h3>
            <div className="portfolio-list">
              {content.portfolio.map((item) => (
                <div key={item.name}>
                  <Building2 />
                  <span>
                    <strong>{item.name}</strong>
                    {item.partner && <small>{item.partner}</small>}
                  </span>
                  <Check />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  [
    "01",
    "Conversa inicial",
    "Entendimento do momento, das prioridades e dos desafios.",
  ],
  [
    "02",
    "Análise das necessidades",
    "Leitura da estrutura, dos processos e das demandas do condomínio.",
  ],
  [
    "03",
    "Proposta de gestão",
    "Apresentação de um plano de trabalho adequado à realidade local.",
  ],
  [
    "04",
    "Planejamento e acompanhamento",
    "Início da gestão com organização, presença e comunicação contínua.",
  ],
];

function Process() {
  return (
    <section className="section muted">
      <div className="container">
        <SectionTitle
          eyebrow="Como funciona"
          title="Um início simples, claro e bem planejado"
        />
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "Mais organização",
    "Melhor controle de despesas",
    "Comunicação eficiente",
    "Manutenção em dia",
    "Menos problemas emergenciais",
    "Valorização do patrimônio",
    "Mais tranquilidade para todos",
  ];
  return (
    <section className="section">
      <div className="container benefit-grid">
        <div>
          <SectionTitle
            eyebrow="Benefícios"
            title="Uma gestão que transforma rotina em tranquilidade"
            text="O objetivo é construir um condomínio mais previsível, organizado e agradável para viver."
          />
          <div className="benefits">
            {items.map((item) => (
              <div key={item}>
                <CircleCheck />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="benefit-visual">
          <ShieldCheck />
          <h3>
            Patrimônio bem cuidado.
            <br />
            Pessoas bem informadas.
          </h3>
          <p>Planejamento para hoje, atenção ao amanhã.</p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "Você atua em condomínios de diferentes portes?",
    "Sim. A experiência inclui condomínios de pequeno, médio e grande porte, sempre com uma proposta adequada à estrutura e às prioridades de cada local.",
  ],
  [
    "Como começa o trabalho de gestão?",
    "O primeiro passo é uma conversa para entender o cenário atual. Depois, são analisadas as necessidades e apresentada uma proposta de trabalho clara e personalizada.",
  ],
  [
    "Como é feita a comunicação com moradores e conselho?",
    "A gestão prioriza comunicação objetiva, acompanhamento próximo e informações organizadas para que decisões e prioridades sejam compreendidas por todos.",
  ],
  [
    "É possível conversar antes de solicitar uma proposta?",
    "Sim. O contato inicial serve justamente para conhecer o condomínio, esclarecer dúvidas e avaliar como a experiência profissional pode contribuir.",
  ],
];

function FAQ() {
  return (
    <section className="section muted faq-section">
      <div className="container faq-grid">
        <SectionTitle
          eyebrow="Dúvidas frequentes"
          title="Informação clara desde o primeiro contato"
          text="Respostas rápidas para ajudar o conselho e os moradores a entenderem como funciona a contratação."
        />
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [errors, setErrors] = useState({});
  const fields = [
    ["nome", "Nome completo", "text", true, "name"],
    ["telefone", "Telefone / WhatsApp", "tel", true, "tel"],
    ["email", "E-mail", "email", false, "email"],
    ["condominio", "Nome do condomínio", "text", true, "organization"],
    ["unidades", "Quantidade aproximada de unidades", "number", false, "off"],
  ];

  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const next = {};
    ["nome", "telefone", "condominio"].forEach((key) => {
      if (!data[key]?.trim()) next[key] = "Preencha este campo.";
    });
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
      next.email = "Informe um e-mail válido.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    const units = data.unidades
      ? `, que possui aproximadamente ${data.unidades} unidades`
      : "";
    const email = data.email ? `\nE-mail: ${data.email}` : "";
    window.open(
      waLink(
        `Olá, gostaria de conhecer melhor o serviço de síndico profissional. Meu nome é ${data.nome}, represento o condomínio ${data.condominio}${units}.\n\nTelefone: ${data.telefone}${email}\nMensagem: ${data.mensagem || "Gostaria de conversar sobre uma proposta de gestão."}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section className="cta">
        <div className="container">
          <Sparkles />
          <div>
            <h2>Seu condomínio precisa de uma gestão mais profissional?</h2>
            <p>
              Vamos conversar sobre as necessidades e uma proposta
              personalizada.
            </p>
          </div>
          <a
            className="button gold"
            href={waLink()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppOutlined /> Falar pelo WhatsApp
          </a>
        </div>
      </section>
      <section id="contato" className="section">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow="Entre em contato"
              title="Vamos conversar sobre seu condomínio"
              text="Preencha os dados essenciais e a mensagem será preparada para envio pelo WhatsApp."
            />
            <div className="contact-details">
              <a href={phoneLink}>
                <Phone />
                <span>
                  <small>Telefone e WhatsApp</small>
                  {content.phone}
                </span>
              </a>
              <a href={`mailto:${content.email}`}>
                <Mail />
                <span>
                  <small>E-mail</small>
                  {content.email}
                </span>
              </a>
              {content.region && (
                <div>
                  <MapPin />
                  <span>
                    <small>Atendimento</small>
                    {content.region}
                  </span>
                </div>
              )}
              <div>
                <Clock3 />
                <span>
                  <small>Retorno</small>Em horário comercial
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={submit} noValidate>
            <p className="required-note full">
              <span>*</span> Campos obrigatórios
            </p>
            {fields.map(([name, label, type, required, autocomplete]) => {
              const errorId = `${name}-error`;
              return (
                <label key={name} className={errors[name] ? "error" : ""}>
                  <span>
                    {label}
                    {required && <b aria-hidden="true"> *</b>}
                  </span>
                  <input
                    name={name}
                    type={type}
                    min={type === "number" ? "1" : undefined}
                    inputMode={type === "number" ? "numeric" : undefined}
                    autoComplete={autocomplete}
                    placeholder={label}
                    required={required}
                    aria-invalid={!!errors[name]}
                    aria-describedby={errors[name] ? errorId : undefined}
                  />
                  {errors[name] && <small id={errorId}>{errors[name]}</small>}
                </label>
              );
            })}
            <label className="full">
              <span>
                Mensagem <i>(opcional)</i>
              </span>
              <textarea
                name="mensagem"
                rows="4"
                placeholder="Conte brevemente sobre as necessidades do condomínio"
              />
            </label>
            <button className="button full" type="submit">
              Preparar mensagem no WhatsApp <ArrowRight />
            </button>
            <p className="form-note full">
              Seus dados não são armazenados neste site.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand inverse" href="#inicio">
            <span className="brand-mark"><img src={celsoLogo} alt="" /></span>
            <div>
              <b>{content.name}</b>
              <small>{content.role}</small>
            </div>
          </a>
          <p>
            Experiência, transparência e presença para uma gestão condominial
            responsável.
          </p>
        </div>
        <div>
          <h3>Navegação</h3>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#contato">Contato</a>
        </div>
        <div>
          <h3>Contato</h3>
          <a href={phoneLink}>{content.phone}</a>
          <a href={`mailto:${content.email}`}>{content.email}</a>
          {content.region && <span>{content.region}</span>}
        </div>
        <div>
          <h3>Fale comigo</h3>
          <a href={waLink()} target="_blank" rel="noreferrer">
            <WhatsAppOutlined /> WhatsApp
          </a>
        </div>
      </div>
      <div className="copyright container">
        © {new Date().getFullYear()} {content.name}. Todos os direitos
        reservados.
        <span>Gestão condominial profissional.</span>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".section, .cta")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Experience />
        <Credentials />
        <Process />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppOutlined />
      </a>
    </>
  );
}

export default App;
