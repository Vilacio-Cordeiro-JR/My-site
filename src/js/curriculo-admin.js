// curriculo-admin.js
// Painel de edição privada do currículo (frontend-only)
// Para integração com gerador-curriculo.html

(function () {
  // --- CONFIGURAÇÃO ---
  const ADMIN_PASSWORD = "meu123";
  const ADMIN_FLAG = "isAdmin";
  const STORAGE_KEY = "curriculoData";

  // --- ACESSO OCULTO ---
  function showAdminPrompt() {
    const senha = prompt("Digite a senha de admin:");
    if (senha === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_FLAG, "true");
      window.location.hash = "#admin";
      renderAdminPanel();
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
    btn.textContent = "";
    btn.title = "Abrir admin";
    btn.style.position = "fixed";
    btn.style.right = "8px";
    btn.style.bottom = "8px";
    btn.style.width = "32px";
    btn.style.height = "32px";
    btn.style.opacity = "0.01";
    btn.style.zIndex = "9999";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", showAdminPrompt);
    document.body.appendChild(btn);
  }

  // Rota /admin (hash)
  function checkAdminRoute() {
    if (window.location.hash === "#admin") {
      if (localStorage.getItem(ADMIN_FLAG) === "true") {
        renderAdminPanel();
      } else {
        showAdminPrompt();
      }
    }
  }
  window.addEventListener("hashchange", checkAdminRoute);

  // --- PAINEL DE PERSONALIZAÇÃO ---
  function renderAdminPanel() {
    // Remove painel antigo se já existir
    const old = document.getElementById("admin-panel");
    if (old) old.remove();

    // Container
    const panel = document.createElement("div");
    panel.id = "admin-panel";
    panel.style.position = "fixed";
    panel.style.top = "0";
    panel.style.left = "0";
    panel.style.width = "100vw";
    panel.style.height = "100vh";
    panel.style.background = "rgba(0,0,0,0.85)";
    panel.style.zIndex = "10000";
    panel.style.overflow = "auto";
    panel.style.color = "#fff";
    panel.style.padding = "32px 0";
    panel.style.fontFamily = "sans-serif";

    // Fechar
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Fechar";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "16px";
    closeBtn.style.right = "32px";
    closeBtn.style.background = "#222";
    closeBtn.style.color = "#fff";
    closeBtn.style.border = "none";
    closeBtn.style.padding = "8px 16px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function () {
      panel.remove();
    };
    panel.appendChild(closeBtn);

    // Dados
    const data = loadData();

    // Formulário
    const form = document.createElement("form");
    form.style.maxWidth = "600px";
    form.style.margin = "40px auto";
    form.style.background = "#222";
    form.style.padding = "32px";
    form.style.borderRadius = "8px";
    form.onsubmit = function (e) {
      e.preventDefault();
      saveDataFromForm(form);
      alert("Alterações salvas!");
    };

    // --- Dados pessoais ---
    form.appendChild(h2("Dados pessoais"));
    form.appendChild(labelInput("Nome", "nome", data.nome || ""));
    form.appendChild(labelTextarea("Resumo", "resumo", data.resumo || ""));

    // --- Competências ---
    form.appendChild(h2("Competências"));
    const compList = document.createElement("div");
    compList.id = "comp-list";
    (data.competencias || []).forEach((c, i) => {
      compList.appendChild(renderCompetencia(c, i));
    });
    form.appendChild(compList);
    const addCompBtn = document.createElement("button");
    addCompBtn.type = "button";
    addCompBtn.textContent = "Adicionar competência";
    addCompBtn.onclick = function () {
      compList.appendChild(renderCompetencia({ nome: "", ativo: true }, Date.now()));
    };
    form.appendChild(addCompBtn);

    // --- Experiências ---
    form.appendChild(h2("Experiências"));
    const expList = document.createElement("div");
    expList.id = "exp-list";
    (data.experiencias || []).forEach((e, i) => {
      expList.appendChild(renderExperiencia(e, i));
    });
    form.appendChild(expList);
    const addExpBtn = document.createElement("button");
    addExpBtn.type = "button";
    addExpBtn.textContent = "Adicionar experiência";
    addExpBtn.onclick = function () {
      expList.appendChild(renderExperiencia({ empresa: "", cargo: "", descricao: "", ativo: true }, Date.now()));
    };
    form.appendChild(addExpBtn);

    // --- Botões extras ---
    form.appendChild(document.createElement("hr"));
    const saveBtn = document.createElement("button");
    saveBtn.type = "submit";
    saveBtn.textContent = "Salvar alterações";
    form.appendChild(saveBtn);

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.textContent = "Resetar currículo";
    resetBtn.onclick = function () {
      if (confirm("Tem certeza? Isso limpará o currículo salvo.")) {
        localStorage.removeItem(STORAGE_KEY);
        alert("Currículo resetado!");
        panel.remove();
      }
    };
    form.appendChild(resetBtn);

    const exportBtn = document.createElement("button");
    exportBtn.type = "button";
    exportBtn.textContent = "Exportar JSON";
    exportBtn.onclick = function () {
      const blob = new Blob([JSON.stringify(loadData(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "curriculo.json";
      a.click();
      URL.revokeObjectURL(url);
    };
    form.appendChild(exportBtn);

    const importBtn = document.createElement("button");
    importBtn.type = "button";
    importBtn.textContent = "Importar JSON";
    importBtn.onclick = function () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json,application/json";
      input.onchange = function (e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
          try {
            const obj = JSON.parse(evt.target.result);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
            alert("Importado com sucesso!");
            panel.remove();
          } catch (err) {
            alert("Erro ao importar JSON");
          }
        };
        reader.readAsText(file);
      };
      input.click();
    };
    form.appendChild(importBtn);

    panel.appendChild(form);
    document.body.appendChild(panel);
  }

  // --- COMPONENTES AUXILIARES ---
  function h2(txt) {
    const h = document.createElement("h2");
    h.textContent = txt;
    return h;
  }
  function labelInput(label, name, value) {
    const div = document.createElement("div");
    const l = document.createElement("label");
    l.textContent = label;
    const input = document.createElement("input");
    input.type = "text";
    input.name = name;
    input.value = value;
    div.appendChild(l);
    div.appendChild(input);
    return div;
  }
  function labelTextarea(label, name, value) {
    const div = document.createElement("div");
    const l = document.createElement("label");
    l.textContent = label;
    const ta = document.createElement("textarea");
    ta.name = name;
    ta.value = value;
    div.appendChild(l);
    div.appendChild(ta);
    return div;
  }
  function renderCompetencia(c, idx) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = !!c.ativo;
    check.title = "Ativo";
    const input = document.createElement("input");
    input.type = "text";
    input.value = c.nome || "";
    input.placeholder = "Competência";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remover";
    remove.onclick = function () {
      row.remove();
    };
    row.appendChild(check);
    row.appendChild(input);
    row.appendChild(remove);
    return row;
  }
  function renderExperiencia(e, idx) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.style.gap = "4px";
    const ativo = document.createElement("input");
    ativo.type = "checkbox";
    ativo.checked = !!e.ativo;
    ativo.title = "Ativo";
    const empresa = document.createElement("input");
    empresa.type = "text";
    empresa.value = e.empresa || "";
    empresa.placeholder = "Empresa";
    const cargo = document.createElement("input");
    cargo.type = "text";
    cargo.value = e.cargo || "";
    cargo.placeholder = "Cargo";
    const desc = document.createElement("textarea");
    desc.value = e.descricao || "";
    desc.placeholder = "Descrição";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remover";
    remove.onclick = function () {
      row.remove();
    };
    row.appendChild(ativo);
    row.appendChild(empresa);
    row.appendChild(cargo);
    row.appendChild(desc);
    row.appendChild(remove);
    return row;
  }

  // --- PERSISTÊNCIA ---
  function loadData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }
  function saveDataFromForm(form) {
    const data = {};
    data.nome = form.elements["nome"].value;
    data.resumo = form.elements["resumo"].value;
    // Competências
    data.competencias = Array.from(form.querySelectorAll("#comp-list > div")).map((row) => ({
      nome: row.querySelector("input[type=text]").value,
      ativo: row.querySelector("input[type=checkbox]").checked,
    })).filter((c) => c.nome.trim());
    // Experiências
    data.experiencias = Array.from(form.querySelectorAll("#exp-list > div")).map((row) => ({
      ativo: row.querySelector("input[type=checkbox]").checked,
      empresa: row.querySelectorAll("input[type=text]")[0].value,
      cargo: row.querySelectorAll("input[type=text]")[1].value,
      descricao: row.querySelector("textarea").value,
    })).filter((e) => e.empresa.trim() || e.cargo.trim() || e.descricao.trim());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // --- INICIALIZAÇÃO ---
  createInvisibleButton();
  checkAdminRoute();
})();
