<div id="top">

<p align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/O1sxLT1.png">
  <source media="(prefers-color-scheme: light)" srcset="https://i.imgur.com/O1sxLT1.png">
  <img alt="DIZZY.DLLSS Logo" src="https://i.imgur.com/O1sxLT1.png" width="60%">
</picture>

</p>

<p align="center">
  DIZZY.DLLSS.</em>
</p>

</div>

<img src="https://i.imgur.com/NnWf7Fm.png" alt="line break" width="100%" height="3px">

## Introdução

DIZZY.DLLSS é um scanner para dispositivos **iOS** que tem o objetivo de analisar o relatório de privacidade do iPhone e identificar conexões suspeitas de proxy e cheat em questão de segundos.

**Por que usar o DIZZY.DLLSS?**

O projeto tem como principal função facilitar o trabalho dos analistas em suas triagens, com diversas funções automatizadas:

* **🔵 Automação:** O scanner faz todo o trabalho pesado por você, poupando seu tempo.
* **⚫️ Detecção de Proxy:** Identifica IPs de VPS, Hosting e Proxy usados por cheaters.
* **🟣 Facilidade:** Roda diretamente no iPhone usando o app **Scriptable**, sem necessidade de computador.

<img src="https://i.imgur.com/NnWf7Fm.png" alt="line break" width="100%" height="3px">

## Como utilizar?

#### <img width="2%" src="https://simpleicons.org/icons/apple.svg">&emsp13; Passo 1 — Instale o Scriptable:

| Aplicativo | Descrição |
|---|---|
| [Scriptable](https://apps.apple.com/br/app/scriptable/id1405459188) | App gratuito para automação iOS com JavaScript |

#### <img width="2%" src="https://simpleicons.org/icons/apple.svg">&emsp13; Passo 2 — Exporte o Relatório de Privacidade do iPhone:

Vá em **Ajustes → Privacidade e Segurança → Relatório de Privacidade de Apps → Exportar Relatório de Privacidade de Apps**

O arquivo será salvo no formato `App_Privacy_Report_v4_YYYY-MM-DD...` no iCloud Drive.

#### <img width="2%" src="https://simpleicons.org/icons/gnometerminal.svg">&emsp13; Passo 3 — Instale o scanner no Scriptable:

Abra o Scriptable, crie um novo script, cole o código abaixo e salve:

```js
const DIZZY.DLLSS_IOS = "https://raw.githubusercontent.com/DIZZY.DLLzz/DIZZY.DLLSS-iOS/refs/heads/main/DIZZY.DLLSS-iOS.js"

let req = new Request(DIZZY.DLLSS_IOS)
let code = await req.loadString()

if (!code || code.startsWith("404")) {
  let a = new Alert()
  a.title = "Erro"
  a.message = "Nao foi possivel baixar o script."
  a.addAction("OK")
  await a.present()
} else {
  eval(code)
}
```

#### <img width="2%" src="https://simpleicons.org/icons/gnometerminal.svg">&emsp13; Passo 4 — Execute:

Toque no script para rodar. O app irá abrir o seletor de arquivos — selecione o `App_Privacy_Report` exportado. A análise inicia automaticamente.

<img src="https://i.imgur.com/NnWf7Fm.png" alt="line break" width="100%" height="3px">

## Detecções

| Detecção | Descrição |
|---|---|
| `App Proxy/Cheat` | Detecta apps conhecidos de proxy como PotatsoLite e ProxyFF |
| `IPs de VPS/Hosting` | Identifica servidores VPS, Hosting e Proxy por ASN, ISP e rDNS |
| `ASN de Cheat Proxy` | Cruza ASNs conhecidos como Hostinger (AS47583) e Multacom (AS35916) |
| `TLD Suspeito` | Detecta domínios com extensões suspeitas como `.site`, `.store`, `.xyz` |
| `Domínio Suspeito` | Identifica palavras-chave no domínio como `proxy`, `cheat`, `mitm`, `tunnel` |
| `HTTP Probe` | Verifica se o servidor responde com banners suspeitos como nginx, apache, ubuntu |
| `Proxy antes do login` | Cruza conexões suspeitas com o timestamp de abertura do Free Fire |
| `Último login Free Fire` | Detecta a última inicialização do jogo via `app-measurement.com` |
| `Apple Store aberta` | Detecta abertura da App Store — se após a partida, aplique o W.O |
| `Arquivo antigo` | Alerta se o último registro do relatório é de mais de 15 minutos atrás |
| `Uptime curto` | Alerta se o relatório cobre menos de 20 minutos de atividade |
| `Validação do arquivo` | Verifica se o arquivo é um App Privacy Report legítimo e não adulterado |

<img src="https://i.imgur.com/NnWf7Fm.png" alt="line break" width="100%" height="3px">

## Contribuições

Contribuições são bem vindas! Por favor me chame no privado do discord `DIZZY.DLL22cao`.

* ** **: Encontrou um bug? Me avise!
* ****: Tem ideias ou sugestões? Eu adoraria lhe ouvir.

<br>



<div style="text-align:; font-weight: bold; margin-bottom: 10px;">
  ㅤDIZZY.DLL
</div>

<table>
  <tr>
    <td style="text-align: center; margin-right: 20px;">
      <a href="">
        <img src="https://i.imgur.com/O1sxLT1.png" alt="DIZZY.DLL" style="width: 50px; height: 50px;">
      </a>
    </td>
    <td style="text-align: center; margin-right: 20px;">
      <a href="https://discord.gg/e4WtK9J5R">
        <img src="https://i.imgur.com/O1sxLT1.png" alt="" style="width: 50px; height: 50px; object-fit: cover;">
      </a>
    </td>
    <td style="text-align: center;">
      <a href="https://discord.gg/e4WtK9J5R">
        <img src="https://i.imgur.com/O1sxLT1.png" alt="" style="width: 50px; height: 50px;">
      </a>
    </td>
  </tr>
</table>

<img src="https://i.imgur.com/O1sxLT1.png" alt="line break" width="100%" height="3px">

## 🎗 Licença

Copyright DIZZY.DLLSS © 2025-2030.

<div align="left">
</div>

<img src="https://i.imgur.com/O1sxLT1.png" alt="line break" width="100%" height="3px">
