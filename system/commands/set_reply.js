const { ownerNumber } = require("@config")
module.exports = {
    commands: ["setreply"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { replyType, setReply, ofrply, setQuoted }) => {
        if (m.args[0] == "web1" || m.args[0] == "1") {
        if (replyType == "web1") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "web1"
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti reply ke web1" }, { quoted: setQuoted })
        } else if (m.args[0] == "web2" || m.args[0] == "2") {
        if (replyType == "web2") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "web2"
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti reply ke web2" }, { quoted: setQuoted })
        } else if (m.args[0] == "web3" || m.args[0] == "3") {
        if (replyType == "web3") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "web3"
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti reply ke web3" }, { quoted: setQuoted })
        } else if (m.args[0] == "mess" || m.args[0] == "4") {
        if (replyType == "mess") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "mess"
        sock.sendMessage(m.chat, { text: "Success mengganti reply ke mess" }, { quoted: setQuoted })
        } else {
        setReply("\`\`\`「 SETTINGS REPLY BOT 」\`\`\`\n\n1. web1\n2. web2\n3. web3\n4. mess")
        }
    }
}
