const { ownerNumber } = require("@config")
module.exports = {
    commands: ["hidetag"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} Paok",
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { replyType, groupMembers, setQuoted, ofrply }) => {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { mentionedJid: groupMembers, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: m.text }, { quoted: setQuoted })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { mentionedJid: groupMembers, forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: m.text }, { quoted: setQuoted })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { mentionedJid: groupMembers, forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: m.text }, { quoted: setQuoted })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: m.text, mentions: groupMembers }, { quoted: setQuoted })
        }
    }
}