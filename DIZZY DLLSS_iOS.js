const DEVICE_LANG = (Device.language() || "pt").toLowerCase().substring(0, 2)
const SPEECH = {
  pt: {
    start:    "Analisando, aguarde o DIZZY terminar",
    half:     "Scanner em cinquenta por cento. Aguarde mais um pouco.",
    probe:    "Scanner em noventa por cento. Aguarde mais um pouco.",
    done:     "DIZZY finalizado. Analise os resultados com cuidado.",
  },
  en: {
    start:    "Analyzing, please wait for DIZZY to finish.",
    half:     "Scanner at fifty percent. Please wait a little longer.",
    probe:    "Scanner at ninety percent. Almost done.",
    done:     "DIZZY finished. Analyze the results carefully.",
  },
  es: {
    start:    "Analizando, espera que DIZZY termine.",
    half:     "Escáner al cincuenta por ciento. Espera un poco más.",
    probe:    "Escáner al noventa por ciento. Ya casi termina.",
    done:     "DIZZY finalizado. Analiza los resultados con cuidado.",
  },
}
const S = SPEECH[DEVICE_LANG] || SPEECH["pt"]

const VPS_HOSTING_KEYWORDS = [
  "hostinger", "hstgr",
  "locaweb",
  "kinghost",
  "umbler",
  "hostgator",
  "uol host", "uolhost",
  "bol", "bol.com.br",
  "redehost",
  "weblink",
  "brasileirohost", "br.host",
  "dialhost",
  "serverspace",
  "melhorhospedagem",
  "ibrcom",
  "masterweb",
  "superdomínios", "superdomin",
  "plankton", "vps.br",
  "digitalocean",
  "linode", "akamai",
  "vultr",
  "hetzner",
  "ovh", "ovhcloud",
  "contabo",
  "ionos",
  "godaddy",
  "siteground",
  "cloudways",
  "amazon", "aws", "amazonaws",
  "google cloud", "googlecloud",
  "microsoft azure", "azure",
  "alibaba cloud", "alibabacloud",
  "tencent cloud", "tencentcloud",
  "hstgr.cloud",
  "srv.umbler",
  "kinghost.net",
  "locaweb.com.br",
  "choopa", "psychz", "m247",
  "serverius", "frantech", "buyvm",
  "sharktech", "quadranet", "nexeon",
  "servermania", "hostwinds", "racknerd",
  "dedipath", "spartanhost", "cloudie",
  "tsohost", "wavenet", "fasthosts",
  "multacom",
  "telus",
  "fdcservers", "fdc servers",
  "leaseweb",
  "colocation america",
  "b2 net", "b2net",
  "path.net",
  "datacamp",
  "tzulo",
  "coresite",
]

const CHEAT_PROXY_ASN = {
  "AS35916": "Multacom Corporation (cheat proxy LA)",
  "AS47583": "Hostinger International (cheat proxy BR)",
  "AS60781": "LeaseWeb Netherlands",
  "AS28753": "LeaseWeb Deutschland",
  "AS16276": "OVH SAS",
  "AS14061": "DigitalOcean",
  "AS20473": "Choopa / Vultr",
  "AS8100":  "QuadraNet",
  "AS40065": "Cnservers / FDC Servers",
  "AS53667": "FranTech Solutions",
  "AS395954": "Leaseweb USA",
  "AS13335": "Cloudflare (CDN/Proxy — comum em cheats)",
  "AS209": "CenturyLink / Lumen",
  "AS7203": "Sharktech",
}

const RDNS_HOSTING_PATTERNS = [
  "hstgr.cloud",
  "staticip",
  "srv.",
  "vps.",
  "cloud.",
  "host.",
  "server.",
  "dedicated.",
  ".kinghost.net",
  ".locaweb.com.br",
  ".umbler.net",
  ".hostgator.com.br",
  ".digitalocean.com",
  ".vultr.com",
  ".linode.com",
  ".hetzner.com",
  ".contabo.net",
]

const CHEAT_APPS = {
  "com.touchingapp.potatsolite":      "PotatsoLite — proxy iOS (mitmproxy cheat)",
  "com.touchingapp.potatso":          "Potatso — proxy iOS",
  "com.monite.proxyff":               "ProxyFF — proxy iOS (cheat confirmado)",
  "com.nssurge.inc.surge-ios":        "Surge — proxy/MITM iOS",
  "com.luo.quantumultx":              "Quantumult X — proxy iOS",
  "group.com.luo.quantumult":         "Quantumult — proxy iOS",
  "com.shadowrocket.Shadowrocket":    "Shadowrocket — proxy iOS",
  "com.liguangming.Shadowrocket":     "Shadowrocket (alt) — proxy iOS",
  "com.github.shadowsocks":           "Shadowsocks",
  "com.netease.trojan":               "Trojan proxy",
  "com.hiddify.app":                  "Hiddify — proxy",
  "com.karing.app":                   "Karing — proxy",
  "com.metacubex.ClashX":             "ClashX — proxy",
  "com.ssrss.Ssrss":                  "SSR iOS proxy",
  "com.adguard.ios.AdguardPro":       "AdGuard Pro (proxy MITM)",
  "com.privateinternetaccess.ios":    "PIA VPN",
  "com.anonymousiphone.detoxme":      "Detox — proxy iOS",
  "com.futureland.vpnmaster":         "VPN Master",
  "com.cloudflare.1dot1dot1dot1":     "Cloudflare 1.1.1.1 (WARP proxy)",
  "com.opa334.dopamine":              "Dopamine — Jailbreak",
  "org.coolstar.sileo":               "Sileo — package manager JB",
  "org.coolstar.odyssey":             "Odyssey — Jailbreak",
  "com.electrateam.unc0ver":          "unc0ver — Jailbreak",
  "com.tihmstar.checkra1n":           "checkra1n — Jailbreak",
  "org.taurine.jailbreak":            "Taurine — Jailbreak",
  "xyz.palera1n.palera1n":            "palera1n — Jailbreak",
  "com.opa334.TrollStore":            "TrollStore — sideload sem JB",
  "com.opa334.TrollStoreHelper":      "TrollStoreHelper",
  "com.opa334.trolldecrypt":          "TrollDecrypt — decifrar IPAs",
  "com.opa334.trollfools":            "TrollFools — injetor de tweaks",
  "xyz.willy.Zebra":                  "Zebra — package manager JB",
  "com.cydia.Cydia":                  "Cydia — package manager JB",
  "com.rileytestut.AltStore":         "AltStore — sideload",
  "com.altstore.altstoreclassic":     "AltStore Classic — sideload",
  "com.sideloadly.sideloadly":        "Sideloadly — sideload",
  "com.esign.ios":                    "ESign — sideload/IPA installer",
  "com.esign.esign":                  "ESign (alt) — sideload",
  "com.iosgods.iosgods":              "iOSGods — cheat app store",
  "com.gbox.pubg":                    "GBox — cheat mod pubg/ff",
  "com.tigisoftware.Filza":           "Filza — file manager root",
  "com.tigisoftware.FilzaFree":       "Filza Free — file manager root",
  "app.ish.iSH":                      "iSH — shell Linux no iOS",
  "com.septudio.SSHClientLite":       "SSH Client Lite — shell remoto",
  "live.cclerc.geranium":             "Geranium — tweak manager JB",
  "com.apple.dt.Xcode":               "Xcode — IDE Apple (suspeito em contexto de jogo)",
  "com.apple.Preferences.Developer":  "Preferências de Desenvolvedor (ativas)",
  "com.apple.developer":              "Perfil de desenvolvedor Apple",
  "com.shpion.cleaner":               "Spion Cleaner — limpeza de rastros suspeita",
  "com.ifunbox.ifunbox":              "iFunBox — gerenciador de arquivos iOS",
  "com.limneos.adprivacy":            "AdPrivacy — bloqueio/manipulação de rede",
  "com.jjcm.nomoread":                "NoMoreAd — bloqueio de rede (MITM possível)",
}

const SUSPICIOUS_TLDS = [
  ".site", ".store", ".netlify.app", ".netlify", ".xyz", ".pw",
  ".top", ".click", ".bid", ".win", ".stream", ".download",
  ".icu", ".gq", ".cf", ".ml", ".ga", ".tk",
  ".monster", ".fun", ".rest", ".bar", ".lol",
]

const SUSPICIOUS_DOMAIN_WORDS = [
  "proxy", "cheat", "hack", "bypass", "mitm", "inject",
  "spoof", "crack", "exploit", "payload", "tunnel",
  "vpn", "socks", "relay", "forward", "gate",
]

const PROXY_IPA_BUNDLES = {
  "com.spotify.client":         "Spotify",
  "com.burbn.instagram":        "Instagram",
  "net.whatsapp.WhatsApp":      "WhatsApp",
  "com.google.ios.youtube":     "YouTube",
  "com.apple.mobilesafari":     "Safari",
  "com.facebook.Facebook":      "Facebook",
  "com.zhiliaoapp.musically":   "TikTok",
  "com.hammerandchisel.discord":"Discord",
  "com.google.Gmail":           "Gmail",
  "com.google.GoogleMobile":    "Google",
}

const IGNORED_BUNDLES = new Set([
  "com.hammerandchisel.discord",
  "com.zhiliaoapp.musically",
])

const FALSE_POSITIVE_IPS = new Set([
  "104.29.152.79",  "104.29.152.107", "92.223.118.254",  "23.221.214.168",
  "23.192.36.217",  "54.69.69.125",   "104.29.152.189",  "104.29.137.146",
  "104.29.155.56",  "104.29.137.203", "104.29.155.129",  "104.29.137.125",
  "104.29.158.97",  "104.29.152.95",  "104.29.153.53",   "104.29.159.185",
  "104.29.157.123", "104.29.152.27",  "104.29.157.107",  "104.29.137.16",
  "104.29.152.164", "104.29.137.53",  "104.29.135.227",  "104.29.158.139",
  "104.29.152.157", "104.29.156.174", "104.29.156.24",   "104.29.154.91",
  "104.29.155.27",  "104.29.156.120", "104.29.137.112",
])

const FF_PROXY_LOGIN_DOMAINS = new Set([
  "version.ffmax.purplevioleto.com",
  "version.ggwhitehawk.com",
  "loginbp.ggpolarbear.com",
  "gin.freefiremobile.com",
  "100067.connect.garena.com",
  "100067.msdk.garena.com",
  "client.us.freefiremobile.com",
  "client.sea.freefiremobile.com",
  "sacnetwork.ggblueshark.com",
  "sacevent.ggblueshark.com",
])

const FF_LEGIT_CALLERS = new Set(["com.dts.freefireth", "com.dts.freefiremax"])

const KNOWN_CHEAT_INFRA = {
  "46.202.145.85":      "Fatality Cheats — servidor confirmado",
  "fatalitycheats.xyz": "Fatality Cheats — domínio oficial do cheat",
  "anubisw.online":     "Servidor de cheat confirmado — Free Fire",
  "api.baontq.xyz":     "API de cheat confirmado — Free Fire",
  "version.ffmax.purplevioleto.com": "Versão modificada Free Fire MAX — cheat confirmado",
  "version.ggwhitehawk.com":         "White Hawk cheat — servidor confirmado",
  "loginbp.ggpolarbear.com":         "Polar Bear cheat — servidor confirmado",
}

// ------------------------------------------------------------------
// As funções originais (findNdjsonFile, parseNdjson, analyze, etc)
// permanecem EXATAMENTE IGUAIS. Nada foi mudado aqui.
// ------------------------------------------------------------------

async function findNdjsonFile() {
  let path = await DocumentPicker.openFile()
  if (!path) return null
  return { path: path, fm: FileManager.local() }
}

function parseNdjson(content) {
  let trimmed = content.trim()
  if (trimmed.startsWith("[")) {
    try { return JSON.parse(trimmed) } catch(e) {}
  }
  return trimmed
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .map(l => { try { return JSON.parse(l) } catch(e) { return null } })
    .filter(Boolean)
}

function parseIpsFile(content) {
  try {
    let trimmed = content.trim()
    let lines = trimmed.split("\n").map(l => l.trim()).filter(Boolean)
    let headerLine = lines.find(l => l.startsWith("{"))
    let dataLine   = lines.find(l => l.startsWith("["))
    let header = null
    try { header = headerLine ? JSON.parse(headerLine) : null } catch(e) {}
    let entries = []
    try { entries = dataLine ? JSON.parse(dataLine) : [] } catch(e) {}
    return { header, entries }
  } catch(e) {
    return { header: null, entries: [] }
  }
}

function looksLikePrivacyReport(content) {
  let sample = content.trim().slice(0, 500)
  return sample.includes("networkActivity") || sample.includes("bundleID") || sample.includes("timeStamp")
}

function looksLikeUsageFile(content) {
  let sample = content.trim().slice(0, 300)
  return sample.includes("xp_amp_app_usage") || sample.includes("roots_installed") || sample.includes("usageClientId")
}

const IPS_CHEAT_EXACT = new Set([
  "com.touchingapp.potatsolite", "com.touchingapp.potatso",
  "com.shadowrocket.Shadowrocket", "com.liguangming.Shadowrocket",
  "com.monite.proxyff", "com.nssurge.inc.surge-ios",
  "com.luo.quantumultx", "group.com.luo.quantumult",
  "com.github.shadowsocks", "com.netease.trojan",
  "com.hiddify.app", "com.karing.app", "com.metacubex.ClashX",
  "com.ssrss.Ssrss", "com.adguard.ios.AdguardPro",
  "com.privateinternetaccess.ios", "com.futureland.vpnmaster",
  "com.cloudflare.1dot1dot1dot1",
  "com.opa334.dopamine", "org.coolstar.sileo", "org.coolstar.odyssey",
  "com.electrateam.unc0ver", "com.tihmstar.checkra1n",
  "org.taurine.jailbreak", "xyz.palera1n.palera1n",
  "com.opa334.TrollStore", "com.opa334.TrollStoreHelper",
  "com.opa334.trolldecrypt", "com.opa334.trollfools",
  "xyz.willy.Zebra", "com.cydia.Cydia",
  "com.rileytestut.AltStore", "com.altstore.altstoreclassic",
  "com.sideloadly.sideloadly", "com.esign.ios", "com.esign.esign",
  "com.iosgods.iosgods", "com.gbox.pubg",
  "com.tigisoftware.Filza", "com.tigisoftware.FilzaFree",
  "app.ish.iSH", "com.septudio.SSHClientLite",
  "live.cclerc.geranium", "com.shpion.cleaner",
  "com.ifunbox.ifunbox", "com.limneos.adprivacy",
  "com.apple.dt.Xcode", "com.apple.Preferences.Developer",
  "com.apple.TestFlight",
  "io.nextdns.NextDNS",
  "developer.apple.wwdc-Release",
])

const IPS_CHEAT_CATEGORIES = {
  "com.apple.TestFlight":              "critical",
  "com.opa334.dopamine":               "critical",
  "org.coolstar.sileo":                "critical",
  "org.coolstar.odyssey":              "critical",
  "com.electrateam.unc0ver":           "critical",
  "com.tihmstar.checkra1n":            "critical",
  "org.taurine.jailbreak":             "critical",
  "xyz.palera1n.palera1n":             "critical",
  "com.opa334.TrollStore":             "critical",
  "com.opa334.TrollStoreHelper":       "critical",
  "com.opa334.trolldecrypt":           "critical",
  "com.opa334.trollfools":             "critical",
  "com.rileytestut.AltStore":          "critical",
  "com.altstore.altstoreclassic":      "critical",
  "com.sideloadly.sideloadly":         "critical",
  "com.esign.ios":                     "critical",
  "com.esign.esign":                   "critical",
  "com.iosgods.iosgods":               "critical",
  "com.gbox.pubg":                     "critical",
  "com.tigisoftware.Filza":            "critical",
  "com.tigisoftware.FilzaFree":        "critical",
  "app.ish.iSH":                       "critical",
  "com.monite.proxyff":                "critical",
  "com.touchingapp.potatsolite":       "critical",
  "com.touchingapp.potatso":           "critical",
  "com.shadowrocket.Shadowrocket":     "critical",
  "com.liguangming.Shadowrocket":      "critical",
  "com.cloudflare.1dot1dot1dot1":      "vpn",
  "io.nextdns.NextDNS":                "vpn",
  "com.privateinternetaccess.ios":     "vpn",
  "com.futureland.vpnmaster":          "vpn",
  "com.nssurge.inc.surge-ios":         "vpn",
  "com.luo.quantumultx":               "vpn",
  "group.com.luo.quantumult":          "vpn",
  "com.github.shadowsocks":            "vpn",
  "com.netease.trojan":                "vpn",
  "com.hiddify.app":                   "vpn",
  "com.karing.app":                    "vpn",
  "com.metacubex.ClashX":              "vpn",
  "com.ssrss.Ssrss":                   "vpn",
  "com.adguard.ios.AdguardPro":        "vpn",
  "com.apple.dt.Xcode":                "developer",
  "com.apple.Preferences.Developer":   "developer",
  "developer.apple.wwdc-Release":      "developer",
}

const IPS_CHEAT_KEYWORDS = [
  "filza", "esign", "gbox", "sideload", "dopamine", "sileo",
  "trollstore", "trolldecrypt", "trollfools", "trollhelper",
  "spoofer", "cleaner", "unc0ver", "checkra1n", "jailbreak",
  "cydia", "zebra", "altstore", "iosgods", "geranium",
  "potatso", "shadowrocket", "surge", "quantumult", "hiddify",
  "shadowsocks", "trojan", "karing", "proxyff",
  "netlify", "cheat", "hack", "bypass", "inject", "tweak",
  "substrate", "substitute", "libhooker",
]

function analyzeIps(parsed) {
  let entries = parsed.entries || parsed || []
  let results = []
  let seen = new Set()

  for (let e of entries) {
    let bid = e.bundleId || ""
    if (!bid || seen.has(bid)) continue
    seen.add(bid)

    let reason = null
    let category = "warning"

    if (IPS_CHEAT_EXACT.has(bid)) {
      reason = CHEAT_APPS[bid] || bid
      category = IPS_CHEAT_CATEGORIES[bid] || "warning"
    } else {
      let bidLower = bid.toLowerCase()
      for (let kw of IPS_CHEAT_KEYWORDS) {
        if (bidLower.includes(kw)) {
          reason = "Keyword suspeita: \"" + kw + "\" no bundle ID"
          break
        }
      }
    }

    if (!reason) {
      let bidLower = bid.toLowerCase()
      const FF_LEGIT = ["com.dts.freefireth", "com.dts.freefiremax"]
      const FF_PREFIXES = ["com.dts.freefireth", "com.dts.freefiremax"]
      if (!FF_LEGIT.includes(bid) && FF_PREFIXES.some(p => bidLower.startsWith(p) || (bidLower.includes("freefire") && !FF_LEGIT.includes(bid)))) {
        reason = "Cópia suspeita do Free Fire — bundle ID modificado"
        category = "critical"
      }
    }

    if (reason) {
      results.push({
        bundleId:    bid,
        version:     e.shortAppVersion || "?",
        eventType:   e.eventType || "?",
        count:       e.count || 0,
        reason:      reason,
        category:    category,
      })
    }
  }

  return results
}

function validateReport(entries) {
  if (!entries || entries.length === 0)
    return { ok: false, reason: "Arquivo vazio ou sem entradas válidas." }

  let hasNet    = entries.some(e => e.type === "networkActivity")
  let hasAccess = entries.some(e => e.type === "access")
  let hasBundleID = entries.some(e => e.bundleID || (e.accessor && e.accessor.identifier))
  let hasTimestamp = entries.some(e => e.timeStamp)

  if (!hasNet && !hasAccess)
    return { ok: false, reason: "Nenhuma entrada de rede ou acesso encontrada.\nEste nao parece ser um App Privacy Report valido." }
  if (!hasBundleID)
    return { ok: false, reason: "Nenhum bundleID encontrado.\nO arquivo pode estar corrompido ou foi modificado." }
  if (!hasTimestamp)
    return { ok: false, reason: "Nenhum timestamp encontrado.\nO arquivo pode estar corrompido ou foi modificado." }

  let timestamps = entries.map(e => e.timeStamp).filter(Boolean)
  let valid = timestamps.filter(t => {
    let y = parseInt(t.slice(0,4))
    return y >= 2020 && y <= 2030
  })
  if (valid.length < timestamps.length * 0.5)
    return { ok: false, reason: "Timestamps fora do intervalo esperado.\nO arquivo pode ter sido adulterado." }

  let netEntries = entries.filter(e => e.type === "networkActivity")
  let validNet = netEntries.filter(e => e.domain && e.bundleID)
  if (netEntries.length > 0 && validNet.length < netEntries.length * 0.3)
    return { ok: false, reason: "Muitas entradas de rede sem domain/bundleID.\nO arquivo pode ter sido manipulado." }

  return { ok: true }
}

const FIELDS = "status,country,city,isp,org,hosting,proxy,query,reverse,as"

async function lookupBatch(targets) {
  try {
    let req = new Request(`http://ip-api.com/batch?fields=${FIELDS}`)
    req.method = "POST"
    req.body = Data.fromString(JSON.stringify(targets))
    req.headers = { "Content-Type": "application/json" }
    req.timeoutInterval = 15
    let results = await req.loadJSON()
    if (!Array.isArray(results)) return []
    return results
  } catch(e) {
    return []
  }
}

function isIPv4(s) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(s)
}

function isIPv6(s) {
  return s.includes(":") && !s.includes(".")
}

function isIP(s) {
  return isIPv4(s) || isIPv6(s)
}

async function resolveHostname(domain) {
  return domain
}

function classifyIP(info, domain) {
  if (!info) return { severity: null, reasons: [] }
  let reasons = []
  let severity = null
  let tldFlag = false

  let domLow = (domain || "").toLowerCase()
  for (let tld of SUSPICIOUS_TLDS) {
    if (domLow.endsWith(tld) || domLow.includes(tld + "/")) {
      severity = "HIGH"
      tldFlag = true
      reasons.push(`TLD suspeito detectado: "${tld}" — padrão comum em cheats/proxies`)
      break
    }
  }
  if (!tldFlag) {
    let parts = domLow.split(".")[0]
    for (let word of SUSPICIOUS_DOMAIN_WORDS) {
      if (parts.includes(word) || domLow.includes(word + ".")) {
        severity = "HIGH"
        tldFlag = true
        reasons.push(`Palavra suspeita no domínio: "${word}"`)
        break
      }
    }
  }

  if (info.hosting) {
    severity = "HIGH"
    reasons.push(`VPS/HOSTING — ISP: ${info.isp}`)
  }
  if (info.proxy) {
    severity = "HIGH"
    reasons.push("PROXY / VPN detectado")
  }

  let asn = (info.as || "").split(" ")[0].toUpperCase()
  if (CHEAT_PROXY_ASN[asn]) {
    let isCloudflare = asn === "AS13335"
    if (isCloudflare) {
      let domainIsIP = /^[\d.:]+$/.test(domain || "")
      if (domainIsIP) {
        severity = "HIGH"
        reasons.push(`Cloudflare acessado via IP direto — padrão de proxy cheat (${asn})`)
      }
    } else {
      severity = "HIGH"
      reasons.push(`ASN de cheat proxy conhecido: ${asn} — ${CHEAT_PROXY_ASN[asn]}`)
    }
  }

  let rdns = (info.reverse || "").toLowerCase()
  if (rdns) {
    for (let pattern of RDNS_HOSTING_PATTERNS) {
      if (rdns.includes(pattern)) {
        severity = severity || "HIGH"
        reasons.push(`rDNS de servidor: ${info.reverse}`)
        break
      }
    }
    if (rdns.match(/^srv\d+\.hstgr\.cloud$/)) {
      severity = "HIGH"
      reasons.push(`Hostinger VPS (padrao cheat proxy BR): ${info.reverse}`)
    }
  } else if (info.hosting) {
    reasons.push("Sem rDNS (PTR) — tipico de VPS usado como proxy")
  }

  let orgLower = ((info.org || "") + " " + (info.isp || "") + " " + (info.as || "")).toLowerCase()
  for (let kw of VPS_HOSTING_KEYWORDS) {
    if (orgLower.includes(kw)) {
      severity = severity || "MEDIUM"
      reasons.push(`Org/ISP associado a hospedagem/cheat proxy: ${kw}`)
      break
    }
  }

  return { severity, reasons }
}

async function probeHost(domain) {
  let safe = ["apple.com","icloud.com","google.com","googleapis.com",
              "gstatic.com","amazon.com","microsoft.com","iphone","localhost",
              "akamai","cloudfront","fastly","edgekey","aaplimg"]
  if (safe.some(s => domain.toLowerCase().includes(s))) return null

  let result = { status: null, banner: null, online: false, suspicious: false }
  let headers = null

  for (let scheme of ["https", "http"]) {
    try {
      let req = new Request(`${scheme}://${domain}`)
      req.timeoutInterval = 6
      req.allowInsecureRequest = true
      let body = await req.loadString()

      result.online = true
      let resp = req.response || {}
      result.status = resp.statusCode || 0
      headers = resp.headers || {}

      let serverHeader = (headers["Server"] || headers["server"] || "").toLowerCase()
      let bodyLow = (body || "").slice(0, 600).toLowerCase()
      let combined = serverHeader + " " + bodyLow

      let suspiciousBanners = [
        "nginx", "apache", "ubuntu", "debian", "centos", "mitmproxy",
        "squid", "haproxy", "openresty", "caddy", "traefik",
        "403 forbidden", "bad gateway", "bad request", "proxy error"
      ]

      if (serverHeader) {
        result.banner = serverHeader.split("/")[0].trim()
        result.suspicious = true
      } else {
        for (let b of suspiciousBanners) {
          if (combined.includes(b)) {
            result.banner = b
            result.suspicious = true
            break
          }
        }
      }

      let sc = result.status
      if (sc === 403 || sc === 502 || sc === 504 || sc === 400) result.suspicious = true

      break
    } catch(e) {
      result.online = false
    }
  }

  return result
}

async function analyze(entries) {
  let netEntries = entries.filter(e => e.type === "networkActivity")

  let domainHits = {}
  let domainBundles = {}
  for (let e of netEntries) {
    if (IGNORED_BUNDLES.has(e.bundleID)) continue
    let d = e.domain || ""
    if (!d) continue
    domainHits[d] = (domainHits[d] || 0) + (e.hits || 1)
    if (!domainBundles[d]) domainBundles[d] = new Set()
    domainBundles[d].add(e.bundleID || "?")
  }

  let allDomains = Object.entries(domainHits)
    .sort((a, b) => b[1] - a[1])
    .map(([d]) => d)

  console.log(`Total dominios unicos: ${allDomains.length}`)

  let allBundles = new Set()
  for (let e of netEntries) { if (e.bundleID && !IGNORED_BUNDLES.has(e.bundleID)) allBundles.add(e.bundleID) }

  const FF_LEGIT_BUNDLES = new Set(["com.dts.freefireth", "com.dts.freefiremax"])
  let ffFakeFindings = []
  for (let bid of allBundles) {
    if (FF_LEGIT_BUNDLES.has(bid)) continue
    let bidLower = bid.toLowerCase()
    let isFFClone = bidLower.startsWith("com.dts.freefireth") ||
                    bidLower.startsWith("com.dts.freefiremax") ||
                    (bidLower.includes("freefire") && !FF_LEGIT_BUNDLES.has(bid)) ||
                    (bidLower.includes("freefir") && !FF_LEGIT_BUNDLES.has(bid))
    if (isFFClone) {
      let appEntries = netEntries.filter(e => e.bundleID === bid)
      let appHits = appEntries.reduce((s, e) => s + (e.hits || 1), 0)
      let appDomains = [...new Set(appEntries.map(e => e.domain).filter(Boolean))]
      ffFakeFindings.push({ bundleID: bid, desc: "Cópia suspeita do Free Fire — bundle ID modificado", hits: appHits, domains: appDomains })
    }
  }

  let cheatAppFindings = []
  for (let [bundleID, desc] of Object.entries(CHEAT_APPS)) {
    if (allBundles.has(bundleID)) {
      let appEntries = netEntries.filter(e => e.bundleID === bundleID)
      let appHits = appEntries.reduce((s, e) => s + (e.hits || 1), 0)
      let appDomains = [...new Set(appEntries.map(e => e.domain).filter(Boolean))]
      cheatAppFindings.push({ bundleID, desc, hits: appHits, domains: appDomains })
    }
  }
  cheatAppFindings = [...ffFakeFindings, ...cheatAppFindings]

  // Coleta quais domínios FF foram chamados pelos apps legítimos do FF
  let ffLegitDomainsSeen = new Set()
  for (let e of netEntries) {
    let d = (e.domain || "").toLowerCase()
    let bid = e.bundleID || ""
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(d)) {
      ffLegitDomainsSeen.add(d)
    }
  }

  let proxyLoginFindings = []
  let proxyLoginSeen = {}
  for (let e of netEntries) {
    let d = (e.domain || "").toLowerCase()
    let bid = e.bundleID || ""
    if (!bid) continue
    if (FF_LEGIT_CALLERS.has(bid)) continue
    if (IGNORED_BUNDLES.has(bid)) continue
    if (!FF_PROXY_LOGIN_DOMAINS.has(d)) continue
    // Só dispara se o domínio NÃO foi chamado pelos apps legítimos do FF na mesma sessão
    // Isso evita falsos positivos de janela de tempo (iOS agrupando apps diferentes)
    if (ffLegitDomainsSeen.has(d)) continue
    if (!proxyLoginSeen[d]) proxyLoginSeen[d] = { domain: e.domain, bundles: new Set(), hits: 0 }
    proxyLoginSeen[d].bundles.add(bid)
    proxyLoginSeen[d].hits += (e.hits || 1)
  }
  for (let [d, info] of Object.entries(proxyLoginSeen)) {
    proxyLoginFindings.push({ domain: info.domain, bundles: [...info.bundles], hits: info.hits })
  }

  let knownCheatFindings = []
  for (let e of netEntries) {
    let d = (e.domain || "").toLowerCase()
    let bid = e.bundleID || ""
    // Se o bundle é o app legítimo do FF e o domínio é um domínio oficial de proxy/login do FF,
    // não dispara como cheat — é tráfego normal do próprio jogo.
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(d)) continue
    for (let [indicator, desc] of Object.entries(KNOWN_CHEAT_INFRA)) {
      if (d === indicator.toLowerCase() || d.endsWith("." + indicator.toLowerCase())) {
        // Domínios que fazem parte do FF_PROXY_LOGIN_DOMAINS só são cheat se chamados por bundle não-legítimo
        if (FF_PROXY_LOGIN_DOMAINS.has(indicator.toLowerCase()) && FF_LEGIT_CALLERS.has(bid)) continue
        let existing = knownCheatFindings.find(k => k.indicator === indicator)
        if (existing) {
          existing.hits += (e.hits || 1)
          if (bid) existing.bundles.add(bid)
        } else {
          knownCheatFindings.push({
            indicator,
            desc,
            hits: e.hits || 1,
            bundles: new Set(bid ? [bid] : []),
          })
        }
      }
    }
  }
  knownCheatFindings = knownCheatFindings.map(k => ({ ...k, bundles: [...k.bundles] }))

  const CHUNK = 100
  let candidates = []

  for (let i = 0; i < allDomains.length; i += CHUNK) {
    let chunk = allDomains.slice(i, i + CHUNK)
    let chunkNum = Math.floor(i / CHUNK) + 1
    let totalChunks = Math.ceil(allDomains.length / CHUNK)
    console.log(`Batch ${chunkNum}/${totalChunks} — ${chunk.length} dominios`)

    let results = await lookupBatch(chunk)

    if (chunkNum === Math.ceil(totalChunks / 2) && totalChunks > 1) {
      Speech.speak(S.half)
    }

    for (let j = 0; j < results.length; j++) {
      let info = results[j]
      let domain = chunk[j]
      let ip = (info && info.query) || domain

      if (FALSE_POSITIVE_IPS.has(ip) || FALSE_POSITIVE_IPS.has(domain)) continue

      let domLow2 = domain.toLowerCase()
      let isTldSuspect = SUSPICIOUS_TLDS.some(t => domLow2.endsWith(t)) ||
                         SUSPICIOUS_DOMAIN_WORDS.some(w => domLow2.split(".")[0].includes(w))

      let severity = null
      let reasons = []

      if (info && info.status === "success") {
        let classified = classifyIP(info, domain)
        severity = classified.severity
        reasons  = classified.reasons
      }

      if (!severity && isTldSuspect) {
        severity = "HIGH"
        reasons = [`TLD suspeito: domínio com extensão de alto risco — padrão comum em servidores de cheat`]
      }

      if (!severity && !isTldSuspect) continue

      candidates.push({
        severity, domain, ip,
        country: (info && info.country) || "?",
        city:    (info && info.city)    || "?",
        isp:     (info && info.isp)     || "?",
        org:     (info && info.org)     || "?",
        as:      (info && info.as)      || "?",
        hosting: (info && info.hosting) || false,
        proxy:   (info && info.proxy)   || false,
        reverse: (info && info.reverse) || "",
        hits:    domainHits[domain],
        bundles: [...domainBundles[domain]].slice(0, 4),
        reasons,
        tldSuspect: isTldSuspect,
      })
    }

    if (i + CHUNK < allDomains.length) await wait(1400)
  }

  console.log(`Iniciando probe HTTP em ${candidates.length} suspeitos...`)
  Speech.speak(S.probe)
  let probeResults = await Promise.all(candidates.map(c => probeHost(c.domain)))

  let findings = candidates.map((c, idx) => {
    let probe = probeResults[idx]
    let severity = c.severity
    let reasons = [...c.reasons]

    if (probe) {
      if (probe.suspicious && probe.banner) {
        severity = "HIGH"
        reasons.push(`Servidor: ${probe.banner}`)
      }
      if (probe.status === 403) {
        reasons.push("HTTP 403 — ativo mas bloqueando acesso (padrão de proxy)")
      }
      if (!probe.online) {
        reasons.push("Servidor offline ou sem resposta HTTP")
      }
    }

    return { ...c, severity, reasons, probe, tldSuspect: c.tldSuspect }
  })

  const ASN_SET = new Set(Object.keys(CHEAT_PROXY_ASN))

  function hasSuspiciousTLD(domain) {
    let d = (domain || "").toLowerCase()
    return SUSPICIOUS_TLDS.some(t => d.endsWith(t) || d.includes(t + "/")) ||
           SUSPICIOUS_DOMAIN_WORDS.some(w => d.split(".")[0].includes(w))
  }

  findings.sort((a, b) => {
    let aTld = hasSuspiciousTLD(a.domain) ? 0 : 1
    let bTld = hasSuspiciousTLD(b.domain) ? 0 : 1
    if (aTld !== bTld) return aTld - bTld

    let aAsn = (a.as || "").split(" ")[0].toUpperCase()
    let bAsn = (b.as || "").split(" ")[0].toUpperCase()
    let aKnown = ASN_SET.has(aAsn) ? 0 : 1
    let bKnown = ASN_SET.has(bAsn) ? 0 : 1
    if (aKnown !== bKnown) return aKnown - bKnown

    let sevOrder = { HIGH: 0, MEDIUM: 1 }
    if (a.severity !== b.severity) return sevOrder[a.severity] - sevOrder[b.severity]

    let aOnline = (a.probe && a.probe.online) ? 0 : 1
    let bOnline = (b.probe && b.probe.online) ? 0 : 1
    if (aOnline !== bOnline) return aOnline - bOnline

    return b.hits - a.hits
  })

  let ghostAppFindings = []
  if (typeof window !== "undefined") {
  } else {
  }
  const GHOST_SUSPECT_DOMAINS = new Set(Object.keys(KNOWN_CHEAT_INFRA))
  SUSPICIOUS_TLDS.forEach(t => {})

  let suspectByBundle = {}
  for (let e of netEntries) {
    let bid = e.bundleID || ""
    let dom = (e.domain || "").toLowerCase()
    if (!bid) continue
    // Não flagra o app legítimo do FF acessando seus próprios domínios de proxy/login
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(dom)) continue
    let isKnown = GHOST_SUSPECT_DOMAINS.has(dom)
    let isTld   = SUSPICIOUS_TLDS.some(t => dom.endsWith(t))
    if (isKnown || isTld) {
      if (!suspectByBundle[bid]) suspectByBundle[bid] = { domains: [], hits: 0 }
      suspectByBundle[bid].domains.push(e.domain)
      suspectByBundle[bid].hits += (e.hits || 1)
    }
  }
  for (let [bid, info] of Object.entries(suspectByBundle)) {
    ghostAppFindings.push({ bundleID: bid, domains: [...new Set(info.domains)], hits: info.hits })
  }

  return { findings, netEntries, cheatAppFindings, knownCheatFindings, ghostAppFindings, proxyLoginFindings }
}

function wait(ms) {
  return new Promise(resolve => Timer.schedule(ms, false, resolve))
}

// ***********************************************
// * FUNÇÃO buildHTML TOTALMENTE REFORMULADA     *
// * Visual Gamer + Hello Kitty (sem alterar     *
// * nenhuma lógica original)                    *
// ***********************************************
function buildHTML(findings, netEntries, cheatAppFindings, knownCheatFindings, ipsFindings, ipsMeta, _unused, ghostAppFindings, proxyLoginFindings, filename) {
  let allDomains = new Set(netEntries.map(e => e.domain || ""))

  let allTimestamps = netEntries.map(e => e.timeStamp).filter(Boolean).sort()
  let firstTs = allTimestamps.length ? new Date(allTimestamps[0]) : null
  let lastTs  = allTimestamps.length ? new Date(allTimestamps[allTimestamps.length - 1]) : null

  function fmtDt(d) {
    if (!d) return "?"
    return d.toLocaleString("pt-BR", {
      day:"2-digit", month:"2-digit", year:"numeric",
      hour:"2-digit", minute:"2-digit"
    })
  }

  let uptimeStr = "?"
  let uptimeWarning = false
  if (firstTs && lastTs) {
    let diffMs  = lastTs - firstTs
    let diffMin = Math.floor(diffMs / 60000)
    let diffH   = Math.floor(diffMin / 60)
    let diffD   = Math.floor(diffH / 24)
    let remH    = diffH % 24
    let remMin  = diffMin % 60
    if (diffD > 0)      uptimeStr = `${diffD}d ${remH}h ${remMin}min`
    else if (diffH > 0) uptimeStr = `${diffH}h ${remMin}min`
    else                uptimeStr = `${diffMin} minutos`
    if (diffMin < 20)   uptimeWarning = true
  }

  let startStr = fmtDt(firstTs)
  let endStr   = fmtDt(lastTs)

  let staleWarning = false
  let staleMinutes = 0
  let staleStr = ""
  if (lastTs) {
    let now = new Date()
    let diffFromNow = Math.floor((now - lastTs) / 60000)
    staleMinutes = diffFromNow
    if (diffFromNow > 15) {
      staleWarning = true
      if (diffFromNow >= 1440) {
        let d = Math.floor(diffFromNow / 1440)
        let h = Math.floor((diffFromNow % 1440) / 60)
        staleStr = `${d}d ${h}h atrás`
      } else if (diffFromNow >= 60) {
        let h = Math.floor(diffFromNow / 60)
        let m = diffFromNow % 60
        staleStr = `${h}h ${m}min atrás`
      } else {
        staleStr = `${diffFromNow} minutos atrás`
      }
    }
  }

  let appStoreEntries = netEntries
    .filter(e => e.bundleID === "com.apple.AppStore" && e.timeStamp)
    .sort((a, b) => b.timeStamp.localeCompare(a.timeStamp))
  let appStoreLastTs = appStoreEntries.length ? new Date(appStoreEntries[0].timeStamp) : null
  let appStoreStr = appStoreLastTs ? fmtDt(appStoreLastTs) : null

  const FF_BUNDLES = ["com.dts.freefiremax", "com.dts.freefireth"]

  const FF_FB_LOGIN_DOMAIN = "m.facebook.com"

  const FF_SECONDARY_DOMAINS = {
    "twitter.com":           "Login Twitter/X",
    "api.twitter.com":       "Login Twitter/X",
    "oauth2.googleapis.com": "Login Gmail",
    "accounts.google.com":   "Login Gmail",
    "apis.google.com":       "Login Gmail",
    "api.vk.com":            "Login VK",
    "login.vk.com":          "Login VK",
  }

  let ffAll = netEntries
    .filter(e => FF_BUNDLES.includes(e.bundleID) && e.timeStamp)
    .sort((a, b) => a.timeStamp.localeCompare(b.timeStamp))

  let ffSessionGroups = []
  let _cur = []
  for (let e of ffAll) {
    if (_cur.length === 0) { _cur.push(e); continue }
    let gap = new Date(e.timeStamp) - new Date(_cur[_cur.length-1].timeStamp)
    if (gap > 2 * 60 * 1000) { ffSessionGroups.push(_cur); _cur = [e] }
    else _cur.push(e)
  }
  if (_cur.length > 0) ffSessionGroups.push(_cur)

  function resolveSession(group) {
    let domains = new Set(group.map(e => e.domain))
    let anchor  = group[group.length - 1]

    if (domains.has(FF_FB_LOGIN_DOMAIN)) {
      return { ts: anchor.timeStamp, loginType: "Login Facebook", bundleID: anchor.bundleID }
    }

    for (let d of domains) {
      if (FF_SECONDARY_DOMAINS[d]) {
        return { ts: anchor.timeStamp, loginType: FF_SECONDARY_DOMAINS[d], bundleID: anchor.bundleID }
      }
    }

    return null
  }

  let ffSessions = ffSessionGroups
    .map(resolveSession)
    .filter(Boolean)
    .sort((a, b) => b.ts.localeCompare(a.ts))
    .slice(0, 3)
    .map(s => ({ ...s, ts: fmtDt(new Date(s.ts)) }))

  let ffStr     = ffSessions.length > 0 ? ffSessions[0].ts : null
  let ffEntries = ffAll
  let ffVersion = ffAll.length > 0
    ? (ffAll[0].bundleID === "com.dts.freefiremax" ? "Free Fire MAX" : "Free Fire")
    : null

  let highCount = findings.filter(f => f.severity === "HIGH").length
  let medCount  = findings.filter(f => f.severity === "MEDIUM").length
  proxyLoginFindings = proxyLoginFindings || []
  let criticalCount = cheatAppFindings.length + knownCheatFindings.length + proxyLoginFindings.length

  let criticalCards = ""

  for (let p of proxyLoginFindings) {
    let bundleList = p.bundles.map(b => `<span class="bundle" style="color:#ff4400">${b}</span>`).join(" ")
    criticalCards += `
    <div class="card critical" style="border-left-color:#ff4400;background:#140800;border-color:#3a1500;">
      <div class="card-header">
        <span class="badge critical" style="background:#1a0800;color:#ff4400;border-color:#ff440055;">&#128274; PROXY BYPASS LOGIN — CRÍTICO</span>
        <span class="conns">${p.hits} conexões</span>
      </div>
      <div class="card-domain">${p.domain}</div>
      <div class="grid">
        <div class="row"><span class="label">Detecção</span><span class="val reason" style="color:#ff6600;font-weight:bold">Domínio exclusivo do Free Fire chamado por app não autorizado — padrão de proxy interceptando login</span></div>
        <div class="row"><span class="label">App interceptor</span><span class="val">${bundleList}</span></div>
        <div class="row"><span class="label">Esperado de</span><span class="val"><span class="bundle" style="color:#44ff88">com.dts.freefireth</span> <span class="bundle" style="color:#44ff88">com.dts.freefiremax</span></span></div>
      </div>
    </div>`
  }

  let ghostSection = ""
  if (ghostAppFindings && ghostAppFindings.length > 0) {
    let ghostRows = ghostAppFindings.map(g => {
      let domList = g.domains.slice(0,5).map(d => `<span class="ghost-domain">${d}</span>`).join("")
      let more = g.domains.length > 5 ? `<span class="ghost-more">+${g.domains.length - 5} mais</span>` : ""
      return `
      <div class="ghost-row">
        <div class="ghost-row-left">
          <span class="ghost-bundle">${g.bundleID}</span>
          <div class="ghost-domains">${domList}${more}</div>
        </div>
        <div class="ghost-row-right">
          <span class="ghost-hits">${g.hits} hits</span>
          <span class="ghost-label" data-i18n="ghostNotInUsage">⚠ Ausente no app_usage</span>
        </div>
      </div>`
    }).join("")
    ghostSection = `
  <div class="ghost-banner">
    <div class="ghost-header">
      <span class="ghost-icon">👻</span>
      <div class="ghost-title-block">
        <div class="ghost-title" data-i18n="ghostTitle">Apps com domínios suspeitos — ausentes no app_usage</div>
        <div class="ghost-sub" data-i18n="ghostSub">Presente no relatório de rede mas não encontrado nos dados de análise</div>
      </div>
      <span class="ghost-count">${ghostAppFindings.length}</span>
    </div>
    <div class="ghost-rows">${ghostRows}</div>
    <div class="ghost-hint" data-i18n="ghostHint">⚠ App pode ter sido instalado via sideload ou o arquivo app_usage não cobre o período</div>
  </div>`
  }

  for (let k of knownCheatFindings) {
    let bundleList = k.bundles.map(b => `<span class="bundle">${b}</span>`).join(" ")
    let indicatorKind = (k.indicator.includes(".") && !k.indicator.match(/^\d+\.\d+/)) ? "domain" : "ip"
    let indicatorText = indicatorKind === "domain" ? "Domínio" : "IP"
    criticalCards += `
    <div class="card critical">
      <div class="card-header">
        <span class="badge critical" data-badge-type="known-cheat">&#9888; CRÍTICO — CHEAT CONFIRMADO</span>
        <span class="conns">${k.hits} conexões</span>
      </div>
      <div class="card-domain">${k.indicator}</div>
      <div class="grid">
        <div class="row"><span class="label" data-i18n="labelCheat">Cheat</span><span class="val reason" style="color:#ff4444;font-weight:bold">${k.desc}</span></div>
        <div class="row"><span class="label" data-i18n="labelIndicator">Indicador</span><span class="val" data-i18n-indicator="${indicatorKind}">${indicatorText} detectado no relatório de rede</span></div>
        ${bundleList ? `<div class="row"><span class="label">Usado por</span><span class="val">${bundleList}</span></div>` : ""}
      </div>
    </div>`
  }

  for (let f of cheatAppFindings) {
    let suspectDomainSet = new Set(findings.map(f2 => f2.domain))
    let suspectDomains = f.domains.filter(d => suspectDomainSet.has(d))
    let suspectRows = suspectDomains.map(d => {
      let match = findings.find(f2 => f2.domain === d)
      let info = match ? ` &mdash; ${match.isp} (${match.country})` : ""
      return `<div class="domain-row"><span class="domain-badge ${match ? match.severity.toLowerCase() : ""}" data-sev="${match ? match.severity : ""}">${match ? (match.severity === "HIGH" ? "SUSPEITO" : "POSSÍVEL") : ""}</span> ${d}${info}</div>`
    }).join("")
    criticalCards += `
    <div class="card critical">
      <div class="card-header">
        <span class="badge critical">&#9888; CRÍTICO — APP PROXY/CHEAT</span>
        <span class="conns">${f.hits} conexões</span>
      </div>
      <div class="card-domain">${f.bundleID}</div>
      <div class="grid">
        <div class="row"><span class="label">App</span><span class="val reason">${f.desc}</span></div>
        <div class="row">
          <span class="label">IPs suspeitos<br><span class="sub">${suspectDomains.length} de ${f.domains.length} domínios</span></span>
          <span class="val">${suspectRows || '<span class="none">Nenhum IP suspeito detectado</span>'}</span>
        </div>
      </div>
    </div>`
  }

  let displayFindings = findings

  let cards = ""
  if (displayFindings.length === 0) {
    cards = `<div class="ok">&#10003; Nenhum IP VPS / Hosting / Proxy detectado.</div>`
  } else {
    for (let f of displayFindings) {
      let tag = f.tldSuspect ? "DOMÍNIO SUSPEITO" : f.hosting ? "VPS/HOSTING" : f.proxy ? "PROXY/VPN" : "NUVEM"
      let cls = f.tldSuspect ? "tld-flag" : f.severity === "HIGH" ? "high" : "medium"
      let sev = f.tldSuspect ? "&#9888; DOMÍNIO SUSPEITO" : f.severity === "HIGH" ? "SUSPEITO" : "POSSÍVEL"
      let bundleList = f.bundles.map(b => `<span class="bundle">${b}</span>`).join(" ")
      cards += `
      <div class="card ${cls}">
        <div class="card-header">
          <span class="badge ${cls}">${sev}</span>
          <span class="conns">${f.hits} conexões</span>
        </div>
        <div class="card-domain">${f.domain}</div>
        <div class="grid">
          <div class="row"><span class="label">IP</span><span class="val">${f.ip}</span></div>
          <div class="row"><span class="label" data-i18n="labelCountry">País</span><span class="val">${f.country} / ${f.city}</span></div>
          <div class="row"><span class="label" data-i18n="labelProvider">Provedor</span><span class="val isp">${f.isp}</span></div>
          <div class="row"><span class="label">Org</span><span class="val">${f.org}</span></div>
          ${f.reverse ? `<div class="row"><span class="label">rDNS</span><span class="val rdns">${f.reverse}</span></div>` : ""}
          ${f.probe ? `<div class="row"><span class="label">HTTP</span><span class="val">
            ${f.probe.online
              ? `<span class="http-on">&#9679; Online</span>${f.probe.status ? ` &mdash; HTTP ${f.probe.status}` : ""}${f.probe.banner ? ` &mdash; <span class="http-banner">${f.probe.banner}</span>` : ""}`
              : `<span class="http-off">&#9679; Offline / Sem resposta</span>`
            }
          </span></div>` : ""}
          <div class="row"><span class="label" data-i18n="labelReason">Motivo</span><span class="val reason" data-reasons='${JSON.stringify(f.reasons)}'>${f.reasons.join("<br>")}</span></div>
          <div class="row"><span class="label" data-i18n="labelUsedBy">Usado por</span><span class="val">${bundleList}</span></div>
        </div>
      </div>`
    }
  }

  let uptimeBg    = uptimeWarning ? "background:linear-gradient(90deg,#2a1000,#1a0800)" : "background:#0d1b2a"
  let uptimeDotCl = uptimeWarning ? "background:#ff8800;box-shadow:0 0 6px #ff8800" : "background:#4caf50;box-shadow:0 0 6px #4caf50"
  let uptimeWarnBadge = uptimeWarning
    ? `<span style="margin-left:8px;background:#3a1800;color:#ff8800;border:1px solid #ff8800;font-size:9px;padding:2px 7px;border-radius:10px;font-weight:bold" data-i18n="uptimeLess20">&#9888; MENOS DE 20MIN — Relatório pode não cobrir a partida inteira!</span>`
    : ""

  let rootsWarn = ""
  if (ipsMeta && ipsMeta.rootsInstalled > 0) {
    rootsWarn = `
  <div class="roots-banner">
    <div class="roots-icon">🔐</div>
    <div>
      <div class="roots-label" data-i18n="rootsLabel">Certificado Raiz Suspeito</div>
      <div class="roots-detail" data-roots-count="${ipsMeta.rootsInstalled}">${ipsMeta.rootsInstalled} certificado${ipsMeta.rootsInstalled > 1 ? "s" : ""} raiz instalado${ipsMeta.rootsInstalled > 1 ? "s" : ""} (roots_installed: ${ipsMeta.rootsInstalled})</div>
      <div class="roots-hint" data-i18n="rootsHint">Certificados raiz permitem interceptar tráfego HTTPS — padrão de proxy cheat tipo mitmproxy</div>
    </div>
  </div>`
  }

  let ipsSection = ""
  if (ipsFindings && ipsFindings.length > 0) {
    let ipsRows = ipsFindings.map(f => `
      <div class="ips-row ips-row-${f.category || 'warning'}">
        <div class="ips-row-left">
          <div class="ips-row-top">
            <span class="ips-cat-badge ips-cat-${f.category || 'warning'}">${f.category === 'critical' ? '🚨 CRÍTICO' : f.category === 'vpn' ? '🔒 VPN/PROXY' : f.category === 'developer' ? '🛠 DEVELOPER' : '⚠ SUSPEITO'}</span>
          </div>
          <span class="ips-bundle">${f.bundleId}</span>
          <span class="ips-reason" data-reason-key="${encodeURIComponent(f.bundleId)}">${f.reason}</span>
        </div>
        <div class="ips-row-right">
          <span class="ips-version">v${f.version}</span>
          <span class="ips-badge ${f.eventType === 'launches' ? 'launched' : 'installed'}" data-i18n="${f.eventType === 'launches' ? 'ipsLaunched' : 'ipsInstalled'}">${f.eventType === 'launches' ? '▶ Aberto' : '⬇ Instalado'}</span>
        </div>
      </div>`).join("")

    ipsSection = `
  <div class="ips-banner">
    <div class="ips-header">
      <span class="ips-icon">📲</span>
      <div class="ips-header-text">
        <div class="ips-title" data-i18n="ipsTitle">Apps Suspeitos Instalados</div>
        <div class="ips-sub" data-i18n="ipsSub">Detectados no histórico de uso do dispositivo</div>
      </div>
      <span class="ips-count">${ipsFindings.length}</span>
    </div>
    <div class="ips-rows">${ipsRows}</div>
    <div class="ips-hint" data-i18n="ipsHint">⚠ Apps encontrados nos dados de análise do iPhone — indicam presença de ferramentas de cheat/jailbreak/proxy</div>
  </div>`
  }

  let staleBanner = staleWarning ? `
  <div class="stale-banner">
    <div class="stale-left">&#128337;</div>
    <div>
      <div class="stale-label">Arquivo possivelmente antigo</div>
      <div class="stale-time">Último registro: <strong>${staleStr}</strong></div>
      <div class="stale-hint">Suspeita: arquivo gerado fora do período da partida para esconder atividade.</div>
    </div>
  </div>` : ""

  function loginColor(type) {
    if (type.includes("Facebook"))  return "#1877f2"
    if (type.includes("Twitter") || type.includes("X")) return "#1da1f2"
    if (type.includes("Gmail"))     return "#ea4335"
    if (type.includes("VK"))        return "#4a76a8"
    return "#556"
  }

  let ffSessionRows = ffSessions.map((s, i) => {
    let col = loginColor(s.loginType)
    let label = i === 0 ? "Última abertura" : i === 1 ? "2ª abertura" : "3ª abertura"
    return `
      <div class="ff-session-row">
        <div class="ff-session-left">
          <span class="ff-session-num">${label}</span>
          <span class="ff-session-ts">${s.ts}</span>
        </div>
        <span class="ff-login-badge" style="background:${col}22;color:${col};border:1px solid ${col}44">${s.loginType}</span>
      </div>`
  }).join("")

  let ffBanner = ffStr ? `
  <div class="ff-banner">
    <div class="ff-left">&#128293;</div>
    <div class="ff-info">
      <div class="ff-label">${ffVersion || "Free Fire"} — Sessões no período</div>
      ${ffSessionRows}
      <div class="ff-sessions">${ffEntries.length} inicializações registradas no período</div>
      <div class="ff-hint">Se a última abertura foi após a partida &rarr; aplique o W.O!</div>
    </div>
  </div>` : ""

  let appStoreBanner = appStoreStr ? `
  <div class="appstore-banner">
    <div class="appstore-left">&#128722;</div>
    <div>
      <div class="appstore-label">App Store aberta</div>
      <div class="appstore-time">${appStoreStr}</div>
      <div class="appstore-hint">Se foi após a partida &rarr; aplique o W.O!</div>
    </div>
  </div>` : ""

  // --------------------------------------------------------------
  // CSS totalmente reformulado para estilo "GAMER + HELLO KITTY"
  // --------------------------------------------------------------
  let rawHtml = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet">
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body {
    background: #0b0b1a;
    background-image: radial-gradient(circle at 10% 20%, rgba(255,105,180,0.08) 0%, rgba(0,255,255,0.02) 90%);
    color: #e0e0ff;
    font-family: 'VT323', monospace;
    font-size: 16px;
    line-height: 1.5;
  }
  /* Hello Kitty sprinkle */
  body::before {
    content: "🐱✨💖";
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-size: 32px;
    opacity: 0.15;
    pointer-events: none;
    z-index: 999;
    text-shadow: 0 0 5px #ff69b4;
  }
  /* Gamer glitch effect on titles */
  @keyframes glitch {
    0% { text-shadow: -2px 0 #ff00cc, 2px 0 #00ffff; }
    50% { text-shadow: 2px 0 #ff00cc, -2px 0 #00ffff; }
    100% { text-shadow: -2px 0 #ff00cc, 2px 0 #00ffff; }
  }
  @keyframes pulse {
    0% { opacity: 0.6; text-shadow: 0 0 2px cyan; }
    100% { opacity: 1; text-shadow: 0 0 8px #ff69b4; }
  }
  .hero-name {
    font-family: 'Press Start 2P', monospace;
    font-size: 26px;
    letter-spacing: 2px;
    animation: glitch 1.5s infinite;
  }
  .hero-name span {
    color: #ff99cc;
    animation: pulse 1s alternate infinite;
  }
  .card, .ghost-banner, .ips-banner, .roots-banner, .stale-banner, .ff-banner, .appstore-banner {
    backdrop-filter: blur(2px);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .card:hover, .ghost-banner:hover, .ips-banner:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(255,105,180,0.3);
  }
  .badge, .lang-btn, .stat, .hg-card {
    font-family: 'Press Start 2P', monospace;
    font-size: 9px;
  }
  .badge.critical {
    background: #ff00cc22;
    border: 1px solid #ff69b4;
    box-shadow: 0 0 5px #ff69b4;
  }
  .badge.high {
    background: #ff444422;
    border-color: #ff4466;
  }
  .badge.medium {
    background: #ffaa0022;
    border-color: #ffaa44;
  }
  button.lang-btn {
    background: #1e1e3a;
    border: 1px solid #ff69b4;
    color: #ffb6c1;
    transition: 0.2s;
  }
  button.lang-btn.active {
    background: #ff69b4;
    color: #0b0b1a;
    box-shadow: 0 0 8px #ff69b4;
  }
  .stat .num {
    font-family: 'Press Start 2P', monospace;
    font-size: 26px;
    background: linear-gradient(45deg, #fff, #ff69b4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .card-domain {
    font-family: 'Press Start 2P', monospace;
    font-size: 11px;
    color: #ffd966;
    word-break: break-all;
  }
  .rdns, .isp, .reason {
    font-family: 'VT323', monospace;
    font-size: 15px;
  }
  .reason {
    color: #ffaa88;
  }
  .val {
    font-size: 15px;
  }
  .hero-credits .credit-name {
    color: #ff99cc;
    font-weight: bold;
  }
  .hg-card, .stat {
    background: #0f0f2a;
    border: 1px solid #ff69b444;
    border-radius: 12px;
  }
  .uptime-bar {
    border-bottom: 2px solid #ff69b4;
    box-shadow: 0 2px 8px rgba(255,105,180,0.2);
  }
  .uptime-dot {
    animation: pulse 1.2s infinite;
  }
  .ff-banner, .appstore-banner {
    border-left: 6px solid #ff69b4;
  }
  .ghost-row {
    background: #1a1a3a;
    border-left: 4px solid #ff69b4;
  }
  .ghost-bundle {
    color: #ffb3d9;
  }
  .footer-gamer {
    text-align: center;
    font-size: 10px;
    padding: 20px 10px;
    border-top: 1px dashed #ff69b4;
    margin-top: 25px;
    color: #ff99cc;
    font-family: 'Press Start 2P', monospace;
  }
  .ok {
    background: #0f2a1f;
    border: 2px solid #88ffaa;
    text-shadow: 0 0 3px #00ff66;
  }
  /* Scrollbar custom */
  ::-webkit-scrollbar {
    width: 8px;
    background: #0b0b1a;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff99cc;
  }
</style>
</head>
<body>

<div class="Opa">
  <div class="hero-eyebrow">🎮 Scanner iOS Gamer Edition 🎀</div>
  <div class="hero-name">Dizzy<span>🐱</span></div>
  <div class="hero-credits">por <span class="credit-name">Dizzy</span> &middot; <span class="credit-name">Clear</span> &middot; <span class="credit-name">Hello Kitty</span> 💖</div>
  <div class="lang-bar">
    <button class="lang-btn active" id="btn-pt">PT-BR</button>
    <button class="lang-btn" id="btn-en">EN</button>
    <button class="lang-btn" id="btn-es">ES</button>
  </div>
  <div class="hero-file"><strong>Arquivo:</strong> ${filename}</div>
  <div class="hero-grid">
    <div class="hg-card">
      <div class="hg-label">Início</div>
      <div class="hg-val">${startStr}</div>
    </div>
    <div class="hg-card">
      <div class="hg-label">Último registro</div>
      <div class="hg-val">${endStr}</div>
    </div>
    <div class="hg-card">
      <div class="hg-label">Domínios únicos</div>
      <div class="hg-val cyan">${allDomains.size}</div>
    </div>
    <div class="hg-card">
      <div class="hg-label">Total conexões</div>
      <div class="hg-val">${netEntries.length}</div>
    </div>
    ${ipsMeta && ipsMeta.iosVersion ? `<div class="hg-card${ipsMeta.rootsInstalled > 0 ? "" : " hg-card-full"}">
      <div class="hg-label" data-i18n="iosVersionLabel">Versão iOS</div>
      <div class="hg-val cyan">${ipsMeta.iosVersion}</div>
    </div>` : ""}
    ${ipsMeta && ipsMeta.rootsInstalled > 0 ? `<div class="hg-card hg-card-warn">
      <div class="hg-label" data-i18n="rootsCardLabel">⚠ Certificados raiz</div>
      <div class="hg-val warn">${ipsMeta.rootsInstalled} instalado${ipsMeta.rootsInstalled > 1 ? "s" : ""}</div>
    </div>` : ""}
  </div>
</div>

<div class="uptime-bar" style="${uptimeBg}">
  <div class="uptime-dot" style="${uptimeDotCl}"></div>
  <div class="uptime-text">Monitorado há <strong>${uptimeStr}</strong></div>
  ${uptimeWarnBadge}
</div>

<div class="content">

  ${staleBanner}
  ${ffBanner}
  ${appStoreBanner}

  <div class="summary">
    <div class="stat">
      <div class="num" style="color:#ff00cc">${criticalCount}</div>
      <div class="lbl">Crítico</div>
    </div>
    <div class="stat">
      <div class="num" style="color:#ff5555">${highCount}</div>
      <div class="lbl">Suspeito</div>
    </div>
    <div class="stat">
      <div class="num" style="color:#ffbb00">${medCount}</div>
      <div class="lbl">Possível</div>
    </div>
  </div>

  ${criticalCount > 0 ? `
  <div class="section-header sh-critical">
    <div class="sh-icon">🎮</div>
    <div class="sh-text">
      <div class="sh-title">Apps Proxy / Cheat Detectados</div>
      <div class="sh-sub">Aplicativos e infraestrutura conhecida de cheats</div>
    </div>
    <div class="sh-count">${criticalCount}</div>
  </div>
  ${criticalCards}
  <div class="divider"></div>` : ""}

  ${highCount > 0 ? `
  ${rootsWarn}
  ${ipsSection}
  ${ghostSection}
  <div class="section-header sh-high">
    <div class="sh-icon">⚠️</div>
    <div class="sh-text">
      <div class="sh-title">IPs Suspeitos</div>
      <div class="sh-sub">VPS / Hosting / Proxy confirmados</div>
    </div>
    <div class="sh-count">${highCount}</div>
  </div>` : ""}

  ${medCount > 0 && highCount > 0 ? "" : highCount === 0 ? `
  <div class="section-header sh-medium">
    <div class="sh-icon">🔍</div>
    <div class="sh-text">
      <div class="sh-title">IPs Possíveis</div>
      <div class="sh-sub">Infraestrutura cloud / datacenter</div>
    </div>
    <div class="sh-count">${medCount}</div>
  </div>` : ""}

  ${cards}

  ${findings.length > 0 && highCount > 0 && medCount > 0 ? `
  <div class="divider"></div>
  <div class="section-header sh-medium">
    <div class="sh-icon">🌀</div>
    <div class="sh-text">
      <div class="sh-title">IPs Possíveis</div>
      <div class="sh-sub">Infraestrutura cloud / datacenter</div>
    </div>
    <div class="sh-count">${medCount}</div>
  </div>` : ""}

  <div class="footer-gamer">
    🎮 Densane da Hello Kitty 🎀 | DIZZY Scanner | Modo Arcade Ativado ✨
  </div>
</div>
</body>
</html>`
  return rawHtml
}

function buildLangScript() {
  return `<script>
var TRANSLATIONS = {
  pt: {
    eyebrow: "Scanner IOS",
    credits: "por Keller · Samir · Katiau",
    fileLabel: "Arquivo:",
    start: "Início",
    lastRecord: "Último registro",
    uniqueDomains: "Domínios únicos",
    totalConns: "Total conexões",
    monitoredFor: "Monitorado há",
    criticalLabel: "Crítico",
    suspectLabel: "Suspeito",
    possibleLabel: "Possível",
    appProxyTitle: "Apps Proxy / Cheat Detectados",
    appProxySub: "Aplicativos conhecidos de interceptação de tráfego",
    suspectIPsTitle: "IPs Suspeitos",
    suspectIPsSub: "VPS / Hosting / Proxy confirmados",
    possibleIPsTitle: "IPs Possíveis",
    possibleIPsSub: "Infraestrutura cloud / datacenter",
    labelIP: "IP",
    labelCountry: "País",
    labelProvider: "Provedor",
    labelOrg: "Org",
    labelRDNS: "rDNS",
    labelHTTP: "HTTP",
    labelReason: "Motivo",
    labelUsedBy: "Usado por",
    labelApp: "App",
    labelSuspectIPs: "IPs suspeitos",
    noneDetected: "Nenhum IP suspeito detectado",
    noVPS: "✓ Nenhum IP VPS / Hosting / Proxy detectado.",
    staleLabel: "Arquivo possivelmente antigo",
    staleHint: "Suspeita: arquivo gerado fora do período da partida para esconder atividade.",
    ffLabel: "Sessões no período",
    ffLastOpen: "Última abertura",
    ffFirstOpen: "Primeira abertura",
    ffSessions: "inicializações registradas no período",
    ffHint: "Se a última abertura foi após a partida → aplique o W.O!",
    appStoreLabel: "App Store aberta",
    appStoreHint: "Se foi após a partida → aplique o W.O!",
    uptimeLess20: "MENOS DE 20MIN — Relatório pode não cobrir a partida inteira!",
    badgeCritical: "⚠ CRÍTICO — APP PROXY/CHEAT",
    badgeSuspect: "SUSPEITO",
    badgePossible: "POSSÍVEL",
    badgeDomainSuspect: "⚠ DOMÍNIO SUSPEITO",
    of: "de",
    online: "● Online",
    offline: "● Offline / Sem resposta",
    lastRecord2: "Último registro:",
    conns: "conexões",
    domains: "domínios",
    labelCheat: "Cheat",
    labelIndicator: "Indicador",
    indicatorDomain: "Domínio detectado no relatório de rede",
    indicatorIP: "IP detectado no relatório de rede",
    iosVersionLabel: "Versão iOS",
    rootsCardLabel: "⚠ Certificados raiz",
    rootsLabel: "Certificado Raiz Suspeito",
    rootsDetail1: "certificado raiz instalado",
    rootsDetailN: "certificados raiz instalados",
    rootsHint: "Certificados raiz permitem interceptar tráfego HTTPS — padrão de proxy cheat tipo mitmproxy",
    ipsTitle: "Apps Suspeitos Instalados",
    ipsSub: "Detectados no histórico de uso do dispositivo",
    ipsHint: "⚠ Apps encontrados nos dados de análise do iPhone — indicam presença de ferramentas de cheat/jailbreak/proxy",
    ipsLaunched: "▶ Aberto",
    ipsInstalled: "⬇ Instalado",
    badgeKnownCheat: "⚠ CRÍTICO — CHEAT CONFIRMADO",
    reasonTLD: function(tld){ return "TLD suspeito detectado: \"" + tld + "\" — padrão comum em cheats/proxies"; },
    reasonWord: function(word){ return "Palavra suspeita no domínio: \"" + word + "\""; },
    reasonVPS: function(isp){ return "VPS/HOSTING — ISP: " + isp; },
    reasonProxy: "PROXY / VPN detectado",
    reasonCF: function(asn){ return "Cloudflare acessado via IP direto — padrão de proxy cheat (" + asn + ")"; },
    reasonASN: function(asn,desc){ return "ASN de cheat proxy conhecido: " + asn + " — " + desc; },
    reasonRDNS: function(rdns){ return "rDNS de servidor: " + rdns; },
    reasonHostinger: function(rdns){ return "Hostinger VPS (padrao cheat proxy BR): " + rdns; },
    reasonNoRDNS: "Sem rDNS (PTR) — tipico de VPS usado como proxy",
    reasonOrg: function(kw){ return "Org/ISP associado a hospedagem/cheat proxy: " + kw; },
  },
  en: {
    eyebrow: "iOS Scanner",
    credits: "by Keller · Samir · Katiau",
    fileLabel: "File:",
    start: "Start",
    lastRecord: "Last record",
    uniqueDomains: "Unique domains",
    totalConns: "Total connections",
    monitoredFor: "Monitored for",
    criticalLabel: "Critical",
    suspectLabel: "Suspicious",
    possibleLabel: "Possible",
    appProxyTitle: "Proxy / Cheat Apps Detected",
    appProxySub: "Known traffic interception applications",
    suspectIPsTitle: "Suspicious IPs",
    suspectIPsSub: "VPS / Hosting / Confirmed Proxy",
    possibleIPsTitle: "Possible IPs",
    possibleIPsSub: "Cloud / datacenter infrastructure",
    labelIP: "IP",
    labelCountry: "Country",
    labelProvider: "Provider",
    labelOrg: "Org",
    labelRDNS: "rDNS",
    labelHTTP: "HTTP",
    labelReason: "Reason",
    labelUsedBy: "Used by",
    labelApp: "App",
    labelSuspectIPs: "Suspicious IPs",
    noneDetected: "No suspicious IPs detected",
    noVPS: "✓ No VPS / Hosting / Proxy IPs detected.",
    staleLabel: "File possibly outdated",
    staleHint: "Suspicion: file generated outside the match period to hide activity.",
    ffLabel: "Sessions in period",
    ffLastOpen: "Last opened",
    ffFirstOpen: "First opened",
    ffSessions: "startups recorded in the period",
    ffHint: "If last opened after the match → apply W.O!",
    appStoreLabel: "App Store opened",
    appStoreHint: "If it was after the match → apply W.O!",
    uptimeLess20: "LESS THAN 20MIN — Report may not cover the entire match!",
    badgeCritical: "⚠ CRITICAL — PROXY/CHEAT APP",
    badgeSuspect: "SUSPICIOUS",
    badgePossible: "POSSIBLE",
    badgeDomainSuspect: "⚠ SUSPICIOUS DOMAIN",
    of: "of",
    online: "● Online",
    offline: "● Offline / No response",
    lastRecord2: "Last record:",
    conns: "connections",
    domains: "domains",
    labelCheat: "Cheat",
    labelIndicator: "Indicator",
    indicatorDomain: "Domain detected in network report",
    indicatorIP: "IP detected in network report",
    iosVersionLabel: "iOS Version",
    rootsCardLabel: "⚠ Root certificates",
    rootsLabel: "Suspicious Root Certificate",
    rootsDetail1: "root certificate installed",
    rootsDetailN: "root certificates installed",
    rootsHint: "Root certificates allow HTTPS traffic interception — common pattern in mitmproxy-type cheat tools",
    ipsTitle: "Suspicious Apps Installed",
    ipsSub: "Detected in device usage history",
    ipsHint: "⚠ Apps found in iPhone analytics data — indicate presence of cheat/jailbreak/proxy tools",
    ipsLaunched: "▶ Opened",
    ipsInstalled: "⬇ Installed",
    badgeKnownCheat: "⚠ CRITICAL — CONFIRMED CHEAT",
    reasonTLD: function(tld){ return "Suspicious TLD detected: \"" + tld + "\" — common pattern in cheats/proxies"; },
    reasonWord: function(word){ return "Suspicious word in domain: \"" + word + "\""; },
    reasonVPS: function(isp){ return "VPS/HOSTING — ISP: " + isp; },
    reasonProxy: "PROXY / VPN detected",
    reasonCF: function(asn){ return "Cloudflare accessed via direct IP — cheat proxy pattern (" + asn + ")"; },
    reasonASN: function(asn,desc){ return "Known cheat proxy ASN: " + asn + " — " + desc; },
    reasonRDNS: function(rdns){ return "Server rDNS: " + rdns; },
    reasonHostinger: function(rdns){ return "Hostinger VPS (known BR cheat proxy pattern): " + rdns; },
    reasonNoRDNS: "No rDNS (PTR) — typical of VPS used as proxy",
    reasonOrg: function(kw){ return "Org/ISP associated with hosting/cheat proxy: " + kw; },
  },
  es: {
    eyebrow: "Scanner iOS",
    credits: "por Keller · Samir · Katiau",
    fileLabel: "Archivo:",
    start: "Inicio",
    lastRecord: "Último registro",
    uniqueDomains: "Dominios únicos",
    totalConns: "Total conexiones",
    monitoredFor: "Monitoreado hace",
    criticalLabel: "Crítico",
    suspectLabel: "Sospechoso",
    possibleLabel: "Posible",
    appProxyTitle: "Apps Proxy / Cheat Detectadas",
    appProxySub: "Aplicaciones conocidas de interceptación de tráfico",
    suspectIPsTitle: "IPs Sospechosas",
    suspectIPsSub: "VPS / Hosting / Proxy confirmados",
    possibleIPsTitle: "IPs Posibles",
    possibleIPsSub: "Infraestructura cloud / datacenter",
    labelIP: "IP",
    labelCountry: "País",
    labelProvider: "Proveedor",
    labelOrg: "Org",
    labelRDNS: "rDNS",
    labelHTTP: "HTTP",
    labelReason: "Motivo",
    labelUsedBy: "Usado por",
    labelApp: "App",
    labelSuspectIPs: "IPs sospechosas",
    noneDetected: "Ninguna IP sospechosa detectada",
    noVPS: "✓ Ninguna IP VPS / Hosting / Proxy detectada.",
    staleLabel: "Archivo posiblemente antiguo",
    staleHint: "Sospecha: archivo generado fuera del período del partido para ocultar actividad.",
    ffLabel: "Sesiones en el período",
    ffLastOpen: "Última apertura",
    ffFirstOpen: "Primera apertura",
    ffSessions: "inicializaciones registradas en el período",
    ffHint: "Si la última apertura fue después del partido → ¡aplica el W.O!",
    appStoreLabel: "App Store abierta",
    appStoreHint: "Si fue después del partido → ¡aplica el W.O!",
    uptimeLess20: "MENOS DE 20MIN — ¡El informe puede no cubrir toda la partida!",
    badgeCritical: "⚠ CRÍTICO — APP PROXY/CHEAT",
    badgeSuspect: "SOSPECHOSO",
    badgePossible: "POSIBLE",
    badgeDomainSuspect: "⚠ DOMINIO SOSPECHOSO",
    of: "de",
    online: "● En línea",
    offline: "● Sin conexión / Sin respuesta",
    lastRecord2: "Último registro:",
    conns: "conexiones",
    domains: "dominios",
    labelCheat: "Cheat",
    labelIndicator: "Indicador",
    indicatorDomain: "Dominio detectado en el informe de red",
    indicatorIP: "IP detectada en el informe de red",
    iosVersionLabel: "Versión iOS",
    rootsCardLabel: "⚠ Certificados raíz",
    rootsLabel: "Certificado Raíz Sospechoso",
    rootsDetail1: "certificado raíz instalado",
    rootsDetailN: "certificados raíz instalados",
    rootsHint: "Los certificados raíz permiten interceptar tráfico HTTPS — patrón común en cheats tipo mitmproxy",
    ipsTitle: "Apps Sospechosas Instaladas",
    ipsSub: "Detectadas en el historial de uso del dispositivo",
    ipsHint: "⚠ Apps encontradas en los datos de análisis del iPhone — indican presencia de herramientas de cheat/jailbreak/proxy",
    ipsLaunched: "▶ Abierta",
    ipsInstalled: "⬇ Instalada",
    badgeKnownCheat: "⚠ CRÍTICO — CHEAT CONFIRMADO",
    reasonTLD: function(tld){ return "TLD sospechoso detectado: \"" + tld + "\" — patrón común en cheats/proxies"; },
    reasonWord: function(word){ return "Palabra sospechosa en el dominio: \"" + word + "\""; },
    reasonVPS: function(isp){ return "VPS/HOSTING — ISP: " + isp; },
    reasonProxy: "PROXY / VPN detectado",
    reasonCF: function(asn){ return "Cloudflare accedido vía IP directa — patrón de proxy cheat (" + asn + ")"; },
    reasonASN: function(asn,desc){ return "ASN de proxy cheat conocido: " + asn + " — " + desc; },
    reasonRDNS: function(rdns){ return "rDNS de servidor: " + rdns; },
    reasonHostinger: function(rdns){ return "Hostinger VPS (patrón proxy cheat BR conocido): " + rdns; },
    reasonNoRDNS: "Sin rDNS (PTR) — típico de VPS usado como proxy",
    reasonOrg: function(kw){ return "Org/ISP asociado a hosting/proxy cheat: " + kw; },
  }
};

function setLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  ['pt','en','es'].forEach(function(l) {
    var btn = document.getElementById('btn-' + l);
    if (btn) btn.classList.toggle('active', l === lang);
  });

  function q(sel) { return Array.from(document.querySelectorAll(sel)); }

  q('.hero-eyebrow').forEach(function(el){ el.textContent = t.eyebrow; });
  q('.hero-credits').forEach(function(el){ el.textContent = t.credits; });
  q('.hero-file strong').forEach(function(el){ el.textContent = t.fileLabel; });

  var hgLabels = q('.hg-label');
  ['start','lastRecord','uniqueDomains','totalConns'].forEach(function(k,i){
    if (hgLabels[i]) hgLabels[i].textContent = t[k];
  });

  // data-i18n generic handler
  q('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if (t[key] && typeof t[key] === 'string') el.textContent = t[key];
  });

  // indicator value (domain vs IP)
  q('[data-i18n-indicator]').forEach(function(el){
    var kind = el.getAttribute('data-i18n-indicator');
    el.textContent = kind === 'domain' ? t.indicatorDomain : t.indicatorIP;
  });

  // roots-detail with count
  q('[data-roots-count]').forEach(function(el){
    var n = parseInt(el.getAttribute('data-roots-count'), 10);
    var label = n > 1 ? t.rootsDetailN : t.rootsDetail1;
    el.textContent = n + ' ' + label + ' (roots_installed: ' + n + ')';
  });

  // domain-badge inline SUSPEITO/POSSÍVEL
  q('[data-sev]').forEach(function(el){
    var sev = el.getAttribute('data-sev');
    if (sev === 'HIGH') el.textContent = t.badgeSuspect;
    else if (sev === 'MEDIUM') el.textContent = t.badgePossible;
  });

  // reasons translation via data-reasons
  q('[data-reasons]').forEach(function(el){
    try {
      var reasons = JSON.parse(el.getAttribute('data-reasons'));
      var translated = reasons.map(function(r) {
        // match each reason pattern and translate
        var m;
        if ((m = r.match(/TLD suspeito detectado: "([^"]+)"/)) || (m = r.match(/Suspicious TLD detected: "([^"]+)"/)) || (m = r.match(/TLD sospechoso detectado: "([^"]+)"/))) return t.reasonTLD(m[1]);
        if ((m = r.match(/Palavra suspeita no domínio: "([^"]+)"/)) || (m = r.match(/Suspicious word in domain: "([^"]+)"/)) || (m = r.match(/Palabra sospechosa en el dominio: "([^"]+)"/))) return t.reasonWord(m[1]);
        if ((m = r.match(/VPS\/HOSTING — ISP: (.+)/))) return t.reasonVPS(m[1]);
        if (r.match(/PROXY \/ VPN/)) return t.reasonProxy;
        if ((m = r.match(/Cloudflare[^(]+\((\w+)\)/))) return t.reasonCF(m[1]);
        if ((m = r.match(/ASN[^:]+: (\w+) — (.+)/))) return t.reasonASN(m[1], m[2]);
        if ((m = r.match(/Hostinger VPS[^:]+: (.+)/))) return t.reasonHostinger(m[1]);
        if ((m = r.match(/rDNS de servidor: (.+)/) || r.match(/Server rDNS: (.+)/))) return t.reasonRDNS(m[1]);
        if (r.match(/Sem rDNS|No rDNS|Sin rDNS/)) return t.reasonNoRDNS;
        if ((m = r.match(/Org\/ISP[^:]+: (.+)/) || r.match(/Org\/ISP[^:]+: (.+)/))) return t.reasonOrg(m[1]);
        return r; // fallback: keep original
      });
      el.innerHTML = translated.join('<br>');
    } catch(e) {}
  });

  q('.uptime-text').forEach(function(el){
    var strong = el.querySelector('strong');
    if (strong) {
      var val = strong.textContent;
      while (el.firstChild) el.removeChild(el.firstChild);
      el.appendChild(document.createTextNode(t.monitoredFor + ' '));
      var ns = document.createElement('strong');
      ns.textContent = val;
      el.appendChild(ns);
    }
  });

  q('.uptime-bar span').forEach(function(el){
    if (el.style && el.style.marginLeft) el.innerHTML = '&#9888; ' + t.uptimeLess20;
  });

  var statLabels = q('.stat .lbl');
  ['criticalLabel','suspectLabel','possibleLabel'].forEach(function(k,i){
    if (statLabels[i]) statLabels[i].textContent = t[k];
  });

  q('.section-header').forEach(function(sh){
    var title = sh.querySelector('.sh-title');
    var-title');
    var sub   sub  ');
    var sub   = sh = sh = sh.querySelector('..querySelector('..querySelector('.sh-subsh-sub');
    if (!sh-sub');
    if (!');
    if (!title)title)title) return return return;
    if;
    if;
    if (sh (sh (sh.classList.contains('sh.classList.contains('sh.classList.contains('sh-critical')) {
     -critical')) {
     -critical')) {
      title.text title.text title.textContent =Content =Content = t.app t.appProxyTitle t.appProxyTitle;
     ProxyTitle;
      if (;
      if (sub) if (sub) sub.textsub) sub.text sub.textContent =Content = t.appContent = t.app t.appProxySubProxySubProxySub;
   ;
   ;
    } else } else if (sh.classList } else if (sh.classList if (sh.classList.contains('.contains('.contains('sh-highsh-highsh-high'))')) {
      title')) {
      title.textContent.textContent {
      title.textContent = t = t = t.sus.sus.suspectIPpectIPpectIPsTitlesTitle;
     sTitle;
      if ( if (;
      if (sub)sub)sub) sub.text sub.text sub.textContent =Content = t.sContent = t.suspect t.suspectuspectIPsIPsIPsSubSubSub;
    };
    };
    } else if else if else if (sh (sh.classList.contains (sh.classList.contains('sh.classList.contains('sh('sh-medium'))-medium'))-medium')) {
      {
      {
      title.text title.text title.textContent =Content =Content = t t. t..possibleIPpossibleIPpossibleIPsTitle;
      if (sub)sTitle;
      if (sub)sTitle;
      if (sub) sub.text sub.text sub.textContent =Content = t.Content = t.possibleIPsSub t.possibleIPsSubpossibleIPsSub;
    }
 ;
    }
 ;
    }
  });

  });

  });

  q('. q('.stale q('.stalestale-label').-label').-label').forEach(functionforEach(functionforEach(function(el){(el){ el.text(el){ el.text el.textContent =Content = t.stContent = t.staleLabelaleLabel t.staleLabel;;; });
  q });
  q });
  q('.st('.st('.stale-hale-hint').forEach(functionale-hint').forEach(functionint').(el){(el){forEach(function(el){ el.text el.textContent = el.textContent = t.stContent = t.staleHint; t.staleHint;aleHint; });
  q });
  q });
  q('.st('.st('.stale-timeale-time').forEachale-time').forEach(function(el){
   ').forEach(function(el){
   (function(el){
    var strong var strong = el var strong = el = el.querySelector('.querySelector('.querySelector('strong');
    ifstrong');
    ifstrong');
    if (strong (strong (strong))) {
      var {
      var {
      var tv = tv = tv = strong.text strong.text strong.textContent;
      while (elContent;
      while (elContent;
      while (el.firstChild.firstChild.firstChild) el) el) el.removeChild(el.first.removeChild(el.first.removeChild(el.firstChildChild);
      elChild);
      el);
      el.appendChild(document.appendChild(document.appendChild(document.createText.createText.createTextNode(tNode(t.lastRecord2 +Node(t.lastRecord2 +.lastRecord2 + ' '));
      ' '));
      ' '));
      var ns2 = var ns var ns2 = document.createElement2 = document.createElement document.createElement('strong('strong('strong');
     ');
     ');
      ns2.textContent ns2.textContent = tv ns2.textContent = tv;
      = tv;
     ;
      el.appendChild el.appendChild el.appendChild(ns(ns(ns2);
   2);
    }
 2);
    }
  }
  });

  q });

  q });

  q('.ff('.ff('.ff-label').-label').-label').forEach(function(elforEach(function(el){
    varforEach(function(el){
    var){
    var version = el.textContent.indexOf('MAX version = el.textContent.indexOf version = el.textContent.indexOf('MAX') !== -1('MAX') !==') !== -1 -1 ? 'Free Fire ? 'Free Fire MAX' ? 'Free Fire MAX' MAX' : ' : ' : 'FreeFree FireFree Fire Fire';
    el.text';
    el.textContent =';
    el.textContent =Content = version + version + version + ' — ' — ' — ' + t. ' + t. ' + t.ffffLabel;
  });
 ffLabel;
  });
  var ffLabel;
  });
  var ff var ffTags =Tags = q('.Tags = q('.ff-t q('.ff-tagagff-tag');
 ');
  [t.');
  [t. [t.ffLastffLastffLastOpen,Open,Open, t.ffFirst t.ffFirst t.ffFirstOpen].Open].Open].forEach(functionforEach(functionforEach(function(v,i){
   (v,i){
   (v,i){
    if ( if ( if (ffTags[i])ffTagsffTags[i]) ffTags ffTags[i]) ffTags[i].[i].[i].textContenttextContenttextContent = v = v = v;
  });
 ;
  });
 ;
  });
  q('. q('.ff-s q('.ff-sff-sessions').forEach(functionessions').forEach(functionessions').(el){
    varforEach(function(el(el){
    var num =){
    var num = el.text num = el.textContent.match el.textContent.match(/\Content.match(/\d+/(/\d+/);
   d+/);
    if ();
    if (num) if (num)num) el.text el.text el.textContent = numContent = numContent = num[0] + '[0] + '[0] + ' ' + t ' + ' +.ffS t.ffS t.ffSessionsessions;
 essions;
  });
  q;
  });
  q('.ff });
  q('.ff-hint-hint('.ff-hint').forEach').forEach(function(el').forEach(function(el){ el(function(el){ el.textContent){ el.textContent = t = t.textContent = t.ff.ff.ffHint;Hint; });

  });

  q('. q('.appstoreappstore-label').Hint; });

  q('.appstore-label').forEach(function-label').forEach(function(el){forEach(function(el){ el.text(el){ el.text el.textContent =Content =Content = t.appStoreLabel; });
  q t.appStoreLabel; });
  q t.appStoreLabel; });
  q('.app('.app('.appstore-hint').store-hintstore-hint').forEach(function').forEach(functionforEach(function(el){ el.text(el){ el.textContent =(el){ el.textContent =Content = t.appStoreHint t.appStoreHint; t.appStoreHint;; });

  q });

  q });

  q('.ok').forEach('.ok').forEach('.ok').forEach(function(el(function(el(function(el){ el){ el.textContent.textContent = t){ el.textContent = t = t.noVPS;.noVPS;.noVPS; });

  });

  var labelMap = });

  var label var labelMap = {
   Map = {
    'IP {
    'IP': '': ' 'IP': 'labelIP',
   labelIP',
    'PalabelIP',
    'Pa 'País': 'labelís': 'ís': 'labelCountry',labelCountry',Country', 'Country 'Country': ' 'Country': '': 'labelCountry', 'labelCountrylabelCountry', 'País', 'País': 'País': '': 'labelCountrylabelCountrylabelCountry',
    'Pro',
   ',
    'Provedor 'Provedor': 'vedor': '': 'labelProviderlabelProviderlabelProvider', 'Provider': 'labelProvider',', 'Provider': 'labelProvider',', 'Provider': 'labelProvider', 'Pro 'Pro 'Proveedorveedorveedor': '': 'labelProvider': 'labelProvider',
   labelProvider',
    'Org',
    'Org 'Org': '': '': 'labelOrglabelOrg',
   labelOrg',
    'r',
    'r 'rDNS':DNS':DNS': 'label 'label 'labelRDNSRDNS',
   RDNS',
    'HTTP',
    'HTTP 'HTTP': '': '': 'labelHTTPlabelHTTPlabelHTTP',
   ',
   ',
    'Mot 'Mot 'Motivo':ivo':ivo': 'label 'label 'labelReason', 'ReasonReason',Reason', 'Reason': ' 'Reason': '': 'labelReasonlabelReasonlabelReason', '', 'Motivo', 'MotivoMotivo': '': 'labelReason': 'labelReasonlabelReason',
    'Us',
    'Us',
    'Usado porado porado por': 'labelUsed': 'labelUsed': 'By',By',labelUsedBy', 'Used 'Used by': 'Used by': by': 'label 'label 'labelUsedByUsedByUsedBy', '', '', 'UsadoUsadoUsado por': por': por': 'label 'label 'labelUsedByUsedByUsedBy',
   ',
   ',
    'App': ' 'App 'App': 'labelApp': 'labelApplabelApp',
   ',
   ',
    'Che 'Che 'Cheat': 'labelat':at': 'labelCheat 'labelCheatCheat',
   ',
   ',
    'Ind 'Ind 'Indicadoricadoricador': '': 'labelIndicator': 'labelIndicator', '', 'labelIndicator', 'Indicator':Indicator':Indicator': 'label 'label 'labelIndicatorIndicatorIndicator',
  };

  q',
  };

  q',
  };

  q('.card').forEach('.card').forEach('.card').forEach(function(c(function(c(function(card){
    varard){
ard){
    var badge = card.querySelector    var badge = card.querySelector badge = card.querySelector('.bad('.bad('.badgegege');
    var conns');
    var connsEl =');
    var connsEl =El = card.querySelector card.querySelector card.querySelector('.conn('.conn('.conns');
    ifs');
   s');
    if (conn if ( (connsElconnsElsEl))) {
      var num = {
      var {
      var num = conns num = conns connsEl.textEl.textEl.textContent.matchContent.matchContent.match(/\(/\(/\d+/d+/);
     d+/);
     );
      if (num) if (num) if (num) conns conns connsEl.textEl.textEl.textContent = numContent =Content = num[0] num[0][0] + ' + ' ' + t. + ' ' + t. ' +connsconns t.;
   ;
   conns;
    }
    }
    if ( }
    if ( if (badgebadgebadge))) {
      if (bad {
      if (badge {
      if (badge.classListge.classList.classList.contains('.contains('.contains('critical'))critical'))critical')) {
        badge.innerHTML {
        badge.innerHTML {
        badge.innerHTML = badge = badge = badge.getAttribute.getAttribute('data-badge.get('data-badge-type')Attribute('data-badge-type')-type') === 'known-che === ' === 'known-cheat'at'known-cheat' ? t ? t.badgeKnownChe ? t.badge.badgeKnownCheat :at :KnownCheat : t.b t.badgeCritical t.badgeCriticaladgeCritical;
      }
     ;
     ;
      }
      else if else if }
      (bad (bad else if (badge.classListge.classList.contains('tldge.classList.contains('.contains('tld-flagtld-flag-flag')) badge')) badge.innerHTML =')) badge.innerHTML.innerHTML = t.b t.badgeDomain = t.badgeDomainadgeDomainSuspectSuspectSuspect;
      else if;
     ;
      else if (bad else if (badge.classList (badge.classListge.classList.contains('high')) badge.textContent = t.badgeSuspect;
      else if (.contains('high')) badge.textContent = t.badgeSuspect;
      else if (.contains('high')) badge.textContent = t.badgeSuspect;
      else if (badge.classList.containsbadgebadge('medium.classList.contains.classList.contains('medium('medium')) badge')) badge')) badge.textContent.textContent = t.textContent = t = t.b.badge.badgeadgePossiblePossiblePossible;
   ;
    }
    card.querySelectorAll;
    }
    card.querySelectorAll }
    card('.label('.label.querySelectorAll('.label').forEach').forEach').forEach(function(lbl(function(lbl(function(lbl){
      var){
      var sub =){
      var sub = sub = lbl.querySelector lbl.querySelector lbl.querySelector('.sub('.sub('.sub');
     ');
     ');
      if if ( if (sub) (sub)sub) {
        {
        {
        var fn var fn var fn = lbl = lbl.childNodes = lbl.childNodes.childNodes[0[0[0];
       ];
        if (];
        if ( if (fn && fn.nodefn && fn.nodefn && fn.nodeType ===Type ===Type === 3) fn 3) fn.textContent 3) fn.textContent.textContent = t = t = t.labelSuspectIP.labelSuspectIPs +.labelSuspectIPs +s + ' ' ';
        var ' ';
        var ';
        var nums = nums = nums = sub.textContent.match sub.textContent.match(/\ sub.text(/\d+/Content.match(/\d+/gd+/g);
        ifg);
        if (nums && nums);
        if (nums && nums (nums &&.length >=.length >= nums.length >= 2 2) sub) sub.textContent = nums 2) sub.textContent[0 = nums[0] +.textContent = nums[0] +] + ' ' ' ' + t ' ' + t + t.of +.of + ' ' + nums.of + ' ' + nums ' ' + nums[1[1[1] +] +] + ' ' ' ' ' ' + t + t + t.dom.domains.domainsains;
        return;
        return;
        return;
     ;
     ;
      }
      }
      }
      var txt = lbl var txt = lbl var txt = lbl.textContent.textContent.textContent.trim();
      var.trim();
      var.trim();
      var key = key = key = labelMap[txt labelMap[txt];
      labelMap[txt];
     ];
      if ( if ( if (key && t[keykey && t[keykey && t[key]) lbl]) lbl]) lbl.textContent.textContent = t.textContent = t = t[key];
   [key];
   [key];
    });
    card });
    card });
    card.querySelectorAll.querySelectorAll.querySelectorAll('.none('.none('.none').forEach').forEach').forEach(function(el(function(el(function(el){ el.textContent = t){ el.textContent = t){ el.textContent = t.none.noneDetected;.noneDetected;Detected; });
    card });
    card });
    card.querySelectorAll.querySelectorAll('.val.querySelectorAll('.val('.val').forEach(function(el').forEach(function(el){
     ').forEach(function(el){
     ){
      if ( if (el.text if (el.textel.textContent.indexOf('Online') !==Content.indexOf('Online') !==Content.indexOf('Online -1 -1') !== -1 || el || el || el.textContent.textContent.textContent.indexOf('.indexOf('Off.indexOf('Offlineline')Offline') !== -1 !== -1') !== -1 || el || el || el.textContent.textContent.textContent.indexOf('.indexOf('.indexOf('línealínealínea') !==') !==') !== -1 || el -1 -1 || el.textContent.textContent || el.textContent.indexOf('.indexOf('.indexOf('conexconexconexión')ión') !== -ión') !== -1) !== -1)1) {
        {
        {
        el.innerHTML el.innerHTML = el.innerHTML el.innerHTML = el = el.innerHTML
          ..innerHTML
          .replace(/
          .replace(/replace(/●\●\s*(●\s*(s*(En línea|OnlineEn línea|OnlineEn línea|Online)/g)/g, t)/g, t.online, t.online.online)
          .replace)
          .replace(/●)
          .replace(/●\s(/●\s\s*(Sin*(Sin*(Sin conexión conexión conexión[^[^[^<]*<]*<]*|Off|Off|Offline[^lineline[^<]*)/<]*)/g,[^<]*)/g, t.g, t.offline t.offline);
     offline);
      }
   );
      }
    }
    });
  });
  });
  });
 });
}
window.set });
}
window.setLang =}
window.setLang = setLangLang = setLang;

(function setLang;

(function();

(function() {
  function() {
  function bindLang {
  function bindLang bindLangButtons()Buttons()Buttons() {
    var langs {
    var langs = [' {
    var langs = [' = ['pt',pt',pt', 'en 'en', ' 'en', 'es', 'es'];
    langses'];
    langs'];
    langs.forEach(function.forEach(function.forEach(function(l)(l) {
     (l) {
      {
      var btn = document var btn = document var btn = document.getElementById('.getElementById('btn-'.getElementById('btn-'btn-' + l + l + l);
      if ();
      if (btn));
      if (btn)btn) {
        {
        {
        btn.addEventListener btn.addEventListener btn.addEventListener('click('click', function(e)('click', function(e) {
         ', function(e) {
          {
          e.preventDefault e.preventDefault e.preventDefault();
         ();
          setLang();
          setLang(l setLang(l(l);
        });
     );
        });
     );
        });
      }
    }
    }
    });
  }

  function tryBind });
  }

  function tryBind });
  }

  function tryBind(attempt(attempt(attempts)s)s) {
    {
    {
    var btn = document var btn = document var btn.getElementById('.getElementById = document('.getElementById('btn-ptbtn-ptbtn-pt');
    if');
    if');
    if (btn (btn (btn) {
      bind) {
      bind) {
     LangButtonsLangButtons bindLangButtons();
   ();
   ();
    } else if } else if ( } else (attempts if (attemptattempts > s >  > 0)0)0) {
      setTimeout {
      {
      setTimeout(function(function() { tryBind setTimeout(function() { tryBind() { tryBind(attempt(attempt(attempts - 1s - 1); },s - 1); }, 100);
   ); }, 100);
    100);
    }
  }
  }
  }

  if ( }

  if (document. }

  if (document.document.readyState === 'readyState === 'readyState === 'loading')loading')loading') {
    {
    document.addEventListener('DOM {
    document.addEventListener('DOM document.addEventListener('DOMContentLoadedContentLoadedContentLoaded', function() {', function() {', function() { tryBind tryBind(10); tryBind(10);(10); });
  } else });
  } });
  } {
    try else elseBind( {
    tryBind {
    try10(10Bind();
 );
 10);
  }
})();
<\/script }
}) }
})>();
<\/script();
<\/script>`;
}

async>`;
}

async function show`;
}

async function show function showResult(Result(Result(html)html) {
  let whtml) {
  {
  let wv = let wv = new WebViewv = new WebView new WebView()
  await()
  await()
  await wv wv.loadHTML(html wv.loadHTML(html.loadHTML(html, "http://, "http://, "http://localhost")
  let langScript = `localhost")
  let langScript = `var TRANlocalhost")
  let langScript = `var TRANvar TRANSLATIONSSLATIONS =SLATIONS = = {
  pt {
  pt {
  pt:: {
    eyebrow: ": {
    eyebrow: " {
    eyebrow: "Scanner iOSScanner iOSScanner iOS",
   ",
    credits:",
    credits: credits: "por Keller · "por Keller · Samir "por Keller · Samir · Kat Samir · Kat · Katiauiau",
    fileLabel:iau",
    file",
    fileLabel: "ArquivoLabel: "Arquivo "Arquivo::",
",
    start:",
    start    start: ": "Início",
   : "Início",
   Início",
 lastRecord lastRecord: "    lastRecord: ": "Último registroÚltÚltimo registro",
    uniqueDom",
    uniqueDomimo registro",
    uniqueDomains:ains:ains: "Dom "Dom "Domínios únicosíniosínios únicos únicos",
    totalCon",
    totalConns:",
    totalConns: "Totalns: "Total conexões "Total conexões",
    conexões",
    monitoredFor",
    monitoredFor: " monitoredFor: "MonitoradoMonitorado: "Monitorado há há há",
    critical",
    critical",
    criticalLabel: "CrLabel:Label: "Crítico "Críticoítico",
   ",
   ",
    suspectLabel: " suspectLabel suspectLabel: "Suspe: "SuspeitoSuspeito",
    possibleito",
    possible",
    possibleLabel:Label:Label: "Poss "Poss "Possívelível",
    appível",
    appProxyTitle",
    appProxyTitleProxyTitle: ": "Apps Proxy: "Apps Proxy / Cheat DetectApps Proxy / Cheat Detect / Cheat Detectadosados",
    appados",
    app",
    appProxySubProxySub: "ProxySub: "AplicAplic: "Aplicativos conhecidos deativos conhecidos deativos conhecidos de interceptação interceptação interceptação de tr de tr de tráfegoáfego",
    suspectáfego",
    suspectIPs",
    suspectIPsIPsTitle:Title: "IPTitle: "IPs "IPs Suss Suspeitos Suspeitospeitos",
   ",
    suspectIP suspectIPsSub",
    suspectIPsSub: "VsSub: "VPS: "VPS / HostPS / Hosting / / Hosting / Proxy confirming / Proxy confirm Proxy confirmadosados",
    possibleIPsados",
    possible",
    possibleIPsTitle:Title:IPs "IP "IPTitle: "IPs Posss Possíveis",
    possibles Possíveis",
    possibleíveis",
    possibleIPsIPsIPsSub:Sub: "InfSub: "Infraestraestrutura cloud /rutura cloud / "Infraestrutura cloud / datac datac datacenterenter",
    labelenter",
    label",
    labelIP:IP:IP: "IP "IP "IP",
   ",
    label",
    labelCountryCountry: " labelCountry: ": "PaísPaísPaís",
    labelProvider",
    labelProvider",
    label: "Pro: "Provider: "ProvedvedProvedoror",
    labelor",
    label",
    labelOrg: "OrgOrg: "OrgOrg: "Org",
   ",
    labelRDNS:",
    labelRDNS: labelRDNS: "r "r "rDNSDNS",
    labelDNS",
    label",
    labelHTTP:HTTP: "HTTP",
   HTTP: "HTTP "HTTP labelReason",
   ",
    labelReason: " labelReason: ": "MotivoMotivo",
   Motivo",
    labelUsed labelUsedBy:",
    labelUsedBy:By: "Usado "Usado por",
    "Usado por por",
    labelApp",
    labelApp: " labelApp: "AppApp: "",
    labelApp",
    label",
    labelSuspectSuspectSuspectIPsIPsIPs: ": ": "IPsIPs suspeIPs suspeitos suspeitos",
    noneitos",
    none",
    noneDetectedDetected: "Detected: ": "Nenhum IPNenhum IPNenhum IP suspeito detect suspeito detect suspeito detectadoadoado",
    no",
    no",
    noVPSVPS: "✓ NVPS: "✓ N: "✓ Nenhumenhum IP Venhum IP V IP VPS /PS / HostPS / Hosting Hostinging / Proxy detectado / Proxy detectado.",
    / Proxy detectado.",
   .",
    staleLabel staleLabel staleLabel: "Arqu: "Arquivo poss: "Arquivo possivo possivelmenteivelmente antigoivelmente antigo antigo",
",
   ",
       staleHint: " staleHint: " staleHint: "SuspeSuspeita: arquivoSuspeita: geradoita: arquivo arquivo fora do gerado gerado fora do período da fora do período da período da partida partida para es partida para es para esconderconder atividadeconder atividade atividade.",
    ff.",
    ffLabel:.",
    ffLabel: "Sessões "SessõesLabel: "Sessões no período no período",
    no período",
    ffLast ffLast",
    ffLastOpen: "ÚOpen:ltima "ÚltimaOpen: "Última abertura abertura abertura",
   ",
   ",
    ffFirst ffFirst ffFirstOpen:Open: "PrimeOpen: "Prime "Primeira aira aira aberturabertura",
    ffbertura",
    ffSessions",
    ffSessions: "Sessions: "inicial: "inicializaçõesinicializaçõesizações registradas no período registradas no período",
    registradas no período",
    ffHint ffHint",
    ffHint: ": ": "Se aSe a última abertura foiSe a última a última abertura foi após a após abertura foi após a partida partida → apl partida → apl → aplique oique o W.Oique o W.O W.O!",
    app!",
    app!",
    appStoreLabelStoreLabel: "StoreLabel: ": "App StoreApp Store abertaApp Store aberta aberta",
    appStore",
    appStore",
    appStoreHint:Hint: "SeHint: "Se "Se foi após a partida → foi após a partida → foi após a partida → aplique aplique o W aplique o W o W.O!",
   .O!",
   .O!",
    uptime uptime uptimeLess20: "Less20: "Less20: "MENOSMENOSMENOS DE  DE 20MIN — Rel DE 20MIN — Rel20MIN — Relatório podeatório podeatório pode não cob não cobrir a part não cobrir arir a partida inteiraida inteira! partida inteira!!",
    badge",
    badgeCritical:",
    badgeCritical:Critical: "⚠ CRÍ "⚠ "⚠ CRÍTICOTICO CRÍTICO — APP — APP — APP PROXY PROXY/CHE PROXY/CHEAT/CHEAT",
    badge",
    badgeSuspectAT",
    badgeSuspectSuspect: "SUSPEITO",
    badgePossible: ": "SUSPEITO",
    badgePossible: "POSS: "SUSPEITO",
    badgePossible: "POSSPOSSÍVEL",
   ÍVELÍVEL badgeDomain",
    badgeDomain",
   SuspectSuspect badgeDomainSuspect: ": ": "⚠ DOMÍN⚠ DOM⚠ DOMIO SUSÍNIO SUSÍNPEITOPEITOIO SUS",
   ",
    of:PEITO",
    of: of: "de",
    "de "de",
    online: online:",
    "● "● online: Online Online "● Online",
    offline: "",
    offline: "",
    offline● Off● Off: "line /line /● Offline / Sem resposta Sem resposta Sem resposta",
   ",
    last",
    last lastRecordRecord2:Record2:2: "Ú "Ú "Últimoltimoltimo registro registro: registro::",
   ",
    conns",
    conns conns: ": ": "conexconexconexões",
    domainsõesões",
    domains: "",
    domains: ": "domíndomíniosdomíniosios",
    labelCheat",
    label",
    labelCheatCheat: ": ": "CheatCheatCheat",
    labelIndicator",
    labelIndicator",
    labelIndicator: "Indicador: "Indicador: "Indicador",
    indicatorDomain:",
    indicator",
    indicatorDomain: "Dom "DomDomain:ínio detectínio detectado no "Domínio detectado noado no relatório relatório de rede relatório de rede de rede",
    indicatorIP",
    indicatorIP",
    indicatorIP: ": ": "IP detectIP detectIP detectado no relatórioado no relatórioado no relatório de rede de rede de rede",
   ",
   ",
    iosVersion iosVersion iosVersionLabel:Label:Label: "Versão iOS "Vers "Versão iOS",
   ão iOS",
   ",
    rootsCard rootsCardLabel: rootsCardLabel:Label: "⚠ Certific "⚠ "⚠ Certificados raados ra Certificados raiz",
    rootsiz",
    rootsiz",
    rootsLabel: "CertLabel:Label: "Cert "Certificado Raiz Susificado Raiz Susificado Raiz Suspeitopeitopeito",
   ",
   ",
    rootsDetail rootsDetail1 rootsDetail1:1: "cert: "cert "certificado raificado raiz instalificado raiz instaliz instalado",
    rootsado",
    rootsadoDetailNDetailN",
    rootsDetail: ": "N: "certificcertificcertificados raiz instalados raados raadosiz instaladosiz instal",
    roots",
    rootsados",
    rootsHint:Hint:Hint: "Cert "Cert "Certificados raizificados raizificados permitem permitem raiz permitem interceptar interceptar interceptar trá trá tráfegofegofego HTTPS — HTTPS — padrão HTTPS — padrão de proxy padrão de proxy cheat tipo de proxy cheat tipo mitm cheat tipo mitm mitmproxy",
    ipsproxy",
    ipsTitleproxy",
    ipsTitle::Title: "Apps "Apps "Apps Suspe Suspe Suspeitos Institos Instaladositos Instalados",
   alados",
    ipsSub",
    ipsSub ipsSub: ": ": "DetectDetectDetectados noados no histórico deados no histórico de uso do histórico de uso do uso do dispositivo dispositivo",
    ips dispositivo",
    ips",
    ipsHint:Hint:Hint: "⚠ Apps encont "⚠ Apps encontrados nos "⚠ Apps encontrados nosrados nos dados de dados de dados de análise do análise do análise do iPhone — iPhone — iPhone — indicam presença indicam presença indicam presença de ferramentas de ferramentas de ferramentas de cheat de cheat de cheat/jail/jail/jailbreak/probreak/proxybreak/proxyxy",
    ips",
    ips",
    ipsLaunchedLaunchedLaunched: ": ": "▶ Aber▶ Aberto▶ Aberto",
    ipsto",
    ips",
    ipsInstalledInstalledInstalled: "⬇: "⬇: "⬇ Instal Instalado Instalado",
    badgeado",
    badge",
    badgeKnownCheat:KnownCheat:KnownCheat: "⚠ "⚠ CRÍ "⚠ CRÍ CRÍTICOTICO — CHEAT CONTICO — CHEAT CON — CHEAT CONFIRMFIRMADOFIRMADOADO",
    reason",
    reasonTLD: function",
    reasonTLD: functionTLD: function(tld(tld){ return(tld){ return "TL "TLD sus){ return "TLD susD suspeitopeito detectadopeito detectado: \\ detectado: \\"" +: \\"" +"" + tld tld tld + " + "\\" + "\\"\\" — padrão comum — padrão comum — padrão comum em che em cheats/proxies em cheats/proxiesats/proxies"; },
    reason"; },
    reasonWord:"; },
    reasonWord: function(wordWord: function(word function(word){ return){ return){ return "Pal "Pal "Palavraavraavra suspe suspe suspeita noita noita no domínio: \\ domínio domínio: \\"" +"" +: \\"" + word + word + word + "\\""; "\\""; },
    "\\""; },
    reasonV },
    reasonV reasonVPS:PS: function(PS: function(isp){ function(isp){isp){ return " return "VPS return "VPS/HOSTVPS/HOSTING —/HOSTING —ING — ISP: ISP: ISP: " + is " + is " + ispp; },
    reasonp; },
    reason; },
    reasonProxy:Proxy:Proxy: "PRO "PRO "PROXY / VPN detectXY /XY / VPN detectado VPN detectadoado",
    reason",
    reason",
    reasonCF:CF:CF: function(asn){ function(as function(asn){ return "n){ return " return "CloudflareCloudflareCloudflare acess acess acessado via IPado viaado via dire IP dire IP direto — padrãoto — padrãoto — padrão de proxy de proxy de proxy cheat (" cheat (" cheat (" + as + asn + + asn + ")";n + ")"; ")"; },
    },
    },
    reasonASN: reasonAS reasonASN: function(asN: function(as function(asnn,desc){ return "ASn,desc){ return "ASN de cheat proxy conhec,N de cheat proxy conhecido:ido:desc){ return "ASN de cheat proxy conhec " + " +ido: " + asn asn + " asn + " + " — " + desc — " + desc — " + desc;; },
    reasonRDNS; },
    reasonRDNS: function },
    reasonRDNS: function: function(rdns){(rd(rdns){ return return "ns){ "rDNS return "rDNS de serv de servidor:rDNS de servidor:idor: " + rdns; " + rdns " + rdns; },
; },
    reason    reasonHostinger },
    reasonHostinger: function: functionHostinger: function(rd(rd(rdns){ns){ns){ return "Hostinger return "Hostinger return "Hostinger VPS VPS VPS (pad (pad (padraoraorao cheat proxy BR): cheat proxy BR): cheat proxy BR): " + " + " + rdns rdns rdns;;; },
    reason },
    reasonNoRDNS: "Sem },
    reasonNoRDNS: "SemNoRDNS: rDNS rDNS "Sem rDNS (PT (PT (PTR)R)R) — tip — tip — tipico deico deico de VPS usado como VPS usado como VPS proxy proxy usado como",
    reason",
    reason proxy",
    reasonOrg:Org:Org: function(kw){ function(kw){ function(k return "w){ return " return "Org/Org/Org/ISP associISP associISP associado aado aado a hosped hospedagem/cheatagem/cheat hospedagem/cheat proxy: proxy: proxy: " + " + " + kw; kw; },
  kw; },
  },
  },
  },
  },
  en: en: {
    {
    en: {
    eyebrow: eyebrow: "iOS eyebrow: "iOS Scanner "iOS Scanner",
    credits Scanner",
    credits: "",
    credits: ": "by Kellerby Keller · Samby Keller · Samir ·ir · · Samir · Katiau Katiau Katiau",
   ",
   ",
    fileLabel fileLabel: " fileLabel: "File:: "File:",
   ",
   File:",
    start: start: "Start start: "Start "Start",
    lastRecord",
    last",
   : "Last record",
   Record: "Last record",
    lastRecord: "Last record",
    uniqueDomains: uniqueDom uniqueDom "Uniqueains: "Uniqueains: domains "Unique domains domains",
    total",
    totalConns",
    totalConns: "Conns: "Total connections: "Total connections",
   ",
    monitoredForTotal connections",
    monitoredFor monitoredFor: ": "Monitored: "Monitored forMonitored for",
    critical for",
    criticalLabel:",
    criticalLabel: "CriticalLabel: "Critical",
    "Critical",
    suspectLabel suspectLabel",
    suspectLabel: ": "S: "SuspuspiciousSuspicious",
    possibleLabel:",
    possibleLabel:icious",
    possibleLabel: "Possible "Possible",
    "Possible",
    appProxy",
    appProxyTitle: appProxy "ProxyTitle: "Proxy / Che / CheTitle: "Proxy / Cheat Appsat Apps Detectedat Apps Detected",
    appProxy Detected",
   ",
    appProxySub: appProxySub: "Known "Known traffic interception traffic interception applications applicationsSub: "Known traffic interception applications",
    suspectIPs",
    suspectIPsTitle:",
    suspectIPsTitle: "STitle: "Suspicious "Suspicious IPsuspicious IPs",
    IPs",
    suspectIP suspectIPsSub",
    suspectIPsSubsSub: ": ": "VPSVPS / HostVPS / Host / Hosting / Confirmeding / Confirmed Proxying / Confirmed Proxy",
    possible Proxy",
    possibleIPs",
    possibleIPsTitle:Title:IPs "Possible "PossibleTitle: IPs",
    IPs "Possible IPs possibleIP",
   ",
    possibleIP possibleIPsSubsSubsSub: ": "Cloud /: "Cloud /Cloud / datacenter infrastructure datacenter infrastructure datacenter infrastructure",
   ",
    labelIP",
    labelIP labelIP: ": "IP: "IPIP",
    labelCountry:",
    labelCountry:",
    labelCountry: "Country "Country "Country",
   ",
   ",
    labelProvider labelProvider: " labelProvider: "ProviderProvider",
    label: "Provider",
    label",
    labelOrg:Org:Org: "Org "Org "Org",
    labelRDNS:",
    labelRDNS:",
    labelRD "r "rNS: "rDNSDNSDNS",
    label",
    label",
    labelHTTP: "HTTPHTTP: "HTTPHTTP:",
   ",
    "HTTP",
 labelReason labelReason    labelReason: ": ": "ReasonReasonReason",
    labelUsedBy",
    labelUsedBy",
    label: "UsedBy: "Used by: "Used byUsed by",
   ",
   ",
    labelApp: " labelApp labelApp: "App: "App",
    label",
    labelApp",
    labelSuspectSuspectSuspectIPs: "IPsIPs: "Susp: "Suspicious IPSuspicious IPsicious IPss",
    noneDetected",
    none",
    none: "DetectedDetected: "No suspicious: "No suspicious IPs IPsNo suspicious IPs detected detected detected",
    noVPS",
    noVPS",
    noVPS: ": ": "✓ No✓ No VPS✓ No V VPS / Hosting / / Hosting /PS / Host Proxy IPs detecteding / Proxy IPs detected.",
    Proxy IPs detected.",
    staleLabel: ".",
    staleLabel: " staleLabel: "File possiblyFile possiblyFile possibly outdated outdated",
    stale outdated",
    staleHint:",
    staleHint: "SHint: "Suspicion "Suspicion: fileuspicion: file: file generated outside generated outside generated outside the match period to the match the match period to hide activity period to hide activity.",
    hide activity.",
    ffLabel ffLabel.",
    ffLabel: "Sessions: ": " in periodSessions in period",
   Sessions in period",
    ffLast",
    ffLastOpen:Open: "Last opened ffLastOpen: "Last opened "Last opened",
    ff",
    ff",
    ffFirstOpenFirstOpenFirstOpen: ": ": "First opened",
   First opened",
   First opened ffS ffS",
    ffSessions:essions:essions: "startups recorded "start "startups recorded in the periodups recorded in the in the",
    ff period period",
    ffHint:",
    ffHint: "IfHint: "If last opened "If last opened last opened after the match → after the after the match → apply W match → apply W apply W.O!",
    appStore.O!",
    appStore.O!",
    appStoreLabel:Label: "AppLabel: "App "App Store opened Store opened Store opened",
   ",
   ",
    appStore appStore appStoreHint: "If it was after the match →Hint: "If it was after the match →Hint: "If it was after the match → apply W apply W apply W.O!.O!.O!",
   ",
   ",
    uptime uptimeLess20: " uptimeLess20: "Less20: "LESS THLESS THLESS THAN AN 20MINAN 20MIN20MIN — Report may not — Report may not — Report may not cover the cover the cover the entire match! entire match!",
    badge entire match!",
    badge",
    badgeCritical:Critical:Critical: "⚠ "⚠ "⚠ CRIT CRIT CRITICAL —ICAL — PROXYICAL — PROXY/CHE/CHE PROXY/CHEAT APPAT APPAT APP",
   ",
   ",
    badgeSus badgeSuspect: badgeSuspect: "S "Spect: "SUSPUSPUSPICIOUSICIOUSICIOUS",
   ",
    badgePossible",
    badgePossible: " badgePossible: "POSSPOSS: "POSSIBLEIBLEIBLE",
    badge",
    badge",
    badgeDomainSusDomainSusDomainSuspect: "⚠pect: "⚠ SUSPpect: "⚠ SUSPICIOUSICIOUS SUSPICIOUS DOMAIN DOMAIN DOMAIN",
   ",
    of:",
    of: "of of: "of",
   ",
    "of online: online:",
    online: "● "● "● Online Online Online",
    offline: "",
    offline: "",
    offline● Off● Off: "●line /line / Offline / No response",
    No response",
    No response lastRecord",
    lastRecord2: lastRecord2:2: "Last "Last "Last record record:",
 record::    conns",
   ",
   : " conns connsconnections",
    domains: "connections",
    domains: "connections: ": "",
    domains: "domains",
   domains",
   domains",
    labelCheat: labelChe labelCheat: "Che "Cheat: "Cheatat",
    labelat",
    label",
    labelIndicator: "IndicatorIndicator: "Indicator",
   Indicator: "Indicator",
   ",
    indicatorDomain indicatorDomain indicatorDomain: ": ": "Domain detectedDomain detectedDomain detected in network report in network report",
    indicator in network report",
    indicatorIP:",
    indicatorIP: "IP "IPIP: detected in detected in "IP detected in network report network report network report",
    iosVersion",
    iosVersion",
    iosVersionLabel: "iOSLabel: "iOSLabel: Version",
    roots Version",
    roots "iOS Version",
    rootsCardLabel: "⚠ Root certificates",
    rootsLabelCardLabel: "CardLabel: "⚠ Root certificates",
    rootsLabel: "Suspicious Root Certificate: "Suspicious Root Certificate",
    rootsDetail⚠ Root certificates",
    rootsLabel: "Suspicious Root Certificate",
    rootsDetail1: "root",
    rootsDetail1: "root certificate installed1: "root certificate installed certificate installed",
   ",
   ",
    rootsDetailN: rootsDetailN: rootsDetailN: "root "root certificates installed",
    certificates installed",
    rootsHint: " rootsHint "root certificates installed",
    rootsHint: "Root certificatesRoot certificates: "Root certificates allow HTTPS allow HTTPS allow HTTPS traffic interception traffic interception traffic interception — common — common pattern in pattern in mitm mitmproxy-type — common pattern in mitmproxy-typeproxy-type cheat tools cheat tools",
    cheat tools",
   ",
    ipsTitle ipsTitle ipsTitle: ": "Susp: "SuspSuspicious Appsicious Appsicious Apps Installed Installed",
    Installed",
    ipsSub",
    ipsSub: "Detected ipsSub: "Detected: "Detected in device usage history in device usage history in device usage history",
   ",
    ipsHint",
    ipsHint: " ipsHint: ": "⚠ Apps found in⚠ Apps found in⚠ Apps found in iPhone analytics iPhone analytics iPhone analytics data — data — indicate presence of cheat data — indicate presence of cheat indicate presence of cheat/jail/jail/jailbreak/probreak/probreak/proxy toolsxy toolsxy tools",
   ",
   ",
    ipsLa ipsLa ipsLaunched:unched:unched: "▶ "▶ "▶ Opened",
    Opened Opened",
   ",
    ipsInstalled: ipsInstalled: ipsInstalled: " " "⬇ Inst⬇ Inst⬇ Installed",
    badgeKnownChealled",
    badgeKnownChealled",
    badgeKnownCheat:at:at: "⚠ "⚠ "⚠ CRIT CRITICAL CRITICAL — — CONFIRICAL — CONFIR CONFIRMED CHEMED CHEMED CHEATAT",
    reasonAT",
    reason",
    reasonTLD: functionTLDTLD: function(tld: function(tld){ return(tld){ return "S){ return "S "Suspicious TLDuspicious TLD detected:uspicious TLD detected: detected: \\"" \\"" \\"" + t + t + tld +ld +ld + "\\" — "\\" — common pattern "\\" — common pattern common pattern in che in che in cheats/proats/proats/proxiesxiesxies";";"; },
    reason },
    reasonWord: },
    reasonWord: function(wordWord: function(word){ return function(word){ return "S "S){ returnuspicioususpicious "S word in word in domainuspicious word in: \\"" domain: + word \\"" + " + word\\"" + "\\""; },
;    reason },
    reasonVPS: functionVPS(isp: function(isp){ return){ return domain: \\"" + word + "\\""; },
    reasonVPS: function(isp){ return " "V "VVPSPSPS/HOSTING/H/HOSTING — ISP: " + isp; },
    reasonProxy: "PROXY / VPNOSTING — ISP: " + isp; — ISP: " + isp; },
    reasonProxy detected",
 },
    reasonProxy: "PROXY / VPN detected: "PROXY / VPN detected    reasonCF:",
    reason",
    reason function(asCF:CF: function(asn){ function(asn){n){ return " return " return "Cloudflare accessed viaCloudflareCloudflare direct IP accessed via accessed via direct — cheat direct IP — cheat IP — cheat proxy pattern proxy pattern proxy pattern (" + asn (" + asn (" + asn + ")"; },
    reason + ")"; },
    reason + ")"; },
    reasonASNASNASN: function: function: function(asn(asn(asn,desc,desc,desc){ return){ return){ return "Known "Known "Known cheat proxy cheat proxy cheat proxy ASN: " ASN: " + as ASN: " + as + asn +n +n + " — " — " — " + " + desc " + desc; },
    desc; },
   ; },
    reasonRD reasonRD reasonRDNS:NS:NS: function( function( function(rdnsrdns){ return "Server rDNS){ return "Server rDNSrdns){ return "Server rDNS: ": ": " + rd + rdns; + rdns; },
    },
   ns; },
    reasonHost reasonHostinger:inger: reasonHostinger: function(rdns function(rdns){ function(rdns){ return "Host return "Host){ return "Hostinger Vinger Vinger VPS (PS (PS (known BR cheat proxy pattern):known BR cheat proxyknown BR pattern): cheat proxy pattern): " + " + " + rdns rdns; rdns;; },
    reason },
    reason },
    reasonNoRDNoRDNS: "No rDNSNoRDNS: "No rDNSNS: "No rDNS (PT (PT (PTR)R) —R) — typical — typical typical of V of V of VPS usedPS usedPS used as proxy as proxy as proxy",
   ",
   ",
    reason reasonOrg reasonOrgOrg: function(kw: function(kw){ return: function(kw){ return "Org "Org){ return/ISP/ISP associated "Org/ISP associated with with hosting/ associated with hosting/cheat hosting/cheat proxy:cheat proxy: " + " + proxy: kw; kw; },
  " + kw; },
  },
  },
  es: },
  es: {
    eyebrow: },
  es: {
    eyebrow: {
    eyebrow: "Scanner "Scanner "Scanner iOS iOS iOS",
    credits: "",
    credits",
    credits: "porpor Keller · Sam: "por Keller · Sam Keller · Samir · Katiauir ·ir ·",
    Katiau",
    Katiau fileLabel fileLabel",
    fileLabel: ": ": "ArchivoArchivoArchivo:::",
    start: "",
    start",
    startInicio: "Inicio: "",
   ",
   Inicio",
    lastRecord lastRecord lastRecord: ": ": "Último registro",
   Último registro",
   Último registro",
    uniqueDom uniqueDom uniqueDomains:ains:ains: "Dominios ú "Dominios "Dominnicos únicosios únicos",
    total",
    total",
    totalConns: "Conns: "Conns: "Total conexionesTotal conexionesTotal conexiones",
    monitored",
    monitored",
    monitoredFor:For:For: "Mon "Mon "Monitoreadoitoreado haceitoreado hace",
    critical",
    critical hace",
    criticalLabel:Label:Label: "Cr "Cr "Críticoíticoítico",
    suspectLabel",
    suspect",
    suspectLabelLabel: ": ": "SospechosoSospechosoSospechoso",
    possible",
    possibleLabel:",
    possibleLabel:Label: "Pos "Pos "Posibleibleible",
    app",
    app",
    appProxyTitleProxyTitle: ": "Apps ProxyApps ProxyProxyTitle: "Apps Proxy / Che / Cheat Detect / Cheat Detectadas",
    appProxySubadas",
    appat Detectadas",
    appProxySub: "ProxySub: ": "AplicAplicAplicaciones conocidas deaciones conocaciones conocidas de interceptaciónidas de interceptación de tr interceptación de tr de tráficoáficoáfico",
    suspectIPsTitle",
    suspectIPsTitle:",
    suspectIPsTitle: " "IPs: "IPsIPs Sospe Sospechos Sospechosaschosasas",
   ",
   ",
    suspectIP suspectIPsSub suspectIPsSub::sSub: "VPS / Hosting / Proxy confirmados",
    possibleIPsTitle: "IPs Posibles",
    possibleIPsSub: "Infraestructura cloud / datacenter",
    labelIP: "IP",
    labelCountry: "País",
    labelProvider: "Proveedor",
    labelOrg: " "VPS / Hosting / Proxy confirmados",
    possibleIPsTitle: "IPs Posibles",
    possibleIPsSub: "Infraestructura cloud / datacenter",
    labelIP: "IP",
    labelCountry: "País",
    labelProvider: "Proveedor",
    labelOrg "VPS / Hosting / Proxy confirmados",
    possibleIPsTitle: "IPs Posibles",
    possibleIPsSub: "Infraestructura cloud / datacenter",
    labelIP: "IP",
    labelCountry: "País",
    labelProvider: "Proveedor",
    labelOrg: "Org",
    label: "Org",
    labelOrg",
    labelRDNSRDNSRDNS: "rDNS: ": "rDNSrDNS",
   ",
    labelHTTP labelHTTP",
    labelHTTP: ": ": "HTTPHTTP",
    labelHTTP",
    label",
    labelReason:Reason: "MotReason: "Motivo "Motivoivo",
    label",
    label",
    labelUsedBy: "UsedBy: "UsedByUsadoUsado: "Usado por",
    labelApp: por por",
    label "App",
    labelApp: "AppApp:",
   ",
    "App labelSus labelSuspect",
    labelSuspectIPIPs:pectIPs: "IPs: "IPs soss sos "IPs sospechosas",
    noneDetected: "Ninguna IPpechosas",
    noneDetected: "Ninguna IP sospechosas",
    noneDetected: "Ninguna IP sospe sospechosa detectadapechosa detectadachosa detectada",
   ",
   ",
    noV noV noVPS:PS: "✓PS: "✓ "✓ Ninguna Ninguna Ninguna IP V IP V IP VPS /PS /PS / Hosting Hosting / Proxy Hosting / Proxy / Proxy detectada detectada detectada.",
   .",
   .",
    staleLabel staleLabel staleLabel: ": ": "ArchivoArchivoArchivo posiblemente posiblemente antiguo antiguo posiblemente antiguo",
   ",
   ",
    staleHint staleHint staleHint: ": ": "SosSospechaSospechapecha: arch: arch: archivo generivo generivo generado fueraado fueraado fuera del período del part del período del part del período del partido paraido paraido para ocult ocult ocultar actividadar actividadar actividad.",
   .",
   .",
    ffLabel: " ffLabel: "Ses ffLabel: "SesSesiones eniones eniones en el período el período el período",
    ffLast",
    ffLast",
    ffLastOpen: "ÚOpen: "ÚOpen: "Última aperturaltima aperturaltima apertura",
   ",
   ",
    ff ffFirst ffFirstFirstOpen:Open:Open: "Primera apert "Primera apertura "Primera aperturaura",
    ffSessions",
    ff",
    ffSessions:Sessions:: " "inicial "inicialinicializacionesizacionesizaciones registradas en registradas en el el período",
    ff período",
    ff registradas en el período",
    ffHint:Hint:Hint: "Si "Si "Si la última apertura la última apertura fue después fue después la última apertura fue después del part del part del partido → ¡aido → ¡aido → ¡aplica elplica elplica el W.O W.O!!",
    app",
    app W.O!",
    appStoreLabelStoreLabelStoreLabel: "App Store: "App Store abiert: "App Store abiert abiertaaa",
    app",
    app",
    appStoreHintStoreHintStoreHint: ": ": "Si fue después delSi fueSi fue partido después del después del partido → ¡ partido → ¡aplica → ¡aplica el W.O!aplica el W.O!",
    el W.O!",
    uptime uptime",
   Less20Less20 uptime: ": "MENOSLess20: "MENOSMENOS DE 20MIN — ¡ DE 20MIN — ¡ DE 20MIN — ¡El informeEl informe puede noEl informe puede no puede no cubrir toda la cubrir toda la cubrir toda la partida partida partida!!!",
    badge",
    badge",
    badgeCritical: "⚠Critical: "⚠ CRÍCritical: "⚠ CRÍ CRÍTICOTICOTICO — APP PROXY — APP PROXY — APP/CHE/CHE PROXY/CHEATATAT",
    badge",
    badge",
    badgeSuspect:Suspect:Suspect "SOSP "SOSP: "ECHOSOECHOSOSOSPECHOSO",
    badgePossible:",
    badge",
    badgePossible: "POSPossible: "POSIBLE "POSIBLEIBLE",
    badge",
    badge",
    badgeDomainSusDomainSusDomainSuspect: "⚠pect: "⚠ DOMINpect: "⚠ DOMIN DOMINIO SOSIO SOSIO SOSPECHPECHPECHOSO",
   OSOOSO of:",
   ",
    "de of: " of: "",
   de",
    online:de",
    online: online: "● "● "● En línea",
    En línea",
    En línea",
    offline: offline: offline: "● Sin conex "● Sin conex "● Sin conexión / Sin respuestaión / Sin respuesta",
   ión / Sin respuesta",
   ",
    lastRecord lastRecord lastRecord2:2:2: "Ú "Ú "Últimoltimo registro:ltimo registro: registro:",
   ",
",
    conns: " conns    connsconex: ": "ionesconexiones",
    domainsconexiones",
    domains",
    domains: ": ": "dominiosdominiosdominios",
   ",
   ",
    labelChe labelCheat: labelCheat: "Cheat: "Che "Cheatatat",
    label",
    labelIndicator: "Indicador",
    indicatorDomain: "Dominio detectado",
    labelIndicator: "Indicador",
    indicatorDomain: "Dominio detectadoIndicator: "Indicador",
    indicatorDomain: "Dominio detectado en el en el informe de en el informe de red informe de red",
    indicator",
    indicator red",
    indicatorIP:IP:IP: "IP "IP detectada "IP detectada en el detectada en el informe de informe de en el red red informe de red",
    ios",
    ios",
    iosVersionLabelVersionLabelVersionLabel: ": ": "VersiónVersiónVersión iOS iOS iOS",
    roots",
    rootsCardLabel",
    rootsCardLabel: "CardLabel: ": "⚠ Cert⚠ Cert⚠ Certificadosificadosificados raíz raíz raíz",
   ",
    rootsLabel",
    rootsLabel: " rootsLabel: "CertificadoCertificado: " Raíz RaízCertificado Sospe Sospe Raízchosochoso Sospechoso",
   ",
   ",
    rootsDetail rootsDetail1 rootsDetail1:1:: "cert "cert "certificado raificado raificado raíz instalíz instalíz instaladoadoado",
    rootsDetailN",
    roots",
    roots: "DetailN: "DetailN: "certificados racertificados racertificados raíz instalados",
    rootsíz instaladosíz instalados",
    roots",
    rootsHint:Hint: "LosHint: "Los certificados "Los certificados raíz certificados raíz raíz permiten permiten permiten interceptar interceptar interceptar tráfico HTTPS tráfico HTTPS tráfico HTTPS — pat — pat — patrón común en cherón común en cherón común en cheats tipoats tipoats tipo mitm mitm mitmproxy",
    ipsTitle: "Appsproxy",
    ipsTitle: "Apps Sospeproxy",
    ipsTitle: "Apps Sospe Sospechosas Instalchosas Instaladaschosas Instaladas",
    ipsadas",
    ips",
    ipsSub:Sub:Sub: "Det "Det "Detectadasectadasectadas en el en el en el historial historial historial de uso de uso de uso del dispositivo del dispositivo del dispositivo",
   ",
    ipsHint",
    ipsHint: " ipsHint: ": "⚠ Apps encontradas⚠ Apps⚠ Apps en los encontradas encontradas en los datos de en los datos de datos de análisis del iPhone — indican presencia de herramientas de cheat/jailbreak/proxy",
    análisis del iPhone — indican presencia de herramientas de cheat/jailbreak/proxy",
    análisis del iPhone — indican presencia de herramientas de cheat/jailbreak/proxy ipsLa ipsLaunched:",
    ipsLaunched:unched: "▶ Abierta "▶ Abiert "▶",
    ipsa Abierta",
    ipsInstalled",
    ipsInstalled: "Installed: ": "⬇⬇⬇ Instal Instalada Instalada",
    badgeada",
    badgeKnownChe",
    badgeKnownCheat:KnownCheat: "⚠at: "⚠ "⚠ CRÍ CRÍ CRÍTICOTICOTICO — CHEAT CON — CHEAT CON — CHEFIRMFIRMAT CONFIRADO",
    reasonADOMADOTLD: function",
    reasonTLD",
    reasonTLD(tld: function(tld: function){ return "TL){ return(tld){ return "TL "TLD sospechoso detectD sospechoso detectD sospechoso detectado:ado: \\"" + tado: \\"" \\"" + t + tld +ld +ld + "\\ "\\ "\\" —" —" — patrón patrón patrón común en común en común en cheats/prox cheats cheats/proxies";/proxies"; },
   ies"; },
    },
    reasonWord reasonWord reasonWord: function(word){ return ": function(word){ return ": function(word){ return "PalabraPalabra sospePalabra sospe sospechosa en elchosa en el dominio:chosa en el dominio: dominio: \\"" + word \\"" + word \\"" + word + "\\ + "\\"" + "\\"";"";; },
    reason },
    reason },
    reasonVPSVPSVPS: function: function(isp(isp){ return "V){ return: function(isp){ return "VPS/HOSTING "VPS/HPS/HOSTINGOSTING — ISP: " + is — ISP: " — ISP: " + isp; + isp; },
   p; },
    reasonProxy },
    reasonProxy reasonProxy: "PROXY: "PROXY: "PROXY / VPN / VPN detectado",
    / VPN detectado detectado reasonCF",
    reasonCF",
   : function: function reasonCF: function(asn(asn(asn){ return){ return){ return "Cloud "Cloudflare acc "Cloudflare accflare accedido víaedido víaed IP direct IP directido vía IP directa — patróna — patróna — de proxy de proxy patrón de proxy cheat (" + as cheat (" + asn + cheat (" + asn + ")"; },
   n + ")"; },
    reasonAS ")"; },
    reasonAS reasonASN:N:N: function(asn,desc){ function(asn, function(asn, return "desc){desc){ return " return "ASNASNASN de proxy de proxy de proxy cheat conocido: " cheat conocido cheat conocido: " + as: " + asn + + asn + " — " —n + " — " + " + " + desc; },
    desc; desc; },
    reasonRD },
    reasonRDNS: reasonRDNS:NS: function(rdns function(rdns function(){ return){ returnrdns){ return "r "rDNS de "rDNS de servidor servidorDNS de servidor: " + rdns;: " + rd: " + rdns; },
    reasonHostns; },
    reasonHost },
   inger:inger: reasonHost function( function(inger: function(rdnsrdnsrdns){ return){ return "Hostinger V){ return "Hostinger V "HostPS (PS (inger VpatrónpatrónPS (patrón proxy cheat proxy cheat proxy cheat BR conocido): " BR conocido): " BR conocido): " + rd + rdns; + rdns;ns; },
    },
    reasonNo reasonNo },
    reasonNoRDNSRDNS: "Sin rRDNS: ": "Sin rDNS (DNS (PTSin rDNS (PTRR) —PTR) — típico de) — típico de VPS típico de VPS usado VPS usado como proxy como proxy usado como proxy",
    reason",
    reason",
    reasonOrg: function(kOrg: function(kw){ return "Org: function(kw){ returnw){ return "Org/Org/ISP asoci "Org/ISP asociISP asociado aado a hosting/proado a hosting/pro hosting/proxy cheat: "xy cheatxy cheat: + kw: " + kw " + kw;;; },
  },
  },
  }
};

function setLang }
};

function setLang }
};

function setLang(lang)(lang)(lang) {
  const t = {
  const t = TRANSL {
  const t = TRANSLATIONSATIONS[[langlang TRANSLATIONS[lang];
 ];
  if (!t) return];
  if (!t) return;

  [' if (!t) return;

 ;

  ['pt ['pt','en','es','en','es'].forEachpt','en','es'].forEach'].forEach(function(l)(function(l(function(l) {
    var {
    var btn = document.getElementById) {
    var btn = btn = document.getElementById('btn('btn-' + document.getElementById('btn-' + l-' + l);
    if l);
    if (btn) btn);
    if (btn) btn (btn) btn.classList.toggle('.classList.toggle('.classList.toggle('active',active', l === lang l === lang);
 );
  });

  function q( });

  function q(active', l === lang);
  });

  function q(sel)sel) { returnsel) { return { return Array.from(document.querySelector Array.from(document.querySelectorAll( Array.from(document.querySelectorAll(All(sel));sel)); }

 sel)); }

  }

  q('.hero-ey q('. q('.hero-eyebrow').forEachhero-eyebrow').forEachebrow').forEach(function(el(function(el(function(el){ el){ el.textContent = t){ el.textContent = t.eyebrow.eyebrow.textContent = t.eyebrow; });
 ;; });
  q q('.hero-cred });
  q('.hero-cred('.heroits').its').-credits').forEach(functionforEach(functionforEach(function(el){ el.text(el){(el){ el.text el.textContentContent = t.credContent = t.cred = t.credits; });
  q('.heroits; });
  q('.heroits; });
  q('.hero-file strong-file strong-file strong').forEach').forEach').forEach(function(el){ el(function(el(function(el.textContent){ el.textContent = t){ el.textContent = t.fileLabel = t.fileLabel.fileLabel; });

  var; });

  var; });

  var hgLabels = hgLabels = hgLabels = q('. q('. q('.hg-labelhg-labelhg-label');
  ['start');
  ['start');
 ','last','last ['start','lastRecord','Record','uniqueDomRecord','uniqueDomuniqueDomains','ains','ains','totalContotalContotalConns'].ns'].ns'].forEach(functionforEach(function(k,iforEach(function(k(k,i){
    if,i){
    if (){
    if ( (hgLabelshgLabelshgLabels[i])[i])[i]) hg hg hgLabels[i].textLabels[i].textContent = t[k];
 Labels[i].textContent = t[kContent = t[k];
  });

 ];
  });

 });

  // data  // data-i18 // data-i18-i18n genericn generic handler
  qn generic handler handler
  q
  q('[data-i18('[data('[data-i18n]-i18n]n]').forEach').forEach').forEach(function(el){
   (function(el(function(el var key){
   ){
    = el var key = el var key = el.getAttribute.getAttribute.getAttribute('data('data('data-i18-i18-i18n');
    ifn');
n (t    if (t');
    if (t[key][key] && typeof t[key[key] && typeof && typeof] === 'string t[key] === 'string t[key] === 'string') el') el') el.textContent = t[key.textContent = t[key.textContent = t];
 ];
 [key });

  // });

  //];
  });

  // indicator value (domain vs IP indicator value indicator value ()
  (domain vs IPdomain vs IP)
  q q('[data-i('[data-i18n18n-indicator)
  q('[data-i18n-indicator]').-indicator]').forEach(function]').forEach(function(el(elforEach(function(el){
    var){
    var){
    var kind = kind = el.get kind = el.getAttribute('data-i el.getAttribute('data-i18nAttribute('data-i18n18n-indicator-ind-indicator');
   ');
    el.texticator');
    el.textContent = kind ===Content = el.textContent = 'domain kind === kind ===' ? 'domain 'domain' ? t.ind' ? t.indicatorDomain t.indicatorDomainicatorDomain : t : t : t.indicatorIP.indicator.indicator;
 IP;
 IP;
  });

  // });

  // roots-d });

  // roots-d roots-detail with countetail withetail with
  q count count
  q('[data
  q('[data('[data-roots-roots-roots-count]-count]').-count]').forEachforEach(function(el').forEach(function(el){
   (function(el){
    var n var n){
    var n = = parseInt = parseInt parseInt(el.get(el.get(el.getAttribute('data-Attribute('data-roots-countAttribute('data-roots-countroots-count'), '), '), 10);
    var1010);
    var label =);
    var label = n > label = n > n > 1 ? t 1 1 ? t.roots ? t.rootsDetailN.rootsDetailN : tDetailN : t.roots.roots : t.rootsDetail1Detail1Detail1;
   ;
    el.text;
    el.textContent = el.textContent = n + ' ' n + ' 'Content = n + ' ' + label + label + label + ' + ' + ' (roots_installed: (roots_inst (roots_installed: ' +alled: ' + ' + n + n + ') n + ')';
  ')';
  });

  //';
  });

  // });

  // domain-b domain-badge inline domain-badge inlineadge inline SUSPE SUSPEITO/P SUSPEITO/POSSÍOSSÍITO/PVELVELOSSÍVEL
  q
  q('[data
  q('[data-sev]('[data-sev-sev').forEach(function]').forEach(function]').forEach(function(el){
    var sev(el){
    var(el){
    var sev = el sev = el = el.getAttribute.getAttribute('data.getAttribute('data('data-sev-sev-sev');
   ');
   ');
    if ( if (sev === if (sev === 'HIGHsev === 'HIGH') el 'HIGH') el') el.textContent = t.textContent.textContent.badge = t.badge = t.badgeSuspectSuspectSuspect;
   ;
   ;
    else if else if else if (sev === ' (sev (sevMEDIUM === 'MEDIUM === 'MEDIUM') el') el') el.textContent = t.textContent.textContent = t.badge = t.badgePossible.badgePossiblePossible;
 ;
 ;
  });

  // reasons translation via data });

  // reasons translation via data });

  // reasons translation via data-re-reasons-reasons
 asons
  q
  q q('[data-re('[data-re('[data-reasons]asons]').forEachasons]').forEach').forEach(function(el(function(el(function(el){
    try){
   ){
    try {
      var try {
      var reasons = reasons = {
      var reasons = JSON.parse(el.get JSON.parse JSON.parse(el.getAttribute('(el.getAttribute('data-reAttribute('data-reasonsdata-reasons'));
      var'));
      varasons'));
      var translated = translated = translated = reasons.map(function(r reasons.map(function(r) reasons.map(function(r) {
        // match each {
        // match each) {
        // match each reason pattern reason pattern reason pattern and translate and translate
        and translate
        var m var m
       ;
       ;
        var m;
        if (( if (( if ((m =m = r.match(/TLm = r.match(/TL r.matchD susD sus(/TLpeitopeitoD suspeito detectado detectado detectado: "([^: ": "([^"]+)"]+)([^"/))"/))"]+)"/)) || ( || ( || (m =m =m = r.match r.match r.match(/Suspicious(/Suspicious(/S TLD detected: " TLD detected: "uspicious TLD detected: "([^"]+)"/([^"]+)"/)) ||([^"]+)"/)) ||)) || (m (m = r (m = r = r.match(/.match(/.match(/TLDTLD sospeTLD sospechosochoso sospechoso detectado detectado detectado: ": "([^: "([^"]+)([^"]+)"]+)"/)))"/))) return t"/))) return t.reason return t.reason.reasonTLDTLDTLD(m(m(m[1[1[1]);
        if ((m = r]);
        if ((m = r]);
        if ((m = r.match(/Palav.match(/Palav.match(/Palavra susra susra suspeita no dompeitapeita no domínio: no domínioínio "([^"]: ": "+)"/([^"]([^"]+)"/)) ||+)"/)) ||)) || (m = r (m = r (m = r.match(/.match(/.match(/Suspicious word in domain: "([^"]+)"/)) || (Suspicious word in domain: "([^"]+)"/)) || (Suspicious word in domain: "([^"]+)"/)) || (m =m = r.matchm = r.match r.match(/Pal(/Pal(/Palabra sospeabra sospechosa en el dominioabra sospechosa en el dominiochosa en el dominio: ": "([^"]+): "([^([^"/)))"]+)"/)))"]+) return t return t"/))) return t.reasonWord(m.reasonWord(m.reasonWord(m[1[1]);
       [1]);
        if ((]);
        if ((m =m = if (( r.match r.match(/Vm = r.match(/VPS\\(/VPS\\/H/HPS\\OSTINGOSTING/H — ISP — ISPOSTING — ISP: (.: (.+)/))) return: (.+)/+)/ t.re))) return t.reasonV))) return t.reasonVPS(mPS(masonV[1PS(m[1]);
       [1]);
       ]);
        if if ( if ( (r.matchr.matchr.match(/PRO(/PROXY \\(/PROXY \\XY \\/ VPN/ VPN/ VPN/))/))/)) return t.reason return t return t.reasonProxyProxy.reasonProxy;
        if;
        if;
        if ((m = r ((m ((m.match(/ = r = rCloudflare.match(/Cloudflare.match(/[^(Cloudflare[^(]+\[^(]+\]+\\((\\\((\\\((\\w+)\\)w+)\\)w+)\\)/))) return t/))) return t.reasonCF(m[/))) return t.reasonCF(m[1]);
       .reasonCF(m[1]);
       1]);
        if (( if ((m = if (( r.matchm = r.matchm = r.match(/AS(/ASN(/ASN[^:]+:N[^:]+:[^: (\\ (\\]+: (\\w+)w+)w+) — (.+)/ — (. — (.+)/))) return t.re+)/))) return))) return t.reasonAS t.reasonASN(masonASN(mN(m[1[1], m[1], m[2]);
       [2]);
       ], m[2 if ((m =]);
        if ((m = if ((m = r r.match r.match(/Host.match(/Host(/Hostinger Vinger VPSinger VPS[^:PS[^:[^:]+:]+: (.+)/))) return t.reason]+: (.+)/))) return t.reason (.+)/))) return t.reasonHostingerHostingerHostinger(m(m(m[1]);
        if[1[1 ((m]);
        if]);
        if = r ((m ((m =.match(/ = r.match(/ r.match(/rDNS de servidor:rDNS de servidor:rDNS de servidor: (.+ (.+)/) (.+)/))/) || r || r.match(/ || r.match(/.match(/Server rServer rServer rDNS:DNS: (.+DNS: (.+ (.+)/))) return t)/))) return t)/))) return t.reason.reasonRDNSRDNS.reasonRDNS(m[1]);
        if (r(m[1]);
        if (r(m[1]);
        if.match(/.match(/ (r.match(/Sem rSem rSem rDNS|No rDNS|No rDNS|No rDNS|Sin rDNS|Sin rDNS|Sin rDNS/)) returnDNS/DNS/)) return t.reasonNo)) return t.reasonNo t.reasonNoRDNSRDNSRDNS;
       ;
        if ((m =;
        if ((m = r.match if ((m = r.match(/Org r.match(/Org(/Org\\/\\/ISP\\/ISP[[^:ISP^:]+:]+:[^:]+: (.+ (.+)/) (.+)/) || r)/) || r.match(/Org\\/ISP || r.match(/Org\\.match(/Org\\/ISP[^/ISP[^:]+[^:]+: (.:]+: (.+)/: (.+)/))) return t.reasonOrg))) return t.reasonOrg+)/))) return t.reasonOrg(m(m[1(m[1[1]);
        return r;]);
        return]);
        return // fall r; r; // fall // fallback: keep original
      });
      el.innerHTML = translated.join('<back: keep original
      });
      el.innerHTML = translated.join('<br>');
    } catchback: keep original
      });
      el.innerHTML = translated.join('<br>');
   br>');
    } catch(e) } catch(e)(e) {}
  });

  {}
  {}
  });

  q('. });

  q('. q('.uptimeuptimeuptime-text').forEach(function-text').forEach(function-text').forEach(function(el){
    var strong =(el){
    var(el){
    var strong = strong = el.querySelector el.querySelector('strong el.querySelector('strong('strong');
   ');
   ');
    if (strong) if (strong) if (strong) {
      {
      var {
      var val = strong var val val = strong.textContent = strong.textContent;
     .textContent;
      while;
      while (el.first while (el.first (el.firstChild)Child) el.removeChild(elChild) el.remove el.removeChild(el.firstChildChild(el.firstChild);
     .firstChild);
      el.appendChild);
      el.appendChild(document.create(document.create el.appendChild(document.createTextNodeTextNodeTextNode(t.m(t.monitoredFor +(t.monitoredonitoredFor + ' '));
     For + ' '));
      ' ' var ns = document var ns));
      var ns = document.createElement(' = document.createElement('strong.createElement('strong');
      nsstrong');
      ns.textContent.textContent');
      ns.textContent = val = val;
      = val;
      el.appendChild;
      el.appendChild el.appendChild(ns(ns);
   (ns);
    }
  }
 );
    }
  });

  q('. });

  });

  q('.uptime q('.uptimeuptime-bar span-bar span').forEach-bar span').forEach(function(el){
   (function(el').forEach(function(el){
    if (){
    if ( if (el.style && el.style.marginLeftel.style && el.style.mel.style && el.style.m) elarginLeft) elarginLeft.innerHTML =.innerHTML =) el '&# '&#.innerHTML = '&#9888;98889888; ' '; ' + + t.upt + t.uptimeLess t.uptimeLessimeLess202020;
  });

  var;
  });

  var;
  });

  var statLabels = q statLabels = q statLabels = q('.stat .lbl('.stat .lbl('.stat .lbl');
 ');
  ['');
  [' ['criticalLabel','suscriticalLabel','suscriticalLabel','suspectLabelpectLabelpectLabel','possible','possibleLabel'].','possibleLabel'].forEach(functionLabel'].forEach(functionforEach(function(k,i){
   (k,i){
   (k,i){
    if ( if ( if (statLabels[i])statLabels[i])statLabels[i]) statLabels statLabels statLabels[i].textContent[i].[i].textContent = ttextContent = t[k = t[k];
 [k];
 ];
  });

  q });

  q });

  q('.section('.section('.section-header').forEach(function-header').-header').forEach(function(shforEach(function(sh){
    var(sh){
    var title = title =){
    var title = sh.querySelector sh.querySelector sh.querySelector('.sh-title');
    var('.sh-title');
    var('.sh-title');
    var sub   sub   = sh sub   = sh = sh.querySelector('..querySelector('..querySelector('.sh-subsh-subsh-sub');
');
   ');
       if (! if (!title) if (!title)title) return return return;
    if;
    if (sh;
    if (sh.classList.contains('sh.classList.contains (sh.classList.contains('sh-critical'))('sh-critical'))-critical')) {
      {
      {
      title.textContent = title.textContent = t.app title.textContent = t.app t.appProxyTitle;
     ProxyTitle;
     ProxyTitle;
      if ( if ( if (sub) sub.textContent =sub) sub.textContent =sub) sub.textContent = t.appProxySub t.appProxySub t.appProxySub;
   ;
    } else;
    } else if ( if ( } else if (sh.classList.contains('sh.classListsh.classList.contains('sh-high.contains('sh-high'))sh-high')) {
      title {
      title')) {
      title.textContent.textContent.textContent = t = t.sus = t.suspectIPsTitle.suspectIPsTitlepectIP;
     ;
     sTitle;
      if ( if ( if (sub) sub.textsub) sub.textContent = t.suspectIPssub) sub.textContent = t.suspectIPsSubContent = t.suspectIPsSub;
    } else if (shSub;
    } else if (sh;
    } else if (sh.classList.contains('sh.classList.contains.classList.contains('sh('sh-medium')) {
     -medium')) {
      title.text-medium')) {
      title.textContent =Content = title.textContent = t. t.possibleIPsTitle t.possibleIPsTitle;
     possibleIPsTitle;
      if (;
      if ( if (sub)sub) sub.text sub.textContent =Content = t. t.sub) sub.textContent = t.possibleIPsSubpossibleIPpossibleIPsSub;
   ;
   sSub;
    }
 }
  });

  }
   });

  q('.stale });

  q('.stale q('.stale-label').forEach(function-label').forEach(function-label').forEach(function(el){ el.text(el){(el){ el.textContent = el.textContent =Content = t.st t.staleLabel t.staleLabel;;aleLabel });
  q });
  q('.st; });
  q('.st('.stale-hale-hale-hint').forEach(functionint').forEach(functionint').(el){(el){forEach(function(el){ el.text el.textContent = el.textContent =Content = t.st t.st t.staleHint;aleHint;aleHint });
  q });
  q('.st; });
  q('.st('.stale-timeale-timeale-time').forEach(function(el){
   ').forEach(function(el){
    var strong').forEach(function(el){
    var strong var strong = el = el = el.querySelector('.querySelector('.querySelector('strong');
    ifstrongstrong');
    if (strong');
    if (strong) (strong) {
      {
      var) {
      var var tv = tv = tv = strong.textContent strong.textContent strong.textContent;
      while;
      while;
      while (el.firstChild (el.firstChild (el.firstChild) el) el) el.removeChild.removeChild.removeChild(el.first(el.first(el.firstChild);
      elChildChild.appendChild(document);
      el.appendChild(document);
      el.createTextNode(t.lastRecord.createTextNode(t.lastRecord2.appendChild(document.createTextNode(t.lastRecord2 + ' ' + ' '2 + ' '));
     ));
     ));
      var ns var ns2 = var ns2 =2 = document.createElement('strong document.createElement('strong document.createElement('strong');
      ns2');
      ns2');
      ns2.textContent.textContent = tv.textContent = tv = tv;
     ;
     ;
      el.appendChild(ns el.appendChild el.appendChild2(ns2);
   (ns2);
   );
    }
  }
  }
  });

  q('.ff });

  q('.ff });

  q('.ff-label').forEach(function-label').forEach-label').forEach(function(el){
    var version = el.text(function(el){
    var version =(el){
    var version =Content.indexOf el.text el.text('MAXContent.indexOf('MAXContent.indexOf('MAX') !==') !== -1') !== -1 ? 'Free Fire ? ' -1 ? 'Free Fire MAX'Free Fire MAX' : ' MAX' : ' : 'Free FireFree FireFree Fire';
    el.textContent';
    el.textContent =';
    = version + version + el.textContent = version + ' — ' + ' — ' — t. ' + t.ffLabel ' + t.ffLabelffLabel;
 ;
 ;
  });
  var ffTags = });
  var ffTags = });
  var ffTags = q('. q('.ff-tag q('.ff-tff-t');
 ag');
 ag');
  [t.ffLastOpen, [t.ffLastOpen, [t.ffLast t. t.Open, t.ffFirstffFirstffFirstOpen].forEach(functionOpen].forEach(functionOpen].forEach(function(v,i){
   (v,i){
   (v,i){
    if (ffTags if (ffTags if ([i])[i])ffTags[i]) ffTags ffTags ffTags[i].textContent = v[i].textContent = v[i].textContent = v;
 ;
 ;
  });
  q('. });
  q('.ff-s });
  q('.ff-sff-sessions').forEach(function(elessions').forEach(functionessions').forEach(function(el){
    var(el){
    var num =){
    var num = el.text num = el.textContent.match el.textContent.matchContent.match(/\\d+/(/\\(/\\);
   d+/);
   d+/);
    if ( if (num) if (num) el.textContent el.textnum) el.text = numContent =Content = num[0] num[0] + '[0] + ' ' + ' + + ' t.ffS t.ffS ' + t.ffSessionsessionsessions;
  });
  q('.ff-hint;
  });
  q('.ff-hint;
  });
  q('.ff').forEach').forEach(function(el){ el-hint').forEach(function(el(function(el){ el){ el.textContent = t.ffHint; });

  q('..textContent = t.ffHint;.textContent = t.ffHint; });

  q('.appstore-label').appstore-label'). });

  q('.appstore-label').forEach(functionforEach(functionforEach(function(el){ el.text(el){(el){Content = el.textContent = t.app el.textContent = t.appStoreLabel t.appStoreLabelStoreLabel; });
  q;;('.app });
  q });
  q('.appstore-h('.appstore-hint').store-hint').int').forEach(function(el){ el.textforEach(function(el){ el.textforEach(function(el){ el.textContent =Content = t.appContent = t.appStoreHint t.appStoreHintStoreHint; });

  q;; });

  q('.ok });

  q('.ok').forEach('.ok').forEach(function(el').forEach(function(el){ el.textContent){ el(function(el){ el.textContent.textContent = t.noV = t.noV = t.noVPS; });

 PS; });

 PS; });

  var label var labelMap = var labelMap =Map = {
    'IP {
    {
   ': ' 'IP': ' 'IPlabelIP',
    'PalabelIP',
    'Pa': 'labelIP',
    'País': 'labelís': 'labelís': 'labelCountry', 'CountryCountry',Country', 'Country': ' 'Country': 'labelCountry': 'labelCountry', 'País', 'labelCountry', '': 'PaísPaís': 'labelCountry',
   ': 'labelCountry',
   labelCountry',
    'Pro 'Pro 'Provedorvedor': 'vedor': 'labelProvider', 'labelProvider', '': 'labelProvider', 'Provider':Provider':Provider': 'label 'labelProvider', 'labelProvider', 'Proveedor 'ProveedorProvider', 'Proveedor': '': 'labelProvider': 'labelProvider',
    'Org': '',
    'OrglabelProvider',
    'Org': '': 'labelOrg',
   labelOrg',
   labelOrg',
    'r 'r 'rDNS': 'labelDNS':DNS': 'labelRDNS 'labelRDNS',
   RDNS',
    'HTTP',
    'HTTP': '': 'labelHTTP',
   labelHTTP',
    'HTTP': 'labelHTTP',
    'Mot 'Mot 'Motivo':ivo':ivo': 'label 'labelReason', 'Reason 'labelReason',Reason', 'Reason': ' 'Reason': 'labelReasonlabelReason', '', '': 'labelReason', 'Motivo': 'labelReason',
   Motivo': 'labelReason',
   Motivo': 'labelReason',
    'Usado por 'Usado por 'Us': '': 'ado por': 'labelUsedlabelUsedBy', 'UsedlabelUsedBy', 'UsedBy', by': by': 'Used 'label 'label by': 'labelUsedBy', 'UsadoUsedBy', 'UsadoUsedBy', ' por': por':Usado 'labelUsedBy 'labelUsedBy por': 'label',
   ',
    'AppUsedBy',
    'App': '': ' 'App': 'labelApp',
   labelApp',
   labelApp',
    'Che 'Che 'Cheat': 'labelCheatat': 'labelat': 'label',
    'IndicadorCheat',
    'IndCheat',
    'Indicador': 'icador': '': 'labelIndicatorlabelIndicatorlabelIndicator', 'Indicator':', 'Indicator':', 'Indicator': 'labelIndicator 'label 'labelIndicator',
 Indicator',
  };

  q',
  };

  q('.card('.card };

  q').forEach(function(c').forEach('.card').forEach(function(card(function(cardard){
    var){
    var){
    var badge = card.querySelector('. badge = card.querySelector('.bad badge = card.querySelectorbadgege('.badge');
    var conns');
    var');
    var connsEl = card.querySelector('.conn connsEl = card.querySelector('.connEl = card.querySelectors');
    ifs');
    if (conn('.conns');
    if (connsElsEl (connsEl) {
      var) {
      var) {
      var num = num = num = conns connsEl.textContent.matchEl.text connsEl.textContent.match(/\\d+/Content.match(/\\d+/(/\\d+/);
      if ();
     );
      if ( if (num) connsnum) connsEl.textContent = numEl.textContent =num) connsEl.textContent =[0] num num[0] + ' ' +[0] + ' ' + t.conns + ' ' + t.conns;
    t.conns;
    }
   ;
    }
    if ( }
    if ( if (badbadgebadgege) {
      if (badge.classList) {
      if (badge.classList) {
      if (badge.classList.contains('critical')).contains('critical')) {
       .contains('critical')) {
        badge.innerHTML = badge {
        badge.innerHTML = badge.getAttribute badge.innerHTML = badge.getAttribute('data-badge.getAttribute('data('data-badge-type')-type') === 'known-che-badge-type') === 'known-che === 'known-cheat' ? t.badgeat' ? t.badgeKnownCheat' ? t.badgeKnownCheKnownCheat : t.badgeCritical;
      }
     at : t.badgeCritical;
     at : t.badgeCritical;
      else if }
      else if }
      else if (bad (bad (badge.classListge.classList.contains('ge.classList.contains('tld-flagtld.contains('tld-flag')) badge.innerHTML =-flag')) badge.innerHTML =')) badge t.b t.b.innerHTML = t.badgeDomainSuspect;
     adgeDomainSuspect;
     adgeDomain else if else ifSuspect;
      else if (badge.classList (badge.classList (bad.contains('.contains('ge.classList.contains('high')) badge.texthigh')) badge.texthigh'))Content = t.badgeSusContent = t.badgeSuspect badge.textContent = t.badgeSuspect;
      else;
      elsepect;
      else if (badge if (badge.classList.contains if (.classList.contains('medium')) badge('mediumbadge.classList.contains('medium.textContent')) badge.textContent')) badge.textContent = t = t.badgePossible = t.badgePossible.badge;
   ;
   Possible;
    }
    card.querySelectorAll }
    card.querySelectorAll }
    card.querySelectorAll('.label('.label').forEach(function(l('.label').forEach(function(l').forEach(function(lbl){
      varbl){
      varbl sub = lbl.querySelector sub = lbl.querySelector){
      var sub = lbl.querySelector('.sub('.sub('.sub');
      if (');
      if (sub)');
      if (sub)sub) {
        var fn {
        var fn {
        var fn = lbl.childNodes = lbl.childNodes = lbl[0[0.childNodes[0];
       ];
       ];
        if if if ( (fn && (fn && fn.nodeType === 3) fn.textContent = t.labelSus fn.nodeType === 3) fn.textContent = t.labelSusfn && fn.nodeType === 3) fn.textContent = t.labelSuspectIPs +pectIPs +pectIPs + ' ';
        var ' ' ';
        var nums = sub.text ';
        var nums = sub.text nums =Content.matchContent.match sub.textContent.match(/\\(/\\(/\\d+/d+/gd+/g);
        if (nums && numsg);
        if (nums && nums);
        if (nums && nums.length >= 2.length >=.length >=) sub 2) sub.text 2) sub.textContent.textContent = nums[0Content = nums = nums] +[0] +[0] + ' ' + t ' ' ' '.of + + t.of + + t.of + ' ' ' ' + nums ' ' + nums + nums[1] +[1] + ' '[1] + ' ' + t ' ' + t + t.dom.dom.domains;
        return;
      }
     ains;
        return;
      }
     ains;
        return;
      }
      var txt var txt var txt = lbl.textContent = lbl = lbl.textContent.trim();
      var.textContent.trim();
      var key =.trim();
      var key = key = labelMap labelMap labelMap[txt];
      if ([txt];
      if ([txt];
      if (key &&key &&key && t[key t[key t[key]) lbl.textContent = t]) lbl.textContent = t]) lbl.textContent = t[key[key[key];
   ];
   ];
    });
    card.querySelectorAll });
    card.querySelectorAll('.none });
    card.querySelectorAll('.none').forEach(function(el){ el').forEach(function(el('.none').forEach(function(el.textContent){ el.textContent){ el.textContent = t = t.noneDetected = t.none.none;Detected;Detected; });
    card });
    card });
    card.querySelectorAll('.val').forEach.querySelectorAll('.val').forEach.querySelectorAll('.val').forEach(function(el(function(el(function(el){
      if (){
      if (){
      if (el.textContent.indexOfel.textContent.indexOfel.text('Online') !==('Online') !==Content.indexOf('Online') !== -1 -1 -1 || el || el.textContent.indexOf('Offline.textContent.indexOf('Offline || el.textContent.indexOf('Offline') !== -1 || el') !== -1 || el') !== -1 || el.textContent.textContent.indexOf('.indexOf('.textContent.indexOf('línea') !==línealínea') !== - -1 || el') !== -1 || el1 || el.textContent.textContent.textContent.indexOf('conex.indexOf('conexión.indexOf('conexión') !== -') !== -ión') !==1)1) -1) {
        {
        el.innerHTML {
        el.innerHTML el.innerHTML = el.innerHTML = el.innerHTML = el
          .
          ..innerHTML
          .replace(/●\\replace(/●\\replace(/●\\s*(En línea|Onlines*(En línea|Online)/gs*(En línea|Online)/g)/g, t.online, t, t)
         .online)
         .online)
          .replace(/● .replace(/● .replace(/●\\s\\s*(Sin\\s*(Sin*(Sin conexión conexión conexión[^[^<]*[^<]*|Off|Off<]*|Offline[^<]*)/line[^<]*)/line[^<]*)/g,g, tg, t.offline);
     .offline);
      t.offline);
      }
    }
    }
    });
  });
}
window.set });
  });
}
window.set });
  });
}
window.setLang = setLang;

(functionLang = setLang;

(functionLang = setLang();

(function()() {
  function bindLangButtons() {
  function bindLangButtons() {
  function bindLangButtons() {
    {
    var langs {
    var langs var langs = ['pt', 'en = ['pt', 'en = ['', '', 'pt', 'en', 'eses'];
    langs.forEaches'];
    langs(function(l)'];
    langs.forEach(function(l).forEach(function {
      {
     (l) {
      var btn var btn = document var btn = document.getElementById('btn-' = document.getElementById('btn-'.getElementById(' + l);
      if ( + l);
      if (btnbtn-' + l);
      if (btn) {
        btn.addEventListener) {
       btn) {
       ('click btn.addEventListener btn.addEventListener', function('click', function('click', function(e) {
          e.preventDefault(e) {
         (e) {
         ();
          e.preventDefault();
          e.preventDefault();
          setLang(l setLang setLang(l);
       (l);
);
        });
             });
      });
      }
    });
  }

  function }
    });
  }
    });
  tryBind }

  function tryBind(attempt }

  function tryBind(attempt(attempts) {
   s)s) var btn {
    var btn = document.getElementById(' = document.getElementById(' {
    var btn = document.getElementById('btn-pt');
    ifbtn-pt');
    ifbtn-pt');
    if (btn) {
      bind (btn) {
      bind (btn) {
      bindLangButtonsLangButtons();
    } elseLangButtons();
   ();
    if ( } else if ( } else if (attempts > attempts > attempts > 0)0)0) {
      {
      {
      setTimeout(function setTimeout(function() { setTimeout(function() { tryBind() { tryBind tryBind(attempt(attempt(attempts - 1s -s -); }, 100 1); }, 100 1); },);
    }
  }

 );
    }
  }

  100);
    }
  }

  if (document. if (document. if (document.readyStatereadyState === 'readyState === 'loading') {
   loading') === 'loading') {
    document.addEventListener {
    document.addEventListener('DOM document.addEventListener('DOMContentLoadedContentLoaded('DOM', function', functionContentLoaded', function() { tryBind(10() {() { tryBind(10); tryBind(10); });
  } });
  }); });
  } else {
    tryBind( else {
    try else {
    try10Bind(10Bind(10);
 );
  }
})(););
  }
}) }
})();`
  await w`
 ();`
 v.evaluateJavaScript(lang await wv.evaluateJavaScript(lang await wv.evaluateJavaScript(langScript)
  SpeechScript)
  SpeechScript)
  Speech.speak(S.done)
  await.speak(S.done)
  await.speak(S.done)
  await wait( wait(1200 wait(12001200)
 )
 )
  await wv.p await wv.present(false)
 await wv.present(false)
resent(false)
}

async function}

async function}

async function readFile readFile readFile(path) {
 (path) {
 (path) {
  let content let content let content = null = null
  = null
 
  let fm = File let fm let fm = FileManager.i = FileManager.iCloudManager.iCloudCloud()
  try {
()
  try {
   ()
  try {
    if (    if (fm.isFileSt if (fm.isfm.isFileStoredInFileStoredIniCloudoredIniCloudiCloud && fm && fm.isFile && fm.isFileStored.isFileStoredStoredIniIniIniCloud(path))Cloud(path))Cloud(path {
      await fm.d {
      await)) {
      await fm.downloadFile fm.downloadFileFromiownloadFileFromiCloud(path)
   Cloud(pathFromiCloud(path)
    }
   )
    }
    content = }
    content = fm.readString(path)
 fm.readString(path)
  content = fm.readString(path)
   } catch } catch } catch(e)(e)(e) {}
  {}
  {}
  if (! if (! if (!content) {
   content) {
   content) {
 try { content = try { content =    try { content = FileManager FileManager FileManager.local().readString(path).local().readString.local().readString(path) } catch(path) } catch } catch(e2(e2(e2) {}
  }
  return) {}
 ) {}
  }
  return }
  return content content
}

async function main
}

async function main()() {
  let content
}

async {
  let step1 = new step1 = new function main() {
  let step1 = new Alert()
  step Alert()
  step Alert1.title1.title()
  step1.title = "📋 Passo = "📋 Passo = "📋 1 1 Passo 1 de  de  de 3 — Relatório de Priv3 — Relatório de Priv3 — Relatório de Privacidadeacidadeacidade"
  step"
  step1"
  step11.message = "V.message = ".message = "Vá emVá emá em:\n\nAjustes:\n\nA:\n\nAjustesjustes → Privacidade e → Privacidade → Privacidade e Segurança → Relatório de Privacidade de Apps\n\nRole até o final e to Segurança → Relatório de Privacidade de Apps\n\nRole até o final e Segurança → Relatório de Privacidade de Apps\n\nRole até o final e toque em\n\"que em\n\"AtivarAtivar e toque em\n\"Ativar Relatório Relatório de Priv Relatório de Priv de Privacidade de Appsacidade de Appsacidade de Apps\"\\"\\"\nn\nDepoisn\nDepois toque\nDepois toque em\n\"Export em\n\"Export toque em\n\"Exportar Relatório dear Relatório de Privacar Relatório de Privac Privacidade deidade deidade de Apps\"\ne Apps\"\ne Apps\" salve salve\ne salve o arqu o arqu o arquivoivo .ivo .ndjson em qualquer .ndjson em qualquerndjson lugar ( lugar ( em qualquer lugar (ArquArquivos, iCloudArquivos, iCloudivos, iCloud, etc, etc, etc)."
  step)."
  step)."
  step1.add1.addAction("1.addActionAction("Entend("Entendido,Entendido, próximo →ido, próximo →")
  step1.addCancel próximo →")
  step1.addCancel")
  step1Action("Action(".addCancelCancelarCancelarAction("Cancelar")
 ")
 ")
  if ( if (await step if (await stepawait step1.present()1.present()1.p === - === -resent() === -1)1)1) { Script.com { Script { Script.complete(); returnplete(); return.complete(); return }

 }

  }

  let step  let step let step2 = new Alert2 =2 = new Alert()
  new Alert()
  step2()
  step2.title = ".title = step2.title = "📊 Pass "📊 Pass📊 Passo 2 deo 2 de 3o 2 de 3 — Dados de 3 — Dados de — Dados de Análise"
  step Análise"
  step Análise2.message = "2.message"
  step2.message = "Vá = "VáVá em:\ em:\n\n em:\n\nn\nAjustes →AjustAjustes → Privaces → Privacidade e Segurança → Privacidade e Segurançaidade e Segurança Análise → Análise → Análise e Mel e Melhorias e Melhoriashorias\n\nAtive as op\n\nAtive as op\n\nAtive as opções:\n•ções:\nções:\n• Compart• Compart Compartilharilharilhar análise do iPhone\n• Comp análise do iPhone\n• Comp análise do iPhone\nartilartil• Compartilhar análise do ihar análisehar análise do iCloud\n• Comp do iCloud\n• CompCloud\nartilartil• Compartilhar comhar com desenvolvedhar com desenvolved desenvolvedores deores deores de app\n\nDepois volte e app\n\nDepois volte e to app\n\nDepois volte e toque em toque em\n\"Dados de Anque em\n\"Dados de An\n\"Dados de Análise\"\álise\"\álise\"\nRolenRolenRole até o até o até o final e final e selecione o final e selecione o selec arquivo arquivoione o arquivo mais recent mais recente começ mais recente começando come começando com\n\"ando com\n\"xp_xp_\n\"xp_amp_app_usageamp_app_usageamp_app_usage_dnu_dnu_dnu\"\n\nToque no arquivo → toque no í\"\n\nToque no arquivo → toque no ícone de compartil\"\n\nToque no arquivo → toque no ícone de compartilcone dehar →har → compartilhar → Salvar Salvar Salvar em Arquivos em Arquivos em Arquivos."
  step2.add."
  step."
  stepAction("2.addAction("2.addAction("Entendido,Entendido,Entendido, próximo → próximo → próximo →")
  step2")
  step2")
  step2.addCancel.addCancelAction(".addCancelAction("CancelarAction("CancelarCancelar")
 ")
 ")
  if ( if ( if (await step2.present() === -await step2.present() === -1)await step2.present() === -1)1) { Script.complete { Script.complete { Script.complete(); return(); return }

 (); return }

  }

  let step3 = let step let step3 = new Alert3 = new Alert()
  new Alert()
  step3 step3()
  step3.title = "✅.title = "✅.title = "✅ Passo Passo 3 3 de 3 — de 3 — Passo 3 de 3 — Selecion Selecion Selecionar arquivos"
  stepar arquivosar arqu3.message"
  step3.messageivos"
  step3.message = "Agora selecione = "Agora selecione os  = "Agora selecione os 2 arquivos salv2 arqu os 2 arquos.\ivos salvivos salvos.\n\nn\nos.\n\nVocêVocêVocê pode selecioná pode selecioná pode sele-los em-los emcioná-los em qualquer ordem — o sistema ident qualquer ordem — qualquer ordem — oifica automatic o sistema identifica automatic sistema identifica automaticamente cadaamente cadaamente cada um.\n\n📋 um.\n um.\n\n📋 App_\n📋 App_ App_Privacy_Report.ndPrivacy_Privacy_Report.ndjson\n📊Report.ndjson\n📊json\n📊 xp_amp xp_amp xp_amp_app_usage_d_app__app_nu*.usage_dnu*.ipsusage_dnu*.ipsips"
  step3.add"
  step"
  step3.addAction("Sele3.addAction("SeleAction("cionarcionarSelecionar arquivo arquivo 1")
  arquivo 1")
  1")
  step3 step3 step3.addCancelAction(".addCancelAction("Cancelar.addCancelCancelar")
 ")
 Action("Cancelar")
  if ( if (await step if (await stepawait step3.p3.p3.present() === -1) { Script.complete(); return }

  let pathresent() === -1) { Script.complete(); return }

  let pathresent() === -1) { Script.complete(); return }

  let path1 =1 = await Document1 = await DocumentPicker.openPicker.open await DocumentPicker.openFileFileFile()
  if (!path1)()
  if (!path1)()
  if (!path1) { Script { Script { Script.complete(); return }
 .complete(); return.complete(); return }
  let content }
  let content let content1 = await read1 = await readFile(path1 = await readFile(path1)
  if1)
  ifFile(path1)
  if (!content (!content (!content1) {
    let a = new1) {
    let a = new1) {
    let a = new Alert(); Alert(); Alert(); a.title a.title a.title = " = "Erro = "ErroErro"; a.message ="; a.message = "Não"; a.message = "Não foi possível foi possível "Não foi possível ler o arquivo ler o arquivo ler o arquivo 1."; 1."; a.add 1 a.addAction("OK");Action("."; a.addAction("OK"); await aOK"); await a await a.present(); return.present(); return
 .present(); return
 
  }

  let notice2 = new Alert }

  let notice2 = new Alert }

  let notice2 =()
 ()
  notice2 new Alert()
  notice2 notice2.title = "Ar.title = "Arquivo.title = "Arquivo 2 2quivo 2"
  notice2.message ="
  notice2.message ="
  notice2.message = "Selecione "Selecione "Se o segundo o segundo arquivolecione o segundo arquivo arquivo (ou pule (ou (ou para anal pule para analisar somente pule para analisar somenteisar somente o primeiro o primeiro o primeiro)."
  notice)."
  notice)."
  notice2.addAction("2.addAction("2.addAction("Selecionar arquivo 2")
 Selecionar arquivo 2")
 Selecionar arquivo 2 notice2 notice2")
  notice2.addCancel.addCancel.addCancelAction("Action("PularAction("Pular")
 ")
 Pular")
  let path let path let path2 =2 = null2 = null null
  let content2
  let content2 = null = null
 
 
  let content2 = null
  if ( if ( if (await notice2.pawait notice2.pawait noticeresent() !== -resent() !== -2.present()1) {
   1) !== -1) {
    path2 path2 {
    path2 = await = await DocumentPicker = await DocumentPicker.openFile()
   .openFile DocumentPicker.openFile()
    if (path2()
    if (path2 if () content2 =) contentpath2) content2 = await read2 = await readFile(path await readFile(path2)
 2File(path2)
  }

  let)
  }

  let }

  let ndjsonContent = ndjsonContent = ndjsonContent = null, ndjson null, ndjson null,Path = nullPath = ndjsonPath = null
  let null
  let
  let ipsContent ipsContent = ipsContent = null

  function classifyContent(content null

  function classifyContent(content, path = null

  function classifyContent(content, path, path))) {
    if {
    if {
    if (looksLike (look (looksLikePrivacyReport(content))sLikePrivacyReport(content))PrivacyReport(content)) return " return " return "ndjson"
    if (ndjson"
    if (ndjson"
    if (looksLikeUsagelooksLikeUsagelooksLikeUsageFile(contentFile(content)) return "ipsFile(content)) return "ips)) return"
    let name"
    let name "ips"
    let name = ( = ( = (path || "").split("/").poppath || "").split("/").poppath || "").split("/").pop().toLowerCase().toLowerCase().toLowerCase()
    if (name.ends()
    if (name.ends()
    if (name.endsWith(".ndjsonWith(".ndjsonWith(".ndjson") || name.includes") || name.includes") || name.includes("privacy")) return "("privacy")) return "("privacy")) return "ndjson"
   ndjson"
    if (ndjson"
    if (name.endsWithname.endsWith if (name.endsWith(".ips") ||(".ips(".ips") || name.includes") || name.includes("xp name.includes("xp_amp")) return_amp")) return("xp_amp")) return "ips"
    return "unknown"
  "ips"
    return "unknown "ips"
    return "unknown"
  }

  let"
  }

  let }

  let type1 type1 type1 = classify = classifyContent(content = classifyContent(contentContent(content1, path11, path1)
  let type2 = content2 ? classifyContent(content21, path1)
  let type2 = content2 ? classifyContent(content2,)
  let type2 = content2 ? classifyContent(content2,, path2) : null path2) : path2) : null

  if (type null

  if (type

  if (type2 && type12 && type1 === type2 && type1 === type === type2) {
   2) {
   2) {
    let a = new let a = new let a = new Alert()
    a.title = Alert()
    a.title = Alert()
    a.title = "Arquivos "Arquivos "Ar do mesmo do mesmoquivos do mesmo tipo"
    a.message = tipo"
    a.message = type1 tipo"
    a.message = type1 === " type1 === "ndjson === "ndjson"
      ? "ndjson"
      ? ""
     Os 2 arqu ? "Os Os 2 arquivos parecem ser App Privacy Reports. Selecione um2 arquivos parecem ser App Privacy Reports. Selecivos parecem ser App Privacy Reports. Selecione um xpione um xp xp_amp_amp_amp_app_usage_dnu*._app_usage_d_app_usage_dnu*.ips como segundo arqunu*.ips como segundoips como segundo arquivo arquivo."
      :ivo."
      : "Os 2 "Os."
      : "Os 2 arquivos parecem arquivos parecem 2 arquivos parecem ser dados ser dados ser dados de análise. Se de análise. Selecione de análise. Selecionelecione um App um App_Privacy um App_Privacy_Report.ndjson_Report_Privacy_Report.ndjson como primeiro arquivo.ndjson como primeiro arquivo como primeiro arquivo."
    a.add."
    a.add."
    a.addAction("OKAction("OKAction("OK")
    await a.present")
    await a.present")
    await a.present()
    return
 ()
    return
 ()
    return
  }

  if ( }

  if ( }

  if (type1 === "ndjson" ||type1 === "ndjson" || type2type1 === "ndjson" || type2 === " type2 === "ips") === "ips")ips") {
    ndjson {
    {
   Content = content1; ndjsonPath ndjsonContent = content1; ndjsonPath ndjsonContent = content1; ndjsonPath = path = path = path111
    ips
    ipsContent =
    ipsContent = content2Content = content2 content2
  } else
 
  if ( } else if ( } else if (type1type1 === "type1 === " === "ips" || typeips" || typeips" || type2 === "ndjson")2 === "nd2 === "nd {
    ipsContent = contentjson") {
    ipsContentjson") {
    ipsContent1
    nd = content = content1
    nd1
    ndjsonContent = content2; ndjsonPath = pathjsonContent =jsonContent = content2; ndjsonPath = path2
  } else {
    let a = new content2; ndjsonPath = path2
  } else {
    let a = new Alert2
  } else {
    let a = new Alert Alert()
    a.title =()
    a()
    a.title = "Arquivo "Arquivo não reconhecido"
    não reconhecido"
    a.message = " a.message = "Não foiNão foi possível identificar possível identificar o tipo dos arquivos.\n\nVerifique se sele o tipo dos arquivos.\n\nVerifiquecionou se selecionou:\n:\n• App• App_Privacy_Report_Privacy_Report.ndjson\n•.ndjson\n• xp xp_amp_amp_app_usage_d_app_usage_dnu*.ipsnu*.ips"
    a.addAction"
    a.addAction("OK")
    await a("OK")
    await a.present()
    return.present()
    return
  }

  if
  }

  if (!nd (!ndjsonContentjsonContent)) {
    let {
    let a = new Alert()
    a.title a = new Alert()
    a.title = = "App Privacy Report ausente "App Privacy Report ausente.title = "Arquivo não reconhecido"
    a.message = "Não foi possível identificar o tipo dos arquivos.\n\nVerifique se selecionou:\n• App_Privacy_Report.ndjson\n• xp_amp_app_usage_dnu*.ips"
    a.addAction("OK")
    await a.present()
    return
  }

  if (!ndjsonContent) {
    let a = new Alert()
    a.title = "App Privacy Report ausente"
    a.message ="
    a"
    a.message = "O arquivo.message = "O arquivo "O arquivo App App_Privacy_ App_Privacy__Privacy_Report.ndReport.ndjson é obrigatório.\nReport.ndjson é obrigatório.\n\nAjson é obrigatório.\n\nAjustes → Privjustes\nAjustes → Privacidade → Privacidadeacidade → Relatório → Relatório de → Relatório de de Privacidade de Privacidade de Privacidade de Apps → Exportar Apps → Exportar Apps → Exportar"
    a.addAction(""
    a.addAction(""
    a.addOK")
    awaitOK")
    awaitAction("OK")
    await a.present a.present()
    a.present()
    return
  return
 ()
    return
  }

  let entries = parseNdjson(nd }

  let entries = parseNdjson(nd }

  let entries = parseNdjson(ndjsonContentjsonContentjsonContent)
 )
 )
  let validation = validate let validation = validateReport( let validation = validateReport(Report(entries)
  ifentries)
  ifentries)
  if (!validation.ok) (!validation.ok) (!validation.ok) {
    {
    let a = new {
    let a = new let a = new Alert()
    a Alert()
    a Alert.title = "App.title = "App Privacy Report()
    a.title = "App Privacy Report invál inválido Privacy Report inválido"
    a.message = validation.reason +"
    a.message = validation.reason +ido"
    a.message = validation.reason + "\n\nExport "\n\nExport "\ne eme em: A\nExporte em: A: Ajustes → Privjustes → Privjustes → Privacidadeacidade → Relacidade → Relatório de Privacatório de Privac → Relatório de Privacidade de Apps →idade de Apps →idade de Apps → Exportar"
    Exportar"
    Exportar"
    a.add a.addAction(" a.addAction("OKAction("OK")
    await")
    await a.pOK")
    await a.p a.present()
    return
  }

 resent()
    return
  }

 resent()
    return
  }

  let ipsFindings = []
  let ipsMeta let ipsFindings = []
  let ipsMeta let ipsFindings = []
 = { = {  let ipsMeta = { iosVersion iosVersion: null iosVersion: null, roots: null, rootsInstalled: Installed: , rootsInstalled00: 0 }
  if }
  if }
  if (ipsContent (ipsContent) (ipsContent) {
    let parsed) {
    let parsed {
    let parsed = parse = parseIps = parseIpsIpsFile(File(ipsContent)
    ipsFindFile(ipsContent)
    ipsFindipsContent)
    ipsFindings = analyzeIps(parsedings = analyzeIps(parsedings = analyzeIps()
    if ()
    if (parsed)
    if (parsed.header)parsed.header) {
     parsed.header) {
      let osMatch = let osMatch = {
      let osMatch = (parsed.header.os_version (parsed.header.os_version (parsed.header.os_version || "").match || "").match || "").match(/iPhone(/iPhone(/iPhone OS ([\d OS ([\d.]+)/.]+ OS ([\d.]+)/)
      ipsMeta.iosVersion)/)
      ipsMeta.)
      ips = osMatch ? osMatchiosVersion = osMatch ? osMatchMeta.iosVersion = osMatch ? osMatch[1] : parsed.header.os_version[1] : parsed.header.os_version[1] : parsed.header.os_version || null || null || null
     
      ipsMeta
      ipsMeta ipsMeta.rootsInstalled = parsed.rootsInstalled = parsed.rootsInstalled = parsed.header.roots_.header.roots_.header.installed || 0installed || roots_installed || 
    }
 0
   0
    }
  }

  let filename = (nd }
  }

  let filename = }

  let filename =jsonPath || "arquivo").split (ndjsonPath || "arquivo (ndjsonPath || "arquivo("/").pop()

 ").split("/").split("/").pop()

  Speech Speech.speak(S.start").pop()

  Speech.speak(S.start.speak(S.start)

  let {)

 )

  let { findings, netEntries, cheat let { findings, netEntries findings, netEntries, cheatAppFindings,, cheatAppFindAppFind knownCheings, knownCheings, knownCheatFindings,atFindings, ghostAppatFindings, ghostAppFindings, proxyFindings, proxyLoginFind ghostAppFindings, proxyLoginFindings } = awaitLoginFindings } = awaitings } = await analyze(entries)

  let html = buildHTML analyze(entries)

  let html = analyze(entries)

  let html =(findings buildHTML(findings buildHTML, net, net(findingsEntries,Entries,, netEntries, cheatAppFindings, known cheatAppFindings, known cheatAppFindingsCheatFindingsCheatFindings, knownCheatFindings, ips, ipsFindings, ipsFindingsFindings, ipsMeta,, ipsMeta,, ips [], ghostAppFind [], ghostAppFindMeta, [], ghostings, proxyLoginings, proxyLoginAppFindings, proxyLoginFindings, filenameFindingsFindings)
  await show, filename)
  await show, filename)
 Result(html)
}

mainResult(html await showResult(html()
