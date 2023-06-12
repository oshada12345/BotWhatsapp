const { ownerNumber } = require("@config")
module.exports = {
    commands: ["autoquoted"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoQuoted, replyType, quotedType, ofrply, setReply, ftoko, fkontak, ftext, ftroli, flocation, fimage, fdocument, fvideo, faudio, fgif, fvn, fpayment, fpoll }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoQuoted == true) return setReply("Sudah active")
        db.settings[m.botNumber].autoquoted = true
        if (quotedType == "ftoko") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftoko })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftoko })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftoko })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: ftoko })
        }} else if (quotedType == "fkontak") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fkontak })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fkontak })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fkontak })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fkontak })
        }} else if (quotedType == "ftext") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftext })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftext })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftext })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: ftext })
        }} else if (quotedType == "ftroli") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftroli })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftroli })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: ftroli })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: ftroli })
        }} else if (quotedType == "flocation") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: flocation })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: flocation })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: flocation })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: flocation })
        }} else if (quotedType == "fimage") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fimage })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fimage })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fimage })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fimage })
        }} else if (quotedType == "fdocument") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fdocument })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fdocument })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fdocument })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fdocument })
        }} else if (quotedType == "fvideo") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fvideo })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fvideo })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fvideo })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fvideo })
        }} else if (quotedType == "faudio") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: faudio })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: faudio })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: faudio })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: faudio })
        }} else if (quotedType == "fgif") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fgif })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fgif })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fgif })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fgif })
        }} else if (quotedType == "fvn") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fvn })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fvn })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fvn })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fvn })
        }} else if (quotedType == "fpayment") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fpayment })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fpayment })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fpayment })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fpayment })
        }} else if (quotedType == "fpoll") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fpoll })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fpoll })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: fpoll })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: fpoll })
        }} else if (quotedType == "m") {
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: m })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: m })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah active" }, { quoted: m })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah active" }, { quoted: m })
        }}
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoQuoted == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autoquoted = false
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah non active" })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah non active" })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Mode auto quoted telah non active" })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Mode auto quoted telah non active" })
        }} else {
        setReply("\`\`\`「 MODE AUTO QUOTED 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
