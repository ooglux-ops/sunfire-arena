// First-person weapon models, built from code (no downloads). Each gun points down -Z with the trigger near the origin.
// buildGuns() returns one entry per weapon, in the same order as WEAPONS in index.html:
//   0 scattergun · 1 chaingun · 2 launcher · 3 sidearm · 4 rifle · 5 sniper
export function buildGuns(THREE, RoundedBoxGeometry) {
  const rnd = (a, b) => a + Math.random() * (b - a);
  // ---- procedural surface maps: fine grain + a few scratches, so metal is not a flat mirror ----
  function wearTex(base, spread, scratches) {
    const N = 256, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d');
    const im = x.createImageData(N, N);
    for (let i = 0; i < N * N; i++) { const v = Math.max(0, Math.min(255, base + (Math.random() - .5) * spread)); im.data[i * 4] = im.data[i * 4 + 1] = im.data[i * 4 + 2] = v; im.data[i * 4 + 3] = 255; }
    x.putImageData(im, 0, 0);
    for (let k = 0; k < scratches; k++) { x.strokeStyle = `rgba(${Math.random() < .5 ? 255 : 40},${Math.random() < .5 ? 255 : 40},${Math.random() < .5 ? 255 : 40},${rnd(.05, .22)})`; x.lineWidth = rnd(.4, 1.4); x.beginPath(); const px = rnd(0, N), py = rnd(0, N), a = rnd(-.25, .25) + (Math.random() < .5 ? 0 : Math.PI / 2); const l = rnd(10, 70); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke(); }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 3); return t;
  }
  function grainTex() {
    const W = 256, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
    x.fillStyle = '#6a4226'; x.fillRect(0, 0, W, H);
    for (let k = 0; k < 220; k++) { const y = rnd(0, H); x.strokeStyle = `rgba(${Math.random() < .6 ? '30,16,8' : '150,100,60'},${rnd(.08, .3)})`; x.lineWidth = rnd(.5, 2.2); x.beginPath(); x.moveTo(0, y); for (let px = 0; px <= W; px += 16) x.lineTo(px, y + Math.sin(px * .03 + k) * rnd(1, 4)); x.stroke(); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
  }
  const wearA = wearTex(150, 70, 60), wearB = wearTex(190, 50, 25), grain = grainTex();
  const std = o => new THREE.MeshStandardMaterial(o);
  const M = {
    steel: std({ color: 0x62666c, metalness: 1, roughness: .62, roughnessMap: wearA, bumpMap: wearA, bumpScale: .0006, envMapIntensity: 1.1 }),
    dark: std({ color: 0x33363b, metalness: .8, roughness: .72, envMapIntensity: 1.3, roughnessMap: wearB, bumpMap: wearB, bumpScale: .0005 }),
    blued: std({ color: 0x3a3f49, metalness: 1, roughness: .5, roughnessMap: wearA, envMapIntensity: 1.2 }),
    poly: std({ color: 0x26282a, metalness: 0, roughness: .95, roughnessMap: wearB, bumpMap: wearB, bumpScale: .0012 }),
    tan: std({ color: 0x6f5d44, metalness: 0, roughness: .95, roughnessMap: wearB, bumpMap: wearB, bumpScale: .0012 }),
    wood: std({ color: 0xb98a62, map: grain, metalness: 0, roughness: .55, bumpMap: grain, bumpScale: .001 }),
    brass: std({ color: 0xb08a4a, metalness: 1, roughness: .42, roughnessMap: wearA }),
    glove: std({ color: 0x2b2f27, metalness: 0, roughness: 1, bumpMap: wearB, bumpScale: .003 }),
    pad: std({ color: 0x1c1d1f, metalness: 0, roughness: .7 }),
    sleeve: std({ color: 0x4a4f3a, metalness: 0, roughness: 1, bumpMap: wearB, bumpScale: .004 }),
    bore: new THREE.MeshBasicMaterial({ color: 0x050505 }),
    lens: std({ color: 0x9fc4d8, metalness: .2, roughness: .05, transparent: true, opacity: .16, depthWrite: false }),
    glass: std({ color: 0x1a2a3c, metalness: 1, roughness: .08, envMapIntensity: 2 }),
    dot: new THREE.MeshBasicMaterial({ color: 0xff2a1a }),
    tritium: new THREE.MeshBasicMaterial({ color: 0xd8ffd0 }),
    red: std({ color: 0x8a1c14, metalness: .3, roughness: .5 })
  };
  const mesh = (geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); return m; };
  const rb = (w, h, d, mat, x, y, z, r = .005) => mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2.05, h / 2.05, d / 2.05)), mat, x, y, z);
  const bx = (w, h, d, mat, x, y, z) => mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z);
  const cz = (r, l, mat, x, y, z, seg = 20, r2 = r) => { const m = mesh(new THREE.CylinderGeometry(r2, r, l, seg), mat, x, y, z); m.rotation.x = -Math.PI / 2; return m; }; // r at the rear, r2 at the muzzle end
  const cy = (r, l, mat, x, y, z, seg = 16, r2 = r) => mesh(new THREE.CylinderGeometry(r2, r, l, seg), mat, x, y, z);
  const disc = (r, mat, x, y, z) => { const m = mesh(new THREE.CircleGeometry(r, 20), mat, x, y, z); m.rotation.y = Math.PI; return m; }; // faces -Z (the muzzle)
  const rx = (m, a) => { m.rotation.x = a; return m; };
  const UP = new THREE.Vector3(0, 1, 0);
  function limb(r0, r1, a, b, mat) { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b); const d = B.clone().sub(A); const m = mesh(new THREE.CylinderGeometry(r1, r0, d.length(), 14), mat); m.position.copy(A).addScaledVector(d, .5); m.quaternion.setFromUnitVectors(UP, d.normalize()); return m; }
  // a gloved hand wrapped around something at `at`, with the forearm running off to `elbow`
  function hand(g, at, elbow, o = {}) {
    const h = new THREE.Group(); h.position.set(...at);
    const s = o.s || 1; const palm = rb(.05 * s, .085 * s, .085 * s, M.glove, 0, 0, 0, .018); h.add(palm);
    const side = o.side || 1; // which way the fingers wrap
    for (let i = 0; i < 4; i++) { const f = rb(.05 * s, .019 * s, .03 * s, M.glove, -side * .03 * s, .032 * s - i * .021 * s, -.035 * s, .008); h.add(f); const k = rb(.022 * s, .02 * s, .02 * s, M.pad, -side * .008 * s, .032 * s - i * .021 * s, -.05 * s, .006); h.add(k); }
    const th = rb(.022 * s, .024 * s, .06 * s, M.glove, side * .012 * s, .05 * s, -.02 * s, .009); th.rotation.x = .25; h.add(th);
    const cuff = rb(.062 * s, .05 * s, .05 * s, M.pad, 0, -.005 * s, .058 * s, .012); h.add(cuff);
    if (o.rot) h.rotation.set(...o.rot); g.add(h);
    const w = new THREE.Vector3(0, -.005 * s, .07 * s).applyEuler(h.rotation).add(h.position);
    g.add(limb(.036 * s, .05 * s, [w.x, w.y, w.z], elbow, M.sleeve));
  }
  function rail(g, x, y, z0, z1, mat = M.dark) { g.add(bx(.019, .006, z1 - z0, mat, x, y, (z0 + z1) / 2)); for (let z = z0 + .006; z < z1; z += .0125) g.add(bx(.021, .0055, .006, mat, x, y + .0045, z)); }
  const out = [];

  // ---------- 0 · scattergun: side-by-side, walnut and blued steel ----------
  {
    const g = new THREE.Group();
    for (const s of [-1, 1]) { g.add(cz(.0185, .6, M.blued, s * .0195, .03, -.42, 22)); g.add(disc(.0145, M.bore, s * .0195, .03, -.7205)); g.add(cz(.0205, .012, M.steel, s * .0195, .03, -.714, 22)); }
    g.add(bx(.011, .007, .6, M.blued, 0, .0495, -.42)); g.add(mesh(new THREE.SphereGeometry(.0045, 10, 8), M.brass, 0, .056, -.71));
    g.add(bx(.006, .012, .58, M.blued, 0, .015, -.42));
    g.add(rb(.064, .042, .25, M.wood, 0, .002, -.33, .016)); g.add(rb(.05, .012, .03, M.steel, 0, -.016, -.215, .004));
    g.add(rb(.058, .068, .13, M.steel, 0, .022, -.05, .012));
    for (const s of [-1, 1]) { g.add(rb(.004, .05, .1, M.brass, s * .0295, .02, -.05, .002)); g.add(cz(.004, .004, M.dark, s * .0315, .03, -.08, 10)); g.add(rx(rb(.012, .03, .012, M.steel, s * .014, .062, .012, .004), -.5)); }
    g.add(rx(rb(.011, .008, .05, M.steel, 0, .06, -.035, .003), 0));
    g.add(bx(.01, .003, .075, M.steel, 0, -.036, -.03)); g.add(bx(.01, .022, .003, M.steel, 0, -.025, -.066)); g.add(rx(bx(.004, .022, .005, M.steel, 0, -.024, -.03), .3)); g.add(rx(bx(.004, .022, .005, M.steel, 0, -.024, -.012), .3));
    g.add(rx(rb(.042, .052, .15, M.wood, 0, -.008, .085, .018), -.22)); g.add(rx(rb(.046, .105, .24, M.wood, 0, -.05, .27, .02), -.1));
    hand(g, [-.004, -.012, -.33], [-.2, -.3, -.02], { rot: [0, 0, 1.25], side: 1, s: 1.08 });
    hand(g, [.006, -.03, .085], [.14, -.3, .4], { rot: [-.35, 0, -.25], side: -1 });
    out.push({ g, name: 'scattergun', hip: [.2, -.2, -.3], ads: [0, -.085, -.22], muzzle: [0, .03, -.74], adsFov: 62 });
  }
  // ---------- 1 · chaingun: six rotating barrels, motor, feed chute ----------
  {
    const g = new THREE.Group(); const rot = new THREE.Group(); rot.position.set(0, 0, -.36);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, x = Math.cos(a) * .043, y = Math.sin(a) * .043; rot.add(cz(.0115, .52, M.blued, x, y, 0, 14)); rot.add(disc(.008, M.bore, x, y, -.261)); }
    rot.add(cz(.014, .52, M.dark, 0, 0, 0, 10));
    for (const z of [-.235, -.09, .09]) { rot.add(cz(.062, .016, M.steel, 0, 0, z, 24)); }
    rot.add(cz(.066, .03, M.dark, 0, 0, .2, 24));
    g.add(rot); g.userData.rot = rot;
    g.add(cz(.078, .2, M.dark, 0, 0, -.03, 24)); for (const z of [-.11, -.03, .05]) g.add(cz(.081, .012, M.steel, 0, 0, z, 24));
    g.add(rb(.15, .14, .2, M.dark, 0, -.005, .14, .014)); g.add(rb(.11, .02, .16, M.steel, 0, .072, .14, .005));
    g.add(cz(.036, .15, M.steel, -.1, .035, .1, 18)); g.add(cz(.03, .02, M.brass, -.1, .035, .02, 18));
    g.add(rb(.06, .1, .11, M.steel, .105, -.01, .1, .006));
    for (let i = 0; i < 9; i++) { const a = i * .2; const c = rb(.05, .014, .016, M.brass, .13 + Math.sin(a) * .06, -.07 - i * .022, .1, .004); c.rotation.z = -a * .6; g.add(c); }
    for (const z of [-.06, .1]) g.add(cy(.008, .07, M.dark, 0, .105, z, 10)); g.add(rb(.022, .022, .22, M.pad, 0, .14, .02, .009));
    g.add(rb(.03, .11, .04, M.pad, 0, -.12, .2, .012)); g.add(bx(.012, .006, .1, M.dark, 0, -.07, .15));
    hand(g, [.004, -.12, .2], [.2, -.34, .5], { rot: [-.2, 0, -.2], side: -1 });
    out.push({ g, name: 'chaingun', hip: [.2, -.25, -.36], ads: [.1, -.21, -.32], muzzle: [0, 0, -.64], adsFov: 68 });
  }
  // ---------- 2 · launcher: six-chamber drum, short fat tube ----------
  {
    const g = new THREE.Group();
    g.add(cz(.036, .3, M.dark, 0, .035, -.4, 24)); g.add(cz(.041, .03, M.steel, 0, .035, -.54, 24)); g.add(disc(.03, M.bore, 0, .035, -.5555));
    for (const z of [-.3, -.36, -.42]) g.add(cz(.039, .008, M.steel, 0, .035, z, 24));
    const drum = new THREE.Group(); drum.position.set(0, .012, -.17);
    drum.add(cz(.074, .13, M.steel, 0, 0, 0, 24)); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + .52; drum.add(cz(.022, .134, M.dark, Math.cos(a) * .046, Math.sin(a) * .046, 0, 14)); drum.add(disc(.017, M.brass, Math.cos(a) * .046, Math.sin(a) * .046, -.068)); }
    drum.add(cz(.077, .01, M.dark, 0, 0, .05, 24)); g.add(drum); g.userData.drum = drum;
    g.add(rb(.05, .03, .26, M.dark, 0, .085, -.19, .006)); rail(g, 0, .102, -.3, -.08);
    g.add(rb(.05, .08, .13, M.dark, 0, .01, -.03, .01));
    for (const s of [-1, 1]) { g.add(bx(.003, .05, .004, M.steel, s * .014, .135, -.26)); } g.add(bx(.031, .003, .004, M.steel, 0, .158, -.26)); g.add(bx(.031, .003, .004, M.steel, 0, .13, -.26));
    g.add(cy(.017, .09, M.pad, 0, -.035, -.36, 14)); g.add(rb(.03, .02, .05, M.dark, 0, .0, -.36, .005));
    g.add(rx(rb(.036, .1, .046, M.pad, 0, -.07, .0, .012), -.28)); g.add(bx(.01, .003, .06, M.dark, 0, -.035, -.045));
    g.add(cz(.014, .2, M.dark, 0, .02, .13, 12)); g.add(rb(.04, .1, .05, M.pad, 0, .0, .24, .012));
    hand(g, [0, -.04, -.36], [-.22, -.3, -.05], { rot: [0, 0, .2], side: 1 });
    hand(g, [.004, -.07, .005], [.15, -.32, .36], { rot: [-.3, 0, -.2], side: -1 });
    out.push({ g, name: 'launcher', hip: [.21, -.21, -.3], ads: [.08, -.17, -.28], muzzle: [0, .035, -.58], adsFov: 70 });
  }
  // ---------- 3 · sidearm ----------
  {
    const g = new THREE.Group();
    g.add(rb(.029, .034, .2, M.blued, 0, .03, -.085, .006));
    for (const s of [-1, 1]) for (let i = 0; i < 7; i++) g.add(bx(.0015, .024, .004, M.dark, s * .0148, .03, -.005 + i * .0075));
    g.add(bx(.0015, .014, .04, M.steel, .0148, .036, -.1)); g.add(cz(.0075, .012, M.steel, 0, .03, -.186, 14)); g.add(disc(.0048, M.bore, 0, .03, -.1925));
    g.add(bx(.004, .008, .006, M.dark, 0, .051, -.176)); g.add(mesh(new THREE.SphereGeometry(.0016, 8, 6), M.tritium, 0, .052, -.1725));
    for (const s of [-1, 1]) { g.add(bx(.006, .009, .008, M.dark, s * .0075, .0515, .008)); g.add(mesh(new THREE.SphereGeometry(.0015, 8, 6), M.tritium, s * .0075, .052, .0125)); }
    g.add(rb(.027, .022, .17, M.poly, 0, .004, -.075, .005)); rail(g, 0, -.009, -.155, -.105, M.poly);
    g.add(rx(rb(.03, .105, .05, M.poly, 0, -.058, .012, .01), -.24)); g.add(rx(bx(.031, .08, .002, M.dark, 0, -.06, .039), -.24)); g.add(rx(rb(.032, .012, .054, M.dark, 0, -.112, .026, .004), -.24));
    g.add(bx(.008, .003, .05, M.poly, 0, -.034, -.045)); g.add(rx(bx(.008, .03, .003, M.poly, 0, -.02, -.071), .2)); g.add(rx(bx(.005, .02, .004, M.steel, 0, -.02, -.04), .25));
    g.add(bx(.004, .006, .018, M.steel, -.0155, .014, -.055));
    hand(g, [.002, -.06, .016], [.1, -.3, .32], { rot: [-.25, 0, -.15], side: -1, s: .95 });
    hand(g, [-.02, -.075, .012], [-.24, -.3, .22], { rot: [-.25, 0, .5], side: 1, s: .95 });
    out.push({ g, name: 'sidearm', hip: [.17, -.16, -.32], ads: [0, -.052, -.36], muzzle: [0, .03, -.2], adsFov: 62 });
  }
  // ---------- 4 · rifle: carbine with a red-dot sight ----------
  {
    const g = new THREE.Group();
    g.add(rb(.046, .052, .2, M.dark, 0, .035, -.06, .008)); g.add(rb(.042, .05, .17, M.dark, 0, -.008, -.035, .008)); g.add(rb(.04, .055, .062, M.dark, 0, -.045, -.085, .005));
    const mag = new THREE.Group(); mag.add(rx(rb(.027, .12, .056, M.steel, 0, -.12, -.09, .004), .1)); mag.add(rx(rb(.027, .075, .055, M.steel, 0, -.2, -.108, .004), .3)); for (let i = 0; i < 3; i++) mag.add(rx(bx(.0285, .003, .05, M.dark, 0, -.1 - i * .03, -.09 - i * .004), .1)); g.add(mag); g.userData.mag = mag;
    const hg = cz(.031, .3, M.tan, 0, .032, -.31, 8); hg.rotation.y = Math.PI / 8; g.add(hg);
    for (const s of [-1, 1]) for (let i = 0; i < 6; i++) g.add(bx(.002, .01, .028, M.bore, s * .0288, .032, -.43 + i * .046));
    g.add(cz(.033, .012, M.dark, 0, .032, -.158, 16)); g.add(cz(.033, .01, M.dark, 0, .032, -.462, 16));
    rail(g, 0, .0635, -.46, .03); rail(g, 0, .0005, -.44, -.36);
    g.add(cz(.0105, .21, M.blued, 0, .032, -.56, 16)); g.add(rb(.026, .032, .028, M.dark, 0, .036, -.5, .004));
    g.add(cz(.0155, .062, M.dark, 0, .032, -.69, 14)); for (const s of [-1, 1]) for (const z of [-.675, -.695, -.71]) g.add(bx(.004, .008, .009, M.bore, s * .014, .032, z)); g.add(disc(.007, M.bore, 0, .032, -.7215));
    g.add(bx(.0015, .017, .05, M.steel, .0238, .042, -.075)); g.add(cz(.006, .014, M.dark, .027, .03, -.005, 10)); g.add(bx(.05, .009, .018, M.dark, 0, .058, .043));
    g.add(cz(.0135, .2, M.dark, 0, .032, .14, 14)); g.add(rb(.04, .11, .17, M.tan, 0, .005, .22, .012)); g.add(rb(.042, .115, .02, M.pad, 0, .003, .31, .008));
    g.add(rx(rb(.034, .1, .044, M.tan, 0, -.075, .038, .012), -.3)); g.add(bx(.01, .003, .062, M.dark, 0, -.045, -.015)); g.add(rx(bx(.005, .022, .005, M.steel, 0, -.03, -.012), .3));
    g.add(cy(.0165, .085, M.pad, 0, -.045, -.35, 14)); g.add(rb(.024, .014, .04, M.dark, 0, -.004, -.35, .004));
    // red dot
    g.add(rb(.034, .012, .07, M.dark, 0, .077, -.075, .003));
    for (const s of [-1, 1]) g.add(rb(.005, .046, .05, M.dark, s * .0195, .106, -.075, .002)); g.add(rb(.044, .005, .05, M.dark, 0, .131, -.075, .002)); g.add(cz(.006, .02, M.dark, .028, .1, -.075, 10));
    const lens = mesh(new THREE.PlaneGeometry(.034, .042), M.lens, 0, .106, -.09); g.add(lens);
    const dot = mesh(new THREE.CircleGeometry(.0011, 12), M.dot, 0, .106, -.0895); g.add(dot);
    hand(g, [0, -.05, -.35], [-.24, -.32, -.02], { rot: [0, 0, .25], side: 1 });
    hand(g, [.004, -.078, .044], [.15, -.32, .4], { rot: [-.3, 0, -.2], side: -1 });
    out.push({ g, name: 'rifle', hip: [.2, -.2, -.3], ads: [0, -.106, -.1], muzzle: [0, .032, -.74], adsFov: 50 });
  }
  // ---------- 5 · sniper: heavy bolt-action with a scope ----------
  {
    const g = new THREE.Group();
    g.add(rb(.05, .062, .3, M.dark, 0, .03, -.08, .01)); g.add(rb(.05, .05, .34, M.tan, 0, .0, -.36, .012)); g.add(rb(.046, .04, .2, M.tan, 0, -.005, -.02, .01));
    g.add(cz(.0165, .64, M.blued, 0, .036, -.56, 18, .0135)); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; g.add(bx(.003, .003, .3, M.dark, Math.cos(a) * .0152, .036 + Math.sin(a) * .0152, -.5)); }
    g.add(rb(.05, .036, .1, M.dark, 0, .036, -.92, .006)); for (const s of [-1, 1]) for (const z of [-.95, -.92, -.89]) g.add(bx(.004, .02, .016, M.bore, s * .0245, .036, z)); g.add(disc(.008, M.bore, 0, .036, -.9705));
    rail(g, 0, .0635, -.22, .05);
    // scope
    g.add(cz(.0165, .3, M.dark, 0, .112, -.09, 20)); g.add(cz(.0165, .08, M.dark, 0, .112, -.28, 20, .028)); g.add(cz(.028, .05, M.dark, 0, .112, -.345, 20)); g.add(disc(.025, M.glass, 0, .112, -.3705));
    g.add(cz(.024, .06, M.dark, 0, .112, .09, 20, .0165)); g.add(cz(.024, .02, M.pad, 0, .112, .13, 20));
    g.add(cy(.012, .026, M.dark, 0, .14, -.1, 14)); g.add(cy(.013, .006, M.steel, 0, .155, -.1, 14)); const st = cy(.012, .026, M.dark, .028, .112, -.1, 14); st.rotation.z = Math.PI / 2; g.add(st);
    for (const z of [-.02, -.18]) { g.add(rb(.042, .04, .018, M.dark, 0, .11, z, .006)); g.add(bx(.02, .03, .018, M.dark, 0, .08, z)); }
    g.add(rb(.036, .09, .1, M.dark, 0, -.065, -.1, .006));
    g.add(cz(.006, .05, M.steel, .04, .034, .03, 10)); const bh = cy(.005, .05, M.steel, .052, .02, .055, 10); bh.rotation.z = -.9; g.add(bh); g.add(mesh(new THREE.SphereGeometry(.012, 12, 10), M.pad, .072, .005, .055));
    g.add(rx(rb(.036, .1, .046, M.pad, 0, -.075, .06, .012), -.3)); g.add(bx(.01, .003, .06, M.dark, 0, -.04, .01));
    g.add(rb(.044, .09, .3, M.tan, 0, .0, .27, .014)); g.add(rb(.038, .03, .15, M.pad, 0, .06, .22, .01)); g.add(rb(.046, .1, .02, M.pad, 0, 0, .43, .008));
    for (const s of [-1, 1]) { g.add(limb(.006, .006, [s * .02, -.02, -.5], [s * .028, -.04, -.26], M.dark)); g.add(rb(.012, .012, .03, M.pad, s * .028, -.04, -.25, .004)); } g.add(rb(.05, .02, .03, M.dark, 0, -.02, -.51, .005));
    hand(g, [0, -.045, -.33], [-.24, -.32, 0], { rot: [0, 0, 1.3], side: 1, s: 1.08 });
    hand(g, [.004, -.078, .066], [.15, -.32, .42], { rot: [-.3, 0, -.2], side: -1 });
    out.push({ g, name: 'sniper', hip: [.21, -.21, -.26], ads: [0, -.112, -.1], muzzle: [0, .036, -.98], adsFov: 20, scope: true });
  }
  out.forEach(w => w.g.traverse(o => { if (o.isMesh) o.renderOrder = 10; }));
  return { guns: out, M };
}
