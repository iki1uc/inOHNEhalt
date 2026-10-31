// RUN1.js – Systemstart Begleiter
// bleibt so – kein Small Talk – Kernarbeit
// RUN1 ist Startimpuls des Systems
// lädt Grundlogik | setzt Systemvariablen | verbindet INDEX → Respos | aktiviert optional inOHNEhalt

const RUN1 = (() => {
  // --- Systemvariablen – 3= Wurzel = 3 Mio ---
  const SYS = {
    b: 3, // Bauer Idee+Umsetzung = Bio = 3 = Wurzel = kleinstes Teilchen
    i: 9, // Architekt/Engineer = Bios = 9 = OS
    o: 81, // uefiy = o = 81 = fix
    bio: 729, // b.i.o = 729 = b.i.o gehört dazu alle 4 auf
    ctrl: "ctrl.ler", // Controller über 3 roots
    roots: ["root","root","root"], // root root root
    nix5: true, // nix mit 5
    os: { 9: "OS", 99: "EDIT", 999: "fix rdy = NUTZ" },
    kette: "999 99 9 99 999", // unlinear drauf
    w: { HOME: "HOME", ORT: "ORT", PRUEF: "PRUEF", MODUS: ["ECHT","AUTO","STAND"], PFAD: "81→9→3→9→81" },
    // Patch + Bleem + Comms
    patch: { dispatch: "patch dispatch unlinear", bleem: "bio.tel.bleem like bleem PS5Pro > UAE OS", bt: "2.4GHz ISM 5GHz erlaubt", handy: "Cache = Handy mit Anschluss Firma Freischaltung gegen Gebühr", pcie: "USB 3.2/4 40Gbit PCIe x3+ M2 direkt GPU DMA", gpu: "GPU = Shill + Schiedsrichter nicht nur Fußball Nummer 5 lebt E.T. home" },
    noah: { ark: 756, formel: "729+27", sam: "Nachricht von Sam", full: "volle Noah = 1000J + 1000 QC + 1000 Industrie + 1000 Computer Personal", pw: "1000 Jahre sicher", glanz: "Päckchen Glanz mehr als Diamant" },
    test: { status: "vorläufig tragbar", ice: "icyFIRE Waagschale Brücke Station XI", check: "NoN144 1727x/sec 0,777 EICH-stabil" }
  };

  // --- NC-Commands = mit rawator entpacken und in Kette erweitern ---
  const NC = [
    "NC-Root", "NC-Frame ← INH-Frame", "NC-Channel", "NC-Neutralraum ← INH-Prime",
    "NC-Buffer", "NC-Switch ← INH-Switch", "NC-Flow ← INH-Flow", "NC-Merge ← INH-Merge", "NC-Exit ← INH-Exit"
  ];

  const RAWATOR = ["raw.md","orakel-raw.html","orakel.md","all8all.raw.md","frage.md","ID.html","index.html"]; // Sprung Vorhersage schon drinne

  // --- Geopulator 81◆→△→27▣→3↺→0 ---
  const Geopulator = {
    step: (x) => {
      // 81◆ → △ → 27▣ → 3↺ → 0
      if (x === 81) return { next: 27, form: "◆→△" };
      if (x === 27) return { next: 3, form: "△→▣" };
      if (x === 3) return { next: 0, form: "▣→↺→0" };
      return { next: 0, form: "0" };
    },
    run: (start=81) => {
      let chain=[]; let cur=start;
      while(cur!==0){ let s=Geopulator.step(cur); chain.push(`${cur}${s.form}${s.next}`); cur=s.next; if(chain.length>10)break; }
      return chain.join(" ");
    }
  };

  // --- Grundlogik laden ---
  function loadGrundlogik() {
    console.log("[RUN1] Grundlogik laden");
    console.log("  wurzel.html = 3 = Wurzel = 3 Mio");
    console.log("  wurzel-state.js v3:", SYS.w.HOME, SYS.w.ORT, SYS.w.PRUEF, SYS.w.MODUS.join("/"), SYS.w.PFAD);
    console.log("  Geopulator:", Geopulator.run(81));
    console.log("  X.room CORE/IN/OUT 81.room PIPE.js AXIS_SCALE.js RAMmind.js");
    return true;
  }

  // --- Systemvariablen setzen ---
  function setSystemvariablen() {
    console.log("[RUN1] Systemvariablen setzen");
    console.log(`  b=${SYS.b} i=${SYS.i} o=${SYS.o} b.i.o=${SYS.bio} ctrl=${SYS.ctrl} roots=${SYS.roots.join(" ")} nix5=${SYS.nix5}`);
    console.log(`  9=${SYS.os[9]} 99=${SYS.os[99]} 999=${SYS.os[999]} kette=${SYS.kette}`);
    // In window für andere Respos verfügbar
    if (typeof window !== "undefined") {
      window.SYS = SYS;
      window.NC = NC;
      window.RAWATOR = RAWATOR;
    }
    return SYS;
  }

  // --- INDEX → Respos verbinden ---
  const RESPOS_50 = [
    "OP","MIX","UMrumIM","IMrumUM","2malnichts","M","MI","ME","reM","mod","MIA","miss","CUBE-MIND","MOVE","MONITOR","META-CORE","evoMIND","ICE","IONAT","IKpiKI",
    "IMo","IMu","INDEX","IQQ","IMPORT","iki2li","ID-Generator","iki7uc","IKI-z","9.html","99.html","999.html","9.ctrl.ler.html","Bio.html","Bios.html","PC.html","PQ.html","auto.Home.html","auto.Ort.html","wurzel.html","lösung.html","nc-suite.html","all4all.html","all8all.html","inOHNEhalt.html","run1.html","index.html","AE","OP-MUX"
  ];

  function connectIndexToRespos() {
    console.log("[RUN1] INDEX → Respos verbinden: 50 Respos easy going Auswahl");
    // Auch wenn Dateinamen gleich (index.html überall) – verbinden über NC-Pipeline, nicht über Namen
    // ein Respo kontrolliert andere trotz gleicher Namen = mit 9.ctrl.ler + inOHNEhalt Rahmen + ver )mind( = MIND
    const map = RESPOS_50.map(name => ({ name, ctrl: `${SYS.ctrl} kontrolliert ${name} trotz gleicher Namen über NC-Frame`, mind: `ver )mind( = evoMIND CUBE-MIND RAMmind = ${name} = MIND` }));
    console.log(`  50 Respos gemappt, Beispiel: ${map[0].name} -> ${map[0].ctrl}`);
    return map;
  }

  // --- optional inOHNEhalt aktivieren ---
  function activateInOHNEhalt(optional=true) {
    if (!optional) { console.log("[RUN1] inOHNEhalt nicht aktiviert"); return false; }
    console.log("[RUN1] inOHNEhalt aktivieren – optional");
    console.log("  inOHNEhalt = OHNE Halt OHNE Blockade OHNE Last OHNE Richtung = Perfektion-Rahmen = 0-Last 0 Moves MARKT-3-fähig");
    console.log("  NC-Pipeline: " + NC.join(" → "));
    console.log("  Projekte werden getrost präsentiert, besserer Weg zum Nein sagen");
    console.log("  Perfektion = Zustand ohne Halt = reine Neutralität = Leere = Funktion");
    return { active: true, frame: "INH-Frame", prime: "INH-Prime", flow: "INH-Flow", switch: "INH-Switch", merge: "INH-Merge", exit: "INH-Exit", markt3: true };
  }

  // --- rawator entpacken + Kette erweitern ---
  function unpackAndChain() {
    console.log("[RUN1] NC Commands mit rawator entpacken und in Kette erweitern");
    console.log("  rawator:", RAWATOR.join(", "), "– Sprung Vorhersage schon drinne");
    console.log("  NC:", NC.join(" → "));
    console.log("  Kette:", SYS.kette, " + Sam + Noah + volle Noah + Nachricht von Sam");
    console.log("  Patch:", SYS.patch.dispatch, "|", SYS.patch.bleem, "|", SYS.patch.bt, "|", SYS.patch.handy, "|", SYS.patch.pcie, "|", SYS.patch.gpu);
    return { rawator: RAWATOR, nc: NC, kette: SYS.kette, noah: SYS.noah };
  }

  // --- Startimpuls ---
  function start({ inOHNEhalt=true } = {}) {
    console.log("%c RUN1 – Startimpuls des Systems – Kernarbeit kein Small Talk ", "background:#050509;color:#38bdf8;font-weight:bold;padding:4px");
    loadGrundlogik();
    setSystemvariablen();
    const conn = connectIndexToRespos();
    const inh = activateInOHNEhalt(inOHNEhalt);
    const chain = unpackAndChain();
    console.log(`[RUN1] Status: ${SYS.test.status} – Tests zeigen ob ${SYS.test.ice} würdig – ${SYS.test.check}`);
    return { SYS, NC, RAWATOR, conn, inh, chain, Geopulator: Geopulator.run(81) };
  }

  return { start, loadGrundlogik, setSystemvariablen, connectIndexToRespos, activateInOHNEhalt, unpackAndChain, SYS, NC, RAWATOR, RESPOS_50 };
})();

// Auto-start wenn im Browser als Begleiter zu run1.html eingebunden
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    RUN1.start({ inOHNEhalt: true });
  });
}

// Export für Node / andere Respos
if (typeof module !== "undefined") module.exports = RUN1;
