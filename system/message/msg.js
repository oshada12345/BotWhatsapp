const { pickRandom, reloadFile, getBuffer, reSize, calender, randomNomor, runtime } = require("@libs/function")
const { ownerNumber, ownerName, audioPack, stickerPack, logonya, thumbnailDok, thumbnailAnonChat, thumbnailVid, linkGroup } = require("@config")
const { exec } = require("child_process")
const { getContentType } = require("baileys") 
const commands = require("@libs/command")
const util = require("util") 
const toMs = require("ms")
const fs = require("fs")
const axios = require("axios")
const chalk = require("chalk") 
const i18n = require("i18n")
const Message = async(sock, m) => {
try{
//=========================[ FUNCTION SETTINGS TO DATABASE ]=========================\\
const setMenu = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].setmenu : "image"
const setWelcome = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].setwelcome : "image"
const setPrefix = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].setprefix : "allprefix"
const quotedType = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].quoted : "m"
const replyType = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].replytype : "web1"
const mode = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].mode : "public"
const auto = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].auto : "available"
const autoBlockCmd = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autoblockcmd : false
const autoReport = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autoreport : true
const autoBio = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autobio : false
const autoSticker = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autosticker : false
const autoRespon = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autorespon : false
const autoRead = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autoread : false
const autoVn = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autovn : false
const autoQuoted = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autoquoted : true
const autoLevel = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autolevel : false
const autoJoin = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].autojoin : false
const antiCall = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].anticall : false
const antiSpam = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].antispam : false
//=========================[ SECURITY GROUP ]=========================\\
const groupMetadata = m.isGroup? await sock.groupMetadata(m.chat).catch(e => {}) : {}
const groupName = Object.keys(groupMetadata).length > 0? groupMetadata.subject : ""
const participants = Object.keys(groupMetadata).length > 0? groupMetadata.participants : ""
const groupMembers = Object.keys(groupMetadata).length > 0? groupMetadata.participants.map((x) => x.id) : ""
const groupAdmins = Object.keys(groupMetadata).length > 0? participants.filter((x) => x.admin !== null).map((x) => x.id) : ""
const groupOwner = Object.keys(groupMetadata).length > 0? groupMetadata.owner : ""
const isBotGroupAdmins = Object.keys(groupMetadata).length > 0? groupAdmins.includes(m.botNumber) : false
const isGroupAdmins = Object.keys(groupMetadata).length > 0? groupAdmins.includes(m.sender) : false
const isAntiLink = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilink : false
const isAntiLinkYoutube = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinkyt : false
const isAntiLinkFacebook = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinkfb : false
const isAntiLinkInstagram = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinkig : false
const isAntiLinkTelegram = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinktele : false
const isAntiLinkWhatsapp = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinkwa : false
const isAntiLinkTiktok = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinktiktok : false
const isAntiLinkTwitter = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antilinktwitter : false
const isAntiVirtex = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antivirtex : false
const isAntiAsing = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antiasing : false
const isAntiTag = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antitag : false
const isAntiDelete = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antidelete : false
const isAntiViewOnce = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antiviewonce : false
const isAntiToxic = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antitoxic : false
const isAntiSange = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].antisange : false
const isAutoResponGroup = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].autorespongc : false
const isAutoReactGroup = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].autoreactgc : false
const isBanChat = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].banchat : false
const isWelcome = Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].welcome : false
//=========================[ MESSAGE TYPE ]=========================\\
const isText = ["extendedTextMessage","conversation"].includes(m.type)
const isImage = ["imageMessage"].includes(m.type)
const isVideo = ["videoMessage"].includes(m.type)
const isSticker = ["stickerMessage"].includes(m.type)
const isAudio = ["audioMessage"].includes(m.type)
const isViewOnce = ["viewOnceMessageV2","viewOnceMessage"].includes(m.type)
const isContact = ["contactMessage","contactsArrayMessage"].includes(m.type)
const isLocation = ["locationMessage"].includes(m.type)
const isDocument = ["documentMessage","documentWithCaptionMessage"].includes(m.type)
const isAllMedia = ["imageMessage","videoMessage","stickerMessage","audioMessage","viewOnceMessageV2","viewOnceMessage","contactMessage","contactsArrayMessage","locationMessage","documentMessage","documentWithCaptionMessage"].includes(m.type)
const isQuotedText = m.quoted? ["extendedTextMessage","conversation"].includes(m.quoted.type) : false
const isQuotedImage = m.quoted? ["imageMessage"].includes(m.quoted.type) : false
const isQuotedVideo = m.quoted? ["videoMessage"].includes(m.quoted.type) : false
const isQuotedSticker = m.quoted? ["stickerMessage"].includes(m.quoted.type) : false
const isQuotedAudio = m.quoted? ["audioMessage"].includes(m.quoted.type) : false
const isQuotedViewOnce = m.quoted? ["viewOnceMessageV2","viewOnceMessage"].includes(m.quoted.type) : false
const isQuotedContact = m.quoted? ["contactMessage","contactsArrayMessage"].includes(m.quoted.type) : false
const isQuotedLocation = m.quoted? ["locationMessage"].includes(m.quoted.type) : false
const isQuotedDocument = m.quoted? ["documentMessage","documentWithCaptionMessage"].includes(m.quoted.type) : false
const isQuotedAllMedia = m.quoted? ["imageMessage","videoMessage","stickerMessage","audioMessage","viewOnceMessageV2","viewOnceMessage","contactMessage","contactsArrayMessage","locationMessage","documentMessage","documentWithCaptionMessage"].includes(m.quoted.type) : false
//=========================[ FUNCTION PREFIX ]=========================\\
if (setPrefix == "prefix") {
var thePrefix = "MULTI-PREFIX"
var prefix = /^#.!?|\\^/.test(m.body)? m.body.match(/^#.!?|\\^/gi) : "."
var isCmd = m.body.startsWith(prefix)
var command = (isSticker && Object.keys(db.listcmd).includes(m.message.stickerMessage.fileSha256.toString("base64")))? db.listcmd[m.message.stickerMessage.fileSha256.toString("base64")].command : isCmd? m.body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
var cmdOptions = commands.get(command)
} else if (setPrefix == "noprefix") {
var thePrefix = "NO-PREFIX"
var prefix = ""
var isCmd = m.body.startsWith(prefix)
var command = (isSticker && Object.keys(db.listcmd).includes(m.message.stickerMessage.fileSha256.toString("base64")))? db.listcmd[m.message.stickerMessage.fileSha256.toString("base64")].command : m.body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
var cmdOptions = commands.get(command)
} else if (setPrefix == "allprefix") {
var thePrefix = "ALL-PREFIX"
var prefix = /^#.!?|\\^/.test(m.body)? m.body.match(/^#.!?|\\^/gi) : "."
var isCmd = m.body.startsWith(prefix)
var command = (isSticker && Object.keys(db.listcmd).includes(m.message.stickerMessage.fileSha256.toString("base64")))? db.listcmd[m.message.stickerMessage.fileSha256.toString("base64")].command : m.body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
var cmdOptions = commands.get(command)
}
//=========================[ COMMAND LOGS ]=========================\\
const command_log = [chalk.whiteBright("├"), chalk.keyword("aqua")(`[ ${m.isGroup ? "GROUP" : "PRIVATE"} ]`), m.body.substr(0, 50).replace(/\n/g, ""), chalk.greenBright("from"), chalk.yellow(m.pushName)]
if (m.isGroup) {
command_log.push(chalk.greenBright("in"))
command_log.push(chalk.yellow(groupName))
}
console.log(...command_log)
//=========================[ PUBLIK/SELF ]=========================\\
if (mode == "self") {
if (!m.isOwner && !m.key.fromMe) return
} else if (mode == "group") {
if (!m.isGroup && !m.isOwner && !m.key.fromMe) return
} else if (mode == "private") {
if (m.isGroup && !m.isSewa) return
}  
//=========================[ BANCHAT ]=========================\\
if (isBanChat) {
if (!m.isOwner && !m.key.fromMe && !isGroupAdmins) return
}
//=========================[ AUTO BIO ]=========================\\
if (autoBio) {
sock.setStatus(`${runtime(process.uptime())}`)
}
//=========================[ AUTO READ MESSAGE ]=========================\\
if (autoRead) {
sock.readMessages([m.key])
}
//=========================[ AUTO RECORDING/TYPING/AVAILABLE ]=========================\\
if (auto == "recording"){        
await sock.sendPresenceUpdate("recording", m.chat)
} else if (auto == "typing"){        
await sock.sendPresenceUpdate("composing", m.chat)
} else if (auto == "available"){        
await sock.sendPresenceUpdate("available", m.chat)
}
//=========================[ FUNCTION ADD EXPIRED TO OWNER ]=========================\\
if ((groupOwner == ownerNumber + "@s.whatsapp.net") && Object.keys(db.expired[m.botNumber].sewa).includes(m.chat) && db.expired[m.botNumber].sewa[m.chat].expired !== "INFINITY") {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat].expired = "INFINITY"
} else if ((groupOwner == ownerNumber + "@s.whatsapp.net") && !Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)) {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat] = { date: calender, expired: "INFINITY" }
}
//=========================[ THUMBNAIL PROFILE SENDER ]=========================\\
try{
var ppimg = await sock.profilePictureUrl(m.sender, "image")
} catch {
var ppimg = "https://raw.githubusercontent.com/Aztecs444/media/Zeck/image/profilePicture.jpg"
}
const ofrply = await getBuffer(ppimg)
const kfrply = await getBuffer(logonya.isLogo? logonya.url : `https://raw.githubusercontent.com/Aztecs444/Elaina/Zeck/${randomNomor(10)}.jpg`)
const dfrply = await getBuffer(thumbnailDok.url)
const zfrply = await getBuffer(thumbnailAnonChat.url)
const pfrply = await getBuffer(thumbnailVid.url)
const gfrply = await reSize(logonya.isLogo? logonya.url : `https://raw.githubusercontent.com/Aztecs444/Elaina/Zeck/${randomNomor(10)}.jpg`, 300, 300)
//=========================[ FAKE QUOTED ]=========================\\
const ftoko = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: ofrply }, title: `${m.pushName}`, description: `${m.ucapanWaktu} kak`, currencyCode: "IDR", priceAmount1000: `${m.pushName}`, retailerId: "Rp10", productImageCount: 1 },businessOwnerJid: "0@s.whatsapp.net" }}}
const fkontak = {key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { contactMessage: { displayName: `${m.pushName}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName},;;;\nFN:${m.pushName},\nitem1.TEL;waid=${m.senderNumber}:${m.senderNumber}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,jpegThumbnail: ofrply }}}
const ftext = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { extendedTextMessage: { text: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply }}}
const ftroli = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { orderMessage: { itemCount: 200, status: 1, surface: 2, message: `hallo kak👋 ${m.pushName}`, orderTitle: `${m.ucapanWaktu} kak`, thumbnail: ofrply, sellerJid: "0@s.whatsapp.net" }}}
const flocation = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { liveLocationMessage: { jpegThumbnail: ofrply }}}
const fimage = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { imageMessage: { seconds: "30", caption: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply }}}
const fdocument = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { documentMessage: { jpegThumbnail: ofrply } } }
const fvideo = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { videoMessage: { seconds: "30", caption: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply }}}
const faudio = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "30", ptt: false }}}
const fgif = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { videoMessage: { seconds: "30", gifPlayback: "true", caption: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply }}}
const fvn = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "30", ptt: true }}}
const fpayment = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: "0@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: `hallo kak👋 ${m.pushName}` }}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" }}}}
const fpoll = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { pollCreationMessage: { name: `hallo kak👋 ${m.pushName}`, options: [{optionName: "P1" },{optionName: "P2"},{optionName: "P3"},{optionName: "P4"},{optionName: "P5"}], selectableOptionsCount: 5 }}}
//=========================[ QUOTED MESSAGE ]=========================\\
if (autoQuoted && quotedType == "ftoko") {
var setQuoted = ftoko
} else if (autoQuoted && quotedType == "fkontak") {
var setQuoted = fkontak
} else if (autoQuoted && quotedType == "ftext") {
var setQuoted = ftext
} else if (autoQuoted && quotedType == "ftroli") {
var setQuoted = ftroli
} else if (autoQuoted && quotedType == "flocation") {
var setQuoted = flocation
} else if (autoQuoted && quotedType == "fimage") {
var setQuoted = fimage
} else if (autoQuoted && quotedType == "fdocument") {
var setQuoted = fdocument
} else if (autoQuoted && quotedType == "fvideo") {
var setQuoted = fvideo
} else if (autoQuoted && quotedType == "faudio") {
var setQuoted = faudio
} else if (autoQuoted && quotedType == "fgif") {
var setQuoted = fgif
} else if (autoQuoted && quotedType == "fvn") {
var setQuoted = fvn
} else if (autoQuoted && quotedType == "fpayment") {
var setQuoted = fpayment
} else if (autoQuoted && quotedType == "fpoll") {
var setQuoted = fpoll
} else if (autoQuoted && quotedType == "m") {
var setQuoted = m
} else {
var setQuoted = ""
}
//=========================[ REPLY MESSAGE ]=========================\\
const setReply = async(teks, chatId = m.chat) => {
if (replyType == "web1") {
sock.sendMessage(chatId, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: teks }, { quoted: setQuoted })
} else if (replyType == "web2") {
sock.sendMessage(chatId, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: teks }, { quoted: setQuoted })
} else if (replyType == "web3") {
sock.sendMessage(chatId, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: teks }, { quoted: setQuoted })
} else if (replyType == "mess") {
sock.sendMessage(chatId, { text: teks, mentions: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [] }, { quoted: setQuoted })
}}
//=========================[ ONLY MESSAGE ]=========================\\
const onlyOwner = async() => {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.ga_mau, audioPack.lu_siapa_anjir, audioPack.ga_boleh]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.owner }, { quoted: setQuoted })
} else {
setReply(util.format(i18n.__("message.owner_only")))
}}
const onlyAdmin = async() => {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.ga_mau, audioPack.lu_siapa_anjir, audioPack.ga_boleh]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.hanya_admin }, { quoted: setQuoted })
} else {
setReply(util.format(i18n.__("message.admin_only")))
}}
const onlyBadmin = async() => {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.goblok, audioPack.baka]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.jadiin_admin }, { quoted: setQuoted })
} else {
setReply(util.format(i18n.__("message.bot_admin_only")))
}}
const onlyGroup = async() => {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.goblok, audioPack.baka]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else { 
setReply(util.format(i18n.__("message.group_only")))
}}
const onlyPrivate = async() => {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.goblok, audioPack.baka]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else {
setReply(util.format(i18n.__("message.private_only")))
}}
const onlyWait = async() => {
if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.oke_tunggu }, { quoted: setQuoted })
} else {
setReply(util.format(i18n.__("wait")))
}}
//=========================[ GET SUCCESS COMMAND ]=========================\\
const cmdSuccess = async(cmd, type = "") => {
if (Object.keys(db.listerror).includes(cmd)) delete db.listerror[cmd]
if (!Object.keys(db.allcommand).includes(cmd) && type == "case") {
db.allcommand[cmd] = { tempFile: "case" }
}
if (!m.key.fromMe && !m.isPremium && autoLevel) {
db.users[m.sender].xp += 1
}
if (Object.keys(db.dashboard).includes(cmd)) {
db.dashboard[cmd].succes += 1
} else {
db.dashboard[cmd] = { succes: 1, failed: 0 }
}}
//=========================[ GET FAILED COMMAND ]=========================\\
const cmdFailed = async(cmd, err, type = "") => {
if (!Object.keys(db.allcommand).includes(cmd) && type == "case") {
db.allcommand[cmd] = { tempFile: "case" }
}
if (Object.keys(db.dashboard).includes(cmd)) {
db.dashboard[cmd].failed += 1
} else {
db.dashboard[cmd] = { succes: 0, failed: 1 }
}
setReply("\`\`\`「  SYSTEM ERROR  」\`\`\`\n\n" + util.format(err)) 
if (!Object.keys(db.listerror).includes(cmd)) db.listerror[cmd] = { error: err.message }
if (autoBlockCmd && !db.blockcmd.includes(cmd)) { db.blockcmd.push(cmd) }
if (autoReport) {
if (isImage) {
var media = "Image ✅"
} else if (isVideo) {
var media = "Video ✅"
} else if (isDocument) {
var media = "Document ✅"
} else if (isViewOnce) {
var media = "View Once ✅"
} else if (isQuotedImage) {
var media = "Reply Image ✅"
} else if (isQuotedVideo) {
var media = "Reply Video ✅"
} else if (isQuotedSticker) {
var media = "Reply Sticker ✅"
} else if (isQuotedAudio) {
var media = "Reply Audio ✅"
} else if (isQuotedViewOnce) {
var media = "Reply View Once ✅"
} else if (isQuotedContact) {
var media = "Reply Contact ✅"
} else if (isQuotedLocation) {
var media = "Reply Location ✅"
} else if (isQuotedDocument) {
var media = "Reply Document ✅"
} else {
var media = "No Media ❌"
}
if (m.isGroup && isBotGroupAdmins) {
let code = await sock.groupInviteCode(m.chat)
var linkgc = "https://chat.whatsapp.com/" + code
} else if (m.isGroup && !isBotGroupAdmins) {
var linkgc = "Botz Is Not Admin"
} else {
var linkgc = "Botz Is Not In The Group"
}
let teks = "\`\`\`「  SYSTEM ERROR  」\`\`\`\n\n"
teks += `👤 Nama : ${m.pushName}\n`
teks += `📳 Nomer : wa.me/${m.senderNumber}\n`
teks += `🔖 Command : ${prefix + command}\n`
teks += `⏰ Time : ${m.timeWib}\n`
teks += `📝 Example : ${m.body}\n`
teks += `🧩 Media : ${media}\n`
teks += `💠 Group : ${m.isGroup? groupName : "Di private chat"}\n`
teks += `🌐 Link Group : ${linkgc}\n`
teks += `📢 Info Laporan : ${util.format(err)}`
if (m.chat !== (ownerNumber + "@s.whatsapp.net")) {
setReply(teks, ownerNumber + "@s.whatsapp.net")
}}}
//=========================[ FUNCTION ADD SEWA BY CODE ]=========================\\
if (m.isGroup && isText && Object.keys(db.createcode).includes(m.budy)) {
let expired = db.createcode[m.budy].expired.includes("years")? "years" : db.createcode[m.budy].expired.includes("months")? "months" : db.createcode[m.budy].expired.includes("weeks")? "weeks" : db.createcode[m.budy].expired.includes("days")? "days" : db.createcode[m.budy].expired.includes("hours")? "hours" : db.createcode[m.budy].expired.includes("minutes")? "minutes" : db.createcode[m.budy].expired.includes("seconds")? "seconds" : "INFINITY"
if (expired == "INFINITY") {
if (Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)) {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat].expired = "INFINITY"
} else {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat] = { date: calender, expired: "INFINITY" }
}
setReply(`Success add sewa ${groupName}`)
setTimeout(() => {
delete db.createcode[m.budy]
}, 3000)
} else if (expired == "months") {
if (Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)) {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat].expired += Number(toMs(Number(db.createcode[m.budy].expired.split(expired)[0] * 30) + "days")) 
} else {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat] = { date: calender, expired: Date.now() + toMs(Number(db.createcode[m.budy].expired.split(expired)[0] * 30) + "days") }
}
setReply(`Success add sewa ${groupName} ${db.createcode[m.budy].expired.split(expired)[0]} ${expired}`)
setTimeout(() => {
delete db.createcode[m.budy]
}, 3000)
} else if (expired !== "months" || expired !== "INFINITY") {
if (Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)) {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat].expired += Number(toMs(db.createcode[m.budy].expired))
} else {
if (db.chats[m.chat].sewa.status) db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[m.chat] = { date: calender, expired: Date.now() + Number(toMs(db.createcode[m.budy].expired)) }
}
setReply(`Success add sewa ${groupName} ${db.createcode[m.budy].expired.split(expired)[0]} ${expired}`)
setTimeout(() => {
delete db.createcode[m.budy]
}, 3000)
}}
//=========================[ FUNCTION UPDATE EXPIRED TO STATUS ]=========================\\
if (Object.keys(db.expired[m.botNumber].owner).length > 0) {
let data = Object.keys(db.expired[m.botNumber].owner)
for (let x of data) {
if (Date.now() >= db.expired[m.botNumber].owner[x].expired) {
setTimeout(() => {
delete db.expired[m.botNumber].owner[x]
}, 1000)
setReply("Maaf kak waktu menjadi owner telah habis", x)
}}}
if (Object.keys(db.expired[m.botNumber].premium).length > 0) {
let data = Object.keys(db.expired[m.botNumber].premium)
for (let x of data) {
if (Date.now() >= db.expired[m.botNumber].premium[x].expired) {
setTimeout(() => {
delete db.expired[m.botNumber].premium[x]
}, 1000)
setReply("Maaf kak waktu menjadi premium telah habis", x)
}}}
if (Object.keys(db.chats).includes(m.chat) && db.chats[m.chat].sewa.status) {
if (Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)) {
db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
} else {
if (Date.now() >= db.chats[m.chat].sewa.expired) {
setTimeout(() => {
db.chats[m.chat].sewa = { status: false, date: calender, expired: 0 }
}, 3000)
setTimeout(() => {
sock.groupLeave(m.chat)
}, 2000)
setReply("Waktu sewa group ini telah habis")
}}} else if (Object.keys(db.expired[m.botNumber].sewa).length > 0) {
let data = Object.keys(db.expired[m.botNumber].sewa)
for (let x of data) {
if (Date.now() >= db.expired[m.botNumber].sewa[x].expired) {
setTimeout(() => {
delete db.expired[m.botNumber].sewa[x]
}, 3000)
setTimeout(() => {
sock.groupLeave(x)
}, 2000)
setReply("Waktu sewa group ini telah habis", x)
}}}
//=========================[ FUNCTION AUTO LEVEL ]=========================\\
if (autoLevel && !m.key.fromMe && !m.isPremium) {
try{
if (db.users[m.sender].xp <= 3) {
var levelRole = "Warrior III"
var levelRoleSebelum = "Low Tier"
var levelNumber = 3
var limitNumber = randomNomor(10)
} else if (db.users[m.sender].xp <= 6) {
var levelRole = "Warrior II"
var levelRoleSebelum = "Warrior III"
var levelNumber = 6
var limitNumber = randomNomor(15)
} else if (db.users[m.sender].xp <= 9) {
var levelRole = "Warrior I"
var levelRoleSebelum = "Warrior I1"
var levelNumber = 9
var limitNumber = randomNomor(20)
} else if (db.users[m.sender].xp <= 12) {
var levelRole = "Elite III"
var levelRoleSebelum = "Warrior I"
var levelNumber = 12
var limitNumber = randomNomor(25)
} else if (db.users[m.sender].xp <= 16) {
var levelRole = "Elite II"
var levelRoleSebelum = "Elite III"
var levelNumber = 16
var limitNumber = randomNomor(30)
} else if (db.users[m.sender].xp <= 20) {
var levelRole = "Elite I"
var levelRoleSebelum = "Elite II"
var limitNumber = randomNomor(35)
} else if (db.users[m.sender].xp <= 24) {
var levelRole = "Master IV"
var levelRoleSebelum = "Elite I"
var levelNumber = 24
var limitNumber = randomNomor(40)
} else if (db.users[m.sender].xp <= 29) {
var levelRole = "Master III"
var levelRoleSebelum = "Master IV"
var levelNumber = 29
var limitNumber = randomNomor(45)
} else if (db.users[m.sender].xp <= 34) {
var levelRole = "Master II"
var levelRoleSebelum = "Master III"
var levelNumber = 34
var limitNumber = randomNomor(50)
} else if (db.users[m.sender].xp <= 39) {
var levelRole = "Master I"
var levelRoleSebelum = "Master II"
var levelNumber = 39
var limitNumber = randomNomor(55)
} else if (db.users[m.sender].xp <= 44) {
var levelRole = "GrandMaster V"
var levelRoleSebelum = "Master I"
var levelNumber = 44
var limitNumber = randomNomor(60)
} else if (db.users[m.sender].xp <= 50) {
var levelRole = "GrandMaster IV"
var levelRoleSebelum = "GrandMaster V"
var levelNumber = 50
var limitNumber = randomNomor(65)
} else if (db.users[m.sender].xp <= 56) {
var levelRole = "GrandMaster III"
var levelRoleSebelum = "GrandMaster IV"
var levelNumber = 56
var limitNumber = randomNomor(70) 
} else if (db.users[m.sender].xp <= 62) {
var levelRole = "GrandMaster II"
var levelRoleSebelum = "GrandMaster III"
var levelNumber = 62
var limitNumber = randomNomor(75)
} else if (db.users[m.sender].xp <= 68) {
var levelRole = "GrandMaster I"
var levelRoleSebelum = "GrandMaster II"
var levelNumber = 68
var limitNumber = randomNomor(80)
} else if (db.users[m.sender].xp <= 74) {
var levelRole = "Epic V"
var levelRoleSebelum = "GrandMaster I"
var levelNumber = 74
var limitNumber = randomNomor(85)
} else if (db.users[m.sender].xp <= 81) {
var levelRole = "Epic IV"
var levelRoleSebelum = "Epic V"
var levelNumber = 81
var limitNumber = randomNomor(90)
} else if (db.users[m.sender].xp <= 88) {
var levelRole = "Epic III"
var levelRoleSebelum = "Epic IV"
var levelNumber = 88
var limitNumber = randomNomor(95)
} else if (db.users[m.sender].xp <= 95) {
var levelRole = "Epic II"
var levelRoleSebelum = "Epic III"
var levelNumber = 95
var limitNumber = randomNomor(100)
} else if (db.users[m.sender].xp <= 102) {
var levelRole = "Epic I"
var levelRoleSebelum = "Epic II"
var levelNumber = 102
var limitNumber = randomNomor(105)
} else if (db.users[m.sender].xp <= 109) {
var levelRole = "Legend V"
var levelRoleSebelum = "Epic I"
var levelNumber = 109
var limitNumber = randomNomor(110)
} else if (db.users[m.sender].xp <= 117) {
var levelRole = "Legend IV"
var levelRoleSebelum = "Legend V"
var levelNumber = 117
var limitNumber = randomNomor(115)
} else if (db.users[m.sender].xp <= 125) {
var levelRole = "Legend III"
var levelRoleSebelum = "Legend IV"
var levelNumber = 125
var limitNumber = randomNomor(120)
} else if (db.users[m.sender].xp <= 133) {
var levelRole = "Legend II"
var levelRoleSebelum = "Legend III"
var levelNumber = 133
var limitNumber = randomNomor(125)
} else if (db.users[m.sender].xp <= 141) {
var levelRole = "Legend I"
var levelRoleSebelum = "Legend II"
var levelNumber = 141
var limitNumber = randomNomor(130)
} else if (db.users[m.sender].xp <= 149) {
var levelRole = "Mythic V"
var levelRoleSebelum = "Legend I"
var levelNumber = 149
var limitNumber = randomNomor(135)
} else if (db.users[m.sender].xp <= 158) {
var levelRole = "Mythic IV"
var levelRoleSebelum = "Mythic V"
var levelNumber = 158
var limitNumber = randomNomor(140)
} else if (db.users[m.sender].xp <= 167) {
var levelRole = "Mythic III"
var levelRoleSebelum = "Mythic IV"
var levelNumber = 167
var limitNumber = randomNomor(145)
} else if (db.users[m.sender].xp <= 176) {
var levelRole = "Mythic II"
var levelRoleSebelum = "Mythic III"
var levelNumber = 176
var limitNumber = randomNomor(150)
} else if (db.users[m.sender].xp <= 185) {
var levelRole = "Mythic I"
var levelRoleSebelum = "Mythic II"
var levelNumber = 185
var limitNumber = randomNomor(155)
} else if (db.users[m.sender].xp <= 194) {
var levelRole = "Mythical Glory"
var levelRoleSebelum = "Mythic I"
var levelNumber = 194
var limitNumber = randomNomor(160)
} else {
var levelRole = "Primordial Glory"
var levelRoleSebelum = "Mythical Glory"
var levelNumber = db.users[m.sender].xp
var limitNumber = randomNomor(165)
}
if (Number(db.users[m.sender].xp) == Number(levelNumber)) {
if (db.users[m.sender].level !== "Primordial Glory") {
db.users[m.sender].level = levelRole
db.users[m.sender].balance += Number(limitNumber * 1000)
db.users[m.sender].limit += Number(limitNumber)
let teks = "\`\`\`「  LEVEL UP  」\`\`\`\n\n"
teks += `▸ Name : ${m.pushName}\n`
teks += `▸ Users : @${m.sender.split("@")[0]}\n`
teks += `▸ Saldo : + ${Number(limitNumber * 1000)}\n`
teks += `▸ Limit : + ${Number(limitNumber)}\n`
teks += `▸ Level : ${levelRoleSebelum} => ${levelRole}\n`
teks += `▸ Clock : ${m.timeWib}`
setReply(teks)
}}} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}}
//=========================[ FUNCTION GET COMMAND ]=========================\\
if (Object.keys(db.database).includes(m.sender)) {
if (db.database[m.sender].command == "addowner") {
if (db.database[m.sender].expired == "" && !isNaN(m.body) && Number(m.body) > 0 && Number(m.body) <= 8) {
let expired = Number(m.body) <= 1? "permanent" : Number(m.body) <= 2? "years" : Number(m.body) <= 3? "months" : Number(m.body) <= 4? "weeks" : Number(m.body) <= 5? "days" : Number(m.body) <= 6? "hours" : Number(m.body) <= 7? "minutes" : "seconds"
db.database[m.sender].expired = expired
if (expired !== "permanent") {
setReply(`Berapa ${expired}?`) 
} else if (expired == "permanent") {
setReply(`Success add owner @${db.database[m.sender].id.split("@")[0]}`)
if (Object.keys(db.expired[m.botNumber].owner).includes(db.database[m.sender].id)) {
delete db.expired[m.botNumber].owner[db.database[m.sender].id]
}
db.expired[m.botNumber].vip[db.database[m.sender].id] = { date: calender, expired: "INFINITY" }
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}} else if (db.database[m.sender].expired !== "" && !isNaN(m.body) && Number(m.body) > 0) {
if (db.database[m.sender].expired == "years" || db.database[m.sender].expired == "weeks" || db.database[m.sender].expired == "days" || db.database[m.sender].expired == "hours" || db.database[m.sender].expired == "minutes" || db.database[m.sender].expired == "seconds") {
setReply(`Success add owner @${db.database[m.sender].id.split("@")[0]} ${m.body} ${db.database[m.sender].expired}`)
if (Object.keys(db.expired[m.botNumber].owner).includes(db.database[m.sender].id)) {
db.expired[m.botNumber].owner[db.database[m.sender].id].expired += Number(toMs(`${m.body}${db.database[m.sender].expired}`))
} else db.expired[m.botNumber].owner[db.database[m.sender].id] = { date: calender, expired: Date.now() + toMs(`${m.body}${db.database[m.sender].expired}`) }
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
} else if (db.database[m.sender].expired == "months") {
setReply(`Success add owner @${db.database[m.sender].id.split("@")[0]} ${m.body} ${db.database[m.sender].expired}`)
if (Object.keys(db.expired[m.botNumber].owner).includes(db.database[m.sender].id)) {
db.expired[m.botNumber].owner[db.database[m.sender].id].expired += Number(toMs(Number(m.body * 30) + "days"))
} else db.expired[m.botNumber].owner[db.database[m.sender].id] = { date: calender, expired: Date.now() + toMs(Number(m.body * 30) + "days") }
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}}
} else if (db.database[m.sender].command == "addpremium") {
if (db.database[m.sender].expired == "" && !isNaN(m.body) && Number(m.body) > 0 && Number(m.body) <= 8) {
let expired = Number(m.body) <= 1? "permanent" : Number(m.body) <= 2? "years" : Number(m.body) <= 3? "months" : Number(m.body) <= 4? "weeks" : Number(m.body) <= 5? "days" : Number(m.body) <= 6? "hours" : Number(m.body) <= 7? "minutes" : "seconds"
db.database[m.sender].expired = expired
if (expired !== "permanent") {
setReply(`Berapa ${expired}?`) 
} else if (expired == "permanent") {
setReply(`Success add premium @${db.database[m.sender].id.split("@")[0]}`)
if (Object.keys(db.expired[m.botNumber].premium).includes(db.database[m.sender].id) && db.expired[m.botNumber].premium[db.database[m.sender].id].expired !== "INFINITY") {
db.expired[m.botNumber].premium[db.database[m.sender].id].expired = "INFINITY"
} else if (!Object.keys(db.expired[m.botNumber].premium).includes(db.database[m.sender].id)) {
db.expired[m.botNumber].premium[db.database[m.sender].id] = { date: calender, expired: "INFINITY" }
}
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}} else if (db.database[m.sender].expired !== "" && !isNaN(m.body) && Number(m.body) > 0) {
if (db.database[m.sender].expired == "years" || db.database[m.sender].expired == "weeks" || db.database[m.sender].expired == "days" || db.database[m.sender].expired == "hours" || db.database[m.sender].expired == "minutes" || db.database[m.sender].expired == "seconds") {
setReply(`Success add premium @${db.database[m.sender].id.split("@")[0]} ${m.body} ${db.database[m.sender].expired}`)
if (Object.keys(db.expired[m.botNumber].premium).includes(db.database[m.sender].id)) {
db.expired[m.botNumber].premium[db.database[m.sender].id].expired += Number(toMs(`${m.body}${db.database[m.sender].expired}`))
} else db.expired[m.botNumber].premium[db.database[m.sender].id] = { date: calender, expired: Date.now() + toMs(`${m.body}${db.database[m.sender].expired}`) }
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
} else if (db.database[m.sender].expired == "months") {
setReply(`Success add premium @${db.database[m.sender].id.split("@")[0]} ${m.body} ${db.database[m.sender].expired}`)
if (Object.keys(db.expired[m.botNumber].premium).includes(db.database[m.sender].id)) {
db.expired[m.botNumber].premium[db.database[m.sender].id].expired += Number(toMs(Number(m.body * 30) + "days"))
} else db.expired[m.botNumber].premium[db.database[m.sender].id] = { date: calender, expired: Date.now() + toMs(Number(m.body * 30) + "days") }
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}}
} else if (db.database[m.sender].command == "addsewa") {
if (db.database[m.sender].expired == "" && !isNaN(m.body) && Number(m.body) > 0 && Number(m.body) <= 8) {
let expired = Number(m.body) <= 1? "permanent" : Number(m.body) <= 2? "years" : Number(m.body) <= 3? "months" : Number(m.body) <= 4? "weeks" : Number(m.body) <= 5? "days" : Number(m.body) <= 6? "hours" : Number(m.body) <= 7? "minutes" : "seconds"
db.database[m.sender].expired = expired
if (expired !== "permanent") {
setReply(`Berapa ${expired}?`) 
} else if (expired == "permanent") {
if (db.database[m.sender].id !== "") {
let groupMetadata2 = await sock.groupMetadata(db.database[m.sender].id)
setReply(`Success add sewa ${groupMetadata2.subject}`)
if (Object.keys(db.expired[m.botNumber].sewa).includes(db.database[m.sender].id) && db.expired[m.botNumber].sewa[db.database[m.sender].id].expired !== "INFINITY") {
if (db.chats[db.database[m.sender].id].sewa.status) db.chats[db.database[m.sender].id].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[db.database[m.sender].id].expired = "INFINITY"
} else if (!Object.keys(db.expired[m.botNumber].sewa).includes(db.database[m.sender].id)) {
if (db.chats[db.database[m.sender].id].sewa.status) db.chats[db.database[m.sender].id].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[db.database[m.sender].id] = { date: calender, expired: "INFINITY" }
}} else {
let randomText = ["textKapital","textNonKapital","textNumber","textNonKapital","textNumber","textKapital","textNumber","textNonKapital","textKapital"]
let textKapital = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let textNonKapital = ["m","n","b","v","c","x","z","a","s","d","f","g","h","j","k","l","p","o","i","u","y","t","r","e","w","q"]
let textNumber = ["1","2","3","4","5","6","7","8","9","0"]
if (pickRandom(randomText) == "textKapital") {
var code1 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code1 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code1 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code2 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code2 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code2 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code3 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code3 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code3 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code4 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code4 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code4 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code5 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code5 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code5 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code6 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code6 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code6 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code7 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code7 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code7 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code8 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code8 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code8 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code9 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code9 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code9 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code10 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code10 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code10 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code11 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code11 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code11 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code12 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code12 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code12 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code13 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code13 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code13 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code14 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code14 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code14 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code15 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code15 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code15 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code16 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code16 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code16 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code17 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code17 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code17 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code18 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code18 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code18 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code19 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code19 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code19 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code20 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code20 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code20 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code21 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code21 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code21 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code22 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code22 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code22 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code23 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code23 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code23 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code24 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code24 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code24 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code25 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code25 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code25 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code26 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code26 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code26 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code27 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code27 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code27 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code28 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code28 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code28 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code29 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code29 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code29 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code30 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code30 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code30 = pickRandom(textNumber)
}
let allCode = code1 + code2 + code3 + code4 + code5 + code6 + code7 + code8 + code9 + code10 + code11 + code12 + code13 + code14 + code15 + code16 + code17 + code18 + code19 + code20 + code21 + code22 + code23 + code24 + code25 + code26 + code27 + code28 + code29 + code30
db.createcode[allCode] = { expired: "INFINITY" }
setReply(`${allCode}`) 
}
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}} else if (db.database[m.sender].expired !== "" && !isNaN(m.body) && Number(m.body) > 0) {
if (db.database[m.sender].expired == "years" || db.database[m.sender].expired == "weeks" || db.database[m.sender].expired == "days" || db.database[m.sender].expired == "hours" || db.database[m.sender].expired == "minutes" || db.database[m.sender].expired == "seconds") {
if (db.database[m.sender].id !== "") {
let groupMetadata2 = await sock.groupMetadata(db.database[m.sender].id)
setReply(`Success add sewa ${groupMetadata2.subject} ${m.body} ${db.database[m.sender].expired}`)
if (Object.keys(db.expired[m.botNumber].sewa).includes(db.database[m.sender].id)) {
if (db.chats[db.database[m.sender].id].sewa.status) db.chats[db.database[m.sender].id].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[db.database[m.sender].id].expired += Number(toMs(`${m.body}${db.database[m.sender].expired}`))
} else {
if (db.chats[db.database[m.sender].id].sewa.status) db.chats[db.database[m.sender].id].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[db.database[m.sender].id] = { date: calender, expired: Date.now() + toMs(`${m.body}${db.database[m.sender].expired}`) }
}} else {
let randomText = ["textKapital","textNonKapital","textNumber","textNonKapital","textNumber","textKapital","textNumber","textNonKapital","textKapital"]
let textKapital = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let textNonKapital = ["m","n","b","v","c","x","z","a","s","d","f","g","h","j","k","l","p","o","i","u","y","t","r","e","w","q"]
let textNumber = ["1","2","3","4","5","6","7","8","9","0"]
if (pickRandom(randomText) == "textKapital") {
var code1 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code1 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code1 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code2 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code2 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code2 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code3 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code3 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code3 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code4 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code4 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code4 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code5 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code5 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code5 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code6 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code6 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code6 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code7 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code7 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code7 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code8 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code8 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code8 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code9 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code9 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code9 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code10 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code10 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code10 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code11 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code11 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code11 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code12 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code12 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code12 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code13 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code13 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code13 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code14 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code14 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code14 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code15 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code15 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code15 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code16 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code16 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code16 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code17 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code17 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code17 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code18 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code18 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code18 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code19 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code19 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code19 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code20 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code20 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code20 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code21 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code21 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code21 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code22 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code22 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code22 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code23 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code23 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code23 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code24 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code24 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code24 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code25 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code25 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code25 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code26 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code26 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code26 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code27 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code27 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code27 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code28 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code28 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code28 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code29 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code29 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code29 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code30 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code30 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code30 = pickRandom(textNumber)
}
let allCode = code1 + code2 + code3 + code4 + code5 + code6 + code7 + code8 + code9 + code10 + code11 + code12 + code13 + code14 + code15 + code16 + code17 + code18 + code19 + code20 + code21 + code22 + code23 + code24 + code25 + code26 + code27 + code28 + code29 + code30
db.createcode[allCode] = { expired: `${m.body}${db.database[m.sender].expired}` }
setReply(`${allCode}`)
}
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
} else if (db.database[m.sender].expired == "months") {
if (db.database[m.sender].id !== "") {
let groupMetadata2 = await sock.groupMetadata(db.database[m.sender].id)
setReply(`Success add sewa ${groupMetadata2.subject} ${m.body} ${db.database[m.sender].expired}`)
if (Object.keys(db.expired[m.botNumber].sewa).includes(db.database[m.sender].id)) {
if (db.chats[db.database[m.sender].id].sewa.status) db.chats[db.database[m.sender].id].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[db.database[m.sender].id].expired += Number(toMs(Number(m.body * 30) + "days"))
} else {
if (db.chats[db.database[m.sender].id].sewa.status) db.chats[db.database[m.sender].id].sewa = { status: false, date: calender, expired: 0 }
db.expired[m.botNumber].sewa[db.database[m.sender].id] = { date: calender, expired: Date.now() + toMs(Number(m.body * 30) + "days") }
}} else {
let randomText = ["textKapital","textNonKapital","textNumber","textNonKapital","textNumber","textKapital","textNumber","textNonKapital","textKapital"]
let textKapital = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let textNonKapital = ["m","n","b","v","c","x","z","a","s","d","f","g","h","j","k","l","p","o","i","u","y","t","r","e","w","q"]
let textNumber = ["1","2","3","4","5","6","7","8","9","0"]
if (pickRandom(randomText) == "textKapital") {
var code1 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code1 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code1 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code2 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code2 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code2 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code3 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code3 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code3 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code4 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code4 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code4 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code5 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code5 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code5 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code6 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code6 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code6 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code7 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code7 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code7 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code8 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code8 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code8 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code9 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code9 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code9 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code10 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code10 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code10 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code11 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code11 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code11 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code12 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code12 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code12 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code13 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code13 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code13 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code14 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code14 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code14 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code15 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code15 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code15 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code16 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code16 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code16 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code17 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code17 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code17 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code18 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code18 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code18 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code19 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code19 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code19 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code20 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code20 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code20 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code21 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code21 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code21 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code22 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code22 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code22 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code23 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code23 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code23 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code24 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code24 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code24 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code25 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code25 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code25 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code26 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code26 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code26 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code27 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code27 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code27 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code28 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code28 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code28 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code29 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code29 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code29 = pickRandom(textNumber)
}
if (pickRandom(randomText) == "textKapital") {
var code30 = pickRandom(textKapital)
} else if (pickRandom(randomText) == "textNonKapital") {
var code30 = pickRandom(textNonKapital)
} else if (pickRandom(randomText) == "textNumber") {
var code30 = pickRandom(textNumber)
}
let allCode = code1 + code2 + code3 + code4 + code5 + code6 + code7 + code8 + code9 + code10 + code11 + code12 + code13 + code14 + code15 + code16 + code17 + code18 + code19 + code20 + code21 + code22 + code23 + code24 + code25 + code26 + code27 + code28 + code29 + code30
db.createcode[allCode] = { expired: `${m.body}${db.database[m.sender].expired}` }
setReply(`${allCode}`)
}
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}}
} else if (db.database[m.sender].command == "addlimit") {
if (!isNaN(m.budy) && Number(m.budy) > 0) {
db.users[db.database[m.sender].id].limit += Number(m.budy)
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}} else if (db.database[m.sender].command == "addbalance") {
if (!isNaN(m.budy) && Number(m.budy) > 0) {
db.users[db.database[m.sender].id].balance += Number(m.budy)
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}} else if (db.database[m.sender].command == "dellimit") {
if (!isNaN(m.budy) && Number(m.budy) > 0 && Number(m.budy) <= db.users[db.database[m.sender].id].limit) {
setReply(`Success add limit ${Number(m.budy)} ke @${db.database[m.sender].id.split("@")[0]}`)
db.users[db.database[m.sender].id].limit -= Number(m.budy)
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}} else if (db.database[m.sender].command == "delbalance") {
if (!isNaN(m.budy) && Number(m.budy) > 0 && Number(m.budy) <= db.users[db.database[m.sender].id].limit) {
setReply(`Success add balance ${Number(m.budy)} ke @${db.database[m.sender].id.split("@")[0]}`)
db.users[db.database[m.sender].id].balance -= Number(m.budy)
setTimeout(() => {
delete db.database[m.sender]
}, 3000)
}}}
//=========================[ FUNCTION ANTI SPAM ]=========================\\
if (antiSpam) {
if (Object.keys(db.antispam).includes(m.sender)) {
if (db.antispam[m.sender].hit < 5) {
db.antispam[m.sender].hit += 1
if (autoVn) {
return sock.sendMessage(m.chat, { audio: audioPack.jangan_spam_ntar_gua_ewe, mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
return sock.sendMessage(m.chat, { sticker: stickerPack.jangan_spam }, { quoted: setQuoted })
} else {
return setReply("Jangan spam 😡")
}} else {
db.banned[m.sender] = {
date: calender,
reason: "Spam Bot"
}
return setReply("Maaf kamu telah terbanned karna melakukan spam")
}} else if (!m.isPremium && !Object.keys(db.antispam).includes(m.sender)) {
db.antispam[m.sender] = {
hit: 1, 
expired: Date.now() + toMs("15second")
}
}}
//=========================[ FUNCTION AUTO RESPON GROUP ]=========================\\
if ((m.quoted? m.quoted.sender : m.mentionedJid[0]) == m.botNumber && isAutoResponGroup && !isCmd && isText) {
try{
let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦","Apa","Sok asik","Lu siapa?","Saha","Gaje bet lu","Maju sink tai"]
let teks1 = pickRandom(jawab)
let teks2 = m.budy
let hasil = [`${teks1}`, `${teks2}`]
let random = pickRandom(hasil)
let { data } = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURI(m.budy)}&lc=id`)
let sami = data.success
if (sami.startsWith("Aku tidak mengerti")) {
var teksnya = random
} else {
var teksnya = sami
}
setReply(teksnya)
} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}}
//=========================[ FUNCTION AUTO STICKER ]=========================\\
if (autoSticker && isImage) {
const media = await sock.downloadMediaMessage(m)
const options = {
image: `data:image/jpeg;base64,${media.toString("base64")}`,
stickerMetadata: {
pack: m.isPremium? m.senderNumber : ownerNumber,
author: m.isPremium? m.pushName : ownerName,
keepScale: true,
circle: false,
removebg: false,
}
}
axios.create({ baseURL: "https://sticker-api-tpe3wet7da-uc.a.run.app" }).post("/prepareWebp", options).then(({ data }) => {
sock.sendMessage(m.chat, { sticker: Buffer.from(data.webpBase64, "base64") }, { quoted: setQuoted })
})
} else if (isQuotedSticker && autoSticker && m.quoted.sender == m.botNumber) {
const listName = fs.readdirSync("./temp/").filter((x) => x.includes(".webp"))
if (listName.length > 0) {
const namastc = pickRandom(listName)
sock.sendMessage(m.chat, { sticker: fs.readFileSync("./temp/" + namastc) }, { quoted: setQuoted })
}}
//=========================[ FUNCTION AUTO REACT ]=========================\\
for (const x of i18n.__("kata_cek")) {
if (isAutoReactGroup && m.budy.toLowerCase().includes(x) && !isCmd) {
sock.sendMessage(m.chat, { react: { text: pickRandom(i18n.__("allemoji")), key: m.key } })
}}
//=========================[ FUNCTION ANTI DELETE ]=========================\\
if (isAntiDelete && Object.keys(db.message).includes(m.sender) && m.type == "protocolMessage") {
try{
let teks = "\`\`\`「  PESAN DITARIK TERDETEKSI  」\`\`\`\n\n"
teks += `› Dari : @${m.senderNumber}\n`
teks += `› Waktu : ${m.timeWib}\n`
teks += `› Tanggal : ${calender}\n`
teks += `› Type : ${db.message[m.sender].type}`
setReply(teks)
setTimeout(() => {
sock.copyNForward(m.chat, db.message[m.sender])
}, 2000)
} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}}
//=========================[ FUNCTION ANTI VIEW ONCE ]=========================\\
if (isAntiViewOnce && isViewOnce && !isCmd) {
try{
const media = await sock.downloadMediaMessage(m) 
let teks = "\`\`\`「  PESAN SEKALI TERBUKA TERDETEKSI  」\`\`\`\n\n"
teks += `› Dari : @${m.senderNumber}\n`
teks += `› Waktu : ${m.timeWib}\n`
teks += `› Tanggal : ${calender}\n`
teks += `› Caption : ${m.body}\n`
teks += `› Type : ${getContentType(m.message).split("Message")[0]}`
if (getContentType(m.message) == "videoMessage") await sock.sendMessage(m.chat, { video: media, caption: teks }, { quoted: setQuoted })
if (getContentType(m.message) == "imageMessage") await sock.sendMessage(m.chat, { image: media, caption: teks }, { quoted: setQuoted })
} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}}
//=========================[ FUNCTION ANTI LINK GROUP ]=========================\\
if (isAntiLink && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("https://chat.whatsapp.com/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let linkgc = await sock.groupInviteCode(m.chat)
let teks = `\`\`\`「  LINK GROUP DETECTED  」\`\`\`

Kamu mengirim link group maaf kamu akan di keluarkan dari group`
if (m.budy.includes(`${linkgc}`)) return 
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK YOUTUBE ]=========================\\
if (isAntiLinkYoutube && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("youtube.com/") || m.budy.includes("https://youtu.be/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK YOUTUBE DETECTED  」\`\`\`

Kamu mengirim link youtube maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK FACEBOOK ]=========================\\
if (isAntiLinkFacebook && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("facebook.com/") || m.budy.includes("https://fb.watch/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK FACEBOOK DETECTED  」\`\`\`

Kamu mengirim link facebook maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK INSTAGRAM ]=========================\\
if (isAntiLinkInstagram && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("instagram.com/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK INSTAGRAM DETECTED  」\`\`\`

Kamu mengirim link instagram maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK TELEGRAM ]=========================\\
if (isAntiLinkTelegram && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("https://t.me/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK TELEGRAM DETECTED  」\`\`\`

Kamu mengirim link telegram maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK WA ]=========================\\
if (isAntiLinkWhatsapp && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("wa.me/") || m.budy.includes("Wa.me/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK WHATSAPP DETECTED  」\`\`\`

Kamu mengirim link whatsapp maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK TIKTOK ]=========================\\
if (isAntiLinkTiktok && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("tiktok.com/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK TIKTOK DETECTED  」\`\`\`

Kamu mengirim link tiktok maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI LINK TWITTER ]=========================\\
if (isAntiLinkTwitter && isBotGroupAdmins && !isCmd) {
if (m.budy.includes("twitter.com/")) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  LINK TWITTER DETECTED  」\`\`\`

Kamu mengirim link twitter maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI ASING ]=========================\\
if (isAntiAsing && isBotGroupAdmins) {
let member = participants.filter((x) => !x.id.includes(m.botNumber) && !groupAdmins.includes(x.id)).map((x) => "+" + x.id).filter((x) => !x.includes("+62")).map((x) => x.split("+")[1])
if (member.length > 0) {
sock.groupParticipantsUpdate(m.chat, member, "remove")
}}
//=========================[ FUNCTION ANTI TOXIC ]=========================\\
if (isAntiToxic && isBotGroupAdmins && !isCmd) {
for (const x of i18n.__("kata_toxic")) {
if (m.budy.toLowerCase().includes(x)) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  ANTI TOXIC DETECTED  」\`\`\`

Kamu mengirim pesan kasar maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}}
//=========================[ FUNCTION ANTI SANGE ]=========================\\
if (isAntiSange && isBotGroupAdmins && !isCmd) {
if (i18n.__("kata_dosa").includes(m.budy.toLowerCase())) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  ANTI SANGE DETECTED  」\`\`\`

Kamu mengirim pesan kurang bikin nyaman maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ FUNCTION ANTI VIRTEX ]=========================\\
if (isAntiVirtex && isBotGroupAdmins && m.budy.length > 20000) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  ANTI VIRTEX DETECTED  」\`\`\`

Kamu mengirim virtex maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
//=========================[ FUNCTION ANTI TAG ]=========================\\
if (isAntiTag && isBotGroupAdmins && !isCmd) {
if (m.isMention) {
if (m.isOwner && m.key.fromMe && isGroupAdmins) return
let teks = `\`\`\`「  ANTI TAG MEMBER DETECTED  」\`\`\`

Kamu mengganggu member di group maaf kamu akan di keluarkan dari group`
setReply(teks)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}}
//=========================[ DETECT AFK USERS ]=========================\\
if (Object.keys(db.chats).includes(m.chat) && db.chats[m.chat].afk_group.includes(m.quoted? m.quoted.sender : m.mentionedJid[0]) && !isCmd) {
setReply("Jangan ganggu dia sedang afk")        
}        
if (Object.keys(db.chats).includes(m.chat) && db.chats[m.chat].afk_group.includes(m.sender)) {
db.chats[m.chat].afk_group.splice(db.chats[m.chat].afk_group.indexOf(m.sender, 1))
setReply("Kamu telah kembali dari afk")
}
//=========================[ AUTO RESPON VOICE MESSAGE ]=========================\\
if (isText) {
const listName = fs.readdirSync("./temp").filter((x) => x.includes(".mp3")).map((x) => x.split(".mp3")[0])
if (listName.includes(m.budy)) {
sock.sendMessage(m.chat, { audio: fs.readFileSync(`./temp/${m.budy}.mp3`), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
}}
//=========================[ AUTO RESPON STICKER MESSAGE ]=========================\\
if (isText) {
const listName = fs.readdirSync("./temp").filter((x) => !x.includes(".webp")).map((x) => x.split(".webp")[0])
if (listName.includes(m.budy)) {
sock.sendMessage(m.chat, { sticker: fs.readFileSync(`./temp/${m.budy}.webp`) }, { quoted: setQuoted })
}}
//=========================[ AUTO RESPON MESSAGE ]=========================\\
if (!m.isGroup && !isCmd && !m.key.fromMe && autoRespon && isText) {
try{
let randomText = ["Ara Ara Kak","Iy Kak","Ada apa kak","🗿","🐦","Afa iy","Apa","Oh","Ok"]
let randomDesah = ["G mau kak","Ish kakak sange 😒","Dosa kak","Jangan gtu dong kak","Kakak g boleh gtu 😡"]
let randomAra = ["Araa ara","G mau ngomong ara","Ogah bet","Cih","Ara ara kak"]
let simiV2 = pickRandom(randomText)
let { data } = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURI(m.budy)}&lc=id`)
let sami = data.success
if (m.budy.toLowerCase().includes("ara")) {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([ audioPack.ngomong_apaan_sih, audioPack.kaga_ada, audioPack.ga_mau, audioPack.ga_da, audioPack.ara_ara, audioPack.ara_ara_goblok, ]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else setReply(pickRandom([randomAra]))
} else if (m.budy.toLowerCase().includes("desah") || i18n.__("kata_dosa").includes(m.budy.toLowerCase())) {
setReply(pickRandom([randomDesah]))
} else if (sami.startsWith("Aku tidak mengerti")) {
setReply(pickRandom([simiV2, m.budy]))
} else {
setReply(pickRandom([sami, simiV2, m.budy]))
}} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}}
//=========================[ RESPON COMMAND GET FILE ]=========================\\
if (Object.keys(db.allcommand).includes(command) && db.allcommand[command].tempFile !== "case") {
//=========================[ RESPON (ONLY SEWA) ]=========================\\
if (cmdOptions.isSewa) {
if (m.isGroup && !m.isSewa) return setReply("Maaf kak sepertinya group ini belum sewa")
}
//=========================[ RESPON (BLOCK COMMAND) ]=========================\\
if (db.blockcmd.includes(command)) {
return setReply("Maaf kak command telah di block")
}
//=========================[ RESPON (COOL DOWN) ]=========================\\
if (!m.isPremium && cmdOptions.cooldown > 0) {
if (Object.keys(db.cooldown).includes(m.sender)) {
try{ 
let expired = Number(db.cooldown[m.sender].expired) - Number(Date.now())
var cooldown = expired == NaN? 0.000 : expired / 1000
} catch {
var cooldown = 0.000
}
return setReply(`Cooldown, please waiting ${cooldown} seconds again.`)
} else {
db.cooldown[m.sender] = {
expired: Date.now() + toMs(cmdOptions.cooldown + "second"), 
}}}
//=========================[ RESPON (ONLY PRIVATE) ]=========================\\
if (cmdOptions.isPrivate) {
if (m.isGroup) return onlyPrivate()
}
//=========================[ RESPON (ONLY GROUP) ]=========================\\
if (cmdOptions.isGroup) {
if (!m.isGroup) return onlyGroup()
}
//=========================[ RESPON (ADMIN) ]=========================\\
if (cmdOptions.isAdmin) {
if (!isGroupAdmins && !m.isOwner) return onlyAdmin()
}
//=========================[ RESPON (BOT ADMIN) ]=========================\\
if (cmdOptions.isBotAdmin) {
if (!isBotGroupAdmins) return onlyBadmin()
}
//=========================[ RESPON (ONLY CREATOR) ]=========================\\
if (cmdOptions.isVip) {
if (!m.isCreator && !m.key.fromMe) return setReply("Maaf kak kamu bukan users owner vip")
}
//=========================[ RESPON (ONLY OWNER) ]=========================\\
if (cmdOptions.isOwner) {
if (!m.isOwner && !m.key.fromMe) return onlyOwner()
}
//=========================[ RESPON (ONLY PREMIUM) ]=========================\\
if (cmdOptions.isPremium) {
if (!m.isPremium && !m.key.fromMe) return setReply("Maaf kak kamu bukan users premium")
}
//=========================[ RESPON (MEDIA) ]=========================\\
if (cmdOptions.isMedia.isImage && cmdOptions.isMedia.isVideo && cmdOptions.isMedia.isQuotedMedia.isQuotedImage && cmdOptions.isMedia.isQuotedMedia.isQuotedVideo) {
if (!isImage && !isVideo && !isQuotedImage && !isQuotedVideo) return setReply(`Use photos/videos or Reply photos/videos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isImage && cmdOptions.isMedia.isQuotedMedia.isQuotedImage) {
if (!isImage && !isQuotedImage) return setReply(`Use photos or Reply photos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isVideo && cmdOptions.isMedia.isQuotedMedia.isQuotedVideo) {
if (!isVideo && !isQuotedVideo) return setReply(`Use videos or Reply videos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isDocument && cmdOptions.isMedia.isQuotedMedia.isQuotedDocument) {
if (!isDocument && !isQuotedDocument) return setReply(`Use documents or Reply documents with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isViewOnce && cmdOptions.isMedia.isQuotedMedia.isQuotedViewOnce) {
if (!isViewOnce && !isQuotedViewOnce) return setReply(`Use view once or Reply view once with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isImage) {
if (!isImage) return setReply(`Use photos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isVideo) {
if (!isVideo) return setReply(`Use videos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isDocument) {
if (!isDocument) return setReply(`Use documents with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isViewOnce) {
if (!isViewOnce) return setReply(`Use view once with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedImage) {
if (!isQuotedImage) return setReply(`Reply photos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedVideo) {
if (!isQuotedVideo) return setReply(`Reply videos with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedAudio) {
if (!isQuotedAudio) return setReply(`Reply audios with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedSticker) {
if (!isQuotedSticker) return setReply(`Reply stickers with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedDocument) {
if (!isQuotedDocument) return setReply(`Reply documents with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedViewOnce) {
if (!isQuotedViewOnce) return setReply(`Reply view once with captions ${prefix + command}`) 
} else if (cmdOptions.isMedia.isQuotedMedia.isQuotedContact) {
if (!isQuotedContact) return setReply(`Reply contacts with captions ${prefix + command}`) 
}
//=========================[ RESPON (EXAMPLE) ]=========================\\
if (cmdOptions.minArgs > m.args.length) {
let teks = `*Minimal argument is ${cmdOptions.minArgs}*\n`
if (cmdOptions.expectedArgs) {
teks += `*Argument :* ${cmdOptions.expectedArgs}\n`
teks += `*Usage :* ${prefix + command} ${cmdOptions.expectedArgs}\n`
}
if (cmdOptions.example) {
teks += `*Example :* ${prefix + command} ${cmdOptions.example.split("{prefix}{command} ")[1]}`
}
return setReply(util.format(teks))
}
//=========================[ RESPON (ONLY OWNER) ]=========================\\
if (cmdOptions.isLimit) {
if (m.isPremium || m.key.fromMe) {
onlyWait() 
} else {
if (db.users[m.sender].limit < 1) return setReply("Maaf kak limit kamu sudah habis")
db.users[m.sender].limit -= 1
{let ko = await sock.sendMessage(m.chat, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${db.users[m.sender].limit}` }, { quoted: setQuoted })
setTimeout(() => sock.sendMessage(m.chat, { delete:  ko.key }), 2500)
let kon = await sock.sendMessage(m.chat, { text: util.format(i18n.__("wait")) }, { quoted: setQuoted })
setTimeout(() => sock.sendMessage(m.chat, { delete:  kon.key }), 3000)}
}}
//=========================[ RESPON (ONLY WAIT) ]=========================\\
if (!cmdOptions.isLimit && cmdOptions.isWait) {
onlyWait()
}
//=========================[ RESPON COMMAND && ADD ADD DASHBOARD ]=========================\\
try{
await cmdSuccess(command) 
await cmdOptions.callback(sock, m, { setReply, setQuoted, fpoll, fpayment, fvn, fgif, faudio, fvideo, fdocument, fimage, flocation, ftroli, ftext, fkontak, ftoko, ofrply, kfrply, dfrply, zfrply, pfrply, gfrply, command, prefix, thePrefix, isQuotedAllMedia, isQuotedDocument, isQuotedLocation, isQuotedContact, isQuotedViewOnce, isQuotedAudio, isQuotedSticker, isQuotedVideo, isQuotedImage, isQuotedText, isAllMedia, isDocument, isLocation, isContact, isViewOnce, isAudio, isSticker, isVideo, isImage, isText, isWelcome, isBanChat, isAutoReactGroup, isAutoResponGroup, isAntiSange, isAntiToxic, isAntiViewOnce, isAntiDelete, isAntiTag, isAntiAsing, isAntiVirtex, isAntiLinkTwitter, isAntiLinkTiktok, isAntiLinkWhatsapp, isAntiLinkTelegram, isAntiLinkInstagram, isAntiLinkFacebook, isAntiLinkYoutube, isAntiLink, isGroupAdmins, isBotGroupAdmins, groupOwner, groupAdmins, groupMembers, participants, groupName, groupMetadata, antiSpam, antiCall, autoJoin, autoLevel, autoQuoted, autoVn, autoRead, autoRespon, autoSticker, autoBio, autoReport, autoBlockCmd, auto, mode, replyType, quotedType, setPrefix, setWelcome, setMenu }) 
} catch (e) {
cmdFailed(command, e)
}
//=========================[ RESPON COMMAND GET CASE ]=========================\\
} else switch (command) {
case "restart":
if (m.isGroup && !m.isSewa) return setReply("Maaf kak sepertinya group ini belum sewa")
if (!m.isOwner && !m.key.fromMe) return onlyOwner()
try{
setTimeout(() => {
process.send("reset")
}, 3000)
cmdSuccess(command, "case")
setReply("Restarting bot.....")
} catch (e) {
cmdFailed(command, e, "case")
}
break
case "stopped":
if (m.isGroup && !m.isSewa) return setReply("Maaf kak sepertinya group ini belum sewa")
if (!m.isCreator) return onlyOwner()
try{
setTimeout(() => {
process.send("stopped")
}, 3000)
cmdSuccess(command, "case")
setReply("Stopped bot.....")
} catch (e) {
cmdFailed(command, e, "case")
}
break
case "getsesi":
try{
if (m.isGroup && !m.isSewa) return setReply("Maaf kak sepertinya group ini belum sewa")
if (m.isGroup && !m.isCreator) return onlyPrivate()
if (m.input) {
let files = fs.readdirSync("./connections").filter((file) => !file.includes("session")) 
if (!files.includes(m.input.split("@")[0])) return setReply("Nomer itu tidak ad dalam list")
setTimeout(() => {
fs.unlinkSync("./connections/" + m.input.split("@")[0] + ".zip")
}, 5000)
setTimeout(() => {
sock.sendMessage(m.chat, { document: fs.readFileSync("./connections/" + m.input.split("@")[0] + ".zip"), mimetype: "application/bin", fileName: `${m.input.split("@")[0]}.zip` }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
setReply("Sending file session......")
}, 2000)
exec(`zip -r ./connections/${m.input.split("@")[0]}.zip ./connections/${m.input.split("@")[0]}`)
cmdSuccess(command, "case")
} else if (m.text == "jadibot") {
let files = fs.readdirSync("./connections").filter((file) => !file.includes("session")) 
if (!files.includes(m.senderNumber)) return setReply("Kamu tidak ad dalam list")
setTimeout(() => {
fs.unlinkSync("./connections/" + m.senderNumber + ".zip")
}, 5000)
setTimeout(() => {
sock.sendMessage(m.chat, { document: fs.readFileSync("./connections/" + m.senderNumber + ".zip"), mimetype: "application/bin", fileName: `${m.senderNumber}.zip` }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
setReply("Sending file session......")
}, 2000)
exec(`zip -r ./connections/${m.senderNumber}.zip ./connections/${m.senderNumber}`)
cmdSuccess(command, "case")
} else {
if (!m.isOwner && !m.key.fromMe) return onlyOwner()
setTimeout(() => {
fs.unlinkSync("./connections/session.zip")
}, 5000)
setTimeout(() => {
sock.sendMessage(m.chat, { document: fs.readFileSync("./connections/session.zip"), mimetype: "application/bin", fileName: "session.zip" }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
setReply("Sending file session......")
}, 2000)
exec("zip -r ./connections/session.zip ./connections/session")
cmdSuccess(command, "case")
}} catch (e) {
cmdFailed(command, e, "case")
}
break
default:
}
//================================================================\\
if (i18n.__("kata_manggil").includes(m.budy.toLowerCase()) && !m.isGroup || m.isGroup && !isAutoResponGroup && isQuotedText && m.quoted.sender == m.botNumber && i18n.__("kata_manggil").includes(m.budy.toLowerCase()) || ["hai bot","halo bot","bot","woi bot","woy bot","hey bot","hei bot","oy bot"].includes(m.budy.toLowerCase()) && m.isGroup && !isAutoResponGroup) {
if (m.isOwner || m.key.fromMe) {return}
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.ada_apa_kak, audioPack.ada_apa_kak1, audioPack.iya_kak, audioPack.kenapa_kak, audioPack.oy]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.ucapsalam }, { quoted: setQuoted })
} else {
setReply(util.format(pickRandom(["Ada apa kak kok panggil aku","Y","Iya kak?","Ada apa kak","Iya kak","Kenapa kak","Iy"])))
}}
//================================================================\\
if (m.budy.includes("ualaikum") && !m.isGroup) {
if (m.isOwner || m.key.fromMe) {return}
if (autoVn) {
sock.sendMessage(m.chat, { audio: audioPack.walaikunsalam, mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.salam }, { quoted: setQuoted })
} else {
setReply("Walaikumsalam kak")
}}
//================================================================\\
for (const x of i18n.__("kata_toxic")) {
if (m.budy.toLowerCase().includes(x) && !m.isGroup || m.isGroup && !isAutoResponGroup && !isAntiToxic && m.budy.toLowerCase().includes(x)) {
if (m.isOwner || m.key.fromMe) {return}
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.dosa_pantek, audioPack.heeh, audioPack.jangan_toxic_om]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.toxic }, { quoted: setQuoted })
} else {
setReply(util.format(pickRandom(["Jangan toxic kak 🙂","Jangan toxic kak 🙃","Jangan toxic kak😡","Jangan toxic kak 😠","Dilarang toxic kak 🙂","Dilarang toxic kak 🙃"])))
}}}
//================================================================\\
if (i18n.__("kata_dosa").includes(m.budy.toLowerCase()) && !m.isGroup) {
if (m.isOwner || m.key.fromMe) {return}
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([audioPack.ngomong_apaan_sih, audioPack.dosa_pantek, audioPack.heeh, audioPack.baka, audioPack.ga_mau, audioPack.goblok]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else if (autoSticker) {
sock.sendMessage(m.chat, { sticker: stickerPack.istigfar }, { quoted: setQuoted })
} else {
setReply(util.format(pickRandom(["Dosa kak 🙂","Ga mau kak 🙃","Astagfirloh kak 🙂","Astagfirloh kak itu dosa 🙂"])))
}}
//================================================================\\
if (m.budy.toLowerCase().includes("pagi") && !m.isGroup) {
if (m.timeWib >= "11:00" && m.timeWib <= "23:50") {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([ audioPack.asautegondalimas, audioPack.ohayoghosaimase, audioPack.ohayo ]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else {
setReply(`${m.ucapanWaktu} kak 🙂`)
}}}
//================================================================\\
if (m.budy.toLowerCase().includes("malam") && !m.isGroup) {
if (m.timeWib >= "06:00" && m.timeWib <= "17:00") {
if (autoVn) {
sock.sendMessage(m.chat, { audio: pickRandom([ audioPack.oyasumi, audioPack.oyasuminasai ]), mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else {
setReply(`${m.ucapanWaktu} kak 🙂`)
}}}
//================================================================\\
if (m.budy.toLowerCase().includes("siang") && !m.isGroup) {
if (autoVn) {
sock.sendMessage(m.chat, { audio: audioPack.konichiwa, mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
} else {
setReply(`${m.ucapanWaktu} kak 🙂`)
}}
//================================================================\\
if (m.body.includes(">")) {
if (!m.isOwner && !m.key.fromMe) return
try{
let evaled = await eval(m.text)
if (evaled == undefined) return
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
setReply(util.format(evaled))
} catch (e) {
setReply(util.format(e))
}}
//================================================================\\
if (m.budy.startsWith("$")) {
if (!m.isOwner && !m.key.fromMe) return
exec(m.text, (err, stdout) => {
if (err) return setReply(util.format(err))
if (stdout) {
setReply(util.format(stdout))
}
})
}
//================================================================\\
} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}}
//================================================================\\
const readCommands = (pathName = "./system/commands") => {
const command = fs.readdirSync(pathName).filter((file) => file.endsWith(".js") && !file.endsWith(".js.bak"))
for (let file of command) {
const cmdObject = require("../." + pathName + "/" + file)
reloadFile(pathName + "/" + file)
const cmdOptions = {
commands: cmdObject.commands,
cooldown: cmdObject?.cooldown? cmdObject.cooldown : 0,
minArgs: cmdObject?.minArgs? cmdObject.minArgs : 0,
expectedArgs: cmdObject?.expectedArgs? cmdObject.expectedArgs : null, 
example: cmdObject?.example? cmdObject.example : null,
isSewa: cmdObject?.isSewa? cmdObject.isSewa : false,
isVip: cmdObject?.isVip? cmdObject.isVip : false,
isOwner: cmdObject?.isOwner? cmdObject.isOwner : false,
isPremium: cmdObject?.isPremium? cmdObject.isPremium : false,
isPrivate: cmdObject?.isPrivate? cmdObject.isPrivate : false,
isGroup: cmdObject?.isGroup? cmdObject.isGroup : false,
isAdmin: cmdObject?.isAdmin? cmdObject.isAdmin : false, 
isBotAdmin: cmdObject?.isBotAdmin? cmdObject.isBotAdmin : false, 
isMedia: {
        isImage: cmdObject?.isMedia?.isImage? cmdObject.isMedia.isImage : false,
        isVideo: cmdObject?.isMedia?.isVideo? cmdObject.isMedia.isVideo : false, 
        isDocument: cmdObject?.isMedia?.isDocument? cmdObject.isMedia.isDocument : false, 
        isViewOnce: cmdObject?.isMedia?.isViewOnce? cmdObject.isMedia.isViewOnce : false, 
        isQuotedMedia: {
		       	  isQuotedImage: cmdObject?.isMedia?.isQuotedMedia?.isQuotedImage? cmdObject.isMedia.isQuotedMedia.isQuotedImage : false,
				  isQuotedVideo: cmdObject?.isMedia?.isQuotedMedia?.isQuotedVideo? cmdObject.isMedia.isQuotedMedia.isQuotedVideo : false,
			      isQuotedAudio: cmdObject?.isMedia?.isQuotedMedia?.isQuotedAudio? cmdObject.isMedia.isQuotedMedia.isQuotedAudio : false,
			      isQuotedSticker: cmdObject?.isMedia?.isQuotedMedia?.isQuotedSticker? cmdObject.isMedia.isQuotedMedia.isQuotedSticker : false,
			      isQuotedDocument: cmdObject?.isMedia?.isQuotedMedia?.isQuotedDocument? cmdObject.isMedia.isQuotedMedia.isQuotedDocument : false,
			      isQuotedViewOnce: cmdObject?.isMedia?.isQuotedMedia?.isQuotedViewOnce? cmdObject.isMedia.isQuotedMedia.isQuotedViewOnce : false, 
			      isQuotedContact: cmdObject?.isMedia?.isQuotedMedia?.isQuotedContact? cmdObject.isMedia.isQuotedMedia.isQuotedContact : false
				}
},
isLimit: cmdObject?.isLimit? cmdObject.isLimit : false, 
isWait: cmdObject?.isWait? cmdObject.isWait : false,
callback: cmdObject.callback
}
if (cmdObject.commands) {
cmdObject.commands.forEach((x) => {
commands.set(x, cmdOptions)
if (!Object.keys(db.allcommand).includes(x)) db.allcommand[x] = { tempFile: `${pathName}/${file}` }
})
}}
}
//================================================================\\
module.exports = { Message, readCommands }



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
    console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${__filename}`)
	delete require.cache[file]
	process.send("reset")
})