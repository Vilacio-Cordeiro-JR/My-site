// curriculo-admin.js
// Painel de edição privada do currículo (frontend-only)
// Para integração com gerador-curriculo.html

(function () {
  // --- CONFIGURAÇÃO ---
  const ADMIN_PASSWORD = "meu123";
  const ADMIN_FLAG = "isAdmin";
  const STORAGE_KEY = "curriculoData";

  // ================================================================
  // SEUS DADOS — edite aqui sempre que quiser atualizar o currículo
  // ================================================================
  const MEU_CURRICULO = {
    name: "Vilácio Cordeiro Júnior",
    headline: "Desenvolvedor Back-end em Formacao | Python | SQL",
    address: "Bertioga - SP",
    email: "CordeiroJuniorVilacio@gmail.com",
    phone: "(13) 9 9677-8306",
    linkedin: "linkedin.com/in/vilácio-cordeiro-júnior",
    github: "",
    summary:
      "Estudante de Sistemas de Informacao com foco em desenvolvimento back-end e banco de dados. Conhecimentos em Python, SQL, logica de programacao e fundamentos de desenvolvimento back-end. Experiencia com rotinas administrativas e atendimento ao cliente. Busco oportunidade em TI para aplicar habilidades tecnicas e contribuir com solucoes eficientes.",
    skills: {
      languages: "Python, Java, C#, JavaScript, Node.js",
      db: "SQL, NoSQL",
      tools: "Pacote Office, Figma, Canva",
      infra: "Montagem e manutencao basica de computadores",
    },
    certs: [
      "Python Impressionador - Hashtag Treinamentos",
      "Pacote Office",
      "Ingles Intermediario (conversacao avancada, leitura e escrita intermediaria)",
    ],
    soft: [
      "Adaptabilidade",
      "Comunicacao eficaz",
      "Trabalho em equipe",
      "Proatividade",
      "Comprometimento",
    ],
    projects: [
      {
        title: "Sistema de Orcamentos RadCom",
        tech: "Node.js, Express, React, PostgreSQL/SQLite",
        line: "Sistema web para gestao de orcamentos com autenticacao e controle de acesso.",
        bullets: [
          "Desenvolvimento back-end e front-end.",
          "Integracao com banco relacional.",
          "Hierarquia de usuarios e relatorios.",
        ],
        link: "github.com/Vilacio-Cordeiro-Jr/Projeto-Radcom-Costa",
      },
      {
        title: "projeto-jarvis",
        tech: "Python, CLI",
        line: "Assistente virtual experimental para automatizar rotinas.",
        bullets: [
          "Desenvolvimento de comandos com organizacao modular.",
          "Automacao de tarefas e execucao de comandos rapidos.",
          "Base extensivel para novas integracoes.",
        ],
        link: "github.com/Vilacio-Cordeiro-JR/projeto-jarvis",
      },
      {
        title: "Projeto_anaminese",
        tech: "HTML, CSS, JavaScript",
        line: "Formulario digital para cadastro e organizacao de dados de atendimento.",
        bullets: [
          "Desenvolvimento de formulario com validacoes basicas.",
          "Padronizacao de dados e organizacao por secoes.",
          "Base pronta para exportacao ou integracoes futuras.",
        ],
        link: "github.com/Vilacio-Cordeiro-JR/Projeto_anaminese",
      },
    ],
    experience: [
      {
        role: "Auxiliar de Escritorio",
        company: "RADCOM Alarmes",
        period: "Out/2025 - Dez/2025",
        bullets: [
          "Elaboracao de contratos e propostas comerciais com organizacao e padronizacao.",
          "Atendimento direto ao cliente, garantindo suporte e resolucao eficiente de demandas.",
          "Producao de materiais impressos (adesivos e documentos institucionais).",
          "Apoio administrativo geral e controle de documentos.",
        ],
      },
      {
        role: "Agente de Seguranca - Jovem Aprendiz",
        company: "Associacao dos Amigos da Riviera - CAMPB",
        period: "Mai/2025 - Out/2025",
        bullets: [
          "Patrulhamento preventivo em area costeira, seguindo protocolos de seguranca.",
          "Orientacao ao publico com foco em seguranca e boa comunicacao.",
          "Comunicacao via radio operacional e registro de ocorrencias.",
          "Atuacao com responsabilidade e disciplina em ambiente supervisionado.",
        ],
      },
    ],
    education: [
      {
        course: "Bacharelado em Sistemas de Informacao",
        school: "Universidade Santa Cecilia (UNISANTA)",
        period: "Inicio: 2025 | Previsao de conclusao: 2029",
      },
    ],
  };
  // ================================================================

  // --- ACESSO OCULTO ---
  function showAdminPrompt() {
    const senha = prompt("Digite a senha de admin:");
    if (senha === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_FLAG, "true");
      window.location.hash = "#admin";
      activateAdminMode();
    } else {
      alert("Senha incorreta!");
    }
  }

  // Trigger oculto: Ctrl+Shift+A
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
      showAdminPrompt();
    }
  });

  // Botão invisível (canto inferior direito)
  function createInvisibleButton() {
    const btn = document.createElement("button");
    btn.title = "Abrir admin";
    btn.style.cssText =
      "position:fixed;right:8px;bottom:8px;width:32px;height:32px;opacity:0.01;z-index:9999;background:none;border:none;cursor:pointer;";
    btn.addEventListener("click", showAdminPrompt);
    document.body.appendChild(btn);
  }

  // Rota /admin (hash)
  function checkAdminRoute() {
    if (window.location.hash === "#admin") {
      if (localStorage.getItem(ADMIN_FLAG) === "true") {
        activateAdminMode();
      } else {
        showAdminPrompt();
      }
    }
  }
  window.addEventListener("hashchange", checkAdminRoute);

  // --- ATIVA O MODO ADM ---
  function activateAdminMode() {
    // Carrega seus dados no builder
    loadMyCurriculoIntoBuilder(MEU_CURRICULO);

    // Mostra badge de admin
    showAdminBadge();
  }

  // --- INJETA OS DADOS NO BUILDER ---
  function loadMyCurriculoIntoBuilder(data) {
    const byId = (id) => document.getElementById(id);

    // Dados básicos
    setVal("name", data.name);
    setVal("headline", data.headline);
    setVal("address", data.address);
    setVal("email", data.email);
    setVal("phone", data.phone);
    setVal("linkedin", data.linkedin);
    setVal("github", data.github);

    // Resumo
    setVal("summary", data.summary);

    // Habilidades
    setVal("skills-languages", data.skills.languages);
    setVal("skills-db", data.skills.db);
    setVal("skills-tools", data.skills.tools);
    setVal("skills-infra", data.skills.infra);

    // Certificações (uma por linha)
    setVal("certs", data.certs.join("\n"));

    // Soft skills (uma por linha)
    setVal("soft", data.soft.join("\n"));

    // Limpa listas dinâmicas e repopula
    populateList("projects-list", "project-template", data.projects, fillProjectCard);
    populateList("experience-list", "experience-template", data.experience, fillExperienceCard);
    populateList("education-list", "education-template", data.education, fillEducationCard);

    // Dispara re-render do preview
    triggerRenderAll();
  }

  // --- HELPERS DE INJEÇÃO ---
  function setVal(id, value) {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  }

  function populateList(listId, templateId, items, fillFn) {
    const list = document.getElementById(listId);
    const template = document.getElementById(templateId);
    if (!list || !template) return;

    // Remove cards existentes
    list.querySelectorAll(".item-card").forEach((c) => c.remove());

    items.forEach((item) => {
      const clone = template.content.firstElementChild.cloneNode(true);
      fillFn(clone, item);

      // Reconecta listeners do builder
      clone.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("input", triggerRenderAll);
      });
      clone.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          clone.remove();
          triggerRenderAll();
        });
      });

      list.appendChild(clone);
    });
  }

  function fillProjectCard(card, p) {
    const inputs = card.querySelectorAll("input");
    const bullets = card.querySelectorAll(".item-bullet");
    // [0] title, [1] tech, [2] line, bullets..., link (último)
    if (inputs[0]) inputs[0].value = p.title || "";   // item-title
    if (inputs[1]) inputs[1].value = p.tech || "";    // item-tech
    if (inputs[2]) inputs[2].value = p.line || "";    // item-line
    (p.bullets || []).forEach((b, i) => {
      if (bullets[i]) bullets[i].value = b;
    });
    const linkInput = card.querySelector(".item-link");
    if (linkInput) linkInput.value = p.link || "";
  }

  function fillExperienceCard(card, e) {
    const titleInput = card.querySelector(".item-title");
    const periodInput = card.querySelector(".item-period");
    const companyInput = card.querySelector(".item-company");
    const bullets = card.querySelectorAll(".item-bullet");
    if (titleInput) titleInput.value = e.role || "";
    if (periodInput) periodInput.value = e.period || "";
    if (companyInput) companyInput.value = e.company || "";
    (e.bullets || []).forEach((b, i) => {
      if (bullets[i]) bullets[i].value = b;
    });
  }

  function fillEducationCard(card, ed) {
    const titleInput = card.querySelector(".item-title");
    const periodInput = card.querySelector(".item-period");
    const companyInput = card.querySelector(".item-company");
    if (titleInput) titleInput.value = ed.course || "";
    if (periodInput) periodInput.value = ed.period || "";
    if (companyInput) companyInput.value = ed.school || "";
  }

  // Dispara o renderAll do builder sem precisar importar a função
    function triggerRenderAll() {
    if (typeof window.builderRenderAll === "function") {
        window.builderRenderAll();
    }
    }

  // --- BADGE DE ADMIN ---
  function showAdminBadge() {
    if (document.getElementById("admin-badge")) return;
    const badge = document.createElement("div");
    badge.id = "admin-badge";
    badge.innerHTML = `
      <span>🔑 Modo ADM ativo</span>
      <button id="admin-logout" title="Sair do modo ADM">Sair</button>
    `;
    badge.style.cssText = `
      position: fixed;
      top: 12px;
      right: 12px;
      background: #ff6b35;
      color: #fff;
      font-family: sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 20px;
      z-index: 9998;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    `;

    // Garante que o badge não aparece na impressão
    const printStyle = document.createElement("style");
    printStyle.id = "admin-print-style";
    printStyle.textContent = `@media print { #admin-badge { display: none !important; } }`;
    document.head.appendChild(printStyle);
    badge.querySelector("#admin-logout").style.cssText =
      "background:rgba(0,0,0,0.25);border:none;color:#fff;cursor:pointer;border-radius:12px;padding:2px 10px;font-size:12px;";
    badge.querySelector("#admin-logout").addEventListener("click", () => {
      localStorage.removeItem(ADMIN_FLAG);
      window.location.hash = "";
      badge.remove();
    });
    document.body.appendChild(badge);
  }

  // --- INICIALIZAÇÃO ---
  createInvisibleButton();
  checkAdminRoute();
})();