// ALL8ALL.js – 8er Cluster, nicht verlorene – 8-Achsen-Modus mit vitality
// RUN8 8 Achsen N,S,E,W,UP,DOWN,IN,OUT + 540°/8=67.5° + UFO=9^9 + CONTINUUM=180°

const ALL8ALL = (() => {
  const ACHSEN = {
    N: { name: "N", grad: 0, axis: "X", rom: "X_ROM", phys: "NORTH" },
    S: { name: "S", grad: 67.5, axis: "Y", rom: "Y_ROM", phys: "SOUTH" },
    E: { name: "E", grad: 135, axis: "Z", rom: "Z_ROM", phys: "EAST" },
    W: { name: "W", grad: 202.5, axis: "Q", rom: "Q_ROM", phys: "WEST" },
    UP: { name: "UP", grad: 270, axis: "D", rom: "D_ROM", phys: "UP PCIe x3+ M2 GPU DMA" },
    DOWN: { name: "DOWN", grad: 337.5, axis: "F", rom: "F_ROM", phys: "DOWN Handy Cache" },
    IN: { name: "IN", grad: 405, axis: "IN", rom: "X.room.IN", phys: "IN bio.tel.bleem.vdi 729MB" },
    OUT: { name: "OUT", grad: 472.5, axis: "OUT", rom: "X.room.OUT", phys: "OUT patch dispatch BT 2.4GHz" }
  };

  const CLUSTER = {
    formel: "540° = HOME 90° + TRANS 90° + WARB 90° + KANAL 90° + UFO 90° + CONTINUUM 180°",
    grad_pro_achse: 67.5,
    ufo: "9^9 = UFO",
    continuum: "CONTINUM=180° = 180° = Umschlag",
    blocks: "Respos werden in 8er-Blöcken verarbeitet = 50 Respos /8 = 6 Rest 2 + 8er Cluster"
  };

  function verarbeite8erBlocks(respos) {
    const blocks = [];
    for(let i=0;i<respos.length;i+=8) {
      blocks.push(respos.slice(i,i+8));
    }
    return blocks.map((block, idx) => {
      const achse = Object.keys(ACHSEN)[idx % 8];
      const a = ACHSEN[achse];
      return {
        block: idx,
        achse: a.name,
        grad: a.grad,
        respos: block,
        flow: `8-fach-Flow ${a.name} ${a.grad}° ${a.phys} – ${CLUSTER.formel}`,
        vitality: `vitality 0,777 EICH + NoN144 1727x/sec + ${a.rom}`
      };
    });
  }

  // 50 Respos aus INDEX
  const RESPOS_50 = [
    "OP","MIX","UMrumIM","IMrumUM","2malnichts","M","MI","ME","reM","mod","MIA","miss","CUBE-MIND","MOVE","MONITOR","META-CORE","evoMIND","ICE","IONAT","IKpiKI",
    "IMo","IMu","INDEX","IQQ","IMPORT","iki2li","ID-Generator","iki7uc","IKI-z","9.html","99.html","999.html","9.ctrl.ler.html","Bio.html","Bios.html","PC.html","PQ.html","auto.Home.html","auto.Ort.html","wurzel.html","lösung.html","nc-suite.html","all4all.html","all8all.html","inOHNEhalt.html","run1.html","index.html","AE","OP-MUX"
  ];

  function activate() {
    console.log("%c ALL8ALL – 8-Achsen-Modus – nicht verlorene – 8er Cluster ", "background:#050509;color:#38bdf8;font-weight:bold;padding:4px");
    console.log("  Wirkung: Respos in 8er-Blöcken, Cluster-Logik aktiv, 8-fach-Flow");
    console.log("  Formel:", CLUSTER.formel, "grad/achse:", CLUSTER.grad_pro_achse, "UFO:", CLUSTER.ufo);
    const blocks = verarbeite8erBlocks(RESPOS_50);
    blocks.forEach(b => {
      console.log(`  [Block ${b.block}] Achse ${b.achse} ${b.grad}° – ${b.respos.join(", ")} – ${b.flow}`);
    });
    console.log(`  50 Respos = ${blocks.length} Blocks 8er + Rest – nicht verlorene wie INDEX mager, sondern 8-fach-Flow mit vitality`);
    return { achsen: ACHSEN, cluster: CLUSTER, blocks, status: "vorläufig tragbar Tests zeigen ob icyFIRE Waagschale Brücke Station XI würdig" };
  }

  // x.y.z + 3 6 9 Adressierung für ALL8ALL
  function addr_3_6_9_for_8() {
    // 3 = mio, 6 = oi io 6-BLOCK, 9 = OS
    return {
      "3": "3xi3ix3 = ix xi = 3 = Wurzel = 1mio = 3 Mio",
      "6": "6oi6io6 = oi io = 6-BLOCK = 540° = HOME+TRANS+WARB+KANAL+UFO+CONTINUUM",
      "9": "9 = OS + 99=EDIT + 999=fix rdy + 8-Achsen N,S,E,W,UP,DOWN,IN,OUT",
      "8er": "8 Achsen = 8er Cluster = 8-fach-Flow = Respos in 8er-Blöcken"
    };
  }

  return { ACHSEN, CLUSTER, RESPOS_50, verarbeite8erBlocks, activate, addr_3_6_9_for_8 };
})();

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => ALL8ALL.activate());
}
