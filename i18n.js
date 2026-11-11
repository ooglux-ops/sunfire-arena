// Interface language. English is the source text; ZH maps each English string to Chinese.
// tr(s) translates an exact string, a known pattern, or each part of an "A · B" line.
const ZH = {
  // ---- HUD ----
  'HEALTH': '生命', 'ARMOR': '护甲', 'GRENADES · G': '手雷 · G', 'DASH · SHIFT': '闪避 · SHIFT',
  'SCATTERGUN': '霰弹枪', 'CHAINGUN': '转管机枪', 'MORTAR': '迫击炮', 'SIDEARM': '手枪', 'RIFLE': '步枪', 'SNIPER': '狙击枪',
  '1 SCATTER': '1 霰弹', '2 CHAIN': '2 机枪', '3 MORTAR': '3 迫击炮', '4 RIFLE': '4 步枪', '5 SNIPER': '5 狙击', 'Q SIDEARM': 'Q 手枪',
  'RELOADING': '换弹中', 'GET READY': '准备', 'SNIPER AIMING AT YOU · TAKE COVER': '狙击手正在瞄准你 · 找掩体',
  'CONTROL': '指挥部',
  // ---- menu ----
  'Move (always at full speed)': '移动（始终全速）',
  'Aim · left click fires · hold right click to aim down sights': '瞄准 · 左键开火 · 按住右键举枪瞄准',
  'Jump': '跳跃', 'Dash (half damage while dashing)': '闪避（闪避中受伤减半）',
  'Scattergun · Chaingun · Mortar (lobbed, follow the arc)': '霰弹枪 · 转管机枪 · 迫击炮（抛射，看弧线落点）',
  'Rifle · Sniper (shoots through a whole line) · R reloads': '步枪 · 狙击枪（一枪穿一串）· R 换弹',
  'Throw a grenade': '扔手雷', 'Sidearm (never runs out of ammo)': '手枪（弹药无限）',
  'Pause (settings and main menu from there)': '暂停（可调设置、回主菜单）',
  'Red drums explode when shot': '红色油桶中弹会爆炸', 'Pick 1 of 3 upgrades': '三选一升级',
  'Step on one to fly across the arena': '踩上去可以飞越场地', 'Jump onto them for high ground': '可以跳上去占据高处',
  'Mouse': '鼠标', 'Space': '空格', 'Barrels': '油桶', 'Every 2 waves': '每两波', 'Jump pads': '弹跳板', 'Cars & crates': '汽车和木箱',
  '1 2 3 / wheel': '1 2 3 / 滚轮',
  'EASY': '简单', 'NORMAL': '普通', 'HARD': '困难', 'LOADING': '加载中', 'ENTER THE ARENA': '进入竞技场',
  'Smooth aim': '平滑瞄准', 'Volume': '音量', 'Build': '版本',
  'Needs a keyboard and mouse. Open it on a computer.': '需要键盘和鼠标，请在电脑上打开。',
  'I · BASIN': 'I · 盆地', 'II · CARAVAN': 'II · 商队', 'III · DEPOT': 'III · 补给站', 'IV · OASIS': 'IV · 绿洲', 'V · NEON': 'V · 霓虹',
  // ---- arenas ----
  'THE DRY BASIN': '干涸盆地', 'CARAVAN GRAVEYARD': '商队坟场', 'THE SUPPLY DEPOT': '补给站', 'THE LOST OASIS': '失落绿洲', 'NEON DISTRICT': '霓虹街区',
  'Seven waves come over the dunes. Keep moving, keep shooting, and never let the bombers reach you.': '七波敌人翻过沙丘而来。不停移动，不停开火，别让自爆虫靠近你。',
  'Six waves come over the dunes. Keep moving, keep shooting, and never let the bombers reach you.': '敌人一波波翻过沙丘而来。不停移动，不停开火，别让自爆虫靠近你。',
  'An open plain with no walls. They come from every direction, from the sky, inside the sandstorms, and sometimes as a stampede.': '没有围墙的开阔平原。敌人从四面八方、从天上、从沙暴里来，有时还会成群冲撞。',
  'Close quarters among crates and fuel drums. One shot can clear a lane, or end you.': '木箱和油桶之间的近身战。一枪可以清出一条路，也可以送走你自己。',
  'Something old still lives by the water. Raptors in packs, charging horns, a stampede, and the Tyrant. Ride the jump pads over the pond.': '水边还活着古老的东西：成群的迅猛龙、冲锋的三角龙、兽群，还有暴君。踩弹跳板飞过池塘。',
  'Rain, neon and two streets crossing in the dark. Snipers on the rooftops, robots in the alleys, and the Enforcer at the end of the night.': '雨夜、霓虹、黑暗中交叉的两条街。屋顶有狙击手，巷子里有机器人，夜晚尽头是执法者。',
  // ---- wave names ----
  'THEY HEARD YOU': '它们听见你了', 'SPREAD OUT': '散开', 'THE BROOD': '虫巢', 'SHIELD WALL': '盾墙', 'EIGHT LEGS': '八条腿', "DON'T STOP MOVING": '别停下', 'THE BROOD QUEEN': '虫巢女王',
  'OPEN GROUND': '开阔地', 'WINGS OVERHEAD': '头顶的翅膀', 'LASERS IN THE STORM': '沙暴中的激光', 'THE CALLERS': '召唤者', 'THE SWARM': '虫群', 'SANDSTORM': '沙暴', 'THE STORM CALLER': '唤风者',
  'LOCK AND LOAD': '子弹上膛', 'INCOMING FROM ABOVE': '空中来袭', 'LIGHT THE FUEL': '点燃油桶', 'THE BIG ONES': '大家伙', 'CRAWLERS': '爬行者', 'HOLD THE DEPOT': '守住补给站', 'THE WARLORD': '军阀',
  'CLEVER GIRLS': '聪明的猎手', 'HORNS': '犄角', 'STAMPEDE': '兽群冲撞', 'THE PACK': '兽群', 'EVERYTHING AT ONCE': '全部一起上', 'THE TYRANT': '暴君',
  'NIGHT SHIFT': '夜班', 'DRONES': '无人机', 'ROOFTOPS': '屋顶', 'GANG WAR': '帮派火并', 'RIOT': '暴动', 'THE ENFORCER': '执法者',
  // ---- events and banners ----
  'BOUNTY HUNT': '悬赏猎杀', 'FRENZY': '狂热', 'DOUBLE SCORE': '双倍得分', 'METEOR SHOWER': '流星雨',
  'WAVE CLEARED': '本波清空', 'NEXT IN 6': '6 秒后下一波', 'ARENA CLEARED': '场地清空', 'ALL ARENAS CLEARED': '全部场地清空',
  'AMMO DROP': '弹药空投', 'IT IS RIGHT IN FRONT OF YOU': '就在你正前方', 'AMMO': '弹药', '+25 HEALTH': '+25 生命', '+35 ARMOR': '+35 护甲',
  'UNLIMITED AMMO': '弹药无限', 'FIND AN AMMO CRATE': '去找弹药箱',
  'BOUNTY': '悬赏', 'KILL THE GOLDEN ONE WITHIN 25 SECONDS': '25 秒内击杀金色目标', 'BOUNTY CLAIMED': '悬赏到手', '+750 AND SUPPLIES': '+750 分和补给', 'BOUNTY ESCAPED': '悬赏目标逃走了',
  'BRUTE CHARGING': '巨兽冲锋', 'JUMP THE SHOCKWAVE': '跳起躲冲击波', 'SPACE': '空格', 'LAST STAND': '背水一战', 'MISSILES INCOMING': '导弹来袭',
  'STAMPEDE!': '兽群来了！', 'GET OUT OF THEIR PATH': '离开它们的路线', 'STUNNED': '眩晕', 'DOUBLE DAMAGE': '双倍伤害',
  'THE ENFORCER CALLS BACKUP': '执法者呼叫增援', 'THE QUEEN IS ENRAGED': '女王暴怒', 'THE SNIPERS ARE COMING DOWN': '狙击手下楼了', 'THE STORM RISES': '沙暴升起',
  'THE TYRANT IS ENRAGED': '暴君暴怒', 'THE TYRANT ROARS': '暴君咆哮', 'THE WARLORD CALLS HIS GUARD': '军阀召来卫队',
  // ---- new enemy hints ----
  'BULWARK': '盾兵', 'SHIELD BLOCKS SHOTS FROM THE FRONT': '盾牌挡住正面子弹', 'FLANK IT OR LOB THE MORTAR': '绕到侧面，或者用迫击炮',
  'ITS RED LASER IS AIMED AT YOU': '红色激光正瞄着你', 'HIDE BEHIND COVER': '躲到掩体后面',
  'CALLER': '召唤者', 'IT KEEPS SUMMONING SKULLS': '它会不停召唤骷髅', 'KILL IT FIRST': '先打它',
  'BROODSKULL': '母骷髅', 'BURSTS INTO THREE SKULLS WHEN KILLED': '死后裂成三个小骷髅',
  'RAPTORS': '迅猛龙', 'THEY HUNT IN PACKS AND POUNCE': '成群围猎，会飞扑', 'KEEP MOVING': '保持移动',
  'GIANT SPIDERS': '巨型蜘蛛', 'FAST AND MANY': '又快又多', 'HOSE THEM WITH THE CHAINGUN': '用机枪扫',
  'WASPS': '黄蜂', 'A BUZZING SWARM': '嗡嗡的一大群', 'SPRAY THEM': '扫射它们',
  'TRICERATOPS': '三角龙', 'IT CHARGES IN A STRAIGHT LINE': '它沿直线冲锋', 'SIDESTEP, OR MAKE IT HIT A WALL': '侧移躲开，或者引它撞墙',
  'GUNBOTS': '枪械机器人', 'THEY FIRE THREE-SHOT BURSTS': '一次三连发', 'KEEP MOVING SIDEWAYS': '保持横向移动',
  'THEY CIRCLE OVERHEAD AND SNIPE': '在头顶盘旋点射', 'CHAINGUN THEM DOWN': '用机枪打下来',
  // ---- build 46: undead, aliens, headshots, horde rush ----
  'GHOULS': '食尸鬼', 'SLOW, MANY, AND THEY NEVER STOP': '慢，多，而且永不停步', 'AIM FOR THE HEAD': '瞄准头部',
  'REVENANT': '亡灵战士', 'ARMOURED DEAD': '披甲的亡灵', 'HEADSHOTS GO THROUGH THE HELMET': '爆头可以打穿头盔',
  'LICH': '巫妖', 'IT THROWS BOLTS FROM A DISTANCE': '它会从远处投射法弹', 'KILL IT EARLY': '尽早击杀',
  'XENOS': '异形', 'FAST AND STRONG': '又快又壮', 'DO NOT LET THEM CLOSE IN': '别让它们近身',
  'STALKERS': '潜猎者', 'ALIENS THAT DIVE FROM ABOVE': '从空中俯冲的异形', 'SHOOT THEM IN THE AIR': '在空中把它们打下来',
  'HEADSHOT': '爆头', 'Headshots': '爆头数', 'HEADSHOTS': '爆头', 'DEADEYE': '神枪手', 'Headshots deal 40% more damage.': '爆头伤害提高 40%。',
  'HORDE RUSH': '尸潮狂涌', 'HOLD THE TRIGGER DOWN': '按住扳机别松手', 'RUSH OVER': '狂潮结束', 'FINISH WHAT IS LEFT': '清掉剩下的',
  'THE DEAD RISE': '亡者苏醒', 'THEY CAME FROM THE SKY': '天外来客', 'THE DEAD WALK': '亡者行军', 'GRAVEYARD SHIFT': '墓地夜班',
  'Horde inbound. Command has opened the ammo line: fire as much as you like until it ends.': '尸潮来了。指挥部已开放弹药补给线：结束之前随便打，子弹管够。',
  // ---- upgrades ----
  'EVERY SECOND WAVE': '每两波一次', 'CHOOSE AN UPGRADE': '选择一项升级', 'Click a card or press 1, 2 or 3. Upgrades last until the arena ends.': '点击卡片或按 1、2、3。升级持续到本场地结束。',
  'ONE TIME': '仅一次', 'No upgrades yet.': '还没有升级。',
  'EXPLOSIVES': '爆炸物', 'BODY': '身体', 'DASH': '闪避', 'SCORE': '得分', 'SUPPLY': '补给', 'GRENADES': '手雷',
  'BUCKSHOT': '大号霰弹', '+3 pellets in every scattergun blast.': '霰弹枪每发多 3 颗弹丸。',
  'SLAM FIRE': '连发', 'The scattergun fires 20% faster.': '霰弹枪射速提高 20%。',
  'HOLLOW POINTS': '空尖弹', 'Chaingun bullets deal 25% more damage.': '机枪子弹伤害提高 25%。',
  'CLUSTER SHELLS': '集束炮弹', 'Mortar shells burst into three bomblets on impact.': '迫击炮弹落地后再分裂出三枚小炸弹。',
  'BIGGER BOOM': '更大的爆炸', 'Mortar blast radius and damage +25%.': '迫击炮爆炸范围和伤害 +25%。',
  'EXTENDED MAGS': '扩容弹匣', '+10 rounds in every rifle magazine.': '步枪每个弹匣多 10 发。',
  'GRENADIER': '手雷兵', 'Carry 2 more grenades, and a full belt now.': '多带 2 颗手雷，并立即补满。',
  'CHAIN REACTION': '连锁反应', 'Anything killed by an explosion blows up too.': '被爆炸杀死的敌人也会爆炸。',
  'BLOODLUST': '嗜血', 'Every kill restores 3 health.': '每次击杀回复 3 点生命。',
  'FLEET FOOT': '飞毛腿', 'Move 10% faster.': '移动速度提高 10%。',
  'IRON SKIN': '铁皮', 'Take 15% less damage.': '受到的伤害减少 15%。',
  'Survive one killing blow with 1 health. Used up when it saves you.': '受到致命一击时保留 1 点生命，生效一次后消耗。',
  'BATTERING DASH': '冲撞闪避', 'Dash recharges 35% faster and smashes through enemies for 70 damage.': '闪避充能快 35%，并撞穿敌人造成 70 点伤害。',
  'KILLING SPREE': '杀戮盛宴', 'Combos last 1.5 s longer and the multiplier climbs to ×12.': '连杀计时延长 1.5 秒，倍数最高到 ×12。',
  'SCAVENGER': '拾荒者', 'Enemies drop supplies 60% more often.': '敌人掉落补给的概率提高 60%。',
  'BANDOLIER': '弹药带', '+50% ammo capacity for every weapon, and a full refill now.': '所有武器弹药上限 +50%，并立即补满。',
  // ---- pause and results ----
  'PAUSED': '已暂停', 'Click Resume to jump back in.': '点击"继续"回到战斗。', 'RESUME': '继续', 'MAIN MENU': '主菜单',
  'Score': '得分', 'Kills': '击杀', 'Best combo': '最高连杀', 'Accuracy': '命中率', 'Time': '用时', 'Best score': '最高分',
  'NEXT ARENA': '下一关', 'RETRY WAVE': '重打本波', 'RESTART': '重新开始', 'NEW': '新纪录',
  // ---- radio ----
  'Ranger, this is Control. Seven waves inbound over the dunes. Hold the basin.': '游骑兵，这里是指挥部。七波敌人正翻过沙丘，守住盆地。',
  'No walls out here, Ranger. Keep your head on a swivel and watch the sky.': '游骑兵，这里没有围墙。注意四周，留意天上。',
  'Tight quarters in the depot. Those red drums cut both ways. Use them.': '补给站里空间狭窄。红色油桶是把双刃剑，用好它。',
  'Readings by the water are off the chart. Something big lives here. Use the jump pads.': '水边的读数爆表了，这里有大家伙。用好弹跳板。',
  'Neon District is dark and wet. Shooters on the rooftops. Watch for the red lasers.': '霓虹街区又黑又湿，屋顶有枪手，留意红色激光。',
  'Wave down. Resupply is on the field. Catch your breath.': '这波打完了。场上有补给，喘口气。',
  'Good shooting. More on the way. Reload and move.': '打得好。还有更多敌人，装弹，换位置。',
  'Clear. Grab what you can before the next push.': '清空了。下一波之前能捡的都捡上。',
  'Three left. Finish it.': '还剩三个，收尾。',
  'You are hurt, Ranger. Break contact and find a medkit.': '游骑兵，你受伤了。脱离接触，去找医疗包。',
  'You are dry. Sidearm up. The ammo crate is on your compass.': '你没子弹了，换手枪。弹药箱已标在罗盘上。',
  'Big signature inbound. This is the one. Hit it with everything.': '大型信号接近，就是它了，全力开火。',
  'Gold target on the field. Bonus if you drop it in time.': '场上出现金色目标，限时击杀有奖励。',
  'Arena secure. Outstanding work, Ranger.': '场地已肃清。干得漂亮，游骑兵。',
  'Ranger is down. Control out.': '游骑兵倒下了。指挥部结束通话。',
  'Last wave. Leave nothing standing.': '最后一波，一个不留。'
};
const COMPASS_ZH = { N: '北', NE: '东北', E: '东', SE: '东南', S: '南', SW: '西南', W: '西', NW: '西北' };
const DIFF_ZH = { EASY: '简单', NORMAL: '普通', HARD: '困难' };
const PAT = [
  [/^WAVE (\d+) \/ (\d+)$/, m => `第 ${m[1]} / ${m[2]} 波`],
  [/^WAVE (\d+)$/, m => `第 ${m[1]} 波`],
  [/^NEXT WAVE IN (\d+)$/, m => `下一波 ${m[1]} 秒`],
  [/^(\d+) HOSTILES$/, m => `剩余 ${m[1]} 个敌人`],
  [/^(\d+) KILLS(.*)$/, m => `${m[1]} 连杀${m[2]}`],
  [/^(\d+) SPARE$/, m => `备弹 ${m[1]}`],
  [/^RETRY WAVE (\d+)$/, m => `重打第 ${m[1]} 波`],
  [/^YOU FELL IN WAVE (\d+)$/, m => `你倒在了第 ${m[1]} 波`],
  [/^ARENA ([IVX]+)$/, m => `场地 ${m[1]}`],
  [/^LOADING (\d+)%$/, m => `加载中 ${m[1]}%`],
  [/^LEVEL (\d+) OF (\d+)$/, m => `第 ${m[1]} 级，共 ${m[2]} 级`],
  [/^BEST ON ([A-Z]+): ([\d,.\s]+)$/, m => `${DIFF_ZH[m[1]] || m[1]}档最高分：${m[2]}`],
  [/^REACHED WAVE (\d+)$/, m => `打到第 ${m[1]} 波`],
  [/^CLEARED$/, () => '已通关'],
  [/^NO RECORD ON ([A-Z]+) YET$/, m => `${DIFF_ZH[m[1]] || m[1]}档还没有纪录`]
];
let lang = 'en';
try { lang = localStorage.getItem('sf_lang') || ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en'); } catch (e) { }
export const getLang = () => lang;
function one(s) {
  if (ZH[s] !== undefined) return ZH[s];
  for (const [re, fn] of PAT) { const m = s.match(re); if (m) return fn(m); }
  return null;
}
export function tr(s) {
  if (lang !== 'zh' || typeof s !== 'string' || !s) return s;
  const t = one(s); if (t !== null) return t;
  if (s.includes(' · ')) return s.split(' · ').map(p => { const q = one(p); return q === null ? p : q; }).join(' · ');
  return s;
}
export const compassLabel = k => lang === 'zh' ? COMPASS_ZH[k] : k;
// static page text: remember the English of every text node once, then show the current language
export function applyDom(root = document.body) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  for (const n of nodes) { const p = n.parentElement; if (!p || p.closest('script,style,[data-noi18n]')) continue;
    if (n.__en === undefined) n.__en = n.nodeValue; const raw = n.__en, core = raw.trim(); if (!core) continue;
    n.nodeValue = lang === 'zh' ? raw.replace(core, tr(core)) : raw; }
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}
export function setLang(l) { lang = l; try { localStorage.setItem('sf_lang', l); } catch (e) { } applyDom(); }
