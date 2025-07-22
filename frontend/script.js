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


const TIEMPO_POR_PARADA_MIN = 2; // minutos por parada


// Datos de ejemplo
const mockUser = {
    email: 'gabrielacacosta31@email.com',
    password: '12345678',
    nombre: 'gabrielacacosta31'
};

const mockDestinos = [
    { nombre: 'Terminal Norte', tipo: 'Transporte' },
    { nombre: 'Centro Comercial Portal', tipo: 'Comercio' },
    { nombre: 'Universidad del Norte', tipo: 'Educación' },
    { nombre: 'Malecón del Río', tipo: 'Turismo' },
    { nombre: 'Aeropuerto Ernesto Cortissoz', tipo: 'Transporte' },
    { nombre: 'Estadio Metropolitano', tipo: 'Deportes' },
];

const mockNoticias = [
    {
        titulo: 'Demoras en Ruta R1 por tráfico intenso',
        descripcion: 'Se reportan demoras de 15-20 minutos en la Ruta R1 debido a congestión vehicular en la Avenida Principal.',
        hace: 'Hace 4358 horas',
        estimado: '2 horas estimadas',
        lugar: 'Avenida Principal',
        rutas: ['R1', 'R3'],
        tipo: 'Demora'
    },
    {
        titulo: 'Paro parcial programado para mañana',
        descripcion: 'Los trabajadores del transporte público han programado un paro parcial de 6:00 AM a 10:00 AM.',
        hace: 'Hace 4359 horas',
        estimado: '4 horas',
        lugar: 'Toda la ciudad',
        rutas: ['R1', 'R2', 'R5', 'R7'],
        tipo: 'Paro'
    },
    {
        titulo: 'Desvío temporal en Ruta R15',
        descripcion: 'Debido a obras en la Calle Central, la Ruta R15 tomará un desvío temporal por la Avenida Norte.',
        hace: 'Hace 4360 horas',
        estimado: '1 semana',
        lugar: 'Calle Central',
        rutas: ['R15'],
        tipo: 'Desvío'
    },
    {
        titulo: 'Mantenimiento nocturno en Terminal Sur',
        descripcion: 'Se realizará mantenimiento en las instalaciones del Terminal Sur entre las 12:00 AM y 5:00 AM.',
        hace: 'Hace 4361 horas',
        estimado: '5 horas',
        lugar: 'Terminal Sur',
        rutas: ['R7', 'R8', 'R9'],
        tipo: 'Mantenimiento'
    },
];

const mockNotificaciones = [
    {
        titulo: 'Bus R1 llegando pronto',
        descripcion: 'Tu bus llegará a la Parada Plaza Mayor en 3 minutos',
        hace: 'Hace 4357 horas',
        tipo: 'Llegada',
        ruta: 'R1',
        leida: false
    },
    {
        titulo: 'Demora en Ruta R15',
        descripcion: 'La Ruta R15 presenta demoras de 10 minutos debido a tráfico',
        hace: 'Hace 4357 horas',
        tipo: 'Demora',
        ruta: 'R15',
        leida: false
    },
    {
        titulo: 'Cambio de ruta temporal',
        descripcion: 'La Ruta R7 tomará un desvío por obras en la Calle Central',
        hace: 'Hace 4358 horas',
        tipo: 'Alerta de Ruta',
        ruta: 'R7',
        leida: true
    },
    {
        titulo: 'Alerta de emergencia',
        descripcion: 'Suspensión temporal del servicio en Terminal Norte por emergencia',
        hace: 'Hace 4359 horas',
        tipo: 'Emergencia',
        ruta: '',
        leida: true
    },
    {
        titulo: 'Actualización del sistema',
        descripcion: 'Nueva función de seguimiento en tiempo real disponible',
        hace: 'Hace 4360 horas',
        tipo: 'Sistema',
        ruta: '',
        leida: true
    },
];

const mockHistorial = {
    tiempoAhorrado: '2h 15min',
    viajesRealizados: 12,
    tips: [
        {
            ruta: 'R1',
            tipo: 'Horarios',
            texto: 'Para evitar multitudes, toma el bus después de las 9:30 AM. Mucho más cómodo.',
            fecha: '15 ene, 2025, 05:00',
            usuario: 'Usuario123',
            likes: 12
        },
        {
            ruta: 'R15',
            tipo: 'Rutas',
            texto: 'En la parada de la Universidad, espera en la parte trasera del andén. Es donde para el bus.',
            fecha: '14 ene, 2025, 10:30',
            usuario: 'Viajero',
            likes: 8
        }
    ]
};

// Persistencia de sesión
function setSession(loggedIn) {
    localStorage.setItem('busconnect_logged', loggedIn ? '1' : '0');
}
function isLogged() {
    return localStorage.getItem('busconnect_logged') === '1';
}

// SPA: renderizado y navegación
const app = document.getElementById('app');

function renderLogin() {
    setSession(false);
    app.innerHTML = `
    <div class="view-container">
        <div class="text-center mb-4">
            <div style="font-size: 2.8rem; color: #2563eb; margin-bottom: 10px;">🚌</div>
            <div style="font-size: 2rem; font-weight: 700;">BusConnect</div>
            <div style="color: #888; margin-top: 6px;">Inicia sesión en tu cuenta</div>
        </div>
        <form id="login-form">
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" required autocomplete="username">
            </div>
            <div class="input-group">
                <label for="password">Contraseña</label>
                <div style="position: relative;">
                    <input type="password" id="password" placeholder="********" required autocomplete="current-password" style="width: 100%;">
                    <span id="togglePassword" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; color: #888;">👁️</span>
                </div>
            </div>
            <button class="btn-primary" type="submit">Iniciar Sesión</button>
        </form>
        <div class="text-center mt-3">
            <a class="link" href="#">¿No tienes cuenta? Regístrate</a>
        </div>
    </div>
    `;
    // Mostrar/ocultar contraseña
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    togglePassword.addEventListener('click', () => {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
    // Login
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email === mockUser.email && password === mockUser.password) {
            setSession(true);
            renderMainLayout('buscar');
        } else {
            alert('Email o contraseña incorrectos');
        }
    });
}

function renderMainLayout(vista) {
    app.innerHTML = `
        <div class="sidebar">
            <div class="logo">🚌 BusConnect</div>
            <div style="text-align:center; color:#2563eb; font-size:0.98rem; margin-bottom: 18px;">Bienvenido, ${mockUser.nombre}</div>
            <nav>
                <button id="nav-buscar" class="${vista==='buscar'?'active':''}">Buscar</button>
                <button id="nav-noticias" class="${vista==='noticias'?'active':''}">Noticias</button>
                <button id="nav-notificaciones" class="${vista==='notificaciones'?'active':''}">Notificaciones <span id="notif-badge" style="background:#f43f5e;color:#fff;border-radius:8px;padding:1px 7px;font-size:0.9em;display:${mockNotificaciones.filter(n=>!n.leida).length?'inline':'none'};margin-left:6px;">${mockNotificaciones.filter(n=>!n.leida).length}</span></button>
                <button id="nav-historial" class="${vista==='historial'?'active':''}">Historial</button>
            </nav>
            <div style="flex:1"></div>
            <button id="logout-btn" style="margin: 0 32px 0 32px; background:#f3f6fb; color:#2563eb; border-radius:8px; border:none; padding:10px 0; font-weight:600; cursor:pointer;">Salir</button>
        </div>
        <div class="main-content" id="main-content"></div>
    `;
    document.getElementById('nav-buscar').onclick = () => renderMainLayout('buscar');
    document.getElementById('nav-noticias').onclick = () => renderMainLayout('noticias');
    document.getElementById('nav-notificaciones').onclick = () => renderMainLayout('notificaciones');
    document.getElementById('nav-historial').onclick = () => renderMainLayout('historial');
    document.getElementById('logout-btn').onclick = () => { setSession(false); renderLogin(); };
    // Renderizar la vista seleccionada
    if (vista === 'buscar') renderBuscar();
    if (vista === 'noticias') renderNoticias();
    if (vista === 'notificaciones') renderNotificaciones();
    if (vista === 'historial') renderHistorial();
}

function renderBuscar() {
    document.getElementById('main-content').innerHTML = `
        <div style="background:#eaf1ff;padding:24px 24px 16px 24px;border-radius:16px;">
            <div style="font-size:1.2rem;font-weight:600;">Buscar Rutas en Barranquilla</div>
            <div style="color:#666; font-size:1rem; margin-bottom:12px;">Encuentra la mejor ruta para llegar a tu destino. Más de 50 rutas disponibles en la ciudad.</div>
            <form id="buscar-form" style="display:flex;gap:10px;align-items:center;">
                <input type="text" id="destino-input" placeholder="¿A dónde quieres ir? (ej: Universidad, Terminal Norte, Centro...)" style="flex:1;padding:10px 12px;border-radius:8px;border:1px solid #d1d5db;font-size:1rem;">
                <button class="btn-primary" style="width:auto;padding:10px 24px;" type="submit">Buscar</button>
            </form>
            <div style="margin-top:18px;font-weight:600;">Destinos populares</div>
            <div style="display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:8px;">
                ${mockDestinos.map(d=>`<div class='destino-popular' data-destino='${d.nombre}' style="background:#fff;border-radius:8px;padding:10px 18px;box-shadow:0 1px 6px #0001;min-width:170px;display:flex;align-items:center;gap:10px;font-size:1rem;cursor:pointer;"><span style="font-size:1.3em;">${d.tipo==='Transporte'?'🚌':d.tipo==='Comercio'?'🏬':d.tipo==='Educación'?'🎓':d.tipo==='Turismo'?'🌅':'🏟️'}</span><div><div style="font-weight:600;">${d.nombre}</div><div style="font-size:0.93em;color:#888;">${d.tipo}</div></div></div>`).join('')}
            </div>
            <div style="margin-top:18px;font-weight:600;">Búsquedas rápidas:</div>
            <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
                <button type="button" class="btn-quick" style="background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Centro</button>
                <button type="button" class="btn-quick" style="background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Universidad</button>
                <button type="button" class="btn-quick" style="background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Aeropuerto</button>
                <button type="button" class="btn-quick" style="background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Terminal</button>
                <button type="button" class="btn-quick" style="background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Malecón</button>
                <button type="button" class="btn-quick" style="background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Estadio</button>
            </div>
            <div id="sugerencias" style="margin-top:18px;"></div>
        </div>
        <div id="detalle-ruta" style="margin-top:24px;"></div>
        <div id="map" style="display:none;"></div>
        <div style="margin-top:24px;background:#eafdf6;padding:18px 24px;border-radius:12px;">
            <div style="font-weight:600; color:#16a34a;">¿Cómo usar BusConnect?</div>
            <ul style="margin:8px 0 0 18px; color:#222;">
                <li>Ingresa tu destino en el buscador</li>
                <li>Selecciona una de las rutas sugeridas</li>
                <li>Ve los detalles en el mapa interactivo</li>
                <li>Recibe notificaciones de llegada en tiempo real</li>
            </ul>
        </div>
    `;
    // Búsqueda rápida
    document.querySelectorAll('.btn-quick').forEach(btn => {
        btn.onclick = () => {
            document.getElementById('destino-input').value = btn.textContent;
        };
    });
    // Destinos populares
    document.querySelectorAll('.destino-popular').forEach(div => {
        div.onclick = () => {
            document.getElementById('destino-input').value = div.dataset.destino;
        };
    });
    // Buscar
    document.getElementById('buscar-form').onsubmit = e => {
        e.preventDefault();
        const destino = document.getElementById('destino-input').value.trim().toLowerCase();
        if (!destino) {
            document.getElementById('sugerencias').innerHTML = '<div style="color:#f43f5e;">Por favor ingresa un destino.</div>';
            return;
        }
        // Buscar rutas que pasen por ese destino
        const rutas = rutas.filter(ruta => ruta.paradas.some(p => p.toLowerCase().includes(destino)));
        if (rutas.length === 0) {
            document.getElementById('sugerencias').innerHTML = '<div style="color:#f43f5e;">No se encontraron rutas para ese destino.</div>';
            return;
        }
        document.getElementById('sugerencias').innerHTML = rutas.map((ruta, idx) =>
            `<div class='sugerida' data-idx='${idx}' style='background:#fff;border-radius:10px;padding:14px 18px 10px 18px;margin-bottom:12px;box-shadow:0 1px 6px #0001;cursor:pointer;'>
                <div style='font-weight:600;font-size:1.08em;'>${ruta.nombre}</div>
                <div style='color:#888;font-size:0.97em;'>Paradas: ${ruta.paradas.map(p=>p).join(' → ')}</div>
                <div style='color:#2563eb;font-size:0.97em;margin-top:4px;'>Ver detalles y mapa</div>
            </div>`
        ).join('');
        // Selección de ruta sugerida
        document.querySelectorAll('.sugerida').forEach(div => {
            div.onclick = () => {
                const idx = parseInt(div.dataset.idx);
                mostrarDetalleRuta(rutas[idx]);
            };
        });
    };
}

function renderNoticias() {
    document.getElementById('main-content').innerHTML = `
        <div style="background:#eaf1ff;padding:24px 24px 16px 24px;border-radius:16px;">
            <div style="font-size:1.2rem;font-weight:600;">Noticias y Actualizaciones</div>
            <div style="color:#666; font-size:1rem; margin-bottom:12px;">Última actualización: 20:00:51</div>
            ${mockNoticias.map(n=>`
                <div style="background:#fff;border-radius:12px;padding:18px 18px 12px 18px;box-shadow:0 1px 6px #0001;margin-bottom:16px;border-left:5px solid ${n.tipo==='Demora'?'#facc15':n.tipo==='Paro'?'#f43f5e':n.tipo==='Desvío'?'#38bdf8':'#a78bfa'};">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="font-weight:600;font-size:1.08em;">${n.titulo}</div>
                        <span style="background:${n.tipo==='Demora'?'#facc15':n.tipo==='Paro'?'#f43f5e':n.tipo==='Desvío'?'#38bdf8':'#a78bfa'};color:#fff;padding:2px 10px;border-radius:8px;font-size:0.93em;margin-left:8px;">${n.tipo}</span>
                    </div>
                    <div style="color:#444;margin:6px 0 8px 0;">${n.descripcion}</div>
                    <div style="display:flex;gap:18px;color:#888;font-size:0.97em;align-items:center;flex-wrap:wrap;">
                        <span>🕒 ${n.hace}</span>
                        <span>⏳ ${n.estimado}</span>
                        <span>📍 ${n.lugar}</span>
                        <span>Rutas afectadas: ${n.rutas.map(r=>`<span style='background:#eaf1ff;color:#2563eb;padding:2px 8px;border-radius:6px;margin-left:2px;'>${r}</span>`).join('')}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderNotificaciones() {
    document.getElementById('main-content').innerHTML = `
        <div style="background:#eaf1ff;padding:24px 24px 16px 24px;border-radius:16px;">
            <div style="font-size:1.2rem;font-weight:600;">Notificaciones <span style='color:#f43f5e;font-size:0.95em;'>${mockNotificaciones.filter(n=>!n.leida).length?'2 nuevas':''}</span></div>
            <div style="color:#666; font-size:1rem; margin-bottom:12px;">Mantente al día con las últimas actualizaciones</div>
            <button id="marcar-leidas" style="float:right;margin-bottom:10px;background:#f3f6fb;color:#2563eb;border:none;border-radius:8px;padding:7px 18px;font-weight:600;cursor:pointer;">Marcar todas como leídas</button>
            <div style="clear:both"></div>
            ${mockNotificaciones.map((n,i)=>`
                <div style="background:${!n.leida?'#eaf1ff':'#fff'};border-radius:12px;padding:18px 18px 12px 18px;box-shadow:0 1px 6px #0001;margin-bottom:16px;border-left:5px solid ${n.tipo==='Demora'?'#facc15':n.tipo==='Emergencia'?'#f43f5e':n.tipo==='Alerta de Ruta'?'#facc15':n.tipo==='Llegada'?'#22c55e':'#a78bfa'};">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="font-weight:600;font-size:1.08em;">${n.titulo}</div>
                        <span style="background:${n.tipo==='Demora'?'#facc15':n.tipo==='Emergencia'?'#f43f5e':n.tipo==='Alerta de Ruta'?'#facc15':n.tipo==='Llegada'?'#22c55e':'#a78bfa'};color:#fff;padding:2px 10px;border-radius:8px;font-size:0.93em;margin-left:8px;">${n.tipo}</span>
                        ${!n.leida?'<span style="margin-left:8px;color:#2563eb;font-size:1.1em;">●</span>':''}
                    </div>
                    <div style="color:#444;margin:6px 0 8px 0;">${n.descripcion}</div>
                    <div style="display:flex;gap:18px;color:#888;font-size:0.97em;align-items:center;flex-wrap:wrap;">
                        <span>🕒 ${n.hace}</span>
                        ${n.ruta?`<span style='background:#eaf1ff;color:#2563eb;padding:2px 8px;border-radius:6px;margin-left:2px;'>${n.ruta}</span>`:''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('marcar-leidas').onclick = () => {
        mockNotificaciones.forEach(n=>n.leida=true);
        renderMainLayout('notificaciones');
    };
}

function renderHistorial(tab = 'historial') {
    // Datos mock de viajes realizados
    const viajes = [
        {
            ruta: 'R1',
            nombre: 'Centro - Terminal Norte',
            fecha: '16 ene 2025, 04:30',
            desde: 'Plaza Mayor',
            hasta: 'Terminal Norte',
            calificacion: 4,
            precio: 2.5,
            duracion: '45 min'
        },
        {
            ruta: 'R15',
            nombre: 'Universidad - Aeropuerto',
            fecha: '15 ene 2025, 09:20',
            desde: 'Universidad Central',
            hasta: 'Aeropuerto',
            calificacion: 5,
            precio: 3.0,
            duracion: '1h 15min'
        }
    ];
    // Datos mock de reportes
    const reportes = [
        {
            fecha: '16 ene 2025, 05:00',
            ruta: 'R1',
            descripcion: 'Retraso de 20 minutos por tráfico en la Av. Principal.',
            estado: 'Pendiente'
        },
        {
            fecha: '15 ene 2025, 10:00',
            ruta: 'R15',
            descripcion: 'El bus no se detuvo en la parada Universidad.',
            estado: 'Resuelto'
        }
    ];
    // Tips de la comunidad
    const tips = [
        {
            ruta: 'R1',
            tipo: 'Horarios',
            texto: 'Para evitar multitudes, toma el bus después de las 9:30 AM. Mucho más cómodo.',
            fecha: '15 ene, 2025, 05:00',
            usuario: 'Usuario123',
            likes: 12
        },
        {
            ruta: 'R15',
            tipo: 'Rutas',
            texto: 'En la parada de la Universidad, espera en la parte trasera del andén. Es donde para el bus.',
            fecha: '14 ene, 2025, 10:30',
            usuario: 'Viajero',
            likes: 8
        }
    ];
    // Renderizado de pestañas
    document.getElementById('main-content').innerHTML = `
        <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;">
            <div style="min-width:180px;max-width:220px;width:100%;display:flex;flex-direction:column;gap:18px;">
                <div style="background:#eaf1ff;padding:18px 18px 12px 18px;border-radius:12px;">
                    <div style="color:#2563eb;font-weight:600;">Tiempo ahorrado</div>
                    <div style="font-size:1.3em;font-weight:700;">2h 15min</div>
                    <div style="color:#888;font-size:0.97em;">Esta semana</div>
                </div>
                <div style="background:#eafdf6;padding:18px 18px 12px 18px;border-radius:12px;">
                    <div style="color:#16a34a;font-weight:600;">Viajes realizados</div>
                    <div style="font-size:1.3em;font-weight:700;">12</div>
                    <div style="color:#888;font-size:0.97em;">Este mes</div>
                </div>
            </div>
            <div style="flex:1;min-width:320px;">
                <div style="background:#fff;padding:24px 24px 16px 24px;border-radius:16px;">
                    <div style="font-size:1.2rem;font-weight:600;">Mi Historial</div>
                    <div style="color:#666; font-size:1rem; margin-bottom:12px;">Revisa tus viajes, califica rutas y comparte tu experiencia</div>
                    <div style="display:flex;gap:18px;margin-bottom:18px;">
                        <button id="tab-historial" class="btn-quick" style="background:${tab==='historial'?'#2563eb':'#eaf1ff'};color:${tab==='historial'?'#fff':'#2563eb'};border:none;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Historial</button>
                        <button id="tab-reportes" class="btn-quick" style="background:${tab==='reportes'?'#2563eb':'#eaf1ff'};color:${tab==='reportes'?'#fff':'#2563eb'};border:none;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Reportes</button>
                        <button id="tab-tips" class="btn-quick" style="background:${tab==='tips'?'#2563eb':'#eaf1ff'};color:${tab==='tips'?'#fff':'#2563eb'};border:none;border-radius:8px;padding:7px 18px;font-size:1em;cursor:pointer;">Tips</button>
                    </div>
                    <div id="tab-content">
                        ${tab === 'historial' ?
                            viajes.map(viaje => `
                                <div class=\"historial-card\">
                                    <div class=\"historial-header\">
                                        <span class=\"ruta-badge\">${viaje.ruta}</span>
                                        <span class=\"nombre\">${viaje.nombre}</span>
                                    </div>
                                    <div class=\"historial-info\">${viaje.fecha}</div>
                                    <div class=\"historial-locs\">
                                        <span><span style='font-size:1.1em;'>📍</span> Desde: ${viaje.desde}</span>
                                        <span><span style='font-size:1.1em;'>📍</span> Hasta: ${viaje.hasta}</span>
                                    </div>
                                    <div class=\"historial-footer\">
                                        <div class=\"calificacion\">
                                            <span>Calificación:</span>
                                            <span>
                                                ${[1,2,3,4,5].map(i => `<span class='${i<=viaje.calificacion?'':'star-off'}'>★</span>`).join('')}
                                            </span>
                                        </div>
                                        <div class=\"precio\">$${viaje.precio.toFixed(2)}</div>
                                        <div class=\"duracion\">${viaje.duracion}</div>
                                        <button class=\"btn-reportar\"><span style=\"font-size:1.1em;\">&#9432;</span> Reportar</button>
                                    </div>
                                </div>
                            `).join('') :
                        tab === 'reportes' ?
                            reportes.map(rep => `
                                <div class=\"historial-card\" style=\"border-left:5px solid ${rep.estado==='Pendiente'?'#facc15':'#16a34a'};\">
                                    <div class=\"historial-header\">
                                        <span class=\"ruta-badge\">${rep.ruta}</span>
                                        <span class=\"nombre\">${rep.descripcion}</span>
                                    </div>
                                    <div class=\"historial-info\">${rep.fecha}</div>
                                    <div style=\"margin-top:8px;display:flex;align-items:center;gap:12px;\">
                                        <span style=\"background:${rep.estado==='Pendiente'?'#facc15':'#16a34a'};color:#fff;padding:2px 10px;border-radius:8px;font-size:0.93em;\">${rep.estado}</span>
                                    </div>
                                </div>
                            `).join('') :
                        tips.map(tip => `
                            <div style=\"background:#f3f6fb;border-radius:10px;padding:14px 18px 10px 18px;margin-bottom:12px;\">
                                <div style=\"display:flex;align-items:center;gap:10px;margin-bottom:4px;\">
                                    <span style=\"background:#eaf1ff;color:#2563eb;padding:2px 8px;border-radius:6px;font-size:0.98em;\">${tip.ruta}</span>
                                    <span style=\"background:#eafdf6;color:#16a34a;padding:2px 8px;border-radius:6px;font-size:0.98em;\">${tip.tipo}</span>
                                </div>
                                <div style=\"color:#222;font-size:1em;margin-bottom:4px;\">${tip.texto}</div>
                                <div style=\"color:#888;font-size:0.97em;\">${tip.fecha} &nbsp;|&nbsp; por ${tip.usuario}</div>
                                <div style=\"margin-top:4px;color:#2563eb;font-size:1.1em;float:right;\">👍 ${tip.likes}</div>
                                <div style=\"clear:both\"></div>
                            </div>
                        `).join('')
                        }
                    </div>
                </div>
            </div>
        </div>
    `;
    // Eventos para pestañas
    document.getElementById('tab-historial').onclick = () => renderHistorial('historial');
    document.getElementById('tab-reportes').onclick = () => renderHistorial('reportes');
    document.getElementById('tab-tips').onclick = () => renderHistorial('tips');
}

function mostrarDetalleRuta(ruta) {
    document.getElementById('detalle-ruta').innerHTML = `
        <div style='background:#fff;border-radius:12px;padding:18px 18px 12px 18px;box-shadow:0 1px 6px #0001;'>
            <div style='font-weight:600;font-size:1.08em;'>${ruta.nombre}</div>
            <div style='color:#888;font-size:0.97em;'>Paradas:</div>
            <ul style='margin:8px 0 0 18px; color:#222;'>
                ${ruta.paradas.map(p=>`<li>${p}</li>`).join('')}
            </ul>
        </div>
    `;
    document.getElementById('map').style.display = 'block';
    setTimeout(() => mostrarMapaRuta(ruta), 100); // Espera a que el div esté visible
}

let mapInstance = null;
function mostrarMapaRuta(ruta) {
    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
    }
    mapInstance = L.map('map').setView([coordenadasParadas[ruta.paradas[0]][0], coordenadasParadas[ruta.paradas[0]][1]], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);
    const puntos = ruta.paradas.map(p => coordenadasParadas[p]);
    L.polyline(puntos, { color: '#2563eb', weight: 5 }).addTo(mapInstance);
    ruta.paradas.forEach((p, i) => {
        L.marker([coordenadasParadas[p][0], coordenadasParadas[p][1]]).addTo(mapInstance).bindPopup(`<b>${p}</b>` + (i === 0 ? ' (Inicio)' : i === ruta.paradas.length-1 ? ' (Fin)' : ''));
    });
}

// Inicializar SPA según sesión
if (isLogged()) {
    renderMainLayout('buscar');
} else {
    renderLogin();
} 