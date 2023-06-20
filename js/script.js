const runeword = document.querySelector("#runewords");
const cubeBtn = document.querySelector("#cube");
const goldBtn = document.querySelector("#gold");

const chippedTopaz = 1;
const flawedTopaz = chippedTopaz * 3;
const topaz = flawedTopaz * 3;
const flawlessTopaz = topaz * 3;

const chippedAmethyst = 1;
const flawedAmethyst = chippedAmethyst * 3;
const amethyst = flawedAmethyst * 3;
const flawlessAmethyst = amethyst * 3;

const chippedSapphire = 1;
const flawedSapphire = chippedSapphire * 3;
const sapphire = flawedSapphire * 3;
const flawlessSapphire = sapphire * 3;

const chippedRuby = 1;
const flawedRuby = chippedRuby * 3;
const ruby = flawedRuby * 3;
const flawlessRuby = ruby * 3;

const chippedEmerald = 1;
const flawedEmerald = chippedEmerald * 3;
const emerald = flawedEmerald * 3;
const flawlessEmerald = emerald * 3;

const chippedDiamond = 1;
const flawedDiamond = chippedDiamond * 3;
const diamond = flawedDiamond * 3;

const el = 1;
const elGold = 560;
const eld = el * 3;
const eldGold = 560;
const tir = eld * 3;
const tirGold = 1260;
const nef = tir * 3;
const nefGold = 1260;
const eth = nef * 3;
const ethGold = 2240;
const ith = eth * 3;
const ithGold = 2240;
const tal = ith * 3;
const talGold = 3500;
const ral = tal * 3;
const ralGold = 5040;
const ort = ral * 3;
const ortGold = 6860;
const thul = ort * 3;
const thulGold = 8960;
const amnRune = thul * 3;
const amnTopaz = chippedTopaz;
const amnGem = amnTopaz;
const amn = amnRune + amnGem;
const amnGold = 11340;
const solRune = amnRune * 3;
const solTopaz = amnTopaz * 3;
const solAmethyst = chippedAmethyst;
const solGem = solTopaz + solAmethyst;
const sol = solRune + solGem;
const solGold = 14000;
const shaelRune = solRune * 3;
const shaelTopaz = solTopaz * 3;
const shaelAmethyst = solAmethyst * 3;
const shaelSapphire = chippedSapphire;
const shaelGem = shaelTopaz + shaelAmethyst + shaelSapphire
const shael = shaelRune + shaelGem;
const shaelGold = 16940;
const dolRune = shaelRune * 3;
const dolTopaz = shaelTopaz * 3;
const dolAmethyst = shaelAmethyst * 3;
const dolSapphire = shaelSapphire * 3;
const dolRuby = chippedRuby;
const dolGem = dolTopaz + dolAmethyst + dolSapphire + dolRuby;
const dol = dolRune + dolGem;
const dolGold = 20160;
const helRune = dolRune * 3;
const helTopaz = dolTopaz * 3;
const helAmethyst = dolAmethyst * 3;
const helSapphire = dolSapphire * 3;
const helRuby = dolRuby * 3;
const helEmerald = chippedEmerald;
const helGem =  helTopaz + helAmethyst + helSapphire + helRuby + helEmerald;
const hel = helRune + helGem;
const helGold = 1715;
const ioRune = helRune * 3;
const ioTopaz = helTopaz * 3;
const ioAmethyst = helAmethyst * 3;
const ioSapphire = helSapphire * 3;
const ioRuby = helRuby * 3;
const ioEmerald = helEmerald * 3;
const ioDiamond = chippedDiamond;
const ioGem = ioTopaz + ioAmethyst + ioSapphire + ioRuby + ioEmerald + ioDiamond;
const io = ioRune + ioGem;
const ioGold = 27440
const lumRune = ioRune * 3;
const lumTopaz = ioTopaz * 3 + flawedTopaz;
const lumAmethyst = ioAmethyst * 3;
const lumSapphire = ioSapphire * 3;
const lumRuby = ioRuby * 3;
const lumEmerald = ioEmerald * 3;
const lumDiamond = ioDiamond * 3;
const lumGem = lumTopaz + lumAmethyst + lumSapphire + lumRuby + lumEmerald + lumDiamond;
const lum = lumRune + lumGem;
const lumGold = 31500;
const koRune = lumRune * 3;
const koTopaz = lumTopaz * 3;
const koAmethyst = lumAmethyst * 3 + flawedAmethyst;
const koSapphire = lumSapphire * 3;
const koRuby = lumRuby * 3;
const koEmerald = lumEmerald * 3;
const koDiamond = lumDiamond * 3;
const koGem = koTopaz + koAmethyst + koSapphire + koRuby + koEmerald + koDiamond;
const ko = koRune + koGem;
const koGold = 35840;
const falRune = koRune * 3;
const falTopaz = koTopaz * 3;
const falAmethyst = koAmethyst * 3;
const falSapphire = koSapphire * 3 + flawedSapphire;
const falRuby = koRuby * 3;
const falEmerald = koEmerald * 3;
const falDiamond = koDiamond * 3;
const falGem = falTopaz + falAmethyst + falSapphire + falRuby + falEmerald + falDiamond;
const fal = falRune + falGem;
const falGold = 40460;
const lemRune = falRune * 3;
const lemTopaz = falTopaz * 3;
const lemAmethyst = falAmethyst * 3;
const lemSapphire = falSapphire * 3;
const lemRuby = falRuby * 3 + flawedRuby;
const lemEmerald = falEmerald * 3;
const lemDiamond = falDiamond * 3;
const lemGem = lemTopaz + lemAmethyst + lemSapphire + lemRuby + lemEmerald + lemDiamond;
const lem = lemRune + lemGem;
const lemGold = 45360;
const pulRune = lemRune * 3;
const pulTopaz = lemTopaz * 3;
const pulAmethyst = lemAmethyst * 3;
const pulSapphire = lemSapphire * 3;
const pulRuby = lemRuby * 3;
const pulEmerald = lemEmerald * 3 + flawedEmerald;
const pulDiamond = lemDiamond * 3;
const pulGem = pulTopaz + pulAmethyst + pulSapphire + pulRuby + pulEmerald + pulDiamond;
const pul = pulRune + pulGem;
const pulGold = 50540;
const umRune = pulRune * 2;
const umTopaz = pulTopaz * 2;
const umAmethyst = pulAmethyst * 2;
const umSapphire = pulSapphire * 2;
const umRuby = pulRuby * 2;
const umEmerald = pulEmerald * 2;
const umDiamond = pulDiamond * 2 + flawedDiamond;
const umGem = umTopaz + umAmethyst + umSapphire + umRuby + umEmerald + umDiamond;
const um = umRune + umGem;
const umGold = 56000;
const malRune = umRune * 2;
const malTopaz = umTopaz * 2 + topaz;
const malAmethyst = umAmethyst * 2;
const malSapphire = umSapphire * 2;
const malRuby = umRuby * 2;
const malEmerald = umEmerald * 2;
const malDiamond = umDiamond * 2;
const malGem = malTopaz + malAmethyst + malSapphire + malRuby + malEmerald + malDiamond;
const mal = malRune + malGem;
const malGold = 61740;
const istRune = malRune * 2;
const istTopaz = malTopaz * 2;
const istAmethyst = malAmethyst * 2 + amethyst;
const istSapphire = malSapphire * 2;
const istRuby = malRuby * 2;
const istEmerald = malEmerald * 2;
const istDiamond = malDiamond * 2;
const istGem = istTopaz + istAmethyst + istSapphire + istRuby + istEmerald + istDiamond;
const ist = istRune + istGem;
const istGold = 67760;
const gulRune = istRune * 2;
const gulTopaz = istTopaz * 2;
const gulAmethyst = istAmethyst * 2;
const gulSapphire = istSapphire * 2 + sapphire;
const gulRuby = istRuby * 2;
const gulEmerald = istEmerald * 2;
const gulDiamond = istDiamond * 2;
const gulGem = gulTopaz + gulAmethyst + gulSapphire + gulRuby + gulEmerald + gulDiamond;
const gul = gulRune + gulGem;
const gulGold = 74060;
const vexRune = gulRune * 2;
const vexTopaz = gulTopaz * 2;
const vexAmethyst = gulAmethyst * 2;
const vexSapphire = gulSapphire * 2;
const vexRuby = gulRuby * 2 + ruby;
const vexEmerald = gulEmerald * 2;
const vexDiamond = gulDiamond * 2;
const vexGem = vexTopaz + vexAmethyst + vexSapphire + vexRuby + vexEmerald + vexDiamond;
const vex = vexRune + vexGem;
const vexGold = 80640;
const ohmRune = vexRune * 2;
const ohmTopaz = vexTopaz * 2;
const ohmAmethyst = vexAmethyst * 2;
const ohmSapphire = vexSapphire * 2;
const ohmRuby = vexRuby * 2;
const ohmEmerald = vexEmerald * 2 + emerald;
const ohmDiamond = vexDiamond * 2;
const ohmGem = ohmTopaz + ohmAmethyst + ohmSapphire + ohmRuby + ohmEmerald + ohmDiamond;
const ohm = ohmRune + ohmGem;
const ohmGold = 87500
const loRune = ohmRune * 2;
const loTopaz = ohmTopaz * 2;
const loAmethyst = ohmAmethyst * 2;
const loSapphire = ohmSapphire * 2;
const loRuby = ohmRuby * 2;
const loEmerald = ohmEmerald * 2;
const loDiamond = ohmDiamond * 2 + diamond;
const loGem = loTopaz + loAmethyst + loSapphire + loRuby + loEmerald + loDiamond;
const lo = loRune + loGem;
const loGold = 94640;
const surRune = loRune * 2;
const surTopaz = loTopaz * 2 + flawlessTopaz;
const surAmethyst = loAmethyst * 2;
const surSapphire = loSapphire * 2;
const surRuby = loRuby * 2;
const surEmerald = loEmerald * 2;
const surDiamond = loDiamond * 2;
const surGem = surTopaz + surAmethyst + surSapphire + surRuby + surEmerald + surDiamond;
const sur = surRune + surGem;
const surGold = 102060;
const berRune = surRune * 2;
const berTopaz = surTopaz * 2;
const berAmethyst = surAmethyst * 2 + flawlessAmethyst;
const berSapphire = surSapphire * 2;
const berRuby = surRuby * 2;
const berEmerald = surEmerald * 2;
const berDiamond = surDiamond * 2;
const berGem = berTopaz + berAmethyst + berSapphire + berRuby + berEmerald + berDiamond;
const ber = berRune + berGem;
const berGold = 109760;
const jahRune = berRune * 2;
const jahTopaz = berTopaz * 2;
const jahAmethyst = berAmethyst * 2;
const jahSapphire = berSapphire * 2 + flawlessSapphire;
const jahRuby = berRuby * 2;
const jahEmerald = berEmerald * 2;
const jahDiamond = berDiamond * 2;
const jahGem = jahTopaz + jahAmethyst + jahSapphire + jahRuby + jahEmerald + jahDiamond;
const jah = jahRune + jahGem;
const jahGold = 117740;
const chamRune = jahRune * 2;
const chamTopaz = jahTopaz * 2;
const chamAmethyst = jahAmethyst * 2;
const chamSapphire = jahSapphire * 2;
const chamRuby = jahRuby * 2 + flawlessRuby;
const chamEmerald = jahEmerald * 2;
const chamDiamond = jahDiamond * 2;
const chamGem = chamTopaz + chamAmethyst + chamSapphire + chamRuby + chamEmerald + chamDiamond;
const cham = chamRune + chamGem;
const chamGold = 126000;
const zodRune = chamRune * 2;
const zodTopaz = chamTopaz * 2;
const zodAmethyst = chamAmethyst * 2;
const zodSapphire = chamSapphire * 2;
const zodRuby = chamRuby * 2;
const zodEmerald = chamEmerald * 2 + flawlessEmerald;
const zodDiamond = chamDiamond * 2;
const zodGem = zodTopaz + zodAmethyst + zodSapphire + zodRuby + zodEmerald + zodDiamond;
const zod = zodRune + zodGem;
const zodGold = 134540;

const ancientsPledge = ral + ort + tal;
const ancientsPledgeGold = ralGold + ortGold + talGold;
const blackRune = thul + ioRune + nef;
const blackTopaz = ioTopaz;
const blackAmethyst = ioAmethyst;
const blackSapphire = ioSapphire;
const blackRuby = ioRuby;
const blackEmerald = ioEmerald;
const blackDiamond = ioDiamond;
const blackGem = ioGem;
const black = thul + io + nef;
const blackGold = thulGold + ioGold + nefGold;
const furyRune = jahRune + gulRune + eth;
const furyTopaz = jahTopaz + gulTopaz;
const furyAmethyst = jahAmethyst + gulAmethyst;
const furySapphire = jahSapphire + gulSapphire;
const furyRuby = jahRuby + gulRuby;
const furyEmerald = jahEmerald + gulEmerald;
const furyDiamond = jahDiamond + gulDiamond;
const furyGem = jahGem + gulGem;
const fury = jah + gul + eth;
const furyGold = jahGold + gulGold + ethGold
const holyThunder = eth + ral + ort + tal;
const holyThunderGold = ethGold + ralGold + ortGold + talGold;
const honorRune = amnRune + el + ith + tir + solRune;
const honorTopaz = amnTopaz + solTopaz;
const honorAmethyst = solAmethyst;
const honorGem = amnGem + solGem;
const honor = amn + el + ith + tir + sol;
const honorGold = amnGold + elGold + ithGold + tirGold + solGold;
const kingsGraceRune = amnRune + ral + thul;
const kingsGraceTopaz = amnTopaz;
const kingsGraceGem = amnGem;
const kingsGrace = amn + ral + thul;
const kingsGraceGold = amnGold + ralGold + thulGold;
const leaf = tir + ral;
const leafGold = tirGold + ralGold;
const lionheartRune = helRune + lumRune + falRune;
const lionheartTopaz = helTopaz + lumTopaz + falTopaz;
const lionheartAmethyst = helAmethyst + lumAmethyst + falAmethyst;
const lionheartSapphire = helSapphire + lumSapphire + falSapphire;
const lionheartRuby = helRuby + lumRuby + falRuby;
const lionheartEmerald = helEmerald + lumEmerald + falEmerald;
const lionheartDiamond = lumDiamond + falDiamond;
const lionheartGem = helGem + lumGem + falGem;
const lionheart = hel + lum + fal;
const lionheartGold = helGold + lumGold + falGold;
const loreRune = ort + solRune;
const loreTopaz = solTopaz;
const loreAmethyst = solAmethyst;
const loreGem = solGem;
const lore = ort + sol;
const loreGold = ortGold + solGold;
const malice = ith + el + eth;
const maliceGold = ithGold + elGold + ethGold;
const melodyRune = shaelRune + koRune + nef;
const melodyTopaz = shaelTopaz + koTopaz;
const melodyAmethyst = shaelAmethyst + koAmethyst;
const melodySapphire = shaelSapphire + koSapphire;
const melodyRuby = koRuby;
const melodyEmerald = koEmerald;
const melodyDiamond = koDiamond;
const melodyGem = shaelGem + koGem;
const melody = shael + ko + nef;
const melodyGold = shaelGold + koGold + nefGold;
const memoryRune = lumRune + ioRune + solRune + eth;
const memoryTopaz = lumTopaz + ioTopaz + solTopaz;
const memoryAmethyst = lumAmethyst + ioAmethyst + solAmethyst;
const memorySapphire = lumSapphire + ioSapphire;
const memoryRuby = lumRuby + ioRuby;
const memoryEmerald = lumEmerald + ioEmerald;
const memoryDiamond = lumDiamond + ioDiamond;
const memoryGem = lumGem + ioGem + solGem;
const memory = lum + io + sol + eth;
const memoryGold = lumGold + ioGold + solGold + ethGold;
const nadir = nef + tir;
const nadirGold = nefGold + tirGold;
const radianceRune = nef + solRune + ith;
const radianceTopaz = solTopaz;
const radianceAmethyst = solAmethyst;
const radianceGem = solGem;
const radiance = nef + sol + ith;
const radianceGold = nefGold + solGold + ithGold;
const rhymeRune = shaelRune + eth;
const rhymeTopaz = shaelTopaz;
const rhymeAmethyst = shaelAmethyst;
const rhymeSapphire = shaelSapphire;
const rhymeGem = shaelGem;
const rhyme = shael + eth;
const rhymeGold = shaelGold + ethGold;
const silenceRune = dolRune + eld + helRune + istRune + tir + vexRune;
const silenceTopaz = dolTopaz + helTopaz + istTopaz + vexTopaz;
const silenceAmethyst = dolAmethyst + helAmethyst + ioAmethyst + vexAmethyst;
const silenceSapphire = dolSapphire + helSapphire + ioSapphire + vexSapphire;
const silenceRuby = dolRuby + helRuby + ioRuby + vexRuby;
const silenceEmerald = helEmerald + ioEmerald + vexEmerald;
const silenceDiamond = ioDiamond + vexDiamond;
const silenceGem = dolGem + helGem + istGem + vexGem;
const silence = dol + eld + hel + ist + tir + vex;
const silenceGold = dolGold + eldGold + helGold + istGold + tirGold + vexGold;
const smokeRune = nef + lumRune;
const smokeTopaz = lumTopaz;
const smokeAmethyst = lumAmethyst;
const smokeSapphire = lumSapphire;
const smokeRuby = lumRuby;
const smokeEmerald = lumEmerald;
const smokeDiamond = lumDiamond;
const smokeGem = lumGem;
const smoke = nef + lum;
const smokeGold = nefGold + lumGold;
const stealth = tal + eth;
const stealthGold = talGold + ethGold;
const steel = tir + el;
const steelGold = tirGold + elGold;
const strengthRune = amnRune + tir;
const strengthTopaz = amnTopaz;
const strengthGem = amnGem;
const strength = amn + tir;
const strengthGold = amnGold + tirGold;
const venomRune = tal + dolRune + malRune;
const venomTopaz = dolTopaz + malTopaz;
const venomAmethyst = dolAmethyst + malAmethyst;
const venomSapphire = dolSapphire + malSapphire;
const venomRuby = dolRuby + malRuby;
const venomEmerald = malEmerald;
const venomDiamond = malDiamond;
const venomGem = dolGem + malGem;
const venom = tal + dol + mal;
const venomGold = talGold + dolGold + malGold;
const wealthRune = lemRune + koRune + tir;
const wealthTopaz = lemTopaz + koTopaz;
const wealthAmethyst = lemAmethyst + koAmethyst;
const wealthSapphire = lemSapphire + koSapphire;
const wealthRuby = lemRuby + koRuby;
const wealthEmerald = lemEmerald + koEmerald;
const wealthDiamond = lemDiamond + koDiamond;
const wealthGem = lemGem + koGem;
const wealth = lem + ko + tir;
const wealthGold = lemGold + koGold + tirGold;
const whiteRune = dolRune + ioRune;
const whiteTopaz = dolTopaz + ioTopaz;
const whiteAmethyst = dolAmethyst + ioAmethyst;
const whiteSapphire = dolSapphire + ioSapphire;
const whiteRuby = dolRuby + ioRuby;
const whiteEmerald = ioEmerald;
const whiteDiamond = ioDiamond;
const whiteGem = dolGem + ioGem;
const white = dol + io;
const whiteGold = dolGold + ioGold;
const zephyr = ort + eth;
const zephyrGold = ortGold + ethGold;
const beastRune = berRune + tir + umRune + malRune + lumRune;
const beastTopaz = berTopaz + umTopaz + malTopaz + lumTopaz;
const beastAmethyst = berAmethyst + umAmethyst + malAmethyst + lumAmethyst;
const beastSapphire = berSapphire + umSapphire + malSapphire + lumSapphire;
const beastRuby = berRuby + umRuby + malRuby + lumRuby;
const beastEmerald = berEmerald + umEmerald + malEmerald + lumEmerald;
const beastDiamond = berDiamond + umDiamond + malDiamond + lumDiamond;
const beastGem = berGem + umGem + malGem + lumGem;
const beast = ber + tir + um + mal + lum;
const beastGold = berGold + tirGold + umGold + malGold + lumGold;
const brambleRune = ral + ohmRune + surRune + eth;
const brambleTopaz = ohmTopaz + surTopaz;
const brambleAmethyst = ohmAmethyst + surAmethyst;
const brambleSapphire = ohmSapphire + surSapphire;
const brambleRuby = ohmRuby + surRuby;
const brambleEmerald = ohmEmerald + surEmerald;
const brambleDiamond = ohmDiamond + surDiamond;
const brambleGem = ohmGem + surGem;
const bramble = ral + ohm + sur + eth;
const brambleGold = ralGold + ohmGold + surGold + ethGold;
const breathOfTheDyingRune = vexRune + helRune + el + eld + zodRune + eth;
const breathOfTheDyingTopaz = vexTopaz + helTopaz + zodTopaz;
const breathOfTheDyingAmethyst = vexAmethyst + helAmethyst + zodAmethyst;
const breathOfTheDyingSapphire = vexSapphire + helSapphire + zodSapphire;
const breathOfTheDyingRuby = vexRuby + helRuby + zodRuby;
const breathOfTheDyingEmerald = vexEmerald + helEmerald + zodEmerald;
const breathOfTheDyingDiamond = vexDiamond + zodDiamond;
const breathOfTheDyingGem = vexGem + helGem + zodGem;
const breathOfTheDying = vex + hel + el + eld + zod + eth;
const breathOfTheDyingGold = vexGold + helGold + elGold + eldGold + zodGold + ethGold;
const callToArmsRune = amnRune + ral + malRune + istRune + ohmRune;
const callToArmsTopaz = amnTopaz + malTopaz + istTopaz + ohmTopaz;
const callToArmsAmethyst = malAmethyst + istAmethyst + ohmAmethyst;
const callToArmsSapphire = malSapphire + istSapphire + ohmSapphire;
const callToArmsRuby = malRuby + istRuby + ohmRuby;
const callToArmsEmerald = malEmerald + istEmerald + ohmEmerald;
const callToArmsDiamond = malDiamond + istDiamond + ohmDiamond;
const callToArmsGem = amnGem + malGem + istGem + ohmGem;
const callToArms = amn + ral + mal + ist + ohm;
const callToArmsGold = amnGold + ralGold + malGold + istGold + ohmGold;
const chainsOfHonorRune = dolRune + umRune + berRune + istRune;
const chainsOfHonorTopaz = dolTopaz + umTopaz + berTopaz + istTopaz;
const chainsOfHonorAmethyst = dolAmethyst + umAmethyst + berAmethyst + istAmethyst;
const chainsOfHonorSapphire = dolSapphire + umSapphire + berSapphire + istSapphire;
const chainsOfHonorRuby = dolRuby + umRuby + berRuby + istRuby;
const chainsOfHonorEmerald = umEmerald + berEmerald + istEmerald;
const chainsOfHonorDiamond = umDiamond + berDiamond + istDiamond;
const chainsOfHonorGem = dolGem + umGem + berGem + istGem;
const chainsOfHonor = dol + um + ber + ist;
const chainsOfHonorGold = dolGold + umGold + berGold + istGold;
const chaosRune = falRune + ohmRune + umRune;
const chaosTopaz = falTopaz + ohmTopaz + umTopaz;
const chaosAmethyst = falAmethyst + ohmAmethyst + umAmethyst;
const chaosSapphire = falSapphire + ohmSapphire + umSapphire;
const chaosRuby = falRuby + ohmRuby + umRuby;
const chaosEmerald = falEmerald + ohmEmerald + umEmerald;
const chaosDiamond = falDiamond + ohmDiamond + umDiamond;
const chaosGem = falGem + ohmGem + umGem;
const chaos = fal + ohm + um;
const chaosGold = falGold + ohmGold + umGold;
const crescentMoonRune = shaelRune + umRune + tir;
const crescentMoonTopaz = shaelTopaz + umTopaz;
const crescentMoonAmethyst = shaelAmethyst + umAmethyst;
const crescentMoonSapphire = shaelSapphire + umSapphire;
const crescentMoonRuby = umRuby;
const crescentMoonEmerald = umEmerald;
const crescentMoonDiamond = umDiamond;
const crescentMoonGem = shaelGem + umGem;
const crescentMoon = shael + um + tir;
const crescentMoonGold = shaelGold + umGold + tirGold;
const deliriumRune = lemRune + istRune + ioRune;
const deliriumTopaz = lemTopaz + istTopaz + ioTopaz;
const deliriumAmethyst = lemAmethyst + istAmethyst + ioAmethyst;
const deliriumSapphire = lemSapphire + istSapphire + ioSapphire;
const deliriumRuby = lemRuby + istRuby + ioRuby;
const deliriumEmerald = lemEmerald + istEmerald + ioEmerald;
const deliriumDiamond = lemDiamond + istDiamond + ioDiamond;
const deliriumGem = lemGem + istGem + ioGem;
const delirium = lem + ist + io;
const deliriumGold = lemGold + istGold + ioGold;
const doomRune = helRune + ohmRune + umRune + loRune + chamRune;
const doomTopaz = helTopaz + ohmTopaz + umTopaz + loTopaz + chamTopaz;
const doomAmethyst = helAmethyst + ohmAmethyst + umAmethyst + loAmethyst + chamAmethyst;
const doomSapphire = helSapphire + ohmSapphire + umSapphire + loSapphire + chamSapphire;
const doomRuby = helRuby + ohmRuby + umRuby + loRuby + chamRuby;
const doomEmerald = helEmerald + ohmEmerald + umEmerald + loEmerald + chamEmerald;
const doomDiamond = ohmDiamond + umDiamond + loDiamond + chamDiamond;
const doomGem = helGem + ohmGem + umGem + loGem + chamGem;
const doom = hel + ohm + um + lo + cham;
const doomGold = helGold + ohmGold + umGold + loGold + chamGold;
const duressRune = shaelRune + umRune + thul;
const duressTopaz = shaelTopaz + umTopaz;
const duressAmethyst = shaelAmethyst + umAmethyst;
const duressSapphire = shaelSapphire + umSapphire;
const duressRuby = umRuby;
const duressEmerald = umEmerald;
const duressDiamond = umDiamond;
const duressGem = shaelGem + umGem;
const duress = shael + um + thul;
const duressGold = shaelGold + umGold + thulGold;
const enigmaRune = jahRune + ith + berRune;
const enigmaTopaz = jahTopaz + berTopaz;
const enigmaAmethyst = jahAmethyst + berAmethyst;
const enigmaSapphire = jahSapphire + berSapphire;
const enigmaRuby = jahRuby + berRuby;
const enigmaEmerald = jahEmerald + berEmerald;
const enigmaDiamond = jahDiamond + berDiamond;
const enigmaGem = jahGem + berGem;
const enigma = jah + ith + ber;
const enigmaGold = jahGold + ithGold + berGold;
const eternityRune = amnRune + berRune + istRune + solRune + surRune;
const eternityTopaz = amnTopaz + berTopaz + istTopaz + solTopaz + surTopaz;
const eternityAmethyst = berAmethyst + istAmethyst + solAmethyst + surAmethyst;
const eternitySapphire = berSapphire + istSapphire + surSapphire;
const eternityRuby = berRuby + istRuby + surRuby;
const eternityEmerald = berEmerald + istEmerald + surEmerald;
const eternityDiamond = berDiamond + istDiamond + surDiamond;
const eternityGem = amnGem + berGem + istGem + solGem + surGem;
const eternity = amn + ber + ist + sol + sur;
const eternityGold = amnGold + berGold + istGold + solGold + surGold;
const exileRune = vexRune + ohmRune + istRune + dolRune;
const exileTopaz = vexTopaz + ohmTopaz + istTopaz + dolTopaz;
const exileAmethyst = vexAmethyst + ohmAmethyst + istAmethyst + dolAmethyst;
const exileSapphire = vexSapphire + ohmSapphire + istSapphire + dolSapphire;
const exileRuby = vexRuby + ohmRuby + istRuby + dolRuby;
const exileEmerald = vexEmerald + ohmEmerald + istEmerald;
const exileDiamond = vexDiamond + ohmDiamond + istDiamond;
const exileGem = vexGem + ohmGem + istGem + dolGem;
const exile = vex + ohm + ist + dol;
const exileGold = vexGold + ohmGold + istGold + dolGold
const famineRune = falRune + ohmRune + ort + jahRune;
const famineTopaz = falTopaz + ohmTopaz + jahTopaz;
const famineAmethyst = falAmethyst + ohmAmethyst + jahAmethyst;
const famineSapphire = falSapphire + ohmSapphire + jahSapphire;
const famineRuby = falRuby + ohmRuby + jahRuby;
const famineEmerald = falEmerald + ohmEmerald + jahEmerald;
const famineDiamond = falDiamond + ohmDiamond + jahDiamond;
const famineGem = falGem + ohmGem + jahGem;
const famine = fal + ohm + ort + jah;
const famineGold = falGold + ohmGold + ortGold + jahGold;
const gloomRune = falRune + umRune + pulRune;
const gloomTopaz = falTopaz + umTopaz + pulTopaz;
const gloomAmethyst = falAmethyst + umAmethyst + pulAmethyst;
const gloomSapphire = falSapphire + umSapphire + pulSapphire;
const gloomRuby = falRuby + umRuby + pulRuby;
const gloomEmerald = falEmerald + umEmerald + pulEmerald;
const gloomDiamond = falDiamond + umDiamond + pulDiamond;
const gloomGem = falGem + umGem + pulGem;
const gloom = fal + um + pul;
const gloomGold = falGold + umGold + pulGold;
const handOfJusticeRune = surRune + chamRune + amnRune + loRune;
const handOfJusticeTopaz = surTopaz + chamTopaz + amnTopaz + loTopaz;
const handOfJusticeAmethyst = surAmethyst + chamAmethyst + loAmethyst;
const handOfJusticeSapphire = surSapphire + chamSapphire + loSapphire;
const handOfJusticeRuby = surRuby + chamRuby + loRuby;
const handOfJusticeEmerald = surEmerald + chamEmerald + loEmerald;
const handOfJusticeDiamond = surDiamond + chamDiamond + loDiamond;
const handOfJusticeGem = surGem + chamGem + amnGem + loGem;
const handOfJustice = sur + cham + amn + lo;
const handOfJusticeGold = surGold + chamGold + amnGold + loGold;
const heartOfTheOakRune = koRune + vexRune + pulRune + thul;
const heartOfTheOakTopaz = koTopaz + vexTopaz + pulTopaz;
const heartOfTheOakAmethyst = koAmethyst + vexAmethyst + pulAmethyst;
const heartOfTheOakSapphire = koSapphire + vexSapphire + pulSapphire;
const heartOfTheOakRuby = koRuby + vexRuby + pulRuby;
const heartOfTheOakEmerald = koEmerald + vexEmerald + pulEmerald;
const heartOfTheOakDiamond = koDiamond + vexDiamond + pulDiamond;
const heartOfTheOakGem = koGem + vexGem + pulGem;
const heartOfTheOak = ko + vex + pul + thul;
const heartOfTheOakGold = koGold + vexGold + pulGold + thulGold;
const kingslayerRune = malRune + umRune + gulRune + falRune;
const kingslayerTopaz = malTopaz + umTopaz + gulTopaz + falTopaz;
const kingslayerAmethyst = malAmethyst + umAmethyst + gulAmethyst + falAmethyst;
const kingslayerSapphire = malSapphire + umSapphire + gulSapphire + falSapphire;
const kingslayerRuby = malRuby + umRuby + gulRuby + falRuby;
const kingslayerEmerald = malEmerald + umEmerald + gulEmerald + falEmerald;
const kingslayerDiamond = malDiamond + umDiamond + gulDiamond + falDiamond;
const kingslayerGem = malGem + umGem + gulGem + falGem;
const kingslayer = mal + um + gul + fal;
const kingslayerGold = malGold + umGold + gulGold + falGold;
const passionRune = dolRune + ort + eld + lemRune;
const passionTopaz = dolTopaz + lemTopaz;
const passionAmethyst = dolAmethyst + lemAmethyst;
const passionSapphire = dolSapphire + lemSapphire;
const passionRuby = dolRuby + lemRuby;
const passionEmerald = lemEmerald;
const passionDiamond = lemDiamond;
const passionGem = dolGem + lemGem;
const passion = dol + ort + eld + lem;
const passionGold = dolGold + ortGold + eldGold + lemGold;
const prudenceRune = malRune + tir;
const prudenceTopaz = malTopaz;
const prudenceAmethyst = malAmethyst;
const prudenceSapphire = malSapphire;
const prudenceRuby = malRuby;
const prudenceEmerald = malEmerald;
const prudenceDiamond = malDiamond;
const prudenceGem = malGem;
const prudence = mal + tir;
const prudenceGold = malGold + tirGold;
const sanctuaryRune = koRune + koRune + malRune;
const sanctuaryTopaz = koTopaz + koTopaz + malTopaz;
const sanctuaryAmethyst = koAmethyst + koAmethyst + malAmethyst;
const sanctuarySapphire = koSapphire + koSapphire + malSapphire;
const sanctuaryRuby = koRuby + koRuby + malRuby;
const sanctuaryEmerald = koEmerald + koEmerald + malEmerald;
const sanctuaryDiamond = koDiamond + koDiamond + malDiamond;
const sanctuaryGem = koGem + koGem + malGem;
const sanctuary = ko + ko + mal;
const sanctuaryGold = koGold + koGold + malGold;
const splendorRune = eth + lumRune;
const splendorTopaz = lumTopaz;
const splendorAmethyst = lumAmethyst;
const splendorSapphire = lumSapphire;
const splendorRuby = lumRuby;
const splendorEmerald = lumEmerald;
const splendorDiamond = lumDiamond;
const splendorGem = lumGem;
const splendor = eth + lum;
const splendorGold = ethGold + lumGold;
const stoneRune = shaelRune + umRune + pulRune + lumRune;
const stoneTopaz = shaelTopaz + umTopaz + pulTopaz + lumTopaz;
const stoneAmethyst = shaelAmethyst + umAmethyst + pulAmethyst + lumAmethyst;
const stoneSapphire = shaelSapphire + umSapphire + pulSapphire + lumSapphire;
const stoneRuby = umRuby + pulRuby + lumRuby;
const stoneEmerald = umEmerald + pulEmerald + lumEmerald;
const stoneDiamond = umDiamond + pulDiamond + lumDiamond;
const stoneGem = shaelGem + umGem + pulGem + lumGem;
const stone = shael + um + pul + lum;
const stoneGold = shaelGold + umGold + pulGold + lumGold;
const windRune = surRune + el;
const windTopaz = surTopaz;
const windAmethyst = surAmethyst;
const windSapphire = surSapphire;
const windRuby = surRuby;
const windEmerald = surEmerald;
const windDiamond = surDiamond;
const windGem = surGem;
const wind = sur + el;
const windGold = surGold + elGold;
const brandRune = jahRune + loRune + malRune + gulRune;
const brandTopaz = jahTopaz + loTopaz + malTopaz + gulTopaz;
const brandAmethyst = jahAmethyst + loAmethyst + malAmethyst + gulAmethyst;
const brandSapphire = jahSapphire + loSapphire + malSapphire + gulSapphire;
const brandRuby = jahRuby + loRuby + malRuby + gulRuby;
const brandEmerald = jahEmerald + loEmerald + malEmerald + gulEmerald;
const brandDiamond = jahDiamond + loDiamond + malDiamond + gulDiamond;
const brandGem = jahGem + loGem + malGem + gulGem;
const brand = jah + lo + mal + gul;
const brandGold = jahGold + loGold + malGold + gulGold;
const deathRune = helRune + el + vexRune + ort + gulRune;
const deathTopaz = helTopaz + vexTopaz + gulTopaz;
const deathAmethyst = helAmethyst + vexAmethyst + gulAmethyst;
const deathSapphire = helSapphire + vexSapphire + gulSapphire;
const deathRuby = helRuby + vexRuby + gulRuby;
const deathEmerald = helEmerald + vexEmerald + gulEmerald;
const deathDiamond = vexDiamond + gulDiamond;
const deathGem = helGem + vexGem + gulGem;
const death = hel + el + vex + ort + gul;
const deathGold = helGold + elGold + vexGold + ortGold + gulGold;
const destructionRune = vexRune + loRune + berRune + jahRune + koRune;
const destructionTopaz = vexTopaz + loTopaz + berTopaz + jahTopaz + koTopaz;
const destructionAmethyst = vexAmethyst + loAmethyst + berAmethyst + jahAmethyst + koAmethyst;
const destructionSapphire = vexSapphire + loSapphire + berSapphire + jahSapphire + koSapphire;
const destructionRuby = vexRuby + loRuby + berRuby + jahRuby + koRuby;
const destructionEmerald = vexEmerald + loEmerald + berEmerald + jahEmerald + koEmerald;
const destructionDiamond = vexDiamond + loDiamond + berDiamond + jahDiamond + koDiamond;
const destructionGem = vexGem + loGem + berGem + jahGem + koGem;
const destruction = vex + lo + ber + jah + ko;
const destructionGold = vexGold + loGold + berGold + jahGold + koGold;
const dragonRune = surRune + loRune + solRune;
const dragonTopaz = surTopaz + loTopaz + solTopaz;
const dragonAmethyst = surAmethyst + loAmethyst + solAmethyst;
const dragonSapphire = surSapphire + loSapphire;
const dragonRuby = surRuby + loRuby;
const dragonEmerald = surEmerald + loEmerald;
const dragonDiamond = surDiamond + loDiamond;
const dragonGem = surGem + loGem + solGem;
const dragon = sur + lo + sol;
const dragonGold = surGold + loGold + solGold;
const dreamRune = ioRune + jahRune + pulRune;
const dreamTopaz = ioTopaz + jahTopaz + pulTopaz;
const dreamAmethyst = ioAmethyst + jahAmethyst + pulAmethyst;
const dreamSapphire = ioSapphire + jahSapphire + pulSapphire;
const dreamRuby = ioRuby + jahRuby + pulRuby;
const dreamEmerald = ioEmerald + jahEmerald + pulEmerald;
const dreamDiamond = ioDiamond + jahDiamond + pulDiamond;
const dreamGem = ioGem + jahGem + pulGem;
const dream = io + jah + pul;
const dreamGold = ioGold + jahGold + pulGold;
const edgeRune = tir + tal + amnRune;
const edgeTopaz = amnTopaz;
const edgeGem = amnGem;
const edge = tir + tal + amn;
const edgeGold = tirGold + talGold + amnGold;
const faithRune = ohmRune + jahRune + lemRune + eld;
const faithTopaz = ohmTopaz + jahTopaz + lemTopaz;
const faithAmethyst = ohmAmethyst + jahAmethyst + lemAmethyst;
const faithSapphire = ohmSapphire + jahSapphire + lemSapphire;
const faithRuby = ohmRuby + jahRuby + lemRuby;
const faithEmerald = ohmEmerald + jahEmerald + lemEmerald;
const faithDiamond = ohmDiamond + jahDiamond + lemDiamond;
const faithGem = ohmGem + jahGem + lemGem;
const faith = ohm + jah + lem + eld;
const faithGold = ohmGold + jahGold + lemGold + eldGold;
const fortitudeRune = el + solRune + dolRune + loRune;
const fortitudeTopaz = solTopaz + dolTopaz + loTopaz;
const fortitudeAmethyst = solAmethyst + dolAmethyst + loAmethyst;
const fortitudeSapphire = dolSapphire + loSapphire;
const fortitudeRuby = dolRuby + loRuby;
const fortitudeEmerald = loEmerald;
const fortitudeDiamond = loDiamond;
const fortitudeGem = solGem + dolGem + loGem;
const fortitude = el + sol + dol + lo;
const fortitudeGold = elGold + solGold + dolGold + loGold;
const griefRune = eth + tir + loRune + malRune + ral;
const griefTopaz = loTopaz + malTopaz;
const griefAmethyst = loAmethyst + malAmethyst;
const griefSapphire = loSapphire + malSapphire;
const griefRuby = loRuby + malRuby;
const griefEmerald = loEmerald + malEmerald;
const griefDiamond = loDiamond + malDiamond;
const griefGem = loGem + malGem;
const grief = eth + tir + lo + mal + ral;
const griefGold = ethGold + tirGold + loGold + malGold + ralGold;
const harmonyRune = tir + ith + solRune + koRune;
const harmonyTopaz = solTopaz + koTopaz;
const harmonyAmethyst = solAmethyst + koAmethyst;
const harmonySapphire = koSapphire;
const harmonyRuby = koRuby;
const harmonyEmerald = koEmerald;
const harmonyDiamond = koDiamond;
const harmonyGem = solGem + koGem;
const harmony = tir + ith + sol + ko;
const harmonyGold = tirGold + ithGold + solGold + koGold;
const iceRune = amnRune + shaelRune + jahRune + loRune;
const iceTopaz = amnTopaz + shaelTopaz + jahTopaz + loTopaz;
const iceAmethyst = shaelAmethyst + jahAmethyst + loAmethyst;
const iceSapphire = shaelSapphire + jahSapphire + loSapphire;
const iceRuby = jahRuby + loRuby;
const iceEmerald = jahEmerald + loEmerald;
const iceDiamond = jahDiamond + loDiamond;
const iceGem = amnGem + shaelGem + jahGem + loGem;
const ice = amn + shael + jah + lo;
const iceGold = amnGold + shaelGold + jahGold + loGold;
const infinityRune = berRune + malRune + berRune + istRune;
const infinityTopaz = berTopaz + malTopaz + berTopaz + istTopaz;
const infinityAmethyst = berAmethyst + malAmethyst + berAmethyst + istAmethyst;
const infinitySapphire = berSapphire + malSapphire + berSapphire + istSapphire;
const infinityRuby = berRuby + malRuby + berRuby + istRuby;
const infinityEmerald = berEmerald + malEmerald + berEmerald + istEmerald;
const infinityDiamond = berDiamond + malDiamond + berDiamond + istDiamond;
const infinityGem = berGem + malGem + berGem + istGem;
const infinity = ber + mal + ber + ist;
const infinityGold = berGold + malGold + berGold + istGold;
const insightRune = ral + tir + tal + solRune;
const insightTopaz = solTopaz;
const insightAmethyst = solAmethyst;
const insightGem = solGem;
const insight = ral + tir + tal + sol;
const insightGold = ralGold + tirGold + talGold + solGold;
const lastWishRune = jahRune + malRune + jahRune + surRune + jahRune + berRune;
const lastWishTopaz = jahTopaz + malTopaz + jahTopaz + surTopaz + jahTopaz + berTopaz;
const lastWishAmethyst = jahAmethyst + malAmethyst + jahAmethyst + surAmethyst + jahAmethyst + berAmethyst;
const lastWishSapphire = jahSapphire + malSapphire + jahSapphire + surSapphire + jahSapphire + berSapphire;
const lastWishRuby = jahRuby + malRuby + jahRuby + surRuby + jahRuby + berRuby;
const lastWishEmerald = jahEmerald + malEmerald + jahEmerald + surEmerald + jahEmerald + berEmerald;
const lastWishDiamond = jahDiamond + malDiamond + jahDiamond + surDiamond + jahDiamond + berDiamond;
const lastWishGem = jahGem + malGem + jahGem + surGem + jahGem + berGem;
const lastWish = jah + mal + jah + sur + jah + ber;
const lastWishGold = jahGold + malGold + jahGold + surGold + jahGold + berGold;
const lawbringerRune = amnRune + lemRune + koRune;
const lawbringerTopaz = amnTopaz + lemTopaz + koTopaz;
const lawbringerAmethyst = lemAmethyst + koAmethyst;
const lawbringerSapphire = lemSapphire + koSapphire;
const lawbringerRuby = lemRuby + koRuby;
const lawbringerEmerald = lemEmerald + koEmerald;
const lawbringerDiamond = lemDiamond + koDiamond;
const lawbringerGem = amnGem + lemGem + koGem;
const lawbringer = amn + lem + ko;
const lawbringerGold = amnGold + lemGold + koGold;
const oathRune = shaelRune + pulRune + malRune + lumRune;
const oathTopaz = shaelTopaz + pulTopaz + malTopaz + lumTopaz;
const oathAmethyst = shaelAmethyst + pulAmethyst + malAmethyst + lumAmethyst;
const oathSapphire = shaelSapphire + pulSapphire + malSapphire + lumSapphire;
const oathRuby = pulRuby + malRuby + lumRuby;
const oathEmerald = pulEmerald + malEmerald + lumEmerald;
const oathDiamond = pulDiamond + malDiamond + lumDiamond;
const oathGem = shaelGem + pulGem + malGem + lumGem;
const oath = shael + pul + mal + lum;
const oathGold = shaelGold + pulGold + malGold + lumGold;
const obedienceRune = helRune + koRune + thul + eth + falRune;
const obedienceTopaz = helTopaz + koTopaz + falTopaz;
const obedienceAmethyst = helAmethyst + koAmethyst + falAmethyst;
const obedienceSapphire = helSapphire + koSapphire + falSapphire;
const obedienceRuby = helRuby + koRuby + falRuby;
const obedienceEmerald = helEmerald + koEmerald + falEmerald;
const obedienceDiamond = koDiamond + falDiamond;
const obedienceGem = helGem + koGem + falGem;
const obedience = hel + ko + thul + eth + fal;
const obedienceGold = helGold + koGold + thulGold + ethGold + falGold;
const phoenixRune = vexRune + vexRune + loRune + jahRune;
const phoenixTopaz = vexTopaz + vexTopaz + loTopaz + jahTopaz;
const phoenixAmethyst = vexAmethyst + vexAmethyst + loAmethyst + jahAmethyst;
const phoenixSapphire = vexSapphire + vexSapphire + loSapphire + jahSapphire;
const phoenixRuby = vexRuby + vexRuby + loRuby + jahRuby;
const phoenixEmerald = vexEmerald + vexEmerald + loEmerald + jahEmerald;
const phoenixDiamond = vexDiamond + vexDiamond + loDiamond + jahDiamond;
const phoenixGem = vexGem + vexGem + loGem + jahGem;
const phoenix = vex + vex + lo + jah;
const phoenixGold = vexGold + vexGold + loGold + jahGold;
const prideRune = chamRune + surRune + ioRune + loRune;
const prideTopaz = chamTopaz + surTopaz + ioTopaz + loTopaz;
const prideAmethyst = chamAmethyst + surAmethyst + ioAmethyst + loAmethyst;
const prideSapphire = chamSapphire + surSapphire + ioSapphire + loSapphire;
const prideRuby = chamRuby + surRuby + ioRuby + loRuby;
const prideEmerald = chamEmerald + surEmerald + ioEmerald + loEmerald;
const prideDiamond = chamDiamond + surDiamond + ioDiamond + loDiamond;
const prideGem = chamGem + surGem + ioGem + loGem;
const pride = cham + sur + io + lo;
const prideGold = chamGold + surGold + ioGold + loGold;
const riftRune = helRune + koRune + lemRune + gulRune;
const riftTopaz = helTopaz + koTopaz + lemTopaz + gulTopaz;
const riftAmethyst = helAmethyst + koAmethyst + lemAmethyst + gulAmethyst;
const riftSapphire = helSapphire + koSapphire + lemSapphire + gulSapphire;
const riftRuby = helRuby + koRuby + lemRuby + gulRuby;
const riftEmerald = helEmerald + koEmerald + lemEmerald + gulEmerald;
const riftDiamond = koDiamond + lemDiamond + gulDiamond;
const riftGem = helGem + koGem + lemGem + gulGem;
const rift = hel + ko + lem + gul;
const riftGold = helGold + koGold + lemGold + gulGold;
const spiritRune = tal + thul + ort + amnRune;
const spiritTopaz = amnTopaz;
const spiritGem = amnGem;
const spirit = tal + thul + ort + amn;
const spiritGold = talGold + thulGold + ortGold + amnGold;
const voiceOfReasonRune = lemRune + koRune + el + eld;
const voiceOfReasonTopaz = lemTopaz + koTopaz;
const voiceOfReasonAmethyst = lemAmethyst + koAmethyst;
const voiceOfReasonSapphire = lemSapphire + koSapphire;
const voiceOfReasonRuby = lemRuby + koRuby;
const voiceOfReasonEmerald = lemEmerald + koEmerald;
const voiceOfReasonDiamond = lemDiamond + koDiamond;
const voiceOfReasonGem = lemGem + koGem;
const voiceOfReason = lem + ko + el + eld;
const voiceOfReasonGold = lemGold + koGold + elGold + eldGold;
const wrathRune = pulRune + lumRune + berRune + malRune;
const wrathTopaz = pulTopaz + lumTopaz + berTopaz + malTopaz;
const wrathAmethyst = pulAmethyst + lumAmethyst + berAmethyst + malAmethyst;
const wrathSapphire = pulSapphire + lumSapphire + berSapphire + malSapphire;
const wrathRuby = pulRuby + lumRuby + berRuby + malRuby;
const wrathEmerald = pulEmerald + lumEmerald + berEmerald + malEmerald;
const wrathDiamond = pulDiamond + lumDiamond + berDiamond + malDiamond;
const wrathGem = pulGem + lumGem + berGem + malGem;
const wrath = pul + lum + ber + mal;
const wrathGold = pulGold + lumGold + berGold + malGold;
const boneRune = solRune + umRune + umRune;
const boneTopaz = solTopaz + umTopaz + umTopaz;
const boneAmethyst = solAmethyst + umAmethyst + umAmethyst;
const boneSapphire = umSapphire + umSapphire;
const boneRuby = umRuby + umRuby;
const boneEmerald = umEmerald + umEmerald;
const boneDiamond = umDiamond + umDiamond;
const boneGem = solGem + umGem + umGem;
const bone = sol + um + um;
const boneGold = solGold + umGold + umGold;
const enlightenmentRune = pulRune + ral + solRune;
const enlightenmentTopaz = pulTopaz + solTopaz;
const enlightenmentAmethyst = pulAmethyst + solAmethyst;
const enlightenmentSapphire = pulSapphire;
const enlightenmentRuby = pulRuby;
const enlightenmentEmerald = pulEmerald;
const enlightenmentDiamond = pulDiamond;
const enlightenmentGem = pulGem + solGem;
const enlightenment = pul + ral + sol;
const enlightenmentGold = pulGold + ralGold + solGold;
const mythRune = helRune + amnRune + nef;
const mythTopaz = helTopaz + amnTopaz;
const mythAmethyst = helAmethyst;
const mythSapphire = helSapphire;
const mythRuby = helRuby;
const mythEmerald = helEmerald;
const mythGem = helGem + amnGem;
const myth = hel + amn + nef;
const mythGold = helGold + amnGold + nefGold;
const peaceRune = shaelRune + thul + amnRune;
const peaceTopaz = shaelTopaz + amnTopaz;
const peaceAmethyst = shaelAmethyst;
const peaceSapphire = shaelSapphire;
const peaceGem = shaelGem + amnGem;
const peace = shael + thul + amn;
const peaceGold = shaelGold + thulGold + amnGold;
const principleRune = ral + gulRune + eld;
const principleTopaz = gulTopaz;
const principleAmethyst = gulAmethyst;
const principleSapphire = gulSapphire;
const principleRuby = gulRuby;
const principleEmerald = gulEmerald;
const principleDiamond = gulDiamond;
const principleGem = gulGem;
const principle = ral + gul + eld;
const principleGold = ralGold + gulGold + eldGold;
const rainRune = ort + malRune + ith;
const rainTopaz = malTopaz;
const rainAmethyst = malAmethyst;
const rainSapphire = malSapphire;
const rainRuby = malRuby;
const rainEmerald = malEmerald;
const rainDiamond = malDiamond;
const rainGem = malGem;
const rain = ort + mal + ith;
const rainGold = ortGold + malGold + ithGold;
const treacheryRune = shaelRune + thul + lemRune;
const treacheryTopaz = shaelTopaz + lemTopaz;
const treacheryAmethyst = shaelAmethyst + lemAmethyst;
const treacherySapphire = shaelSapphire + lemSapphire;
const treacheryRuby = lemRuby;
const treacheryEmerald = lemEmerald;
const treacheryDiamond = lemDiamond;
const treacheryGem = shaelGem + lemGem;
const treachery = shael + thul + lem;
const treacheryGold = shaelGold + thulGold + lemGold;
const flickeringFlameRune = nef + pulRune + vexRune;
const flickeringFlameTopaz = pulTopaz + vexTopaz;
const flickeringFlameAmethyst = pulAmethyst + vexAmethyst;
const flickeringFlameSapphire = pulSapphire + vexSapphire;
const flickeringFlameRuby = pulRuby + vexRuby;
const flickeringFlameEmerald = pulEmerald + vexEmerald;
const flickeringFlameDiamond = pulDiamond + vexDiamond;
const flickeringFlameGem = pulGem + vexGem;
const flickeringFlame = nef + pul + vex;
const flickeringFlameGold = nefGold + pulGold + vexGold;
const mistRune = chamRune + shaelRune + gulRune + thul + ith;
const mistTopaz = chamTopaz + shaelTopaz + gulTopaz;
const mistAmethyst = chamAmethyst + shaelAmethyst + gulAmethyst;
const mistSapphire = chamSapphire + shaelSapphire + gulSapphire;
const mistRuby = chamRuby + gulRuby;
const mistEmerald = chamEmerald + gulEmerald;
const mistDiamond = chamDiamond + gulDiamond;
const mistGem = chamGem + shaelGem + gulGem;
const mist = cham + shael + gul + thul + ith;
const mistGold = chamGold + shaelGold + gulGold + thulGold + ithGold;
const obsessionRune = zodRune + istRune + lemRune + lumRune + ioRune + nef;
const obsessionTopaz = zodTopaz + istTopaz + lemTopaz + lumTopaz + ioTopaz;
const obsessionAmethyst = zodAmethyst + istAmethyst + lemAmethyst + lumAmethyst + ioAmethyst;
const obsessionSapphire = zodSapphire + istSapphire + lemSapphire + lumSapphire + ioSapphire;
const obsessionRuby = zodRuby + istRuby + lemRuby + lumRuby + ioRuby;
const obsessionEmerald = zodEmerald + istEmerald + lemEmerald + lumEmerald + ioEmerald;
const obsessionDiamond = zodDiamond + istDiamond + lemDiamond + lumDiamond + ioDiamond;
const obsessionGem = zodGem + istGem + lemGem + lumGem + ioGem ;
const obsession = zod + ist + lem + lum + io + nef;
const obsessionGold = zodGold + istGold + lemGold + lumGold + ioGold + nefGold;
const pattern = tal + ort + thul;
const patternGold = talGold + ortGold + thulGold;
const plagueRune = chamRune + shaelRune + umRune;
const plagueTopaz = chamTopaz + shaelTopaz + umTopaz;
const plagueAmethyst = chamAmethyst + shaelAmethyst + umAmethyst;
const plagueSapphire = chamSapphire + shaelSapphire + umSapphire;
const plagueRuby = chamRuby + umRuby;
const plagueEmerald = chamEmerald + umEmerald;
const plagueDiamond = chamDiamond + umDiamond;
const plagueGem = chamGem + shaelGem + umGem;
const plague = cham + shael + um;
const plagueGold = chamGold + shaelGold + umGold;
const unbendingWillRune = falRune + ioRune + ith + eld + el + helRune;
const unbendingWillTopaz = falTopaz + ioTopaz + helTopaz;
const unbendingWillAmethyst = falAmethyst + ioAmethyst + helAmethyst;
const unbendingWillSapphire = falSapphire + ioSapphire + helSapphire;
const unbendingWillRuby = falRuby + ioRuby + helRuby;
const unbendingWillEmerald = falEmerald + ioEmerald + helEmerald;
const unbendingWillDiamond = falDiamond + ioDiamond;
const unbendingWillGem = falGem + ioGem + helGem;
const unbendingWill = fal + io + ith + eld + el + hel;
const unbendingWillGold = falGold + ioGold + ithGold + eldGold + elGold + helGold;
const wisdomRune = pulRune + ith + eld;
const wisdomTopaz = pulTopaz;
const wisdomAmethyst = pulAmethyst;
const wisdomSapphire = pulSapphire;
const wisdomRuby = pulRuby;
const wisdomEmerald = pulEmerald;
const wisdomDiamond = pulDiamond;
const wisdomGem = pulGem;
const wisdom = pul + ith + eld;
const wisdomGold = pulGold + ithGold + eldGold;
const bulwarkRune = shaelRune + ioRune + solRune;
const bulwarkTopaz = shaelTopaz + ioTopaz + solTopaz;
const bulwarkAmethyst = shaelAmethyst + ioAmethyst + solAmethyst;
const bulwarkSapphire = shaelSapphire + ioSapphire;
const bulwarkRuby = ioRuby;
const bulwarkEmerald = ioEmerald;
const bulwarkDiamond = ioDiamond;
const bulwarkGem = shaelGem + ioGem + solGem;
const bulwark = shael + io + sol;
const bulwarkGold = shaelGold + ioGold + solGold;
const cureRune = shaelRune + ioRune + tal;
const cureTopaz = shaelTopaz + ioTopaz;
const cureAmethyst = shaelAmethyst + ioAmethyst;
const cureSapphire = shaelSapphire + ioSapphire;
const cureRuby = ioRuby;
const cureEmerald = ioEmerald;
const cureDiamond = ioDiamond;
const cureGem = shaelGem + ioGem;
const cure = shael + io + tal;
const cureGold = shaelGold + ioGold + talGold;
const groundRune = shaelRune + ioRune + ort;
const groundTopaz = shaelTopaz + ioTopaz;
const groundAmethyst = shaelAmethyst + ioAmethyst;
const groundSapphire = shaelSapphire + ioSapphire;
const groundRuby = ioRuby;
const groundEmerald = ioEmerald;
const groundDiamond = ioDiamond;
const groundGem = shaelGem + ioGem;
const ground = shael + io + ort;
const groundGold = shaelGold + ioGold + ortGold;
const hearthRune = shaelRune + ioRune + thul;
const hearthTopaz = shaelTopaz + ioTopaz;
const hearthAmethyst = shaelAmethyst + ioAmethyst;
const hearthSapphire = shaelSapphire + ioSapphire;
const hearthRuby = ioRuby;
const hearthEmerald = ioEmerald;
const hearthDiamond = ioDiamond;
const hearthGem = shaelGem + ioGem;
const hearth = shael + io + thul;
const hearthGold = shaelGold + ioGold + thulGold;
const hustleRune = shaelRune + koRune + eld;
const hustleTopaz = shaelTopaz + koTopaz;
const hustleAmethyst = shaelAmethyst + koAmethyst;
const hustleSapphire = shaelSapphire + koSapphire;
const hustleRuby = koRuby;
const hustleEmerald = koEmerald;
const hustleDiamond = koDiamond;
const hustleGem = shaelGem + koGem;
const hustle = shael + ko + eld;
const hustleGold = shaelGold + koGold + eldGold;
const metamorphosisRune = ioRune + chamRune + falRune;
const metamorphosisTopaz = ioTopaz + chamTopaz + falTopaz;
const metamorphosisAmethyst = ioAmethyst + chamAmethyst + falAmethyst;
const metamorphosisSapphire = ioSapphire + chamSapphire + falSapphire;
const metamorphosisRuby = ioRuby + chamRuby + falRuby;
const metamorphosisEmerald = ioEmerald + chamEmerald + falEmerald;
const metamorphosisDiamond = ioDiamond + chamDiamond + falDiamond;
const metamorphosisGem = ioGem + chamGem + falGem;
const metamorphosis = io + cham + fal;
const metamorphosisGold = ioGold + chamGold + falGold;
const mosaicRune = malRune + gulRune + amnRune;
const mosaicTopaz = malTopaz + gulTopaz + amnTopaz;
const mosaicAmethyst = malAmethyst + gulAmethyst;
const mosaicSapphire = malSapphire + gulSapphire;
const mosaicRuby = malRuby + gulRuby;
const mosaicEmerald = malEmerald + gulEmerald;
const mosaicDiamond = malDiamond + gulDiamond;
const mosaicGem = malGem + gulGem + amnGem;
const mosaic = mal + gul + amn;
const mosaicGold = malGold + gulGold + amnGold;
const temperRune = shaelRune + ioRune + ral;
const temperTopaz = shaelTopaz + ioTopaz;
const temperAmethyst = shaelAmethyst + ioAmethyst;
const temperSapphire = shaelSapphire + ioSapphire;
const temperRuby = ioRuby;
const temperEmerald = ioEmerald;
const temperDiamond = ioDiamond;
const temperGem = shaelGem + ioGem;
const temper = shael + io + ral;
const temperGold = shaelGold + ioGold + ralGold;

let totalRune = 0;
let totalTopaz = 0;
let totalAmethyst = 0;
let totalSapphire = 0;
let totalRuby = 0;
let totalEmerald = 0;
let totalDiamond = 0;
let totalGem = 0;
let totalCube = 0;
let totalGold = 0;

let runewords = [
    {
        name:"Ancient's Pledge",
        type:"Shield",
        patch:"Original",
        runes:"Ral + Ort + Tal",
        costRune:ancientsPledge,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:ancientsPledge,
        costGold:ancientsPledgeGold
    },
    {
        name:"Black",
        type:"Club/Hammer/Mace",
        patch:"Original",
        runes:"Thul + Io + Nef",
        costRune:blackRune,
        costTopaz:blackTopaz,
        costAmethyst:blackAmethyst,
        costSapphire:blackSapphire,
        costRuby:blackRuby,
        costEmerald:blackEmerald,
        costDiamond:blackDiamond,
        costGem:blackGem,
        costCube:black,
        costGold:blackGold
    },
    {
        name:"Fury",
        type:"Melee Weapon",
        patch:"Original",
        runes:"Jah + Gul + Eth",
        costRune:furyRune,
        costTopaz:furyTopaz,
        costAmethyst:furyAmethyst,
        costSapphire:furySapphire,
        costRuby:furyRuby,
        costEmerald:furyEmerald,
        costDiamond:furyDiamond,
        costGem:furyGem,
        costCube:fury,
        costGold:furyGold
    },
    {
        name:"Holy Thunder",
        type:"Scepter",
        patch:"Original",
        runes:"Eth + Ral + Ort + Tal",
        costRune:holyThunder,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:holyThunder,
        costGold:holyThunderGold
    },
    {
        name:"Honor",
        type:"Melee Weapon",
        patch:"Original",
        runes:"Amn + El + Ith + Tir + Sol",
        costRune:honorRune,
        costTopaz:honorTopaz,
        costAmethyst:honorAmethyst,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:honorGem,
        costCube:honor,
        costGold:honorGold
    },
    {
        name:"King's Grace",
        type:"Scepter/Sword",
        patch:"Original",
        runes:"Amn + Ral + Thul",
        costRune:kingsGraceRune,
        costTopaz:kingsGraceTopaz,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:kingsGraceGem,
        costCube:kingsGrace,
        costGold:kingsGraceGold
    },
    {
        name:"Leaf",
        type:"Staff",
        patch:"Original",
        runes:"Tir + Ral",
        costRune:leaf,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:leaf,
        costGold:leafGold
    },
    {
        name:"Lionheart",
        type:"Body Armor",
        patch:"Original",
        runes:"Hel + Lum + Fal",
        costRune:lionheartRune,
        costTopaz:lionheartTopaz,
        costAmethyst:lionheartAmethyst,
        costSapphire:lionheartSapphire,
        costRuby:lionheartRuby,
        costEmerald:lionheartEmerald,
        costDiamond:lionheartDiamond,
        costGem:lionheartGem,
        costCube:lionheart,
        costGold:lionheartGold
    },
    {
        name:"Lore",
        type:"Helm",
        patch:"Original",
        runes:"Ort + Sol",
        costRune:loreRune,
        costTopaz:loreTopaz,
        costAmethyst:loreAmethyst,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:loreGem,
        costCube:lore,
        costGold:loreGold
    },
    {
        name:"Malice",
        type:"Melee Weapon",
        patch:"Original",
        runes:"Ith + El + Eth",
        costRune:malice,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:malice,
        costGold:maliceGold
    },
    {
        name:"Melody",
        type:"Missile Weapon",
        patch:"Original",
        runes:"Shael + Ko + Nef",
        costRune:melodyRune,
        costTopaz:melodyTopaz,
        costAmethyst:melodyAmethyst,
        costSapphire:melodySapphire,
        costRuby:melodyRuby,
        costEmerald:melodyEmerald,
        costDiamond:melodyDiamond,
        costGem:melodyGem,
        costCube:melody,
        costGold:melodyGold
    },
    {
        name:"Memory",
        type:"Staff",
        patch:"Original",
        runes:"Lum + Io + Sol + Eth",
        costRune:memoryRune,
        costTopaz:memoryTopaz,
        costAmethyst:memoryAmethyst,
        costSapphire:memorySapphire,
        costRuby:memoryRuby,
        costEmerald:memoryEmerald,
        costDiamond:memoryDiamond,
        costGem:memoryGem,
        costCube:memory,
        costGold:memoryGold
    },
    {
        name:"Nadir",
        type:"Helm",
        patch:"Original",
        runes:"Nef + Tir",
        costRune:nadir,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:nadir,
        costGold:nadirGold
    },
    {
        name:"Radiance",
        type:"Helm",
        patch:"Original",
        runes:"Nef + Sol + Ith",
        costRune:radianceRune,
        costTopaz:radianceTopaz,
        costAmethyst:radianceAmethyst,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:radianceGem,
        costCube:radiance,
        costGold:radianceGold
    },
    {
        name:"Rhyme",
        type:"Shield",
        patch:"Original",
        runes:"Shael + Eth",
        costRune:rhymeRune,
        costTopaz:rhymeTopaz,
        costAmethyst:rhymeAmethyst,
        costSapphire:rhymeSapphire,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:rhymeGem,
        costCube:rhyme,
        costGold:rhymeGold
    },
    {
        name:"Silence",
        type:"Weapon",
        patch:"Original",
        runes:"Dol + Eld + Hel + Ist + Tir + Vex",
        costRune:silenceRune,
        costTopaz:silenceTopaz,
        costAmethyst:silenceAmethyst,
        costSapphire:silenceSapphire,
        costRuby:silenceRuby,
        costEmerald:silenceEmerald,
        costDiamond:silenceDiamond,
        costGem:silenceGem,
        costCube:silence,
        costGold:silenceGold
    },
    {
        name:"Smoke",
        type:"Body Armor",
        patch:"Original",
        runes:"Nef + Lum",
        costRune:smokeRune,
        costTopaz:smokeTopaz,
        costAmethyst:smokeAmethyst,
        costSapphire:smokeSapphire,
        costRuby:smokeRuby,
        costEmerald:smokeEmerald,
        costDiamond:smokeDiamond,
        costGem:smokeGem,
        costCube:smoke,
        costGold:smokeGold
    },
    {
        name:"Stealth",
        type:"Body Armor",
        patch:"Original",
        runes:"Tal + Eth",
        costRune:stealth,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:stealth,
        costGold:stealthGold
    },
    {
        name:"Steel",
        type:"Axe/Mace/Sword",
        patch:"Original",
        runes:"Tir + El",
        costRune:steel,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:steel,
        costGold:steelGold
    },
    {
        name:"Strength",
        type:"Melee Weapon",
        patch:"Original",
        runes:"Amn + Tir",
        costRune:strengthRune,
        costTopaz:strengthTopaz,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:strengthGem,
        costCube:strength,
        costGold:strengthGold
    },
    {
        name:"Venom",
        type:"Weapon",
        patch:"Original",
        runes:"Tal + Dol + Mal",
        costRune:venomRune,
        costTopaz:venomTopaz,
        costAmethyst:venomAmethyst,
        costSapphire:venomSapphire,
        costRuby:venomRuby,
        costEmerald:venomEmerald,
        costDiamond:venomDiamond,
        costGem:venomGem,
        costCube:venom,
        costGold:venomGold
    },
    {
        name:"Wealth",
        type:"Body Armor",
        patch:"Original",
        runes:"Lem + Ko + Tir",
        costRune:wealthRune,
        costTopaz:wealthTopaz,
        costAmethyst:wealthAmethyst,
        costSapphire:wealthSapphire,
        costRuby:wealthRuby,
        costEmerald:wealthEmerald,
        costDiamond:wealthDiamond,
        costGem:wealthGem,
        costCube:wealth,
        costGold:wealthGold
    },
    {
        name:"White",
        type:"Wand",
        patch:"Original",
        runes:"Dol + Io",
        costRune:whiteRune,
        costTopaz:whiteTopaz,
        costAmethyst:whiteAmethyst,
        costSapphire:whiteSapphire,
        costRuby:whiteRuby,
        costEmerald:whiteEmerald,
        costDiamond:whiteDiamond,
        costGem:whiteGem,
        costCube:white,
        costGold:whiteGold
    },
    {
        name:"Zephyr",
        type:"Missile Weapon",
        patch:"Original",
        runes:"Ort + Eth",
        costRune:zephyr,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:zephyr,
        costGold:zephyrGold
    },
    {
        name:"Beast",
        type:"Axe/Hammer/Scepter",
        patch:"1.10",
        runes:"Ber + Tir + Um + Mal + Lum",
        costRune:beastRune,
        costTopaz:beastTopaz,
        costAmethyst:beastAmethyst,
        costSapphire:beastSapphire,
        costRuby:beastRuby,
        costEmerald:beastEmerald,
        costDiamond:beastDiamond,
        costGem:beastGem,
        costCube:beast,
        costGold:beastGold
    },
    {
        name:"Bramble",
        type:"Body Armor",
        patch:"1.10",
        runes:"Ral + Ohm + Sur + Eth",
        costRune:brambleRune,
        costTopaz:brambleTopaz,
        costAmethyst:brambleAmethyst,
        costSapphire:brambleSapphire,
        costRuby:brambleRuby,
        costEmerald:brambleEmerald,
        costDiamond:brambleDiamond,
        costGem:brambleGem,
        costCube:bramble,
        costGold:brambleGold
    },
    {
        name:"Breath of the Dying",
        type:"Weapon",
        patch:"1.10",
        runes:"Vex + Hel + El + Eld + Zod + Eth",
        costRune:breathOfTheDyingRune,
        costTopaz:breathOfTheDyingTopaz,
        costAmethyst:breathOfTheDyingAmethyst,
        costSapphire:breathOfTheDyingSapphire,
        costRuby:breathOfTheDyingRuby,
        costEmerald:breathOfTheDyingEmerald,
        costDiamond:breathOfTheDyingDiamond,
        costGem:breathOfTheDyingGem,
        costCube:breathOfTheDying,
        costGold:breathOfTheDyingGold
    },
    {
        name:"Call to Arms",
        type:"Weapon",
        patch:"1.10",
        runes:"Amn + Ral + Mal + Ist + Ohm",
        costRune:callToArmsRune,
        costTopaz:callToArmsTopaz,
        costAmethyst:callToArmsAmethyst,
        costSapphire:callToArmsSapphire,
        costRuby:callToArmsRuby,
        costEmerald:callToArmsEmerald,
        costDiamond:callToArmsDiamond,
        costGem:callToArmsGem,
        costCube:callToArms,
        costGold:callToArmsGold
    },
    {
        name:"Chains of Honor",
        type:"Body Armor",
        patch:"1.10",
        runes:"Dol + Um + Ber + Ist",
        costRune:chainsOfHonorRune,
        costTopaz:chainsOfHonorTopaz,
        costAmethyst:chainsOfHonorAmethyst,
        costSapphire:chainsOfHonorSapphire,
        costRuby:chainsOfHonorRuby,
        costEmerald:chainsOfHonorEmerald,
        costDiamond:chainsOfHonorDiamond,
        costGem:chainsOfHonorGem,
        costCube:chainsOfHonor,
        costGold:chainsOfHonorGold
    },
    {
        name:"Chaos",
        type:"Katar",
        patch:"1.10",
        runes:"Fal + Ohm + Um",
        costRune:chaosRune,
        costTopaz:chaosTopaz,
        costAmethyst:chaosAmethyst,
        costSapphire:chaosSapphire,
        costRuby:chaosRuby,
        costEmerald:chaosEmerald,
        costDiamond:chaosDiamond,
        costGem:chaosGem,
        costCube:chaos,
        costGold:chaosGold
    },
    {
        name:"Crescent Moon",
        type:"Axe/Polearm/Sword",
        patch:"1.10",
        runes:"Shael + Um + Tir",
        costRune:crescentMoonRune,
        costTopaz:crescentMoonTopaz,
        costAmethyst:crescentMoonAmethyst,
        costSapphire:crescentMoonSapphire,
        costRuby:crescentMoonRuby,
        costEmerald:crescentMoonEmerald,
        costDiamond:crescentMoonDiamond,
        costGem:crescentMoonGem,
        costCube:crescentMoon,
        costGold:crescentMoonGold
    },
    {
        name:"Delirium",
        type:"Helm",
        patch:"1.10",
        runes:"Lem + Ist + Io",
        costRune:deliriumRune,
        costTopaz:deliriumTopaz,
        costAmethyst:deliriumAmethyst,
        costSapphire:deliriumSapphire,
        costRuby:deliriumRuby,
        costEmerald:deliriumEmerald,
        costDiamond:deliriumDiamond,
        costGem:deliriumGem,
        costCube:delirium,
        costGold:deliriumGold
    },
    {
        name:"Doom",
        type:"Axe/Hammer/Polearm",
        patch:"1.10",
        runes:"Hel + Ohm + Um + Lo + Cham",
        costRune:doomRune,
        costTopaz:doomTopaz,
        costAmethyst:doomAmethyst,
        costSapphire:doomSapphire,
        costRuby:doomRuby,
        costEmerald:doomEmerald,
        costDiamond:doomDiamond,
        costGem:doomGem,
        costCube:doom,
        costGold:doomGold
    },
    {
        name:"Duress",
        type:"Body Armor",
        patch:"1.10",
        runes:"Shael + Um + Thul",
        costRune:duressRune,
        costTopaz:duressTopaz,
        costAmethyst:duressAmethyst,
        costSapphire:duressSapphire,
        costRuby:duressRuby,
        costEmerald:duressEmerald,
        costDiamond:duressDiamond,
        costGem:duressGem,
        costCube:duress,
        costGold:duressGold
    },
    {
        name:"Enigma",
        type:"Body Armor",
        patch:"1.10",
        runes:"Jah + Ith + Ber",
        costRune:enigmaRune,
        costTopaz:enigmaTopaz,
        costAmethyst:enigmaAmethyst,
        costSapphire:enigmaSapphire,
        costRuby:enigmaRuby,
        costEmerald:enigmaEmerald,
        costDiamond:enigmaDiamond,
        costGem:enigmaGem,
        costCube:enigma,
        costGold:enigmaGold
    },
    {
        name:"Eternity",
        type:"Melee Weapon",
        patch:"1.10",
        runes:"Amn + Ber + Ist + Sol + Sur",
        costRune:eternityRune,
        costTopaz:eternityTopaz,
        costAmethyst:eternityAmethyst,
        costSapphire:eternitySapphire,
        costRuby:eternityRuby,
        costEmerald:eternityEmerald,
        costDiamond:eternityDiamond,
        costGem:eternityGem,
        costCube:eternity,
        costGold:eternityGold
    },
    {
        name:"Exile",
        type:"Paladin Shield",
        patch:"1.10",
        runes:"Vex + Ohm + Ist + Dol",
        costRune:exileRune,
        costTopaz:exileTopaz,
        costAmethyst:exileAmethyst,
        costSapphire:exileSapphire,
        costRuby:exileRuby,
        costEmerald:exileEmerald,
        costDiamond:exileDiamond,
        costGem:exileGem,
        costCube:exile,
        costGold:exileGold
    },
    {
        name:"Famine",
        type:"Axe/Hammer",
        patch:"1.10",
        runes:"Fal + Ohm + Ort + Jah",
        costRune:famineRune,
        costTopaz:famineTopaz,
        costAmethyst:famineAmethyst,
        costSapphire:famineSapphire,
        costRuby:famineRuby,
        costEmerald:famineEmerald,
        costDiamond:famineDiamond,
        costGem:famineGem,
        costCube:famine,
        costGold:famineGold
    },
    {
        name:"Gloom",
        type:"Body Armor",
        patch:"1.10",
        runes:"Fal + Um + Pul",
        costRune:gloomRune,
        costTopaz:gloomTopaz,
        costAmethyst:gloomAmethyst,
        costSapphire:gloomSapphire,
        costRuby:gloomRuby,
        costEmerald:gloomEmerald,
        costDiamond:gloomDiamond,
        costGem:gloomGem,
        costCube:gloom,
        costGold:gloomGold
    },
    {
        name:"Hand of Justice",
        type:"Weapon",
        patch:"1.10",
        runes:"Sur + Cham + Amn + Lo",
        costRune:handOfJusticeRune,
        costTopaz:handOfJusticeTopaz,
        costAmethyst:handOfJusticeAmethyst,
        costSapphire:handOfJusticeSapphire,
        costRuby:handOfJusticeRuby,
        costEmerald:handOfJusticeEmerald,
        costDiamond:handOfJusticeDiamond,
        costGem:handOfJusticeGem,
        costCube:handOfJustice,
        costGold:handOfJusticeGold
    },
    {
        name:"Heart of the Oak",
        type:"Mace/Staff",
        patch:"1.10",
        runes:"Ko + Vex + Pul + Thul",
        costRune:heartOfTheOakRune,
        costTopaz:heartOfTheOakTopaz,
        costAmethyst:heartOfTheOakAmethyst,
        costSapphire:heartOfTheOakSapphire,
        costRuby:heartOfTheOakRuby,
        costEmerald:heartOfTheOakEmerald,
        costDiamond:heartOfTheOakDiamond,
        costGem:heartOfTheOakGem,
        costCube:heartOfTheOak,
        costGold:heartOfTheOakGold
    },
    {
        name:"Kingslayer",
        type:"Axe/Sword",
        patch:"1.10",
        runes:"Mal + Um + Gul + Fal",
        costRune:kingslayerRune,
        costTopaz:kingslayerTopaz,
        costAmethyst:kingslayerAmethyst,
        costSapphire:kingslayerSapphire,
        costRuby:kingslayerRuby,
        costEmerald:kingslayerEmerald,
        costDiamond:kingslayerDiamond,
        costGem:kingslayerGem,
        costCube:kingslayer,
        costGold:kingslayerGold
    },
    {
        name:"Passion",
        type:"Weapon",
        patch:"1.10",
        runes:"Dol + Ort + Eld + Lem",
        costRune:passionRune,
        costTopaz:passionTopaz,
        costAmethyst:passionAmethyst,
        costSapphire:passionSapphire,
        costRuby:passionRuby,
        costEmerald:passionEmerald,
        costDiamond:passionDiamond,
        costGem:passionGem,
        costCube:passion,
        costGold:passionGold
    },
    {
        name:"Prudence",
        type:"Body Armor",
        patch:"1.10",
        runes:"Mal + Tir",
        costRune:prudenceRune,
        costTopaz:prudenceTopaz,
        costAmethyst:prudenceAmethyst,
        costSapphire:prudenceSapphire,
        costRuby:prudenceRuby,
        costEmerald:prudenceEmerald,
        costDiamond:prudenceDiamond,
        costGem:prudenceGem,
        costCube:prudence,
        costGold:prudenceGold
    },
    {
        name:"Sanctuary",
        type:"Shield",
        patch:"1.10",
        runes:"Ko + Ko + Mal",
        costRune:sanctuaryRune,
        costTopaz:sanctuaryTopaz,
        costAmethyst:sanctuaryAmethyst,
        costSapphire:sanctuarySapphire,
        costRuby:sanctuaryRuby,
        costEmerald:sanctuaryEmerald,
        costDiamond:sanctuaryDiamond,
        costGem:sanctuaryGem,
        costCube:sanctuary,
        costGold:sanctuaryGold
    },
    {
        name:"Splendor",
        type:"Shield",
        patch:"1.10",
        runes:"Eth + Lum",
        costRune:splendorRune,
        costTopaz:splendorTopaz,
        costAmethyst:splendorAmethyst,
        costSapphire:splendorSapphire,
        costRuby:splendorRuby,
        costEmerald:splendorEmerald,
        costDiamond:splendorDiamond,
        costGem:splendorGem,
        costCube:splendor,
        costGold:splendorGold
    },
    {
        name:"Stone",
        type:"Body Armor",
        patch:"1.10",
        runes:"Shael + Um + Pul + Lum",
        costRune:stoneRune,
        costTopaz:stoneTopaz,
        costAmethyst:stoneAmethyst,
        costSapphire:stoneSapphire,
        costRuby:stoneRuby,
        costEmerald:stoneEmerald,
        costDiamond:stoneDiamond,
        costGem:stoneGem,
        costCube:stone,
        costGold:stoneGold
    },
    {
        name:"Wind",
        type:"Melee Weapon",
        patch:"1.10",
        runes:"Sur + El",
        costRune:windRune,
        costTopaz:windTopaz,
        costAmethyst:windAmethyst,
        costSapphire:windSapphire,
        costRuby:windRuby,
        costEmerald:windEmerald,
        costDiamond:windDiamond,
        costGem:windGem,
        costCube:wind,
        costGold:windGold
    },
    {
        name:"Brand",
        type:"Missile Weapon",
        patch:"1.10",
        runes:"Jah + Lo + Mal + Gul",
        costRune:brandRune,
        costTopaz:brandTopaz,
        costAmethyst:brandAmethyst,
        costSapphire:brandSapphire,
        costRuby:brandRuby,
        costEmerald:brandEmerald,
        costDiamond:brandDiamond,
        costGem:brandGem,
        costCube:brand,
        costGold:brandGold
    },
    {
        name:"Death",
        type:"Axe/Sword",
        patch:"1.10",
        runes:"Hel + El + Vex + Ort + Gul",
        costRune:deathRune,
        costTopaz:deathTopaz,
        costAmethyst:deathAmethyst,
        costSapphire:deathSapphire,
        costRuby:deathRuby,
        costEmerald:deathEmerald,
        costDiamond:deathDiamond,
        costGem:deathGem,
        costCube:death,
        costGold:deathGold
    },
    {
        name:"Destruction",
        type:"Polearm/Sword",
        patch:"1.10",
        runes:"Vex + Lo + Ber + Jah + Ko",
        costRune:destructionRune,
        costTopaz:destructionTopaz,
        costAmethyst:destructionAmethyst,
        costSapphire:destructionSapphire,
        costRuby:destructionRuby,
        costEmerald:destructionEmerald,
        costDiamond:destructionDiamond,
        costGem:destructionGem,
        costCube:destruction,
        costGold:destructionGold
    },
    {
        name:"Dragon",
        type:"Body Armor/Shield",
        patch:"1.10",
        runes:"Sur + Lo + Sol",
        costRune:dragonRune,
        costTopaz:dragonTopaz,
        costAmethyst:dragonAmethyst,
        costSapphire:dragonSapphire,
        costRuby:dragonRuby,
        costEmerald:dragonEmerald,
        costDiamond:dragonDiamond,
        costGem:dragonGem,
        costCube:dragon,
        costGold:dragonGold
    },
    {
        name:"Dream",
        type:"Helm/Shield",
        patch:"1.10",
        runes:"Io + Jah + Pul",
        costRune:dreamRune,
        costTopaz:dreamTopaz,
        costAmethyst:dreamAmethyst,
        costSapphire:dreamSapphire,
        costRuby:dreamRuby,
        costEmerald:dreamEmerald,
        costDiamond:dreamDiamond,
        costGem:dreamGem,
        costCube:dream,
        costGold:dreamGold
    },
    {
        name:"Edge",
        type:"Missile Weapon",
        patch:"1.10",
        runes:"Tir + Tal + Amn",
        costRune:edgeRune,
        costTopaz:edgeTopaz,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:edgeGem,
        costCube:edge,
        costGold:edgeGold
    },
    {
        name:"Faith",
        type:"Missile Weapon",
        patch:"1.10",
        runes:"Ohm + Jah + Lem + Eld",
        costRune:faithRune,
        costTopaz:faithTopaz,
        costAmethyst:faithAmethyst,
        costSapphire:faithSapphire,
        costRuby:faithRuby,
        costEmerald:faithEmerald,
        costDiamond:faithDiamond,
        costGem:faithGem,
        costCube:faith,
        costGold:faithGold
    },
    {
        name:"Fortitude",
        type:"Body Armor/Weapon",
        patch:"1.10",
        runes:"El + Sol + Dol + Lo",
        costRune:fortitudeRune,
        costTopaz:fortitudeTopaz,
        costAmethyst:fortitudeAmethyst,
        costSapphire:fortitudeSapphire,
        costRuby:fortitudeRuby,
        costEmerald:fortitudeEmerald,
        costDiamond:fortitudeDiamond,
        costGem:fortitudeGem,
        costCube:fortitude,
        costGold:fortitudeGold
    },
    {
        name:"Grief",
        type:"Axe/Sword",
        patch:"1.10",
        runes:"Eth + Tir + Lo + Mal + Ral",
        costRune:griefRune,
        costTopaz:griefTopaz,
        costAmethyst:griefAmethyst,
        costSapphire:griefSapphire,
        costRuby:griefRuby,
        costEmerald:griefEmerald,
        costDiamond:griefDiamond,
        costGem:griefGem,
        costCube:grief,
        costGold:griefGold
    },
    {
        name:"Harmony",
        type:"Missile Weapon",
        patch:"1.10",
        runes:"Tir + Ith + Sol + Ko",
        costRune:harmonyRune,
        costTopaz:harmonyTopaz,
        costAmethyst:harmonyAmethyst,
        costSapphire:harmonySapphire,
        costRuby:harmonyRuby,
        costEmerald:harmonyEmerald,
        costDiamond:harmonyDiamond,
        costGem:harmonyGem,
        costCube:harmony,
        costGold:harmonyGold
    },
    {
        name:"Ice",
        type:"Missile Weapon",
        patch:"1.10",
        runes:"Amn + Shael + Jah + Lo",
        costRune:iceRune,
        costTopaz:iceTopaz,
        costAmethyst:iceAmethyst,
        costSapphire:iceSapphire,
        costRuby:iceRuby,
        costEmerald:iceEmerald,
        costDiamond:iceDiamond,
        costGem:iceGem,
        costCube:ice,
        costGold:iceGold
    },
    {
        name:"Infinity",
        type:"Polearm",
        patch:"1.10",
        runes:"Ber + Mal + Ber + Ist",
        costRune:infinityRune,
        costTopaz:infinityTopaz,
        costAmethyst:infinityAmethyst,
        costSapphire:infinitySapphire,
        costRuby:infinityRuby,
        costEmerald:infinityEmerald,
        costDiamond:infinityDiamond,
        costGem:infinityGem,
        costCube:infinity,
        costGold:infinityGold
    },
    {
        name:"Insight",
        type:"Polearm/Staff",
        patch:"1.10",
        runes:"Ral + Tir + Tal + Sol",
        costRune:insightRune,
        costTopaz:insightTopaz,
        costAmethyst:insightAmethyst,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:insightGem,
        costCube:insight,
        costGold:insightGold
    },
    {
        name:"Last Wish",
        type:"Axe/Hammer/Sword",
        patch:"1.10",
        runes:"Jah + Mal + Jah + Sur + Jah + Ber",
        costRune:lastWishRune,
        costTopaz:lastWishTopaz,
        costAmethyst:lastWishAmethyst,
        costSapphire:lastWishSapphire,
        costRuby:lastWishRuby,
        costEmerald:lastWishEmerald,
        costDiamond:lastWishDiamond,
        costGem:lastWishGem,
        costCube:lastWish,
        costGold:lastWishGold
    },
    {
        name:"Lawbringer",
        type:"Hammer/Scepter/Sword",
        patch:"1.10",
        runes:"Amn + Lem + Ko",
        costRune:lawbringerRune,
        costTopaz:lawbringerTopaz,
        costAmethyst:lawbringerAmethyst,
        costSapphire:lawbringerSapphire,
        costRuby:lawbringerRuby,
        costEmerald:lawbringerEmerald,
        costDiamond:lawbringerDiamond,
        costGem:lawbringerGem,
        costCube:lawbringer,
        costGold:lawbringerGold
    },
    {
        name:"Oath",
        type:"Axe/Mace/Sword",
        patch:"1.10",
        runes:"Shael + Pul + Mal + Lum",
        costRune:oathRune,
        costTopaz:oathTopaz,
        costAmethyst:oathAmethyst,
        costSapphire:oathSapphire,
        costRuby:oathRuby,
        costEmerald:oathEmerald,
        costDiamond:oathDiamond,
        costGem:oathGem,
        costCube:oath,
        costGold:oathGold
    },
    {
        name:"Obedience",
        type:"Polearm",
        patch:"1.10",
        runes:"Hel + Ko + Thul + Eth + Fal",
        costRune:obedienceRune,
        costTopaz:obedienceTopaz,
        costAmethyst:obedienceAmethyst,
        costSapphire:obedienceSapphire,
        costRuby:obedienceRuby,
        costEmerald:obedienceEmerald,
        costDiamond:obedienceDiamond,
        costGem:obedienceGem,
        costCube:obedience,
        costGold:obedienceGold
    },
    {
        name:"Phoenix",
        type:"Shield/Weapon",
        patch:"1.10",
        runes:"Vex + Vex + Lo + Jah",
        costRune:phoenixRune,
        costTopaz:phoenixTopaz,
        costAmethyst:phoenixAmethyst,
        costSapphire:phoenixSapphire,
        costRuby:phoenixRuby,
        costEmerald:phoenixEmerald,
        costDiamond:phoenixDiamond,
        costGem:phoenixGem,
        costCube:phoenix,
        costGold:phoenixGold
    },
    {
        name:"Pride",
        type:"Polearm",
        patch:"1.10",
        runes:"Cham + Sur + Io + Lo",
        costRune:prideRune,
        costTopaz:prideTopaz,
        costAmethyst:prideAmethyst,
        costSapphire:prideSapphire,
        costRuby:prideRuby,
        costEmerald:prideEmerald,
        costDiamond:prideDiamond,
        costGem:prideGem,
        costCube:pride,
        costGold:prideGold
    },
    {
        name:"Rift",
        type:"Polearm/Scepter",
        patch:"1.10",
        runes:"Hel + Ko + Lem + Gul",
        costRune:riftRune,
        costTopaz:riftTopaz,
        costAmethyst:riftAmethyst,
        costSapphire:riftSapphire,
        costRuby:riftRuby,
        costEmerald:riftEmerald,
        costDiamond:riftDiamond,
        costGem:riftGem,
        costCube:rift,
        costGold:riftGold
    },
    {
        name:"Spirit",
        type:"Shield/Sword",
        patch:"1.10",
        runes:"Tal + Thul + Ort + Amn",
        costRune:spiritRune,
        costTopaz:spiritTopaz,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:spiritGem,
        costCube:spirit,
        costGold:spiritGold
    },
    {
        name:"Voice of Reason",
        type:"Mace/Sword",
        patch:"1.10",
        runes:"Lem + Ko + El + Eld",
        costRune:voiceOfReasonRune,
        costTopaz:voiceOfReasonTopaz,
        costAmethyst:voiceOfReasonAmethyst,
        costSapphire:voiceOfReasonSapphire,
        costRuby:voiceOfReasonRuby,
        costEmerald:voiceOfReasonEmerald,
        costDiamond:voiceOfReasonDiamond,
        costGem:voiceOfReasonGem,
        costCube:voiceOfReason,
        costGold:voiceOfReasonGold
    },
    {
        name:"Wrath",
        type:"Missile Weapon",
        patch:"1.10",
        runes:"Pul + Lum + Ber + Mal",
        costRune:wrathRune,
        costTopaz:wrathTopaz,
        costAmethyst:wrathAmethyst,
        costSapphire:wrathSapphire,
        costRuby:wrathRuby,
        costEmerald:wrathEmerald,
        costDiamond:wrathDiamond,
        costGem:wrathGem,
        costCube:wrath,
        costGold:wrathGold
    },
    {
        name:"Bone",
        type:"Body Armor",
        patch:"1.11",
        runes:"Sol + Um + Um",
        costRune:boneRune,
        costTopaz:boneTopaz,
        costAmethyst:boneAmethyst,
        costSapphire:boneSapphire,
        costRuby:boneRuby,
        costEmerald:boneEmerald,
        costDiamond:boneDiamond,
        costGem:boneGem,
        costCube:bone,
        costGold:boneGold
    },
    {
        name:"Enlightenment",
        type:"Body Armor",
        patch:"1.11",
        runes:"Pul + Ral + Sol",
        costRune:enlightenmentRune,
        costTopaz:enlightenmentTopaz,
        costAmethyst:enlightenmentAmethyst,
        costSapphire:enlightenmentSapphire,
        costRuby:enlightenmentRuby,
        costEmerald:enlightenmentEmerald,
        costDiamond:enlightenmentDiamond,
        costGem:enlightenmentGem,
        costCube:enlightenment,
        costGold:enlightenmentGold
    },
    {
        name:"Myth",
        type:"Body Armor",
        patch:"1.11",
        runes:"Hel + Amn + Nef",
        costRune:mythRune,
        costTopaz:mythTopaz,
        costAmethyst:mythAmethyst,
        costSapphire:mythSapphire,
        costRuby:mythRuby,
        costEmerald:mythEmerald,
        costDiamond:0,
        costGem:mythGem,
        costCube:myth,
        costGold:mythGold
    },
    {
        name:"Peace",
        type:"Body Armor",
        patch:"1.11",
        runes:"Shael + Thul + Amn",
        costRune:peaceRune,
        costTopaz:peaceTopaz,
        costAmethyst:peaceAmethyst,
        costSapphire:peaceSapphire,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:peaceGem,
        costCube:peace,
        costGold:peaceGold
    },
    {
        name:"Principle",
        type:"Body Armor",
        patch:"1.11",
        runes:"Ral + Gul + Eld",
        costRune:principleRune,
        costTopaz:principleTopaz,
        costAmethyst:principleAmethyst,
        costSapphire:principleSapphire,
        costRuby:principleRuby,
        costEmerald:principleEmerald,
        costDiamond:principleDiamond,
        costGem:principleGem,
        costCube:principle,
        costGold:principleGold
    },
    {
        name:"Rain",
        type:"Body Armor",
        patch:"1.11",
        runes:"Ort + Mal + Ith",
        costRune:rainRune,
        costTopaz:rainTopaz,
        costAmethyst:rainAmethyst,
        costSapphire:rainSapphire,
        costRuby:rainRuby,
        costEmerald:rainEmerald,
        costDiamond:rainDiamond,
        costGem:rainGem,
        costCube:rain,
        costGold:rainGold
    },
    {
        name:"Treachery",
        type:"Body Armor",
        patch:"1.11",
        runes:"Shael + Thul + Lem",
        costRune:treacheryRune,
        costTopaz:treacheryTopaz,
        costAmethyst:treacheryAmethyst,
        costSapphire:treacherySapphire,
        costRuby:treacheryRuby,
        costEmerald:treacheryEmerald,
        costDiamond:treacheryDiamond,
        costGem:treacheryGem,
        costCube:treachery,
        costGold:treacheryGold
    },
    {
        name:"Flickering Flame",
        type:"Helm",
        patch:"2.4",
        runes:"Nef + Pul + Vex",
        costRune:flickeringFlameRune,
        costTopaz:flickeringFlameTopaz,
        costAmethyst:flickeringFlameAmethyst,
        costSapphire:flickeringFlameSapphire,
        costRuby:flickeringFlameRuby,
        costEmerald:flickeringFlameEmerald,
        costDiamond:flickeringFlameDiamond,
        costGem:flickeringFlameGem,
        costCube:flickeringFlame,
        costGold:flickeringFlameGold
    },
    {
        name:"Mist",
        type:"Missile Weapon",
        patch:"2.4",
        runes:"Cham + Shael + Gul + Thul + Ith",
        costRune:mistRune,
        costTopaz:mistTopaz,
        costAmethyst:mistAmethyst,
        costSapphire:mistSapphire,
        costRuby:mistRuby,
        costEmerald:mistEmerald,
        costDiamond:mistDiamond,
        costGem:mistGem,
        costCube:mist,
        costGold:mistGold
    },
    {
        name:"Obsession",
        type:"Staff",
        patch:"2.4",
        runes:"Zod + Ist + Lem + Lum + Io + Nef",
        costRune:obsessionRune,
        costTopaz:obsessionTopaz,
        costAmethyst:obsessionAmethyst,
        costSapphire:obsessionSapphire,
        costRuby:obsessionRuby,
        costEmerald:obsessionEmerald,
        costDiamond:obsessionDiamond,
        costGem:obsessionGem,
        costCube:obsession,
        costGold:obsessionGold
    },
    {
        name:"Pattern",
        type:"Katar",
        patch:"2.4",
        runes:"Tal + Ort + Thul",
        costRune:pattern,
        costTopaz:0,
        costAmethyst:0,
        costSapphire:0,
        costRuby:0,
        costEmerald:0,
        costDiamond:0,
        costGem:0,
        costCube:pattern,
        costGold:patternGold
    },
    {
        name:"Plague",
        type:"Dagger/Katar/Sword",
        patch:"2.4",
        runes:"Cham + Shael + Um",
        costRune:plagueRune,
        costTopaz:plagueTopaz,
        costAmethyst:plagueAmethyst,
        costSapphire:plagueSapphire,
        costRuby:plagueRuby,
        costEmerald:plagueEmerald,
        costDiamond:plagueDiamond,
        costGem:plagueGem,
        costCube:plague,
        costGold:plagueGold
    },
    {
        name:"Unbending Will",
        type:"Sword",
        patch:"2.4",
        runes:"Fal + Io + Ith + Eld + El + Hel",
        costRune:unbendingWillRune,
        costTopaz:unbendingWillTopaz,
        costAmethyst:unbendingWillAmethyst,
        costSapphire:unbendingWillSapphire,
        costRuby:unbendingWillRuby,
        costEmerald:unbendingWillEmerald,
        costDiamond:unbendingWillDiamond,
        costGem:unbendingWillGem,
        costCube:unbendingWill,
        costGold:unbendingWillGold
    },
    {
        name:"Wisdom",
        type:"Helm",
        patch:"2.4",
        runes:"Pul + Ith + Eld",
        costRune:wisdomRune,
        costTopaz:wisdomTopaz,
        costAmethyst:wisdomAmethyst,
        costSapphire:wisdomSapphire,
        costRuby:wisdomRuby,
        costEmerald:wisdomEmerald,
        costDiamond:wisdomDiamond,
        costGem:wisdomGem,
        costCube:wisdom,
        costGold:wisdomGold
    },
    {
        name:"Bulwark",
        type:"Helm",
        patch:"2.6",
        runes:"Shael + Io + Sol",
        costRune:bulwarkRune,
        costTopaz:bulwarkTopaz,
        costAmethyst:bulwarkAmethyst,
        costSapphire:bulwarkSapphire,
        costRuby:bulwarkRuby,
        costEmerald:bulwarkEmerald,
        costDiamond:bulwarkDiamond,
        costGem:bulwarkGem,
        costCube:bulwark,
        costGold:bulwarkGold
    },
    {
        name:"Cure",
        type:"Helm",
        patch:"2.6",
        runes:"Shael + Io + Tal",
        costRune:cureRune,
        costTopaz:cureTopaz,
        costAmethyst:cureAmethyst,
        costSapphire:cureSapphire,
        costRuby:cureRuby,
        costEmerald:cureEmerald,
        costDiamond:cureDiamond,
        costGem:cureGem,
        costCube:cure,
        costGold:cureGold
    },
    {
        name:"Ground",
        type:"Helm",
        patch:"2.6",
        runes:"Shael + Io + Ort",
        costRune:groundRune,
        costTopaz:groundTopaz,
        costAmethyst:groundAmethyst,
        costSapphire:groundSapphire,
        costRuby:groundRuby,
        costEmerald:groundEmerald,
        costDiamond:groundDiamond,
        costGem:groundGem,
        costCube:ground,
        costGold:groundGold
    },
    {
        name:"Hearth",
        type:"Helm",
        patch:"2.6",
        runes:"Shael + Io + Thul",
        costRune:hearthRune,
        costTopaz:hearthTopaz,
        costAmethyst:hearthAmethyst,
        costSapphire:hearthSapphire,
        costRuby:hearthRuby,
        costEmerald:hearthEmerald,
        costDiamond:hearthDiamond,
        costGem:hearthGem,
        costCube:hearth,
        costGold:hearthGold
    },
    {
        name:"Hustle",
        type:"Armor/Weapon",
        patch:"2.6",
        runes:"Shael + Ko + Eld",
        costRune:hustleRune,
        costTopaz:hustleTopaz,
        costAmethyst:hustleAmethyst,
        costSapphire:hustleSapphire,
        costRuby:hustleRuby,
        costEmerald:hustleEmerald,
        costDiamond:hustleDiamond,
        costGem:hustleGem,
        costCube:hustle,
        costGold:hustleGold
    },
    {
        name:"Metamorphosis",
        type:"Helm",
        patch:"2.6",
        runes:"Io + Cham + Fal",
        costRune:metamorphosisRune,
        costTopaz:metamorphosisTopaz,
        costAmethyst:metamorphosisAmethyst,
        costSapphire:metamorphosisSapphire,
        costRuby:metamorphosisRuby,
        costEmerald:metamorphosisEmerald,
        costDiamond:metamorphosisDiamond,
        costGem:metamorphosisGem,
        costCube:metamorphosis,
        costGold:metamorphosisGold
    },
    {
        name:"Mosaic",
        type:"Katar",
        patch:"2.6",
        runes:"Mal + Gul + Amn",
        costRune:mosaicRune,
        costTopaz:mosaicTopaz,
        costAmethyst:mosaicAmethyst,
        costSapphire:mosaicSapphire,
        costRuby:mosaicRuby,
        costEmerald:mosaicEmerald,
        costDiamond:mosaicDiamond,
        costGem:mosaicGem,
        costCube:mosaic,
        costGold:mosaicGold
    },
    {
        name:"Temper",
        type:"Helm",
        patch:"2.6",
        runes:"Shael + Io + Ral",
        costRune:temperRune,
        costTopaz:temperTopaz,
        costAmethyst:temperAmethyst,
        costSapphire:temperSapphire,
        costRuby:temperRuby,
        costEmerald:temperEmerald,
        costDiamond:temperDiamond,
        costGem:temperGem,
        costCube:temper,
        costGold:temperGold
    },
];

runewords.sort(function(a, b){return b.costCube - a.costCube});
let html = "<h2>Runewords</h2><table><thead><tr><th>#</th><th>Name</th><th>Item Type</th><th>Patch</th><th>Runes</th><th>El Runes</th>";
html += "<th>Chipped Topazes</th><th>Chipped Amethysts</th><th>Chipped Sapphires</th><th>Chipped Rubies</th><th>Chipped Emeralds</th>";
html += "<th>Chipped Diamonds</th><th>Chipped Gems</th><th>Cube Cost</th><th>Gold Cost</th></tr></thead><tbody>"
for (let i = 0; i < runewords.length; i++) {
    totalRune += runewords[i].costRune;
    totalTopaz += runewords[i].costTopaz;
    totalAmethyst += runewords[i].costAmethyst;
    totalSapphire += runewords[i].costSapphire;
    totalRuby += runewords[i].costRuby;
    totalEmerald += runewords[i].costEmerald;
    totalDiamond += runewords[i].costDiamond;
    totalGem += runewords[i].costGem;
    totalCube += runewords[i].costCube;
    totalGold += runewords[i].costGold;
    html += "<tr><td>" + parseInt(i+1) + "</td><td>" + runewords[i].name + "</td><td>" + runewords[i].type + "</td>";
    html += "<td>" + runewords[i].patch + "</td><td>" + runewords[i].runes + "</td><td>" + runewords[i].costRune.toLocaleString('en-US') + "</td>";
    html += "<td>" + runewords[i].costTopaz.toLocaleString('en-US') + "</td><td>" + runewords[i].costAmethyst.toLocaleString('en-US') + "</td>";
    html += "<td>" + runewords[i].costSapphire.toLocaleString('en-US') + "</td><td>" + runewords[i].costRuby.toLocaleString('en-US') + "</td>";
    html += "<td>" + runewords[i].costEmerald.toLocaleString('en-US') + "</td><td>" + runewords[i].costDiamond.toLocaleString('en-US') + "</td>";
    html += "<td>" + runewords[i].costGem.toLocaleString('en-US') + "</td><td>" + runewords[i].costCube.toLocaleString('en-US') + "</td>";
    html += "<td>" + runewords[i].costGold.toLocaleString('en-US') + "</td></tr>";
}
html += "</tbody><tfoot><tr><td colspan='15'>Total El Runes = " + totalRune.toLocaleString('en-US');
html += "<br>Total Chipped Topazes = " + totalTopaz.toLocaleString('en-US');
html += " | Total Chipped Amethysts = " + totalAmethyst.toLocaleString('en-US');
html += " | Total Chipped Sapphires = " + totalSapphire.toLocaleString('en-US');
html += " | Total Chipped Rubies = " + totalRuby.toLocaleString('en-US');
html += " | Total Chipped Emeralds = " + totalEmerald.toLocaleString('en-US');
html += " | Total Chipped Diamonds = " + totalDiamond.toLocaleString('en-US');
html += "<br>Total Chipped Gems = " + totalGem.toLocaleString('en-US');
html += " | Total Cube Cost = " + totalCube.toLocaleString('en-US');
html += " | Total Gold Cost = " + totalGold.toLocaleString('en-US') + "</td></tr></tfoot></table>";
runeword.innerHTML = html;

cubeBtn.addEventListener("click", () => {
    runewords.sort(function(a, b){return b.costCube - a.costCube});
    html = "<h2>Runewords</h2><table><thead><tr><th>#</th><th>Name</th><th>Item Type</th><th>Patch</th><th>Runes</th><th>El Runes</th>";
    html += "<th>Chipped Topazes</th><th>Chipped Amethysts</th><th>Chipped Sapphires</th><th>Chipped Rubies</th><th>Chipped Emeralds</th>";
    html += "<th>Chipped Diamonds</th><th>Chipped Gems</th><th>Cube Cost</th><th>Gold Cost</th></tr></thead><tbody>"
    for (let i = 0; i < runewords.length; i++) {
        totalRune += runewords[i].costRune;
        totalTopaz += runewords[i].costTopaz;
        totalAmethyst += runewords[i].costAmethyst;
        totalSapphire += runewords[i].costSapphire;
        totalRuby += runewords[i].costRuby;
        totalEmerald += runewords[i].costEmerald;
        totalDiamond += runewords[i].costDiamond;
        totalGem += runewords[i].costGem;
        totalCube += runewords[i].costCube;
        totalGold += runewords[i].costGold;
        html += "<tr><td>" + parseInt(i+1) + "</td><td>" + runewords[i].name + "</td><td>" + runewords[i].type + "</td>";
        html += "<td>" + runewords[i].patch + "</td><td>" + runewords[i].runes + "</td><td>" + runewords[i].costRune.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costTopaz.toLocaleString('en-US') + "</td><td>" + runewords[i].costAmethyst.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costSapphire.toLocaleString('en-US') + "</td><td>" + runewords[i].costRuby.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costEmerald.toLocaleString('en-US') + "</td><td>" + runewords[i].costDiamond.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costGem.toLocaleString('en-US') + "</td><td>" + runewords[i].costCube.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costGold.toLocaleString('en-US') + "</td></tr>";
    }
    html += "</tbody><tfoot><tr><td colspan='15'>Total El Runes = " + totalRune.toLocaleString('en-US');
    html += "<br>Total Chipped Topazes = " + totalTopaz.toLocaleString('en-US');
    html += " | Total Chipped Amethysts = " + totalAmethyst.toLocaleString('en-US');
    html += " | Total Chipped Sapphires = " + totalSapphire.toLocaleString('en-US');
    html += " | Total Chipped Rubies = " + totalRuby.toLocaleString('en-US');
    html += " | Total Chipped Emeralds = " + totalEmerald.toLocaleString('en-US');
    html += " | Total Chipped Diamonds = " + totalDiamond.toLocaleString('en-US');
    html += "<br>Total Chipped Gems = " + totalGem.toLocaleString('en-US');
    html += " | Total Cube Cost = " + totalCube.toLocaleString('en-US');
    html += " | Total Gold Cost = " + totalGold.toLocaleString('en-US') + "</td></tr></tfoot></table>";
    runeword.innerHTML = html;
});

goldBtn.addEventListener("click", () => {
    runewords.sort(function(a, b){return b.costGold - a.costGold});
    html = "<h2>Runewords</h2><table><thead><tr><th>#</th><th>Name</th><th>Item Type</th><th>Patch</th><th>Runes</th><th>El Runes</th>";
    html += "<th>Chipped Topazes</th><th>Chipped Amethysts</th><th>Chipped Sapphires</th><th>Chipped Rubies</th><th>Chipped Emeralds</th>";
    html += "<th>Chipped Diamonds</th><th>Chipped Gems</th><th>Cube Cost</th><th>Gold Cost</th></tr></thead><tbody>"
    for (let i = 0; i < runewords.length; i++) {
        totalRune += runewords[i].costRune;
        totalTopaz += runewords[i].costTopaz;
        totalAmethyst += runewords[i].costAmethyst;
        totalSapphire += runewords[i].costSapphire;
        totalRuby += runewords[i].costRuby;
        totalEmerald += runewords[i].costEmerald;
        totalDiamond += runewords[i].costDiamond;
        totalGem += runewords[i].costGem;
        totalCube += runewords[i].costCube;
        totalGold += runewords[i].costGold;
        html += "<tr><td>" + parseInt(i+1) + "</td><td>" + runewords[i].name + "</td><td>" + runewords[i].type + "</td>";
        html += "<td>" + runewords[i].patch + "</td><td>" + runewords[i].runes + "</td><td>" + runewords[i].costRune.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costTopaz.toLocaleString('en-US') + "</td><td>" + runewords[i].costAmethyst.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costSapphire.toLocaleString('en-US') + "</td><td>" + runewords[i].costRuby.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costEmerald.toLocaleString('en-US') + "</td><td>" + runewords[i].costDiamond.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costGem.toLocaleString('en-US') + "</td><td>" + runewords[i].costCube.toLocaleString('en-US') + "</td>";
        html += "<td>" + runewords[i].costGold.toLocaleString('en-US') + "</td></tr>";
    }
    html += "</tbody><tfoot><tr><td colspan='15'>Total El Runes = " + totalRune.toLocaleString('en-US');
    html += "<br>Total Chipped Topazes = " + totalTopaz.toLocaleString('en-US');
    html += " | Total Chipped Amethysts = " + totalAmethyst.toLocaleString('en-US');
    html += " | Total Chipped Sapphires = " + totalSapphire.toLocaleString('en-US');
    html += " | Total Chipped Rubies = " + totalRuby.toLocaleString('en-US');
    html += " | Total Chipped Emeralds = " + totalEmerald.toLocaleString('en-US');
    html += " | Total Chipped Diamonds = " + totalDiamond.toLocaleString('en-US');
    html += "<br>Total Chipped Gems = " + totalGem.toLocaleString('en-US');
    html += " | Total Cube Cost = " + totalCube.toLocaleString('en-US');
    html += " | Total Gold Cost = " + totalGold.toLocaleString('en-US') + "</td></tr></tfoot></table>";
    runeword.innerHTML = html;
});