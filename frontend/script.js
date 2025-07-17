// Importar coordenadas
import { coordenadasParadas } from './coordenadas.js';

// Definición de rutas
const rutas = [
  {
    nombre: "Flota Angulo",
    paradas: [
      "Terminal (Calle 8 No. 41n-70)", "Calle 8", "Carrera 43", "Carrera 42F", "Calle 84B", "Carrera 43", "Avenida Circunvalar", "Carrera 43 (Alameda Del Río)", "Calle 112", "Carrera 43B", "Calle 114", "Carrera 43B", "Calle 112", "Carrera 43B", "Calle 114", "Carrera 43", "Calle 112", "Carrera 42", "Calle 113", "Carrera 41G", "Calle 115", "Carrera 43", "Calle 118", "Carrera 43", "Calle 123", "Carrera 37", "Calle 114", "Carrera 108", "Calle 107", "Carrera 35B", "Calle 100", "Carrera 34", "Calle 87", "Carrera 36", "Calle 100", "Carrera 38", "Calle 84B", "Carrera 42A3", "Calle 8", "Carrera 42B1", "Calle 93", "Carrera 42C", "Calle 96", "Carrera 42H", "Calle 82", "Carrera 42F", "Calle 74", "Carrera 42F", "Calle 8", "Terminal (Calle 8 No. 41N-70)"
    ]
  },
  {
    nombre: "Cootrantico Lucero San Felipe",
    paradas: [
      "Terminal (Calle 5 Carrera 43)", "Carrera 43", "Calle 30", "Carrera 40", "Calle 37", "Carrera 33", "Calle 55", "Carrera 27", "Calle 56", "Carrera 25", "Calle 58", "Carrera 21B", "Calle 58", "Carrera 15", "Calle 60", "Carrera 10", "Calle 63B", "Carrera 09", "Calle 87", "Carrera 09G", "Calle 70C", "Carrera 14B", "Carrera 15", "Calle 64C", "Carrera 14", "Calle 63", "Carrera 15", "Calle 64B", "Carrera 21B", "Calle 68", "Carrera 26D", "Calle 70B", "Carrera 31", "Calle 56", "Carrera 32", "Calle 55", "Carrera 33", "Calle 52", "Carrera 41", "Calle 36", "Carrera 44", "Calle 06", "Carrera 43", "Terminal (Calle 005)"
    ]
  },
  {
    nombre: "Flota Roja",
    paradas: [
      "Nevada Frente a la Escuela de Policía", "Avenida Circunvalar", "Avenida El Platanal", "Calle 45", "Carrera 24", "Avenida Murillo", "Avenida Circunvalar", "Barranquilla", "Boulevard de Simón Bolívar", "Carrera 7", "Calle 24", "Carrera 10", "Calle 30", "Carrera 39", "Calle 38", "Carrera 43", "Calle 84", "Carrera 64", "Calle 85", "Carrera 44", "Calle 70", "Carrera 41", "Calle 37", "Carrera 40", "Calle 30", "Carrera 15", "Calle 24", "Carrera 7", "Boulevard de Simón Bolívar", "Avenida Circunvalar", "Retorno Escuela de Policía", "Avenida Circunvalar", "Nevada Frente a la Escuela de Policía"
    ]
  },
  {
    nombre: "Embusa",
    paradas: [
      "Terminal (Calle 8 No. 41N-70)", "Calle 8", "Carrera 43", "Calle 30", "Carrera 39", "Calle 28", "Carrera 38", "Calle 4", "Carrera 30", "Calle 17", "Carrera 15", "Calle 30", "Carrera 8", "Calle 51B", "Carrera 8F", "Calle 50A", "Carrera 10", "Calle 54", "Carrera 14", "Calle 53D", "Carrera 25", "Calle 57", "Carrera 27", "Calle 53D", "Carrera 33", "Calle 52", "Carrera 43", "Calle 53", "Carrera 53", "Calle 64", "Carrera 58", "Calle 77", "Vía 40", "Calle 75", "Carrera 68", "Calle 74", "Carrera 61", "Calle 68", "Carrera 66", "Calle 52", "Carrera 54", "Calle 58", "Calle 59", "Carrera 50", "Calle 54", "Carrera 33", "Calle 57", "Carrera 25", "Calle 53D", "Carrera 16", "Calle 46", "Calle 54", "Carrera 10", "Calle 50A", "Carrera 8F", "Calle 51B", "Carrera 8", "Calle 30", "Carrera 15", "Calle 17", "Carrera 30", "Calle 4", "Carrera 38", "Calle 30", "Carrera 44", "Calle 8", "Terminal (Calle 8 No. 41N-70)"
    ]
  }
];

// Unir todas las paradas únicas para los selects
const todasParadas = [...new Set(rutas.flatMap(r => r.paradas))];

// Iconos SVG inline para inicio, fin e intermedios
const iconInicio = L.divIcon({
  className: '',
  html: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='41' viewBox='0 0 32 41'><path fill='#34a853' stroke='#222' stroke-width='1.5' d='M16 2C8.27 2 2 8.27 2 16c0 8.5 11.1 22.1 13.1 24.5.5.6 1.3.6 1.8 0C18.9 38.1 30 24.5 30 16c0-7.73-6.27-14-14-14zm0 20a6 6 0 1 1 0-12 6 6 0 0 1 0 12z'/></svg>`,
  iconSize: [32, 41],
  iconAnchor: [16, 41],
  popupAnchor: [0, -36]
});
const iconFin = L.divIcon({
  className: '',
  html: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='41' viewBox='0 0 32 41'><path fill='#ea4335' stroke='#222' stroke-width='1.5' d='M16 2C8.27 2 2 8.27 2 16c0 8.5 11.1 22.1 13.1 24.5.5.6 1.3.6 1.8 0C18.9 38.1 30 24.5 30 16c0-7.73-6.27-14-14-14zm0 20a6 6 0 1 1 0-12 6 6 0 0 1 0 12z'/></svg>`,
  iconSize: [32, 41],
  iconAnchor: [16, 41],
  popupAnchor: [0, -36]
});
const iconIntermedio = L.divIcon({
  className: '',
  html: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='41' viewBox='0 0 32 41'><path fill='#4285f4' stroke='#222' stroke-width='1.5' d='M16 2C8.27 2 2 8.27 2 16c0 8.5 11.1 22.1 13.1 24.5.5.6 1.3.6 1.8 0C18.9 38.1 30 24.5 30 16c0-7.73-6.27-14-14-14zm0 20a6 6 0 1 1 0-12 6 6 0 0 1 0 12z'/></svg>`,
  iconSize: [32, 41],
  iconAnchor: [16, 41],
  popupAnchor: [0, -36]
});

let map, routeLayer;

function inicializarMapa() {
  map = L.map('map').setView([10.9930, -74.7960], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

function mostrarParadasEnMapa(paradas) {
  if (!map) inicializarMapa();
  if (routeLayer) {
    map.removeLayer(routeLayer);
    routeLayer = null;
  }
  if (map._paradaMarkers) {
    map._paradaMarkers.forEach(m => map.removeLayer(m));
  }
  map._paradaMarkers = [];
  const puntos = paradas
    .map(p => coordenadasParadas[p])
    .filter(Boolean);
  if (puntos.length === 0) {
    map.setView([10.9930, -74.7960], 12);
    return;
  }
  puntos.forEach((punto, idx) => {
    let icon = iconIntermedio;
    let popup = paradas[idx];
    if (idx === 0) {
      icon = iconInicio;
      popup = `Inicio: ${paradas[idx]}`;
    } else if (idx === puntos.length - 1) {
      icon = iconFin;
      popup = `Fin: ${paradas[idx]}`;
    }
    const marker = L.marker(punto, {icon, title: paradas[idx]}).addTo(map);
    marker.bindPopup(popup);
    map._paradaMarkers.push(marker);
  });
  map.fitBounds(L.latLngBounds(puntos), {padding: [30, 30]});
}

const TIEMPO_POR_PARADA_MIN = 2; // minutos por parada

document.addEventListener('DOMContentLoaded', () => {
  const origenSelect = document.getElementById('origen-select');
  const destinoSelect = document.getElementById('destino-select');
  const resultadoDiv = document.getElementById('resultado');
  const form = document.getElementById('bus-form');

  // Llenar selects
  todasParadas.forEach(parada => {
    const opt1 = document.createElement('option');
    opt1.value = parada;
    opt1.textContent = parada;
    origenSelect.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = parada;
    opt2.textContent = parada;
    destinoSelect.appendChild(opt2);
  });

  inicializarMapa();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let origen = origenSelect.value || document.getElementById('origen-text').value.trim();
    let destino = destinoSelect.value || document.getElementById('destino-text').value.trim();

    let html = '';
    let trayectoMostrado = false;

    if (!origen || !destino) {
      resultadoDiv.innerHTML = '<div class="result-card"><span class="tipo">Por favor selecciona o escribe origen y destino.</span></div>';
      mostrarParadasEnMapa([]);
      return;
    }
    if (origen === destino) {
      resultadoDiv.innerHTML = '<div class="result-card"><span class="tipo">El origen y destino no pueden ser iguales.</span></div>';
      mostrarParadasEnMapa([]);
      return;
    }

    // Buscar buses que sirvan (origen antes que destino en la ruta)
    const rutasQueSirven = rutas.filter(ruta => {
      const idxOrigen = ruta.paradas.indexOf(origen);
      const idxDestino = ruta.paradas.indexOf(destino);
      return idxOrigen !== -1 && idxDestino !== -1 && idxOrigen < idxDestino;
    });

    rutasQueSirven.forEach(ruta => {
      const idxOrigen = ruta.paradas.indexOf(origen);
      const idxDestino = ruta.paradas.indexOf(destino);
      const trayecto = ruta.paradas.slice(idxOrigen, idxDestino + 1);
      const numParadas = trayecto.length - 1;
      const tiempoEstimado = numParadas * TIEMPO_POR_PARADA_MIN;
      html += `<div class="result-card">
        <div class="bus-title">${ruta.nombre}</div>
        <div class="trayecto">Paradas: <b>${trayecto.length}</b><br>${trayecto.map(p => `• ${p}`).join('<br>')}</div>
        <div class="tipo">Este bus te sirve. Tiempo estimado: <b>${tiempoEstimado} minutos</b> (${numParadas} paradas)</div>
      </div>`;
      if (!trayectoMostrado) {
        mostrarParadasEnMapa(trayecto);
        trayectoMostrado = true;
      }
    });

    if (rutasQueSirven.length === 0) {
      html = '<div class="result-card"><span class="tipo">No se encontró ningún bus que pase por ambos puntos en orden.</span></div>';
      mostrarParadasEnMapa([]);
    }

    resultadoDiv.innerHTML = html;
  });
}); 