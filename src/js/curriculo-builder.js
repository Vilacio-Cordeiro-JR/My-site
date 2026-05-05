
// --- INTEGRAÇÃO COM LOCALSTORAGE (PAINEL ADMIN) ---
const STORAGE_KEY = "curriculoData";
function loadCurriculoData() {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
	} catch {
		return null;
	}
}
function saveCurriculoData(data) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const byId = (id) => document.getElementById(id);

const state = {
	projects: 0,
	experience: 0,
	education: 0
};

function getLines(value) {
	return value
		.split("\n")
				list.appendChild(li);

		function fillBuilderFromData(data) {
			// Dados pessoais
			if (data.nome) byId("name").value = data.nome;
			if (data.resumo) byId("summary").value = data.resumo;
			// Competências
			if (Array.isArray(data.competencias)) {
				const list = byId("skills-languages");
				// Exibe apenas as competências ativas, separadas por vírgula
				list.value = data.competencias.filter(c => c.ativo).map(c => c.nome).join(", ");
			}
			// Experiências
			if (Array.isArray(data.experiencias)) {
				// Limpa lista
				const expList = byId("experience-list");
				expList.innerHTML = "";
				data.experiencias.filter(e => e.ativo).forEach((e) => {
					addItem("experience-list", "experience-template");
					const cards = expList.querySelectorAll(".item-card");
					const card = cards[cards.length - 1];
					card.querySelector(".item-title").value = e.cargo || "";
					card.querySelector(".item-company").value = e.empresa || "";
					card.querySelector("textarea, .item-bullet").value = e.descricao || "";
				});
			}
		}

		function initBuilder() {
			// Se houver dados no localStorage, preenche o formulário
			const adminData = loadCurriculoData();
			if (adminData) {
				fillBuilderFromData(adminData);
			} else {
				addItem("projects-list", "project-template");
				addItem("experience-list", "experience-template");
				addItem("education-list", "education-template");
			}

			[
				"name",
				"headline",
				"address",
				"email",
				"phone",
				"linkedin",
				"github",
				"summary",
				"skills-languages",
				"skills-db",
				"skills-tools",
				"skills-infra",
				"certs",
				"soft"
			].forEach((id) => {
				const input = byId(id);
				if (!input) return;
				input.addEventListener("input", renderAll);
			});

			["summary-toggle", "projects-toggle", "experience-toggle", "education-toggle", "skills-toggle", "certs-toggle", "soft-toggle"].forEach((id) => {
				const checkbox = byId(id);
				checkbox.addEventListener("change", renderAll);
			});

			byId("add-project").addEventListener("click", () => {
				addItem("projects-list", "project-template");
			});

			byId("add-experience").addEventListener("click", () => {
				addItem("experience-list", "experience-template");
			});

			byId("add-education").addEventListener("click", () => {
				addItem("education-list", "education-template");
			});

			byId("print-cv").addEventListener("click", () => {
				window.print();
			});

			byId("reset-cv").addEventListener("click", () => {
				if (!confirm("Deseja limpar todos os campos?")) return;
				document.querySelectorAll(".builder-form input, .builder-form textarea").forEach((el) => {
					el.value = "";
				});
				["summary-toggle", "projects-toggle", "experience-toggle", "education-toggle", "skills-toggle", "certs-toggle", "soft-toggle"].forEach((id) => {
					byId(id).checked = true;
				});
				document.querySelectorAll("#projects-list .item-card, #experience-list .item-card, #education-list .item-card").forEach((el) => el.remove());
				addItem("projects-list", "project-template");
				addItem("experience-list", "experience-template");
				addItem("education-list", "education-template");
				renderAll();
				// Limpa dados do admin
				localStorage.removeItem(STORAGE_KEY);
			});

			renderAll();
		}
			});
			wrapper.appendChild(list);
		}

		if (link) {
			const linkEl = document.createElement("p");
			linkEl.textContent = `GitHub: ${link}`;
			wrapper.appendChild(linkEl);
		}

		container.appendChild(wrapper);
	});
}

function renderExperience() {
	const section = byId("preview-experience-section");
	const enabled = byId("experience-toggle").checked;
	section.style.display = enabled ? "block" : "none";

	const container = byId("preview-experience");
	container.innerHTML = "";
	if (!enabled) return;

	const items = Array.from(document.querySelectorAll("#experience-list .item-card"));
	items.forEach((item) => {
		const role = item.querySelector(".item-title").value.trim();
		if (!role) return;
		const period = item.querySelector(".item-period").value.trim();
		const company = item.querySelector(".item-company").value.trim();
		const bullets = Array.from(item.querySelectorAll(".item-bullet"))
			.map((input) => input.value.trim())
			.filter(Boolean);

		const wrapper = document.createElement("div");
		wrapper.className = "cv-item";

		const heading = document.createElement("h3");
		heading.textContent = period ? `${role} | ${period}` : role;
		wrapper.appendChild(heading);

		if (company) {
			const companyEl = document.createElement("p");
			companyEl.textContent = company;
			wrapper.appendChild(companyEl);
		}

		if (bullets.length) {
			const list = document.createElement("ul");
			bullets.forEach((bullet) => {
				const li = document.createElement("li");
				li.textContent = bullet;
				list.appendChild(li);
			});
			wrapper.appendChild(list);
		}

		container.appendChild(wrapper);
	});
}

function renderEducation() {
	const section = byId("preview-education-section");
	const enabled = byId("education-toggle").checked;
	section.style.display = enabled ? "block" : "none";

	const container = byId("preview-education");
	container.innerHTML = "";
	if (!enabled) return;

	const items = Array.from(document.querySelectorAll("#education-list .item-card"));
	items.forEach((item) => {
		const course = item.querySelector(".item-title").value.trim();
		if (!course) return;
		const period = item.querySelector(".item-period").value.trim();
		const school = item.querySelector(".item-company").value.trim();

		const wrapper = document.createElement("div");
		wrapper.className = "cv-item";

		const heading = document.createElement("h3");
		heading.textContent = period ? `${course} | ${period}` : course;
		wrapper.appendChild(heading);

		if (school) {
			const schoolEl = document.createElement("p");
			schoolEl.textContent = school;
			wrapper.appendChild(schoolEl);
		}

		container.appendChild(wrapper);
	});
}

function renderSkills() {
	const section = byId("preview-skills-section");
	const enabled = byId("skills-toggle").checked;
	section.style.display = enabled ? "block" : "none";

	setText(byId("preview-skills-languages"), byId("skills-languages").value.trim());
	setText(byId("preview-skills-db"), byId("skills-db").value.trim());
	setText(byId("preview-skills-tools"), byId("skills-tools").value.trim());
	setText(byId("preview-skills-infra"), byId("skills-infra").value.trim());
}

function renderCerts() {
	const section = byId("preview-certs-section");
	const enabled = byId("certs-toggle").checked;
	section.style.display = enabled ? "block" : "none";

	const list = byId("preview-certs");
	list.innerHTML = "";
	if (!enabled) return;

	getLines(byId("certs").value).forEach((line) => {
		const li = document.createElement("li");
		li.textContent = line;
		list.appendChild(li);
	});
}

function renderSoft() {
	const section = byId("preview-soft-section");
	const enabled = byId("soft-toggle").checked;
	section.style.display = enabled ? "block" : "none";

	const list = byId("preview-soft");
	list.innerHTML = "";
	if (!enabled) return;

	getLines(byId("soft").value).forEach((line) => {
		const li = document.createElement("li");
		li.textContent = line;
		list.appendChild(li);
	});
}

function renderBasics() {
	setText(byId("preview-name"), byId("name").value, "Seu nome completo");
	setText(byId("preview-headline"), byId("headline").value, "Titulo profissional");
	renderContact();
}

function renderAll() {
	renderBasics();
	renderSummary();
	renderProjects();
	renderExperience();
	renderEducation();
	renderSkills();
	renderCerts();
	renderSoft();
}

function addItem(listId, templateId) {
	const list = byId(listId);
	const template = byId(templateId);
	const clone = template.content.firstElementChild.cloneNode(true);
	clone.querySelectorAll("input").forEach((input) => {
		input.addEventListener("input", renderAll);
	});
	clone.querySelectorAll(".remove-item").forEach((button) => {
		button.addEventListener("click", () => {
			clone.remove();
			renderAll();
		});
	});
	list.appendChild(clone);
}

function initBuilder() {
	addItem("projects-list", "project-template");
	addItem("experience-list", "experience-template");
	addItem("education-list", "education-template");

	[
		"name",
		"headline",
		"address",
		"email",
		"phone",
		"linkedin",
		"github",
		"summary",
		"skills-languages",
		"skills-db",
		"skills-tools",
		"skills-infra",
		"certs",
		"soft"
	].forEach((id) => {
		const input = byId(id);
		if (!input) return;
		input.addEventListener("input", renderAll);
	});

	["summary-toggle", "projects-toggle", "experience-toggle", "education-toggle", "skills-toggle", "certs-toggle", "soft-toggle"].forEach((id) => {
		const checkbox = byId(id);
		checkbox.addEventListener("change", renderAll);
	});

	byId("add-project").addEventListener("click", () => {
		addItem("projects-list", "project-template");
	});

	byId("add-experience").addEventListener("click", () => {
		addItem("experience-list", "experience-template");
	});

	byId("add-education").addEventListener("click", () => {
		addItem("education-list", "education-template");
	});

	byId("print-cv").addEventListener("click", () => {
		window.print();
	});

	byId("reset-cv").addEventListener("click", () => {
		if (!confirm("Deseja limpar todos os campos?")) return;
		document.querySelectorAll(".builder-form input, .builder-form textarea").forEach((el) => {
			el.value = "";
		});
		["summary-toggle", "projects-toggle", "experience-toggle", "education-toggle", "skills-toggle", "certs-toggle", "soft-toggle"].forEach((id) => {
			byId(id).checked = true;
		});
		document.querySelectorAll("#projects-list .item-card, #experience-list .item-card, #education-list .item-card").forEach((el) => el.remove());
		addItem("projects-list", "project-template");
		addItem("experience-list", "experience-template");
		addItem("education-list", "education-template");
		renderAll();
	});

	renderAll();
}

document.addEventListener("DOMContentLoaded", initBuilder);
