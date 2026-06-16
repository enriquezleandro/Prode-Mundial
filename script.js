/* ============================================================
   DATOS — Para actualizar: cargá el "result" y las "predictions"
   de cada partido. null = sin predicción. Todo lo demás se calcula.
   "iso" = código de país para la bandera (flagcdn).
   ============================================================ */

const TOTAL_PARTIDOS = 104;
const ULTIMA_ACTUALIZACION = "14 jun 2026";

const matches = [
  {
    home: { code: "MEX", name: "México", iso: "mx" },
    away: { code: "RSA", name: "Sudáfrica", iso: "za" },
    result: [2, 0],
    predictions: {
      "leandro enriquez": [2, 0], "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1],
      "Arturo Fabian Krauchuka": [0, 2], "José Pahr": [0, 1], "Sergio Villar": null
    }
  },
  {
    home: { code: "KOR", name: "Corea", iso: "kr" },
    away: { code: "CZE", name: "Chequia", iso: "cz" },
    result: [2, 1],
    predictions: {
      "leandro enriquez": [2, 1], "Arturo Fabian Krauchuka": [2, 1], "Sergio Villar": [1, 0],
      "Ezequiel Villalba": [1, 1], "Facundo Stij": [1, 1], "José Pahr": [1, 1]
    }
  },
  {
    home: { code: "CAN", name: "Canadá", iso: "ca" },
    away: { code: "BIH", name: "Bosnia", iso: "ba" },
    result: [1, 1],
    predictions: {
      "Facundo Stij": [1, 1], "Arturo Fabian Krauchuka": [1, 1], "Ezequiel Villalba": [2, 1],
      "leandro enriquez": [0, 1], "José Pahr": [1, 0], "Sergio Villar": [1, 0]
    }
  },
  {
    home: { code: "USA", name: "Estados Unidos", iso: "us" },
    away: { code: "PAR", name: "Paraguay", iso: "py" },
    result: [4, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [1, 0], "leandro enriquez": [2, 2],
      "Arturo Fabian Krauchuka": [0, 3], "José Pahr": [0, 2], "Sergio Villar": [0, 2]
    }
  },
  {
    home: { code: "QAT", name: "Qatar", iso: "qa" },
    away: { code: "SUI", name: "Suiza", iso: "ch" },
    result: [1, 1],
    predictions: {
      "José Pahr": [1, 1], "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2],
      "Arturo Fabian Krauchuka": [1, 0], "Sergio Villar": [0, 2], "leandro enriquez": null
    }
  },
  {
    home: { code: "BRA", name: "Brasil", iso: "br" },
    away: { code: "MAR", name: "Marruecos", iso: "ma" },
    result: [1, 1],
    predictions: {
      "Facundo Stij": [1, 1], "Ezequiel Villalba": [2, 1], "Arturo Fabian Krauchuka": [0, 1],
      "José Pahr": [2, 0], "Sergio Villar": [3, 0], "leandro enriquez": null
    }
  },
  {
    home: { code: "HAI", name: "Haití", iso: "ht" },
    away: { code: "SCO", name: "Escocia", iso: "gb-sct" },
    result: [0, 1],
    predictions: {
      "Ezequiel Villalba": [0, 1], "José Pahr": [0, 1], "Facundo Stij": [1, 2],
      "leandro enriquez": [0, 2], "Sergio Villar": [0, 0], "Arturo Fabian Krauchuka": null
    }
  },
  {
    home: { code: "AUS", name: "Australia", iso: "au" },
    away: { code: "TUR", name: "Turquía", iso: "tr" },
    result: [2, 0],
    predictions: {
      "leandro enriquez": [2, 1], "José Pahr": [1, 0], "Sergio Villar": [1, 0],
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2], "Arturo Fabian Krauchuka": [1, 2]
    }
  },
  {
    home: { code: "GER", name: "Alemania", iso: "de" },
    away: { code: "CUW", name: "Curazao", iso: "cw" },
    result: [7, 1],
    predictions: {
      "Ezequiel Villalba": [4, 0], "leandro enriquez": [3, 1], "José Pahr": [4, 0],
      "Sergio Villar": [4, 0], "Arturo Fabian Krauchuka": [0, 1], "Facundo Stij": null
    }
  },
  {
    home: { code: "NED", name: "Países Bajos", iso: "nl" },
    away: { code: "JPN", name: "Japón", iso: "jp" },
    result: [2, 2],
    predictions: {
      "Ezequiel Villalba": [1, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 1],
      "Arturo Fabian Krauchuka": [1, 2], "José Pahr": [0, 1], "Sergio Villar": [1, 0]
    }
  },
  {
    home: { code: "CIV", name: "Costa de Marfil", iso: "ci" },
    away: { code: "ECU", name: "Ecuador", iso: "ec" },
    result: [1, 0],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [1, 1], "leandro enriquez": [1, 2],
      "Arturo Fabian Krauchuka": null, "José Pahr": [1, 1], "Sergio Villar": [1, 2]
    }
  },
  {
    home: { code: "SWE", name: "Suecia", iso: "se" },
    away: { code: "TUN", name: "Túnez", iso: "tn" },
    result: [5, 1],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [2, 0], "leandro enriquez": [2, 1],
      "José Pahr": [1, 0], "Sergio Villar": [1, 0], "Arturo Fabian Krauchuka": [1, 1]
    }
  },
  {
    home: { code: "ESP", name: "España", iso: "es" },
    away: { code: "CPV", name: "Cabo Verde", iso: "cv" },
    result: [0, 0],
    predictions: {
      "Ezequiel Villalba": [6, 0], "Facundo Stij": [3, 0], "leandro enriquez": [4, 0],
      "Arturo Fabian Krauchuka": [2, 0], "José Pahr": [2, 0], "Sergio Villar": [2, 1]
    }
  },
  {
    home: { code: "BEL", name: "Bélgica", iso: "be" },
    away: { code: "EGY", name: "Egipto", iso: "eg" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 1],
      "Arturo Fabian Krauchuka": [1, 0], "José Pahr": [1, 0], "Sergio Villar": [2, 1]
    }
  },
  {
    home: { code: "KSA", name: "Arabia Saudita", iso: "sa" },
    away: { code: "URU", name: "Uruguay", iso: "uy" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [0, 2], "leandro enriquez": [1, 2],
      "Arturo Fabian Krauchuka": [2, 1], "José Pahr": [0, 2], "Sergio Villar": [1, 2]
    }
  }
];

/* Participantes y su color en el gráfico (todas las líneas, mismo trazo) */
const PARTICIPANTS = [
  { name: "leandro enriquez",         color: "#d92d20" },
  { name: "Facundo Stij",             color: "#2f9e54" },
  { name: "José Pahr",                color: "#1f7fe5" },
  { name: "Arturo Fabian Krauchuka",  color: "#9b7b6b" },
  { name: "Ezequiel Villalba",        color: "#a64bd6" },
  { name: "Sergio Villar",            color: "#e08a1e" }
];

/* ============================================================
   LÓGICA
   ============================================================ */
function outcome(a, b) { return a > b ? "H" : (a < b ? "A" : "D"); }
function pointsFor(pred, result) {
  if (!pred || !result) return 0;
  if (pred[0] === result[0] && pred[1] === result[1]) return 3;
  if (outcome(pred[0], pred[1]) === outcome(result[0], result[1])) return 1;
  return 0;
}
function flagSrc(iso, w) { return `https://flagcdn.com/${w}/${iso}.png`; }

/* Path con interpolación monótona (Fritsch-Carlson):
   curva suave pero sin overshoot — nunca sube ni baja de los valores reales. */
function smoothPath(pts) {
  const n = pts.length;
  if (n < 2) return n ? `M ${pts[0][0]} ${pts[0][1]}` : "";

  const xs = pts.map(p => p[0]);
  const ys = pts.map(p => p[1]);
  const dx = [], dy = [], slope = [];
  for (let i = 0; i < n - 1; i++) {
    dx[i] = xs[i + 1] - xs[i];
    dy[i] = ys[i + 1] - ys[i];
    slope[i] = dy[i] / dx[i];
  }

  // tangentes
  const m = new Array(n);
  m[0] = slope[0];
  m[n - 1] = slope[n - 2];
  for (let i = 1; i < n - 1; i++) {
    m[i] = (slope[i - 1] * slope[i] <= 0) ? 0 : (slope[i - 1] + slope[i]) / 2;
  }
  // ajuste para preservar monotonía
  for (let i = 0; i < n - 1; i++) {
    if (slope[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / slope[i], b = m[i + 1] / slope[i];
    const s = a * a + b * b;
    if (s > 9) {
      const t = 3 / Math.sqrt(s);
      m[i] = t * a * slope[i];
      m[i + 1] = t * b * slope[i];
    }
  }

  let d = `M ${xs[0].toFixed(1)} ${ys[0].toFixed(1)}`;
  for (let i = 0; i < n - 1; i++) {
    const c1x = xs[i] + dx[i] / 3, c1y = ys[i] + m[i] * dx[i] / 3;
    const c2x = xs[i + 1] - dx[i] / 3, c2y = ys[i + 1] - m[i + 1] * dx[i] / 3;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${xs[i + 1].toFixed(1)} ${ys[i + 1].toFixed(1)}`;
  }
  return d;
}

/* Estado de visibilidad por participante */
const visible = {};
PARTICIPANTS.forEach(p => visible[p.name] = true);

/* ---------- Progreso del torneo (header) ---------- */
function renderProgress() {
  const played = matches.filter(m => m.result !== null).length;
  document.getElementById("progressCount").textContent = played;
  document.getElementById("progressFill").style.width = (played / TOTAL_PARTIDOS * 100) + "%";
}

/* ---------- Gráfico de evolución ---------- */
function renderChart() {
  const played = matches.filter(m => m.result !== null);
  const n = played.length;
  const W = 1000, H = 560, padL = 46, padR = 24, padT = 24, padB = 46;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const xStep = n > 1 ? plotW / (n - 1) : 0;

  const series = PARTICIPANTS.map(p => {
    let acc = 0;
    const pts = played.map(m => { acc += pointsFor(m.predictions[p.name], m.result); return acc; });
    return { ...p, pts, total: acc };
  });

  const maxData = Math.max(10, ...series.map(s => s.total));
  const maxY = Math.ceil(maxData / 2) * 2;
  const xFor = i => padL + i * xStep;
  const yFor = v => padT + plotH - (v / maxY) * plotH;

  let svg = "";
  for (let v = 0; v <= maxY; v += 2) {
    const y = yFor(v);
    svg += `<line class="gridline" x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}"/>`;
    svg += `<text x="${padL - 10}" y="${y + 4}" text-anchor="end">${v}</text>`;
  }
  svg += `<line class="axis" x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}"/>`;
  played.forEach((m, i) => {
    svg += `<text x="${xFor(i)}" y="${H - padB + 26}" text-anchor="middle" font-size="12">${m.home.code}-${m.away.code}</text>`;
  });
  series.forEach(s => {
    if (!visible[s.name]) return;
    const coords = s.pts.map((v, i) => [xFor(i), yFor(v)]);
    svg += `<path d="${smoothPath(coords)}" fill="none" stroke="${s.color}" stroke-width="3"
            stroke-linejoin="round" stroke-linecap="round"/>`;
  });
  series.forEach(s => {
    if (!visible[s.name]) return;
    s.pts.forEach((v, i) => {
      svg += `<circle cx="${xFor(i)}" cy="${yFor(v)}" r="5" fill="${s.color}">
              <title>${s.name} · ${played[i].home.code}-${played[i].away.code}: ${v} pts</title></circle>`;
    });
  });
  document.getElementById("chart").innerHTML = svg;
}

/* ---------- Leyenda con toggles ---------- */
function renderLegend() {
  const el = document.getElementById("legend");
  el.innerHTML = PARTICIPANTS.map(p => `
    <span class="legend-chip ${visible[p.name] ? "" : "off"}" data-name="${p.name}">
      <span class="dot" style="background:${p.color}"></span>${p.name}
    </span>
  `).join("");
  el.querySelectorAll(".legend-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const name = chip.dataset.name;
      visible[name] = !visible[name];
      chip.classList.toggle("off", !visible[name]);
      renderChart();
    });
  });
}

/* ---------- Tabla de posiciones ---------- */
/* Posiciones compartidas por tabla y footer.
   Desempate: 1) puntos  2) más plenos  3) más aciertos de ganador.
   Si todo es igual, comparten la misma posición (empate real). */
function computeStandings() {
  const totals = PARTICIPANTS.map(p => {
    let pts = 0, full = 0, winner = 0, miss = 0;
    matches.forEach(m => {
      if (!m.result) return;
      const pred = m.predictions[p.name];
      if (pred === undefined) return;
      const got = pointsFor(pred, m.result);
      pts += got;
      if (got === 3) full++;
      else if (got === 1) winner++;
      else miss++;
    });
    return { name: p.name, pts, full, winner, miss };
  });
  totals.sort((a, b) =>
    b.pts - a.pts || b.full - a.full || b.winner - a.winner || a.name.localeCompare(b.name)
  );
  totals.forEach((t, i) => {
    const prev = totals[i - 1];
    const tie = prev && t.pts === prev.pts && t.full === prev.full && t.winner === prev.winner;
    t.rank = tie ? prev.rank : i + 1;
  });
  return totals;
}

function renderLeaderboard() {
  const totals = computeStandings();
  const medal = { 1: "gold", 2: "silver", 3: "bronze" };
  document.getElementById("leaderboard").innerHTML = totals.map(t => `
    <div class="lb-row ${medal[t.rank] || ""}">
      <div class="lb-rank">${t.rank}</div>
      <div class="lb-name">${t.name}</div>
      <div class="lb-stats">
        <div class="stat"><span class="stat-num c-full">${t.full}</span><span class="stat-lbl">Pleno</span></div>
        <div class="stat"><span class="stat-num c-win">${t.winner}</span><span class="stat-lbl">Ganador</span></div>
        <div class="stat"><span class="stat-num c-miss">${t.miss}</span><span class="stat-lbl">Sin acertar</span></div>
      </div>
      <div class="lb-points">${t.pts}<span>pts</span></div>
    </div>
  `).join("");
}

/* ---------- Footer con datos ---------- */
function renderFooter() {
  const played = matches.filter(m => m.result !== null);

  // mismas posiciones que la tabla
  const totals = computeStandings();
  const leaders = totals.filter(t => t.rank === 1);
  const top = leaders[0];
  const totalPlenos = totals.reduce((s, t) => s + t.full, 0);
  const totalPuntos = totals.reduce((s, t) => s + t.pts, 0);

  // goles totales convertidos en los partidos jugados
  const goles = played.reduce((s, m) => s + m.result[0] + m.result[1], 0);

  const leaderCard = leaders.length > 1
    ? `<div class="foot-card">
        <div class="fc-lbl">Líderes (empate)</div>
        <div class="fc-val">${leaders.map(l => l.name).join(" · ")}</div>
        <div class="fc-sub">${top.pts} pts · ${top.full} plenos</div>
      </div>`
    : `<div class="foot-card">
        <div class="fc-lbl">Líder</div>
        <div class="fc-val">${top.name}</div>
        <div class="fc-sub">${top.pts} pts · ${top.full} plenos</div>
      </div>`;

  document.getElementById("footer").innerHTML = `
    <div class="foot-grid">
      ${leaderCard}
      <div class="foot-card">
        <div class="fc-lbl">Partidos jugados</div>
        <div class="fc-val">${played.length} / ${TOTAL_PARTIDOS}</div>
        <div class="fc-sub">${(played.length / TOTAL_PARTIDOS * 100).toFixed(0)}% del torneo</div>
      </div>
      <div class="foot-card">
        <div class="fc-lbl">Plenos del grupo</div>
        <div class="fc-val">${totalPlenos}</div>
        <div class="fc-sub">resultados exactos</div>
      </div>
      <div class="foot-card">
        <div class="fc-lbl">Puntos repartidos</div>
        <div class="fc-val">${totalPuntos}</div>
        <div class="fc-sub">entre todos</div>
      </div>
      <div class="foot-card">
        <div class="fc-lbl">Goles convertidos</div>
        <div class="fc-val">${goles}</div>
        <div class="fc-sub">en ${played.length} partidos</div>
      </div>
    </div>
    <div class="foot-note">
      Prode Mundial · 3 pts resultado exacto · 1 pt acertar ganador · 0 el resto<br>
      Actualizado al ${ULTIMA_ACTUALIZACION}
    </div>`;
}

/* ---------- Tarjetas de partidos ---------- */
function teamBlock(team) {
  return `<div class="team">
    <img class="flag" src="${flagSrc(team.iso, "w80")}" srcset="${flagSrc(team.iso, "w160")} 2x"
         alt="${team.name}" loading="lazy" onerror="this.style.display='none'">
    <div class="code">${team.code}</div>
  </div>`;
}

function renderMatches(filter = "") {
  const container = document.getElementById("matches");
  const q = filter.trim().toLowerCase();
  container.innerHTML = "";
  let shown = 0;

  // orden invertido: el último partido cargado aparece primero
  [...matches].reverse().forEach(m => {
    const haystack = [m.home.code, m.away.code, m.home.name, m.away.name].join(" ").toLowerCase();
    if (q && !haystack.includes(q)) return;
    shown++;

    const played = m.result !== null;
    const scoreTxt = played ? `${m.result[0]} - ${m.result[1]}` : "vs";
    const statusTxt = played ? "Finalizado" : "Próximamente";

    let rows;
    if (played) {
      rows = Object.entries(m.predictions)
        .map(([name, pred]) => ({ name, pred, pts: pointsFor(pred, m.result) }))
        .sort((a, b) => b.pts - a.pts)
        .map(({ name, pred, pts }) => {
          const predTxt = pred ? `${pred[0]} - ${pred[1]}` : "—";
          let cls = "pill" + (pts === 3 ? " win" : pts === 1 ? " partial" : "");
          return `<tr>
            <td class="name">${name}</td>
            <td class="pred ${pred ? "" : "muted"}">${predTxt}</td>
            <td class="pts"><span class="${cls}">${pts}</span></td>
          </tr>`;
        }).join("");
    } else {
      rows = `<tr><td colspan="3" class="muted" style="text-align:center;padding:22px;">Aún sin resultados</td></tr>`;
    }

    container.insertAdjacentHTML("beforeend", `
      <div class="match">
        <div class="match-header">
          ${teamBlock(m.home)}
          <div class="score ${played ? "" : "pending"}"><div class="nums">${scoreTxt}</div><div class="status">${statusTxt}</div></div>
          ${teamBlock(m.away)}
        </div>
        <table>
          <thead><tr><th>Participante</th><th class="center">Pronóstico</th><th class="center">Pts</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `);
  });

  document.getElementById("noResults").style.display = shown === 0 ? "block" : "none";
}

/* ---------- Navegación entre vistas ---------- */
document.querySelectorAll(".seg-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("view-" + btn.dataset.view).classList.add("active");
  });
});

/* ---------- Buscador ---------- */
document.getElementById("search").addEventListener("input", e => renderMatches(e.target.value));

/* ---------- Tema claro / oscuro ---------- */
const themeBtn = document.getElementById("themeBtn");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("prode-theme", theme); } catch (e) {}
}
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});
(function () {
  let saved = "light";
  try { saved = localStorage.getItem("prode-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch (e) {}
  applyTheme(saved);
})();

/* ---------- Init ---------- */
renderProgress();
renderLegend();
renderChart();
renderLeaderboard();
renderMatches();
renderFooter();
