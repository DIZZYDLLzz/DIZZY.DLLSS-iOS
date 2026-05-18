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

function detectGhostApps(netEntries, installedBundles) {
  const ghostCandidates = new Map() // bundleId -> { domains: Set, hits: number }
  for (const e of netEntries) {
    const bid = e.bundleID
    if (!bid) continue
    if (IGNORED_BUNDLES.has(bid)) continue
    if (installedBundles.has(bid)) continue // está instalado, não é ghost
    
    if (!ghostCandidates.has(bid)) {
      ghostCandidates.set(bid, { domains: new Set(), hits: 0 })
    }
    const info = ghostCandidates.get(bid)
    if (e.domain) info.domains.add(e.domain)
    info.hits += (e.hits || 1)
  }
  
  const ghosts = []
  for (const [bundleId, info] of ghostCandidates.entries()) {
    // Filtra apenas apps com tráfego significativo (>= 3 hits) OU que acessaram domínios suspeitos
    if (info.hits >= 3 || [...info.domains].some(d => 
        SUSPICIOUS_TLDS.some(tld => d.endsWith(tld)) || 
        SUSPICIOUS_DOMAIN_WORDS.some(word => d.includes(word)))) {
      ghosts.push({
        bundleID: bundleId,
        domains: [...info.domains],
        hits: info.hits
      })
    }
  }
  return ghosts
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
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(d)) continue
    for (let [indicator, desc] of Object.entries(KNOWN_CHEAT_INFRA)) {
      if (d === indicator.toLowerCase() || d.endsWith("." + indicator.toLowerCase())) {
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

  
  return { findings, netEntries, cheatAppFindings, knownCheatFindings, ghostAppFindings: [], proxyLoginFindings }
}

function wait(ms) {
  return new Promise(resolve => Timer.schedule(ms, false, resolve))
}


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
    let bundleList = p.bundles.map(b => `<span class="bundle" style="color:#ff69b4; font-weight:bold;">${b}</span>`).join(" ")
    criticalCards += `
    <div class="card critical-card">
      <div class="card-header">
        <span class="badge critical"><span class="badge-icon">⚠️</span> PROXY BYPASS LOGIN — CRÍTICO</span>
        <span class="conns">${p.hits} conexões</span>
      </div>
      <div class="card-domain">${p.domain}</div>
      <div class="grid">
        <div class="row"><span class="label">Detecção</span><span class="val reason">Domínio exclusivo do Free Fire chamado por app não autorizado — padrão de proxy interceptando login</span></div>
        <div class="row"><span class="label">App interceptor</span><span class="val">${bundleList}</span></div>
        <div class="row"><span class="label">Esperado de</span><span class="val"><span class="bundle legit">com.dts.freefireth</span> <span class="bundle legit">com.dts.freefiremax</span></span></div>
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
          <span class="ghost-label">⚠ Ausente no app_usage</span>
        </div>
      </div>`
    }).join("")
    ghostSection = `
  <div class="ghost-banner">
    <div class="ghost-header">
      <span class="ghost-icon">👻</span>
      <div class="ghost-title-block">
        <div class="ghost-title">Apps com domínios suspeitos — ausentes no app_usage</div>
        <div class="ghost-sub">Presente no relatório de rede mas não encontrado nos dados de análise</div>
      </div>
      <span class="ghost-count">${ghostAppFindings.length}</span>
    </div>
    <div class="ghost-rows">${ghostRows}</div>
    <div class="ghost-hint">⚠ App pode ter sido instalado via sideload ou o arquivo app_usage não cobre o período</div>
  </div>`
  }

  for (let k of knownCheatFindings) {
    let bundleList = k.bundles.map(b => `<span class="bundle">${b}</span>`).join(" ")
    let indicatorKind = (k.indicator.includes(".") && !k.indicator.match(/^\d+\.\d+/)) ? "domain" : "ip"
    let indicatorText = indicatorKind === "domain" ? "Domínio" : "IP"
    criticalCards += `
    <div class="card critical-card">
      <div class="card-header">
        <span class="badge critical"><span class="badge-icon">⚡</span> CRÍTICO — CHEAT CONFIRMADO</span>
        <span class="conns">${k.hits} conexões</span>
      </div>
      <div class="card-domain">${k.indicator}</div>
      <div class="grid">
        <div class="row"><span class="label">Cheat</span><span class="val reason">${k.desc}</span></div>
        <div class="row"><span class="label">Indicador</span><span class="val" data-i18n-indicator="${indicatorKind}">${indicatorText} detectado no relatório de rede</span></div>
        ${bundleList ? `<div class="row"><span class="label">Usado por</span><span class="val">${bundleList}</span></div>` : ""}
      </div>
    </div>`
  }

  for (let f of cheatAppFindings) {
    let suspectDomainSet = new Set(findings.map(f2 => f2.domain))
    let suspectDomains = f.domains.filter(d => suspectDomainSet.has(d))
    let suspectRows = suspectDomains.map(d => {
      let match = findings.find(f2 => f2.domain === d)
      let info = match ? ` — ${match.isp} (${match.country})` : ""
      return `<div class="domain-row"><span class="domain-badge ${match ? match.severity.toLowerCase() : ""}">${match ? (match.severity === "HIGH" ? "SUSPEITO" : "POSSÍVEL") : ""}</span> ${d}${info}</div>`
    }).join("")
    criticalCards += `
    <div class="card critical-card">
      <div class="card-header">
        <span class="badge critical"><span class="badge-icon">🛡️</span> CRÍTICO — APP PROXY/CHEAT</span>
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
    cards = `<div class="ok">✓ Nenhum IP VPS / Hosting / Proxy detectado.</div>`
  } else {
    for (let f of displayFindings) {
      let tag = f.tldSuspect ? "DOMÍNIO SUSPEITO" : f.hosting ? "VPS/HOSTING" : f.proxy ? "PROXY/VPN" : "NUVEM"
      let cls = f.tldSuspect ? "tld-flag" : f.severity === "HIGH" ? "high" : "medium"
      let sev = f.tldSuspect ? "⚠️ DOMÍNIO SUSPEITO" : f.severity === "HIGH" ? "SUSPEITO" : "POSSÍVEL"
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
          <div class="row"><span class="label">País</span><span class="val">${f.country} / ${f.city}</span></div>
          <div class="row"><span class="label">Provedor</span><span class="val isp">${f.isp}</span></div>
          <div class="row"><span class="label">Org</span><span class="val">${f.org}</span></div>
          ${f.reverse ? `<div class="row"><span class="label">rDNS</span><span class="val rdns">${f.reverse}</span></div>` : ""}
          ${f.probe ? `<div class="row"><span class="label">HTTP</span><span class="val">
            ${f.probe.online
              ? `<span class="http-on">● Online</span>${f.probe.status ? ` — HTTP ${f.probe.status}` : ""}${f.probe.banner ? ` — <span class="http-banner">${f.probe.banner}</span>` : ""}`
              : `<span class="http-off">● Offline / Sem resposta</span>`
            }
          </span></div>` : ""}
          <div class="row"><span class="label">Motivo</span><span class="val reason" data-reasons='${JSON.stringify(f.reasons)}'>${f.reasons.join("<br>")}</span></div>
          <div class="row"><span class="label">Usado por</span><span class="val">${bundleList}</span></div>
        </div>
      </div>`
    }
  }

  let uptimeBg    = uptimeWarning ? "background:linear-gradient(90deg,#3a1a2a,#2a0f1a)" : "background:#1a0f2a"
  let uptimeDotCl = uptimeWarning ? "background:#ff66b2;box-shadow:0 0 8px #ff66b2" : "background:#ff99cc;box-shadow:0 0 6px #ff99cc"
  let uptimeWarnBadge = uptimeWarning
    ? `<span style="margin-left:8px;background:#3a1a2a;color:#ff99cc;border:1px solid #ff69b4;font-size:9px;padding:2px 8px;border-radius:20px;font-weight:bold">⚠️ MENOS DE 20MIN — Relatório pode não cobrir a partida inteira!</span>`
    : ""

  let rootsWarn = ""
  if (ipsMeta && ipsMeta.rootsInstalled > 0) {
    rootsWarn = `
  <div class="roots-banner">
    <div class="roots-icon">🔐</div>
    <div>
      <div class="roots-label">Certificado Raiz Suspeito</div>
      <div class="roots-detail" data-roots-count="${ipsMeta.rootsInstalled}">${ipsMeta.rootsInstalled} certificado${ipsMeta.rootsInstalled > 1 ? "s" : ""} raiz instalado${ipsMeta.rootsInstalled > 1 ? "s" : ""} (roots_installed: ${ipsMeta.rootsInstalled})</div>
      <div class="roots-hint">Certificados raiz permitem interceptar tráfego HTTPS — padrão de proxy cheat tipo mitmproxy</div>
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
          <span class="ips-badge ${f.eventType === 'launches' ? 'launched' : 'installed'}">${f.eventType === 'launches' ? '▶ Aberto' : '⬇ Instalado'}</span>
        </div>
      </div>`).join("")

    ipsSection = `
  <div class="ips-banner">
    <div class="ips-header">
      <span class="ips-icon">📲</span>
      <div class="ips-header-text">
        <div class="ips-title">Apps Suspeitos Instalados</div>
        <div class="ips-sub">Detectados no histórico de uso do dispositivo</div>
      </div>
      <span class="ips-count">${ipsFindings.length}</span>
    </div>
    <div class="ips-rows">${ipsRows}</div>
    <div class="ips-hint">⚠ Apps encontrados nos dados de análise do iPhone — indicam presença de ferramentas de cheat/jailbreak/proxy</div>
  </div>`
  }

  let staleBanner = staleWarning ? `
  <div class="stale-banner">
    <div class="stale-left">⏰</div>
    <div>
      <div class="stale-label">Arquivo possivelmente antigo</div>
      <div class="stale-time">Último registro: <strong>${staleStr}</strong></div>
      <div class="stale-hint">Suspeita: arquivo gerado fora do período da partida para esconder atividade.</div>
    </div>
  </div>` : ""

  function loginColor(type) {
    if (type.includes("Facebook"))  return "#e84393"
    if (type.includes("Twitter") || type.includes("X")) return "#1da1f2"
    if (type.includes("Gmail"))     return "#ea4335"
    if (type.includes("VK"))        return "#4a76a8"
    return "#ff99cc"
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
        <span class="ff-login-badge" style="background:${col}22;color:${col};border:1px solid ${col}66">${s.loginType}</span>
      </div>`
  }).join("")

  let ffBanner = ffStr ? `
  <div class="ff-banner">
    <div class="ff-left">🔥</div>
    <div class="ff-info">
      <div class="ff-label">${ffVersion || "Free Fire"} — Sessões no período</div>
      ${ffSessionRows}
      <div class="ff-sessions">${ffEntries.length} inicializações registradas no período</div>
      <div class="ff-hint">Se a última abertura foi após a partida → aplique o W.O!</div>
    </div>
  </div>` : ""

  let appStoreBanner = appStoreStr ? `
  <div class="appstore-banner">
    <div class="appstore-left">🛒</div>
    <div>
      <div class="appstore-label">App Store aberta</div>
      <div class="appstore-time">${appStoreStr}</div>
      <div class="appstore-hint">Se foi após a partida → aplique o W.O!</div>
    </div>
  </div>` : ""

  
  let rawHtml = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --pink: #ff69b4;
    --hot-pink: #ff1493;
    --deep-pink: #ff00cc;
    --neon-pink: #ff6ec7;
    --soft-pink: #ffb6c1;
    --cyan: #00ffff;
    --dark-bg: #06060f;
    --panel-bg: #0a0a1e;
    --card-bg: #0f0f28;
    --border-glow: rgba(255, 105, 180, 0.4);
    --text-primary: #e8e0ff;
    --text-secondary: #b8a8d8;
    --gradient-pink: linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #ff00cc 100%);
    --gradient-dark: linear-gradient(180deg, #0a0a1e 0%, #06060f 100%);
    --gradient-card: linear-gradient(145deg, rgba(255,105,180,0.06) 0%, rgba(15,15,40,0.9) 50%, rgba(255,105,180,0.04) 100%);
    --shadow-neon: 0 0 20px rgba(255, 105, 180, 0.5), 0 0 40px rgba(255, 20, 147, 0.25), 0 0 80px rgba(255, 0, 204, 0.15);
    --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(255, 105, 180, 0.2);
    --glass: rgba(10, 10, 30, 0.75);
    --radius-sm: 8px;
    --radius: 14px;
    --radius-lg: 20px;
    --radius-xl: 28px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #06060f;
    background-image:
      radial-gradient(ellipse at 20% 5%, rgba(255, 105, 180, 0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 95%, rgba(255, 0, 204, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(0, 255, 255, 0.03) 0%, transparent 70%),
      radial-gradient(ellipse at 10% 50%, rgba(138, 43, 226, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 10%, rgba(255, 20, 147, 0.06) 0%, transparent 45%);
    color: #e8e0ff;
    font-family: 'Rajdhani', 'VT323', monospace;
    font-size: 16px;
    line-height: 1.6;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* Animated background particles */
  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(1px 1px at 15% 25%, rgba(255, 105, 180, 0.6), transparent),
      radial-gradient(1px 1px at 35% 60%, rgba(0, 255, 255, 0.4), transparent),
      radial-gradient(1px 1px at 55% 15%, rgba(255, 105, 180, 0.5), transparent),
      radial-gradient(1px 1px at 70% 75%, rgba(255, 20, 147, 0.5), transparent),
      radial-gradient(1px 1px at 85% 35%, rgba(0, 255, 255, 0.35), transparent),
      radial-gradient(1px 1px at 25% 80%, rgba(255, 105, 180, 0.4), transparent),
      radial-gradient(1.5px 1.5px at 45% 40%, rgba(255, 0, 204, 0.55), transparent),
      radial-gradient(1px 1px at 60% 85%, rgba(0, 255, 255, 0.3), transparent),
      radial-gradient(1.5px 1.5px at 75% 20%, rgba(255, 105, 180, 0.5), transparent),
      radial-gradient(1px 1px at 5% 45%, rgba(255, 20, 147, 0.4), transparent),
      radial-gradient(1px 1px at 92% 55%, rgba(0, 255, 255, 0.35), transparent),
      radial-gradient(1px 1px at 40% 10%, rgba(255, 105, 180, 0.45), transparent),
      radial-gradient(1.5px 1.5px at 18% 70%, rgba(255, 0, 204, 0.4), transparent),
      radial-gradient(1px 1px at 50% 92%, rgba(0, 255, 255, 0.3), transparent),
      radial-gradient(1px 1px at 88% 65%, rgba(255, 105, 180, 0.4), transparent);
    animation: twinkle 4s ease-in-out infinite alternate;
  }

  @keyframes twinkle {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }

  /* Scan line overlay */
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 998;
    background: repeating-linear-gradient(0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.03) 2px,
        rgba(0, 0, 0, 0.03) 4px);
    animation: scanlines 0.1s linear infinite;
  }

  @keyframes scanlines {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 4px;
    }
  }

  /* Hello Kitty sprite */
  .kitty-sprite {
    position: fixed;
    bottom: 14px;
    right: 14px;
    font-size: 38px;
    opacity: 0.18;
    pointer-events: none;
    z-index: 999;
    text-shadow: 0 0 12px #ff69b4, 0 0 24px rgba(255, 105, 180, 0.6), 0 0 48px rgba(255, 20, 147, 0.3);
    animation: kittyFloat 3s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(255, 105, 180, 0.5));
  }

  @keyframes kittyFloat {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    25% {
      transform: translateY(-6px) scale(1.05);
    }
    50% {
      transform: translateY(-3px) scale(1.02);
    }
    75% {
      transform: translateY(-8px) scale(1.06);
    }
  }

  /* Opa wrapper */
  .Opa {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    padding: 10px 14px;
  }

  /* Hero section */
  .hero-eyebrow {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-align: center;
    color: #ff99cc;
    text-shadow: 0 0 10px rgba(255, 105, 180, 0.7), 0 0 20px rgba(255, 20, 147, 0.4);
    margin-bottom: 6px;
    animation: pulseGlow 2s ease-in-out infinite;
    background: linear-gradient(90deg, transparent, rgba(255, 105, 180, 0.15), transparent);
    padding: 6px 20px;
    border-radius: 20px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }

  @keyframes pulseGlow {
    0%,
    100% {
      text-shadow: 0 0 10px rgba(255, 105, 180, 0.7), 0 0 20px rgba(255, 20, 147, 0.4);
    }
    50% {
      text-shadow: 0 0 20px rgba(255, 105, 180, 1), 0 0 40px rgba(255, 20, 147, 0.7), 0 0 60px rgba(255, 0, 204, 0.5);
    }
  }

  .hero-name {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 3px;
    text-align: center;
    background: var(--gradient-pink);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    filter: drop-shadow(0 0 18px rgba(255, 105, 180, 0.8)) drop-shadow(0 0 35px rgba(255, 20, 147, 0.4));
    animation: titleGlitch 2.5s infinite;
    position: relative;
    margin: 8px 0;
  }

  .hero-name span {
    -webkit-text-fill-color: #ffb3d9;
    animation: kittyPulse 1s alternate infinite;
    display: inline-block;
  }

  @keyframes titleGlitch {
    0%,
    100% {
      filter: drop-shadow(0 0 18px rgba(255, 105, 180, 0.8)) drop-shadow(0 0 35px rgba(255, 20, 147, 0.4));
    }
    2% {
      filter: drop-shadow(-3px 0 #ff00cc) drop-shadow(3px 0 #00ffff) drop-shadow(0 0 18px rgba(255, 105, 180, 0.8));
    }
    4% {
      filter: drop-shadow(0 0 18px rgba(255, 105, 180, 0.8)) drop-shadow(0 0 35px rgba(255, 20, 147, 0.4));
    }
    5% {
      filter: drop-shadow(3px 0 #ff00cc) drop-shadow(-2px 0 #00ffff) drop-shadow(0 0 18px rgba(255, 105, 180, 0.8));
    }
    6% {
      filter: drop-shadow(0 0 18px rgba(255, 105, 180, 0.8)) drop-shadow(0 0 35px rgba(255, 20, 147, 0.4));
    }
  }

  @keyframes kittyPulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.15);
      opacity: 1;
    }
  }

  .hero-credits {
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    color: #c8b8e8;
    margin-bottom: 10px;
    letter-spacing: 1px;
    opacity: 0.85;
  }
  .hero-credits .credit-name {
    color: #ff99cc;
    font-weight: 700;
    text-shadow: 0 0 6px rgba(255, 105, 180, 0.5);
  }

  /* Language bar */
  .lang-bar {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 12px 0 14px;
    flex-wrap: wrap;
  }

  button.lang-btn {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 9px;
    letter-spacing: 1.5px;
    padding: 9px 18px;
    border-radius: 25px;
    cursor: pointer;
    background: rgba(20, 20, 50, 0.7);
    border: 2px solid rgba(255, 105, 180, 0.45);
    color: #ffb6c1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
  }

  button.lang-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 105, 180, 0.2), transparent);
    transition: left 0.5s;
  }
  button.lang-btn:hover::before {
    left: 100%;
  }
  button.lang-btn:hover {
    border-color: #ff69b4;
    box-shadow: 0 0 16px rgba(255, 105, 180, 0.5), inset 0 0 10px rgba(255, 105, 180, 0.1);
    transform: translateY(-2px);
    color: #fff;
  }
  button.lang-btn.active {
    background: var(--gradient-pink);
    color: #fff;
    border-color: #ff69b4;
    box-shadow: 0 0 22px rgba(255, 105, 180, 0.7), 0 0 40px rgba(255, 20, 147, 0.35);
    font-weight: 700;
    letter-spacing: 2px;
    animation: btnPulse 2s ease-in-out infinite;
  }
  @keyframes btnPulse {
    0%,
    100% {
      box-shadow: 0 0 22px rgba(255, 105, 180, 0.7), 0 0 40px rgba(255, 20, 147, 0.35);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 105, 180, 1), 0 0 55px rgba(255, 20, 147, 0.55);
    }
  }

  .hero-file {
    text-align: center;
    font-size: 13px;
    color: #a898c8;
    margin-bottom: 12px;
    padding: 8px 16px;
    background: rgba(255, 105, 180, 0.04);
    border-radius: 20px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(255, 105, 180, 0.15);
  }
  .hero-file strong {
    color: #ff99cc;
    margin-right: 4px;
  }

  /* Hero grid cards */
  .hero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  .hg-card {
    background: var(--gradient-card);
    border: 1.5px solid rgba(255, 105, 180, 0.3);
    border-radius: var(--radius);
    padding: 14px 12px;
    text-align: center;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  }
  .hg-card::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 105, 180, 0.08) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .hg-card:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 105, 180, 0.7);
    box-shadow: 0 6px 28px rgba(255, 105, 180, 0.25), 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  .hg-card:hover::after {
    opacity: 1;
  }
  .hg-card .hg-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #b8a8d8;
    margin-bottom: 6px;
    font-weight: 600;
  }
  .hg-card .hg-val {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(180deg, #fff 0%, #ffb6c1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 6px rgba(255, 105, 180, 0.5));
  }
  .hg-card .hg-val.cyan {
    background: linear-gradient(180deg, #fff 0%, #00ffff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.5));
  }
  .hg-card .hg-val.warn {
    background: linear-gradient(180deg, #fff 0%, #ff6644 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 8px rgba(255, 100, 60, 0.7));
    animation: warnPulse 1s ease-in-out infinite;
  }
  .hg-card-full {
    grid-column: 1 / -1;
    background: linear-gradient(145deg, rgba(255, 105, 180, 0.1) 0%, rgba(15, 15, 40, 0.9) 50%, rgba(255, 105, 180, 0.06) 100%);
    border-color: rgba(255, 105, 180, 0.5) !important;
  }
  .hg-card-warn {
    border-color: rgba(255, 100, 60, 0.7) !important;
    animation: warnBorderPulse 1.5s ease-in-out infinite;
  }
  @keyframes warnBorderPulse {
    0%,
    100% {
      border-color: rgba(255, 100, 60, 0.7);
      box-shadow: 0 0 10px rgba(255, 80, 40, 0.3);
    }
    50% {
      border-color: rgba(255, 60, 20, 1);
      box-shadow: 0 0 22px rgba(255, 80, 40, 0.6);
    }
  }
  @keyframes warnPulse {
    0%,
    100% {
      filter: drop-shadow(0 0 8px rgba(255, 100, 60, 0.7));
    }
    50% {
      filter: drop-shadow(0 0 18px rgba(255, 60, 20, 1));
    }
  }

  /* Uptime bar */
  .uptime-bar {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto 16px;
    padding: 12px 18px;
    background: linear-gradient(135deg, rgba(10, 10, 30, 0.85), rgba(20, 10, 35, 0.9));
    border: 1.5px solid rgba(255, 105, 180, 0.35);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    gap: 10px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);
    flex-wrap: wrap;
    border-bottom: 3px solid #ff69b4;
  }
  .uptime-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #00ff88;
    box-shadow: 0 0 10px #00ff88, 0 0 24px rgba(0, 255, 136, 0.5);
    flex-shrink: 0;
    animation: dotPulse 1.5s ease-in-out infinite;
  }
  @keyframes dotPulse {
    0%,
    100% {
      box-shadow: 0 0 10px #00ff88, 0 0 24px rgba(0, 255, 136, 0.5);
    }
    50% {
      box-shadow: 0 0 20px #00ff88, 0 0 40px rgba(0, 255, 136, 0.8);
    }
  }
  .uptime-text {
    font-family: 'Rajdhani', sans-serif;
    font-size: 15px;
    color: #d0c0f0;
    font-weight: 500;
    flex: 1;
    min-width: 140px;
  }
  .uptime-text strong {
    color: #ffb6c1;
    font-weight: 700;
  }
  .uptime-bar span {
    font-family: 'Orbitron', sans-serif;
    font-size: 9px;
    color: #ff6644;
    background: rgba(255, 60, 20, 0.12);
    padding: 5px 10px;
    border-radius: 14px;
    border: 1px solid rgba(255, 80, 40, 0.4);
    animation: warnPulse 1s ease-in-out infinite;
    letter-spacing: 1px;
  }

  /* Content area */
  .content {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    padding: 0 6px;
  }

  /* Banners */
  .stale-banner,
  .ff-banner,
  .appstore-banner,
  .ips-banner,
  .ghost-banner,
  .roots-banner {
    background: var(--gradient-card);
    border: 1.5px solid rgba(255, 105, 180, 0.35);
    border-radius: var(--radius);
    padding: 14px 16px;
    margin-bottom: 12px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
    border-left: 5px solid #ff69b4;
    position: relative;
    overflow: hidden;
  }
  .stale-banner::before,
  .ff-banner::before,
  .appstore-banner::before,
  .ips-banner::before,
  .ghost-banner::before,
  .roots-banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: var(--gradient-pink);
    border-radius: 3px 0 0 3px;
    box-shadow: 0 0 14px rgba(255, 105, 180, 0.6);
  }
  .stale-banner:hover,
  .ff-banner:hover,
  .appstore-banner:hover,
  .ips-banner:hover,
  .ghost-banner:hover,
  .roots-banner:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 105, 180, 0.6);
    box-shadow: 0 8px 30px rgba(255, 105, 180, 0.2), 0 3px 10px rgba(0, 0, 0, 0.5);
  }
  .stale-label,
  .ff-label,
  .appstore-label,
  .ips-label,
  .ghost-label,
  .roots-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    letter-spacing: 2px;
    color: #ff99cc;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .stale-hint,
  .ff-hint,
  .appstore-hint,
  .ips-hint,
  .ghost-hint,
  .roots-hint {
    font-size: 13px;
    color: #c0b0e0;
    opacity: 0.85;
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 0.5px;
  }
  .stale-time,
  .ff-tag {
    font-family: 'Orbitron', sans-serif;
    font-size: 9px;
    color: #ffb6c1;
    background: rgba(255, 105, 180, 0.1);
    padding: 4px 10px;
    border-radius: 12px;
    display: inline-block;
    margin: 3px 4px;
    border: 1px solid rgba(255, 105, 180, 0.25);
  }

  /* Summary stats */
  .summary {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .stat {
    flex: 1;
    min-width: 90px;
    background: var(--gradient-card);
    border: 2px solid rgba(255, 105, 180, 0.3);
    border-radius: var(--radius-lg);
    padding: 18px 14px;
    text-align: center;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .stat::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 3px;
    border-radius: 3px;
    background: var(--gradient-pink);
    opacity: 0.6;
  }
  .stat:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(255, 105, 180, 0.25);
    border-color: rgba(255, 105, 180, 0.6);
  }
  .stat .num {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 34px;
    font-weight: 900;
    background: linear-gradient(180deg, #fff 0%, #ff69b4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 8px rgba(255, 105, 180, 0.6));
    line-height: 1.1;
  }
  .stat .lbl {
    font-family: 'Orbitron', sans-serif;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #b8a8d8;
    margin-top: 4px;
    font-weight: 600;
  }

  /* Section headers */
  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: var(--radius);
    margin-bottom: 10px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    position: relative;
    overflow: hidden;
  }
  .section-header::after {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0.2;
    pointer-events: none;
  }
  .sh-critical {
    background: linear-gradient(135deg, rgba(255, 0, 100, 0.2) 0%, rgba(10, 10, 30, 0.85) 100%);
    border: 2px solid rgba(255, 0, 100, 0.5);
    box-shadow: 0 0 20px rgba(255, 0, 100, 0.2);
    animation: criticalGlow 2s ease-in-out infinite;
  }
  @keyframes criticalGlow {
    0%,
    100% {
      box-shadow: 0 0 20px rgba(255, 0, 100, 0.2);
    }
    50% {
      box-shadow: 0 0 35px rgba(255, 0, 100, 0.4);
    }
  }
  .sh-high {
    background: linear-gradient(135deg, rgba(255, 80, 40, 0.15) 0%, rgba(10, 10, 30, 0.85) 100%);
    border: 2px solid rgba(255, 80, 40, 0.45);
    box-shadow: 0 0 16px rgba(255, 80, 40, 0.15);
  }
  .sh-medium {
    background: linear-gradient(135deg, rgba(255, 170, 0, 0.12) 0%, rgba(10, 10, 30, 0.85) 100%);
    border: 2px solid rgba(255, 170, 0, 0.4);
    box-shadow: 0 0 12px rgba(255, 170, 0, 0.1);
  }
  .sh-icon {
    font-size: 28px;
    flex-shrink: 0;
    filter: drop-shadow(0 0 6px rgba(255, 105, 180, 0.5));
  }
  .sh-text {
    flex: 1;
    min-width: 0;
  }
  .sh-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
    margin-bottom: 2px;
  }
  .sh-sub {
    font-size: 12px;
    color: #c0b0e0;
    opacity: 0.8;
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 0.5px;
  }
  .sh-count {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 22px;
    font-weight: 900;
    background: var(--gradient-pink);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 10px rgba(255, 105, 180, 0.7));
    flex-shrink: 0;
    min-width: 40px;
    text-align: center;
  }

  /* Card panels */
  .card {
    background: var(--gradient-card);
    border: 1.5px solid rgba(255, 105, 180, 0.3);
    border-radius: var(--radius);
    padding: 16px;
    margin-bottom: 10px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: var(--shadow-card);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(255, 105, 180, 0.08) 0%, transparent 70%);
    border-radius: 0 0 0 60px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .card:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 105, 180, 0.6);
    box-shadow: 0 10px 35px rgba(255, 105, 180, 0.22), 0 4px 12px rgba(0, 0, 0, 0.5);
  }
  .card:hover::before {
    opacity: 1;
  }

  /* Badges */
  .badge {
    font-family: 'Orbitron', 'Press Start 2P', sans-serif;
    font-size: 7px;
    letter-spacing: 1.5px;
    padding: 5px 10px;
    border-radius: 14px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
  }
  .badge.critical {
    background: rgba(255, 0, 100, 0.2);
    border: 1.5px solid #ff0066;
    color: #ff4488;
    box-shadow: 0 0 12px rgba(255, 0, 100, 0.35);
    animation: badgeCriticalPulse 2s ease-in-out infinite;
  }
  @keyframes badgeCriticalPulse {
    0%,
    100% {
      box-shadow: 0 0 12px rgba(255, 0, 100, 0.35);
    }
    50% {
      box-shadow: 0 0 22px rgba(255, 0, 100, 0.6);
    }
  }
  .badge.high {
    background: rgba(255, 60, 30, 0.18);
    border: 1.5px solid #ff5533;
    color: #ff6644;
    box-shadow: 0 0 10px rgba(255, 60, 30, 0.3);
  }
  .badge.medium {
    background: rgba(255, 150, 0, 0.15);
    border: 1.5px solid #ff9944;
    color: #ffaa55;
    box-shadow: 0 0 8px rgba(255, 150, 0, 0.2);
  }
  .badge.tld-flag {
    background: rgba(255, 80, 40, 0.18);
    border: 1.5px solid #ff5533;
    color: #ff7755;
    box-shadow: 0 0 10px rgba(255, 80, 40, 0.3);
  }

  /* Labels and values */
  .label {
    font-family: 'Orbitron', sans-serif;
    font-size: 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #b8a8d8;
    font-weight: 600;
  }
  .val {
    font-family: 'Rajdhani', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #e0d0ff;
    word-break: break-all;
  }
  .rdns,
  .isp {
    font-family: 'Rajdhani', 'VT323', monospace;
    font-size: 14px;
    color: #d0c0f0;
  }
  .reason {
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    color: #ffaa88;
    line-height: 1.5;
  }
  .card-domain {
    font-family: 'Orbitron', monospace;
    font-size: 10px;
    color: #ffd966;
    word-break: break-all;
    letter-spacing: 0.5px;
  }
  .none {
    color: #88ffaa;
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  .conns {
    font-family: 'Orbitron', sans-serif;
    font-size: 9px;
    color: #b8a8d8;
    letter-spacing: 1px;
  }
  .sub {
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    color: #a898c8;
  }

  /* Ghost rows */
  .ghost-row {
    background: rgba(20, 15, 40, 0.8);
    border-left: 5px solid #ff69b4;
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    margin: 6px 0;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 105, 180, 0.2);
    border-left-width: 5px;
  }
  .ghost-row:hover {
    border-color: rgba(255, 105, 180, 0.6);
    box-shadow: 0 0 14px rgba(255, 105, 180, 0.2);
    background: rgba(25, 18, 45, 0.9);
  }
  .ghost-bundle {
    color: #ffb3d9;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  /* OK / Clean indicator */
  .ok {
    background: rgba(0, 40, 20, 0.6);
    border: 2px solid #88ffaa;
    border-radius: var(--radius);
    padding: 12px 16px;
    text-align: center;
    color: #88ffaa;
    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    letter-spacing: 2px;
    text-shadow: 0 0 6px #00ff66;
    box-shadow: 0 0 14px rgba(0, 255, 100, 0.15);
    margin-bottom: 10px;
  }

  /* Divider */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 105, 180, 0.4), rgba(0, 255, 255, 0.2), rgba(255, 105, 180, 0.4), transparent);
    margin: 12px 0;
    border-radius: 1px;
  }

  /* Footer */
  .footer-gamer {
    text-align: center;
    font-size: 9px;
    padding: 20px 10px;
    border-top: 2px dashed rgba(255, 105, 180, 0.4);
    margin-top: 20px;
    color: #ff99cc;
    font-family: 'Orbitron', 'Press Start 2P', monospace;
    letter-spacing: 2px;
    text-shadow: 0 0 8px rgba(255, 105, 180, 0.5);
    background: linear-gradient(90deg, transparent, rgba(255, 105, 180, 0.04), transparent);
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 7px;
    background: #06060f;
  }
  ::-webkit-scrollbar-track {
    background: #0a0a1e;
    border-radius: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff69b4, #ff1493);
    border-radius: 7px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #ff99cc, #ff69b4);
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }

  /* Responsive */
  @media (max-width: 600px) {
    .hero-name {
      font-size: 22px;
      letter-spacing: 1px;
    }
    .hero-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 7px;
    }
    .hg-card {
      padding: 10px 8px;
    }
    .hg-card .hg-val {
      font-size: 16px;
    }
    .stat .num {
      font-size: 26px;
    }
    .summary {
      gap: 6px;
    }
    .card {
      padding: 12px 10px;
    }
    .section-header {
      padding: 10px 12px;
    }
    .sh-title {
      font-size: 9px;
    }
  }

  @media (max-width: 380px) {
    .hero-grid {
      grid-template-columns: 1fr 1fr;
      gap: 5px;
    }
    .hg-card .hg-label {
      font-size: 7px;
      letter-spacing: 1px;
    }
    .hg-card .hg-val {
      font-size: 14px;
    }
    button.lang-btn {
      font-size: 7px;
      padding: 6px 10px;
      letter-spacing: 1px;
    }
  }
</style>
</head>
<body>

<div class="kitty-sprite" aria-hidden="true">🐱✨💖</div>

<div class="Opa">
  <div class="hero-eyebrow">🎀 SCANNER IOS 🎀</div>
  <div class="hero-name">Dizzy<span>🐱</span></div>
  <div class="hero-credits">Criado por <span class="credit-name">Dizzy</span> &middot; <span class="credit-name">Clear</span> &middot; <span class="credit-name">💖</span></div>
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
    🎮 🎀 | DIZZY Scanner IOS✨
  </div>
</div>

<script>
var TRANSLATIONS = {
  pt: {
    eyebrow: "Scanner iOS", start: "Início", lastRecord: "Último registro", uniqueDomains: "Domínios únicos",
    totalConns: "Total conexões", monitoredFor: "Monitorado há", criticalLabel: "Crítico", suspectLabel: "Suspeito",
    possibleLabel: "Possível", appProxyTitle: "Apps Proxy / Cheat Detectados", appProxySub: "Aplicativos conhecidos de interceptação de tráfego",
    suspectIPsTitle: "IPs Suspeitos", suspectIPsSub: "VPS / Hosting / Proxy confirmados", possibleIPsTitle: "IPs Possíveis",
    possibleIPsSub: "Infraestrutura cloud / datacenter", labelIP: "IP", labelCountry: "País", labelProvider: "Provedor",
    labelOrg: "Org", labelRDNS: "rDNS", labelHTTP: "HTTP", labelReason: "Motivo", labelUsedBy: "Usado por", labelApp: "App",
    labelSuspectIPs: "IPs suspeitos", noneDetected: "Nenhum IP suspeito detectado", noVPS: "✓ Nenhum IP VPS / Hosting / Proxy detectado.",
    staleLabel: "Arquivo possivelmente antigo", staleHint: "Suspeita: arquivo gerado fora do período da partida para esconder atividade.",
    ffLabel: "Sessões no período", ffLastOpen: "Última abertura", ffFirstOpen: "Primeira abertura", ffSessions: "inicializações registradas no período",
    ffHint: "Se a última abertura foi após a partida → aplique o W.O!", appStoreLabel: "App Store aberta", appStoreHint: "Se foi após a partida → aplique o W.O!",
    uptimeLess20: "⚠️ MENOS DE 20MIN — Relatório pode não cobrir a partida inteira!", badgeCritical: "⚠️ CRÍTICO — APP PROXY/CHEAT",
    badgeSuspect: "SUSPEITO", badgePossible: "POSSÍVEL", badgeDomainSuspect: "⚠️ DOMÍNIO SUSPEITO", of: "de",
    online: "● Online", offline: "● Offline / Sem resposta", lastRecord2: "Último registro:", conns: "conexões", domains: "domínios",
    labelCheat: "Cheat", labelIndicator: "Indicador", indicatorDomain: "Domínio detectado no relatório de rede", indicatorIP: "IP detectado no relatório de rede",
    iosVersionLabel: "Versão iOS", rootsCardLabel: "⚠ Certificados raiz", rootsLabel: "Certificado Raiz Suspeito",
    rootsDetail1: "certificado raiz instalado", rootsDetailN: "certificados raiz instalados",
    rootsHint: "Certificados raiz permitem interceptar tráfego HTTPS — padrão de proxy cheat tipo mitmproxy",
    ipsTitle: "Apps Suspeitos Instalados", ipsSub: "Detectados no histórico de uso do dispositivo",
    ipsHint: "⚠ Apps encontrados nos dados de análise do iPhone — indicam presença de ferramentas de cheat/jailbreak/proxy",
    ipsLaunched: "▶ Aberto", ipsInstalled: "⬇ Instalado", badgeKnownCheat: "⚡ CRÍTICO — CHEAT CONFIRMADO",
    reasonTLD: function(tld){ return "TLD suspeito detectado: \\"" + tld + "\\" — padrão comum em cheats/proxies"; },
    reasonWord: function(word){ return "Palavra suspeita no domínio: \\"" + word + "\\""; },
    reasonVPS: function(isp){ return "VPS/HOSTING — ISP: " + isp; }, reasonProxy: "PROXY / VPN detectado",
    reasonCF: function(asn){ return "Cloudflare acessado via IP direto — padrão de proxy cheat (" + asn + ")"; },
    reasonASN: function(asn,desc){ return "ASN de cheat proxy conhecido: " + asn + " — " + desc; },
    reasonRDNS: function(rdns){ return "rDNS de servidor: " + rdns; },
    reasonHostinger: function(rdns){ return "Hostinger VPS (padrao cheat proxy BR): " + rdns; },
    reasonNoRDNS: "Sem rDNS (PTR) — tipico de VPS usado como proxy",
    reasonOrg: function(kw){ return "Org/ISP associado a hospedagem/cheat proxy: " + kw; },
  },
  en: {
    eyebrow: "iOS Scanner", start: "Start", lastRecord: "Last record", uniqueDomains: "Unique domains",
    totalConns: "Total connections", monitoredFor: "Monitored for", criticalLabel: "Critical", suspectLabel: "Suspicious",
    possibleLabel: "Possible", appProxyTitle: "Proxy / Cheat Apps Detected", appProxySub: "Known traffic interception applications",
    suspectIPsTitle: "Suspicious IPs", suspectIPsSub: "VPS / Hosting / Confirmed Proxy", possibleIPsTitle: "Possible IPs",
    possibleIPsSub: "Cloud / datacenter infrastructure", labelIP: "IP", labelCountry: "Country", labelProvider: "Provider",
    labelOrg: "Org", labelRDNS: "rDNS", labelHTTP: "HTTP", labelReason: "Reason", labelUsedBy: "Used by", labelApp: "App",
    labelSuspectIPs: "Suspicious IPs", noneDetected: "No suspicious IPs detected", noVPS: "✓ No VPS / Hosting / Proxy IPs detected.",
    staleLabel: "File possibly outdated", staleHint: "Suspicion: file generated outside the match period to hide activity.",
    ffLabel: "Sessions in period", ffLastOpen: "Last opened", ffFirstOpen: "First opened", ffSessions: "startups recorded in the period",
    ffHint: "If last opened after the match → apply W.O!", appStoreLabel: "App Store opened", appStoreHint: "If it was after the match → apply W.O!",
    uptimeLess20: "⚠️ LESS THAN 20MIN — Report may not cover the entire match!", badgeCritical: "⚠️ CRITICAL — PROXY/CHEAT APP",
    badgeSuspect: "SUSPICIOUS", badgePossible: "POSSIBLE", badgeDomainSuspect: "⚠️ SUSPICIOUS DOMAIN", of: "of",
    online: "● Online", offline: "● Offline / No response", lastRecord2: "Last record:", conns: "connections", domains: "domains",
    labelCheat: "Cheat", labelIndicator: "Indicator", indicatorDomain: "Domain detected in network report", indicatorIP: "IP detected in network report",
    iosVersionLabel: "iOS Version", rootsCardLabel: "⚠ Root certificates", rootsLabel: "Suspicious Root Certificate",
    rootsDetail1: "root certificate installed", rootsDetailN: "root certificates installed",
    rootsHint: "Root certificates allow HTTPS traffic interception — common pattern in mitmproxy-type cheat tools",
    ipsTitle: "Suspicious Apps Installed", ipsSub: "Detected in device usage history",
    ipsHint: "⚠ Apps found in iPhone analytics data — indicate presence of cheat/jailbreak/proxy tools",
    ipsLaunched: "▶ Opened", ipsInstalled: "⬇ Installed", badgeKnownCheat: "⚡ CRITICAL — CONFIRMED CHEAT",
    reasonTLD: function(tld){ return "Suspicious TLD detected: \\"" + tld + "\\" — common pattern in cheats/proxies"; },
    reasonWord: function(word){ return "Suspicious word in domain: \\"" + word + "\\""; },
    reasonVPS: function(isp){ return "VPS/HOSTING — ISP: " + isp; }, reasonProxy: "PROXY / VPN detected",
    reasonCF: function(asn){ return "Cloudflare accessed via direct IP — cheat proxy pattern (" + asn + ")"; },
    reasonASN: function(asn,desc){ return "Known cheat proxy ASN: " + asn + " — " + desc; },
    reasonRDNS: function(rdns){ return "Server rDNS: " + rdns; },
    reasonHostinger: function(rdns){ return "Hostinger VPS (known BR cheat proxy pattern): " + rdns; },
    reasonNoRDNS: "No rDNS (PTR) — typical of VPS used as proxy",
    reasonOrg: function(kw){ return "Org/ISP associated with hosting/cheat proxy: " + kw; },
  },
  es: {
    eyebrow: "Scanner iOS", start: "Inicio", lastRecord: "Último registro", uniqueDomains: "Dominios únicos",
    totalConns: "Total conexiones", monitoredFor: "Monitoreado hace", criticalLabel: "Crítico", suspectLabel: "Sospechoso",
    possibleLabel: "Posible", appProxyTitle: "Apps Proxy / Cheat Detectadas", appProxySub: "Aplicaciones conocidas de interceptación de tráfico",
    suspectIPsTitle: "IPs Sospechosas", suspectIPsSub: "VPS / Hosting / Proxy confirmados", possibleIPsTitle: "IPs Posibles",
    possibleIPsSub: "Infraestructura cloud / datacenter", labelIP: "IP", labelCountry: "País", labelProvider: "Proveedor",
    labelOrg: "Org", labelRDNS: "rDNS", labelHTTP: "HTTP", labelReason: "Motivo", labelUsedBy: "Usado por", labelApp: "App",
    labelSuspectIPs: "IPs sospechosas", noneDetected: "Ninguna IP sospechosa detectada", noVPS: "✓ Ninguna IP VPS / Hosting / Proxy detectada.",
    staleLabel: "Archivo posiblemente antiguo", staleHint: "Sospecha: archivo generado fuera del período del partido para ocultar actividad.",
    ffLabel: "Sesiones en el período", ffLastOpen: "Última apertura", ffFirstOpen: "Primera apertura", ffSessions: "inicializaciones registradas en el período",
    ffHint: "Si la última apertura fue después del partido → ¡aplica el W.O!", appStoreLabel: "App Store abierta", appStoreHint: "Si fue después del partido → ¡aplica el W.O!",
    uptimeLess20: "⚠️ MENOS DE 20MIN — ¡El informe puede no cubrir toda la partida!", badgeCritical: "⚠️ CRÍTICO — APP PROXY/CHEAT",
    badgeSuspect: "SOSPECHOSO", badgePossible: "POSIBLE", badgeDomainSuspect: "⚠️ DOMINIO SOSPECHOSO", of: "de",
    online: "● En línea", offline: "● Sin conexión / Sin respuesta", lastRecord2: "Último registro:", conns: "conexiones", domains: "dominios",
    labelCheat: "Cheat", labelIndicator: "Indicador", indicatorDomain: "Dominio detectado en el informe de red", indicatorIP: "IP detectada en el informe de red",
    iosVersionLabel: "Versión iOS", rootsCardLabel: "⚠ Certificados raíz", rootsLabel: "Certificado Raíz Sospechoso",
    rootsDetail1: "certificado raíz instalado", rootsDetailN: "certificados raíz instalados",
    rootsHint: "Los certificados raíz permiten interceptar tráfico HTTPS — patrón común en cheats tipo mitmproxy",
    ipsTitle: "Apps Sospechosas Instaladas", ipsSub: "Detectadas en el historial de uso del dispositivo",
    ipsHint: "⚠ Apps encontradas en los datos de análisis del iPhone — indican presencia de herramientas de cheat/jailbreak/proxy",
    ipsLaunched: "▶ Abierta", ipsInstalled: "⬇ Instalada", badgeKnownCheat: "⚡ CRÍTICO — CHEAT CONFIRMADO",
    reasonTLD: function(tld){ return "TLD sospechoso detectado: \\"" + tld + "\\" — patrón común en cheats/proxies"; },
    reasonWord: function(word){ return "Palabra sospechosa en el dominio: \\"" + word + "\\""; },
    reasonVPS: function(isp){ return "VPS/HOSTING — ISP: " + isp; }, reasonProxy: "PROXY / VPN detectado",
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
  ['pt','en','es'].forEach(l => { let btn = document.getElementById('btn-'+l); if(btn) btn.classList.toggle('active', l===lang); });
  function q(s) { return Array.from(document.querySelectorAll(s)); }
  q('.hero-eyebrow').forEach(el => el.textContent = t.eyebrow);
  q('.hero-credits').forEach(el => el.textContent = "por " + (lang==='pt'?"Keller · Samir · Katiau":lang==='en'?"by Keller · Samir · Katiau":"por Keller · Samir · Katiau"));
  q('.hero-file strong').forEach(el => el.textContent = t.fileLabel);
  let hg = q('.hg-label');
  ['start','lastRecord','uniqueDomains','totalConns'].forEach((k,i)=> { if(hg[i]) hg[i].textContent = t[k]; });
  q('[data-i18n]').forEach(el=>{ let key=el.getAttribute('data-i18n'); if(t[key] && typeof t[key]==='string') el.textContent=t[key]; });
  q('[data-i18n-indicator]').forEach(el=>{ let kind=el.getAttribute('data-i18n-indicator'); el.textContent=kind==='domain'?t.indicatorDomain:t.indicatorIP; });
  q('[data-roots-count]').forEach(el=>{ let n=parseInt(el.getAttribute('data-roots-count'),10); let label=n>1?t.rootsDetailN:t.rootsDetail1; el.textContent=n+' '+label+' (roots_installed: '+n+')'; });
  q('[data-sev]').forEach(el=>{ let sev=el.getAttribute('data-sev'); if(sev==='HIGH') el.textContent=t.badgeSuspect; else if(sev==='MEDIUM') el.textContent=t.badgePossible; });
  q('[data-reasons]').forEach(el=>{ try{ let reasons=JSON.parse(el.getAttribute('data-reasons')); let translated=reasons.map(r=>{ let m; if((m=r.match(/TLD suspeito detectado: "([^"]+)"/))||(m=r.match(/Suspicious TLD detected: "([^"]+)"/))||(m=r.match(/TLD sospechoso detectado: "([^"]+)"/))) return t.reasonTLD(m[1]); if((m=r.match(/Palavra suspeita no domínio: "([^"]+)"/))||(m=r.match(/Suspicious word in domain: "([^"]+)"/))||(m=r.match(/Palabra sospechosa en el dominio: "([^"]+)"/))) return t.reasonWord(m[1]); if((m=r.match(/VPS\\/HOSTING — ISP: (.+)/))) return t.reasonVPS(m[1]); if(r.match(/PROXY \\/ VPN/)) return t.reasonProxy; if((m=r.match(/Cloudflare[^(]+\\((\\w+)\\)/))) return t.reasonCF(m[1]); if((m=r.match(/ASN[^:]+: (\\w+) — (.+)/))) return t.reasonASN(m[1],m[2]); if((m=r.match(/Hostinger VPS[^:]+: (.+)/))) return t.reasonHostinger(m[1]); if((m=r.match(/rDNS de servidor: (.+)/)||r.match(/Server rDNS: (.+)/))) return t.reasonRDNS(m[1]); if(r.match(/Sem rDNS|No rDNS|Sin rDNS/)) return t.reasonNoRDNS; if((m=r.match(/Org\\/ISP[^:]+: (.+)/))) return t.reasonOrg(m[1]); return r; }); el.innerHTML=translated.join('<br>'); }catch(e){} });
  q('.uptime-text').forEach(el=>{ let strong=el.querySelector('strong'); if(strong){ let val=strong.textContent; while(el.firstChild) el.removeChild(el.firstChild); el.appendChild(document.createTextNode(t.monitoredFor+' ')); let ns=document.createElement('strong'); ns.textContent=val; el.appendChild(ns); } });
  q('.uptime-bar span').forEach(el=>{ if(el.style&&el.style.marginLeft) el.innerHTML='⚠️ '+t.uptimeLess20; });
  let statLbl=q('.stat .lbl'); ['criticalLabel','suspectLabel','possibleLabel'].forEach((k,i)=>{ if(statLbl[i]) statLbl[i].textContent=t[k]; });
  q('.section-header').forEach(sh=>{ let title=sh.querySelector('.sh-title'); let sub=sh.querySelector('.sh-sub'); if(!title) return; if(sh.classList.contains('sh-critical')){ title.textContent=t.appProxyTitle; if(sub) sub.textContent=t.appProxySub; }else if(sh.classList.contains('sh-high')){ title.textContent=t.suspectIPsTitle; if(sub) sub.textContent=t.suspectIPsSub; }else if(sh.classList.contains('sh-medium')){ title.textContent=t.possibleIPsTitle; if(sub) sub.textContent=t.possibleIPsSub; } });
  q('.stale-label').forEach(el=>el.textContent=t.staleLabel); q('.stale-hint').forEach(el=>el.textContent=t.staleHint);
  q('.stale-time').forEach(el=>{ let strong=el.querySelector('strong'); if(strong){ let tv=strong.textContent; while(el.firstChild) el.removeChild(el.firstChild); el.appendChild(document.createTextNode(t.lastRecord2+' ')); let ns=document.createElement('strong'); ns.textContent=tv; el.appendChild(ns); } });
  q('.ff-label').forEach(el=>{ let version=el.textContent.indexOf('MAX')!==-1?'Free Fire MAX':'Free Fire'; el.textContent=version+' — '+t.ffLabel; });
  let ffTags=q('.ff-tag'); [t.ffLastOpen,t.ffFirstOpen].forEach((v,i)=>{ if(ffTags[i]) ffTags[i].textContent=v; });
  q('.ff-sessions').forEach(el=>{ let num=el.textContent.match(/\\d+/); if(num) el.textContent=num[0]+' '+t.ffSessions; });
  q('.ff-hint').forEach(el=>el.textContent=t.ffHint); q('.appstore-label').forEach(el=>el.textContent=t.appStoreLabel); q('.appstore-hint').forEach(el=>el.textContent=t.appStoreHint);
  q('.ok').forEach(el=>el.textContent=t.noVPS);
  let labelMap={'IP':'labelIP','País':'labelCountry','Country':'labelCountry','Provedor':'labelProvider','Provider':'labelProvider','Proveedor':'labelProvider','Org':'labelOrg','rDNS':'labelRDNS','HTTP':'labelHTTP','Motivo':'labelReason','Reason':'labelReason','Usado por':'labelUsedBy','Used by':'labelUsedBy','App':'labelApp','Cheat':'labelCheat','Indicador':'labelIndicator','Indicator':'labelIndicator'};
  q('.card').forEach(card=>{ let badge=card.querySelector('.badge'); let connsEl=card.querySelector('.conns'); if(connsEl){ let num=connsEl.textContent.match(/\\d+/); if(num) connsEl.textContent=num[0]+' '+t.conns; } if(badge){ if(badge.classList.contains('critical')) badge.innerHTML=badge.getAttribute('data-badge-type')==='known-cheat'?t.badgeKnownCheat:t.badgeCritical; else if(badge.classList.contains('tld-flag')) badge.innerHTML=t.badgeDomainSuspect; else if(badge.classList.contains('high')) badge.textContent=t.badgeSuspect; else if(badge.classList.contains('medium')) badge.textContent=t.badgePossible; } card.querySelectorAll('.label').forEach(lbl=>{ let sub=lbl.querySelector('.sub'); if(sub){ let fn=lbl.childNodes[0]; if(fn&&fn.nodeType===3) fn.textContent=t.labelSuspectIPs+' '; let nums=sub.textContent.match(/\\d+/g); if(nums&&nums.length>=2) sub.textContent=nums[0]+' '+t.of+' '+nums[1]+' '+t.domains; return; } let txt=lbl.textContent.trim(); let key=labelMap[txt]; if(key&&t[key]) lbl.textContent=t[key]; }); card.querySelectorAll('.none').forEach(el=>el.textContent=t.noneDetected); card.querySelectorAll('.val').forEach(el=>{ if(el.textContent.indexOf('Online')!==-1||el.textContent.indexOf('Offline')!==-1||el.textContent.indexOf('línea')!==-1||el.textContent.indexOf('conexión')!==-1){ el.innerHTML=el.innerHTML.replace(/●\\s*(En línea|Online)/g,t.online).replace(/●\\s*(Sin conexión[^<]*|Offline[^<]*)/g,t.offline); } }); });
}
window.setLang = setLang;
(function() { function bind(){ ['pt','en','es'].forEach(l=>{ let btn=document.getElementById('btn-'+l); if(btn) btn.addEventListener('click',e=>{ e.preventDefault(); setLang(l); }); }); } if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind); else bind(); })();
<\/script>
</body>
</html>`
  return rawHtml
}

function buildLangScript() {
  return ""
}

async function showResult(html) {
  let wv = new WebView()
  await wv.loadHTML(html, "http://localhost")
  Speech.speak(S.done)
  await wait(1200)
  await wv.present(false)
}

async function readFile(path) {
  let content = null
  let fm = FileManager.iCloud()
  try {
    if (fm.isFileStoredIniCloud && fm.isFileStoredIniCloud(path)) {
      await fm.downloadFileFromiCloud(path)
    }
    content = fm.readString(path)
  } catch(e) {}
  if (!content) {
    try { content = FileManager.local().readString(path) } catch(e2) {}
  }
  return content
}

async function main() {
  let step1 = new Alert()
  step1.title = "📋 Passo 1 de 3 — Relatório de Privacidade"
  step1.message = "Vá em:\n\nAjustes → Privacidade e Segurança → Relatório de Privacidade de Apps\n\nRole até o final e toque em\n\"Ativar Relatório de Privacidade de Apps\"\n\nDepois toque em\n\"Exportar Relatório de Privacidade de Apps\"\ne salve o arquivo .ndjson em qualquer lugar (Arquivos, iCloud, etc)."
  step1.addAction("Entendido, próximo →")
  step1.addCancelAction("Cancelar")
  if (await step1.present() === -1) { Script.complete(); return }

  let step2 = new Alert()
  step2.title = "📊 Passo 2 de 3 — Dados de Análise"
  step2.message = "Vá em:\n\nAjustes → Privacidade e Segurança → Análise e Melhorias\n\nAtive as opções:\n• Compartilhar análise do iPhone\n• Compartilhar análise do iCloud\n• Compartilhar com desenvolvedores de app\n\nDepois volte e toque em\n\"Dados de Análise\"\nRole até o final e selecione o arquivo mais recente começando com\n\"xp_amp_app_usage_dnu\"\n\nToque no arquivo → toque no ícone de compartilhar → Salvar em Arquivos."
  step2.addAction("Entendido, próximo →")
  step2.addCancelAction("Cancelar")
  if (await step2.present() === -1) { Script.complete(); return }

  let step3 = new Alert()
  step3.title = "✅ Passo 3 de 3 — Selecionar arquivos"
  step3.message = "Agora selecione os 2 arquivos salvos.\n\nVocê pode selecioná-los em qualquer ordem — o sistema identifica automaticamente cada um.\n\n📋 App_Privacy_Report.ndjson\n📊 xp_amp_app_usage_dnu*.ips"
  step3.addAction("Selecionar arquivo 1")
  step3.addCancelAction("Cancelar")
  if (await step3.present() === -1) { Script.complete(); return }

  let path1 = await DocumentPicker.openFile()
  if (!path1) { Script.complete(); return }
  let content1 = await readFile(path1)
  if (!content1) {
    let a = new Alert(); a.title = "Erro"; a.message = "Não foi possível ler o arquivo 1."; a.addAction("OK"); await a.present(); return
  }

  let notice2 = new Alert()
  notice2.title = "Arquivo 2"
  notice2.message = "Selecione o segundo arquivo (ou pule para analisar somente o primeiro)."
  notice2.addAction("Selecionar arquivo 2")
  notice2.addCancelAction("Pular")
  let path2 = null
  let content2 = null
  if (await notice2.present() !== -1) {
    path2 = await DocumentPicker.openFile()
    if (path2) content2 = await readFile(path2)
  }

  let ndjsonContent = null, ndjsonPath = null
  let ipsContent = null

  function classifyContent(content, path) {
    if (looksLikePrivacyReport(content)) return "ndjson"
    if (looksLikeUsageFile(content)) return "ips"
    let name = (path || "").split("/").pop().toLowerCase()
    if (name.endsWith(".ndjson") || name.includes("privacy")) return "ndjson"
    if (name.endsWith(".ips") || name.includes("xp_amp")) return "ips"
    return "unknown"
  }

  let type1 = classifyContent(content1, path1)
  let type2 = content2 ? classifyContent(content2, path2) : null

  if (type2 && type1 === type2) {
    let a = new Alert()
    a.title = "Arquivos do mesmo tipo"
    a.message = type1 === "ndjson"
      ? "Os 2 arquivos parecem ser App Privacy Reports. Selecione um xp_amp_app_usage_dnu*.ips como segundo arquivo."
      : "Os 2 arquivos parecem ser dados de análise. Selecione um App_Privacy_Report.ndjson como primeiro arquivo."
    a.addAction("OK")
    await a.present()
    return
  }

  if (type1 === "ndjson" || type2 === "ips") {
    ndjsonContent = content1; ndjsonPath = path1
    ipsContent = content2
  } else if (type1 === "ips" || type2 === "ndjson") {
    ipsContent = content1
    ndjsonContent = content2; ndjsonPath = path2
  } else {
    let a = new Alert()
    a.title = "Arquivo não reconhecido"
    a.message = "Não foi possível identificar o tipo dos arquivos.\n\nVerifique se selecionou:\n• App_Privacy_Report.ndjson\n• xp_amp_app_usage_dnu*.ips"
    a.addAction("OK")
    await a.present()
    return
  }

  if (!ndjsonContent) {
    let a = new Alert()
    a.title = "App Privacy Report ausente"
    a.message = "O arquivo App_Privacy_Report.ndjson é obrigatório.\n\nAjustes → Privacidade → Relatório de Privacidade de Apps → Exportar"
    a.addAction("OK")
    await a.present()
    return
  }

  let entries = parseNdjson(ndjsonContent)
  let validation = validateReport(entries)
  if (!validation.ok) {
    let a = new Alert()
    a.title = "App Privacy Report inválido"
    a.message = validation.reason + "\n\nExporte em: Ajustes → Privacidade → Relatório de Privacidade de Apps → Exportar"
    a.addAction("OK")
    await a.present()
    return
  }

  
  let ipsFindings = []
  let ipsMeta = { iosVersion: null, rootsInstalled: 0 }
  let installedBundles = new Set()
  if (ipsContent) {
    let parsed = parseIpsFile(ipsContent)
    
    for (let e of parsed.entries) {
      if (e.bundleId) installedBundles.add(e.bundleId)
    }
    ipsFindings = analyzeIps(parsed)
    if (parsed.header) {
      let osMatch = (parsed.header.os_version || "").match(/iPhone OS ([\d.]+)/)
      ipsMeta.iosVersion = osMatch ? osMatch[1] : parsed.header.os_version || null
      ipsMeta.rootsInstalled = parsed.header.roots_installed || 0
    }
  }

  let filename = (ndjsonPath || "arquivo").split("/").pop()

  Speech.speak(S.start)

  
  let { findings, netEntries, cheatAppFindings, knownCheatFindings, ghostAppFindings: _, proxyLoginFindings } = await analyze(entries)

  
  let ghostAppFindings = detectGhostApps(netEntries, installedBundles)

  let html = buildHTML(findings, netEntries, cheatAppFindings, knownCheatFindings, ipsFindings, ipsMeta, [], ghostAppFindings, proxyLoginFindings, filename)
  await showResult(html)
}

main()
