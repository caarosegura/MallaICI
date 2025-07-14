const contenedor = document.getElementById("malla");
const contador = document.getElementById("creditos");

let creditosAprobados = 0;

const estadoRamos = {};

function renderMalla() {
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.id = ramo.id;
    div.innerText = ramo.nombre;
    if (ramo.color === "verde") div.classList.add("verde");
    estadoRamos[ramo.id] = { aprobado: false, elemento: div };
    contenedor.appendChild(div);
  });
  actualizarDisponibilidad();
}

function actualizarDisponibilidad() {
  ramos.forEach(ramo => {
    const { id, prereq = [], prereq_creditos = 0 } = ramo;
    const aprobado = estadoRamos[id].aprobado;
    if (aprobado) return;

    const prereqCumplido = prereq.every(pr => estadoRamos[pr]?.aprobado);
    const creditosCumplidos = creditosAprobados >= prereq_creditos;

    if (prereqCumplido && creditosCumplidos) {
      estadoRamos[id].elemento.classList.add("desbloqueado");
      estadoRamos[id].elemento.onclick = () => aprobarRamo(id);
    }
  });
}

function aprobarRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  const estado = estadoRamos[id];

  if (estado.aprobado) return;

  estado.aprobado = true;
  estado.elemento.classList.remove("desbloqueado");
  estado.elemento.classList.add("aprobado");
  estado.elemento.onclick = null;

  creditosAprobados += ramo.creditos;
  contador.innerText = `Créditos SCT aprobados: ${creditosAprobados}`;

  actualizarDisponibilidad();
}

renderMalla();
