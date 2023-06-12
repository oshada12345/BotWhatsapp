const fs = require("fs")
const chalk = require("chalk")
const { ownerNumber } = require("@config")
const { decodeJid, getBuffer } = require("@libs/function")

module.exports = async(sock, json) => {
const botNumber = decodeJid(sock.user.id)
const callerId = json.content[0].attrs['call-creator']
const replyType = Object.keys(db.settings).includes(m.botNumber)? db.settings[m.botNumber].replytype : "web1"
const antiCall = Object.keys(db.settings).includes(botNumber)? db.settings[botNumber].anticall : false
try{
var ppimg = await sock.profilePictureUrl(callerId, "image")
} catch {
var ppimg = "https://raw.githubusercontent.com/Aztecs444/media/Zeck/image/profilePicture.jpg"
}
const ofrply = await getBuffer(ppimg)
const setReply = async(chatId, teks) => {
if (replyType == "web1") {
sock.sendMessage(chatId, { contextInfo: { mentionedJid: [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), externalAdReply: { showAdAttribution: true, title: "CALLING BOT", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: teks })
} else if (replyType == "web2") {
sock.sendMessage(chatId, { contextInfo: { mentionedJid: [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: "CALLING BOT", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: teks })
} else if (replyType == "web3") {
sock.sendMessage(chatId, { contextInfo: { mentionedJid: [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: "CALLING BOT", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: teks })
} else if (replyType == "mess") {
sock.sendMessage(chatId, { text: teks, mentions: [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") })
}}
if (antiCall && json.content[0].tag == "offer") {
if (callerId.split("@")[0] == ownerNumber) return
setTimeout(() => {
sock.updateBlockStatus(callerId, "block")
}, 3000)
setTimeout(() => {
setReply(ownerNumber + "@s.whatsapp.net", `Terdeteksi @${callerId.split("@")[0]} telah menelpon bot`)
}, 1000)
setReply(callerId, "Sistem otomatis block!\nJangan menelpon bot!\nSilahkan hubungi https://wa.me/" + ownerNumber)
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
    console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${__filename}`)
	delete require.cache[file]
	process.send("reset")
})