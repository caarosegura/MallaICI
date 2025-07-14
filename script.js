// Mapeo de los ramos y su estado
const ramos = [
  { id: 1, requisito: 'none', area: 'mathematics', aprobado: false },
  { id: 2, requisito: 'none', area: 'mathematics', aprobado: false },
  { id: 3, requisito: 'none', area: 'fisica', aprobado: false },
  { id: 4, requisito: 'none', area: 'industrial', aprobado: false },
  { id: 5, requisito: 'none', area: 'institucional', aprobado: false },
  { id: 6, requisito: 1, area: 'mathematics', aprobado: false },
  { id: 7, requisito: 2, area: 'mathematics', aprobado: false },
  { id: 8, requisito: 'none', area: 'fisica', aprobado: false },
  { id: 9, requisito: 4, area: 'industrial', aprobado: false },
  { id: 10, requisito: 'none', area: 'institucional', aprobado: false },
  { id: 11, requisito: 'none', area: 'institucional', aprobado: false },
];

// Función para actualizar los ramos visualmente
function actualizarRamos() {
  const ramoElements = document.querySelectorAll('.ramo');
  ramoElements.forEach(element => {
    const ramoId = parseInt(element.getAttribute('data-id'));
    const ramo = ramos.find(r => r.id === ramoId);

    // Actualiza el color de área
    element.classList.remove('mathematics', 'fisica', 'quimica', 'industrial', 'institucional');
    element.classList.add(ramo.area);

    // Cambia el estado (bloqueado/desbloqueado)
    if (ramo.aprobado) {
      element.classList.remove('bloqueado');
      element.classList.add('desbloqueado');
      element.style.opacity = 1; // Totalmente visible
    } else {
      element.classList.add('bloqueado');
      element.style.opacity = 0.3; // Un poco transparente
    }
  });
}

// Función para aprobar un ramo
function aprobarRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  if (ramo && (ramo.requisito === 'none' || ramos[ramo.requisito - 1].aprobado)) {
    ramo.aprobado = true; // Marca como aprobado
    actualizarRamos();
  }
}

// Asocia los botones con la función de aprobar
document.getElementById('aprobarRamo1').addEventListener('click', () => aprobarRamo(1));
document.getElementById('aprobarRamo2').addEventListener('click', () => aprobarRamo(2));
document.getElementById('aprobarRamo3').addEventListener('click', () => aprobarRamo(3));
document.getElementById('aprobarRamo4').addEventListener('click', () => aprobarRamo(4));
document.getElementById('aprobarRamo5').addEventListener('click', () => aprobarRamo(5));
document.getElementById('aprobarRamo6').addEventListener('click', () => aprobarRamo(6));
document.getElementById('aprobarRamo7').addEventListener('click', () => aprobarRamo(7));
document.getElementById('aprobarRamo8').addEventListener('click', () => aprobarRamo(8));
document.getElementById('aprobarRamo9').addEventListener('click', () => aprobarRamo(9));
document.getElementById('aprobarRamo10').addEventListener('click', () => aprobarRamo(10));
document.getElementById('aprobarRamo11').addEventListener('click', () => aprobarRamo(11));

// Inicializa la malla
actualizarRamos();
