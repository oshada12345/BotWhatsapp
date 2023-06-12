const { ownerNumber } = require("@config")
module.exports = {
    commands: ["setquoted"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { ftoko, fkontak, ftext, ftroli, flocation, fimage, fdocument, fvideo, faudio, fgif, fvn, fpayment, fpoll, quotedType, autoQuoted, replyType, setReply, ofrply }) => {
        if (m.args[0] == "toko" || m.args[0] == "1") {
        if (quotedType == "ftoko") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true
        db.settings[m.botNumber].quoted = "ftoko"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke toko" }, { quoted: ftoko })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke toko" }, { quoted: ftoko })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke toko" }, { quoted: ftoko })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke toko" }, { quoted: ftoko })
        }} else if (m.args[0] == "kontak" || m.args[0] == "2") {
        if (quotedType == "fkontak") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fkontak"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke kontak" }, { quoted: fkontak })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke kontak" }, { quoted: fkontak })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke kontak" }, { quoted: fkontak })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke kontak" }, { quoted: fkontak })
        }} else if (m.args[0] == "text" || m.args[0] == "3") {
        if (quotedType == "ftext") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "ftext"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke text" }, { quoted: ftext })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke text" }, { quoted: ftext })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke text" }, { quoted: ftext })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke text" }, { quoted: ftext })
        }} else if (m.args[0] == "troli" || m.args[0] == "4") {
        if (quotedType == "ftroli") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "ftroli"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke troli" }, { quoted: ftroli })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke troli" }, { quoted: ftroli })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke troli" }, { quoted: ftroli })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke troli" }, { quoted: ftroli })
        }} else if (m.args[0] == "location" || m.args[0] == "5") {
        if (quotedType == "flocation") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "flocation"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke location" }, { quoted: flocation })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke location" }, { quoted: flocation })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke location" }, { quoted: flocation })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke location" }, { quoted: flocation })
        }} else if (m.args[0] == "image" || m.args[0] == "6") {
        if (quotedType == "fimage") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fimage"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke image" }, { quoted: fimage })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke image" }, { quoted: fimage })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke image" }, { quoted: fimage })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke image" }, { quoted: fimage })
        }} else if (m.args[0] == "document" || m.args[0] == "7") {
        if (quotedType == "fdocument") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fdocument"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke document" }, { quoted: fdocument })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke document" }, { quoted: fdocument })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke document" }, { quoted: fdocument })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke document" }, { quoted: fdocument })
        }} else if (m.args[0] == "video" || m.args[0] == "8") {
        if (quotedType == "fvideo") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fvideo"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke video" }, { quoted: fvideo })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke video" }, { quoted: fvideo })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke video" }, { quoted: fvideo })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke video" }, { quoted: fvideo })
        }} else if (m.args[0] == "audio" || m.args[0] == "9") {
        if (quotedType == "faudio") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "faudio"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke audio" }, { quoted: faudio })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke audio" }, { quoted: faudio })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke audio" }, { quoted: faudio })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke audio" }, { quoted: faudio })
        }} else if (m.args[0] == "gif" || m.args[0] == "10") {
        if (quotedType == "fgif") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fgif"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke gif" }, { quoted: fgif })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke gif" }, { quoted: fgif })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke gif" }, { quoted: fgif })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke gif" }, { quoted: fgif })
        }} else if (m.args[0] == "vn" || m.args[0] == "11") {
        if (quotedType == "fvn") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fvn"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke vn" }, { quoted: fvn })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke vn" }, { quoted: fvn })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke vn" }, { quoted: fvn })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke vn" }, { quoted: fvn })
        }} else if (m.args[0] == "payment" || m.args[0] == "12") {
        if (quotedType == "fpayment") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fpayment"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke payment" }, { quoted: fpayment })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke payment" }, { quoted: fpayment })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke payment" }, { quoted: fpayment })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke payment" }, { quoted: fpayment })
        }} else if (m.args[0] == "poll" || m.args[0] == "13") {
        if (quotedType == "fpoll") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "fpoll"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke poll" }, { quoted: fpoll })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke poll" }, { quoted: fpoll })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke poll" }, { quoted: fpoll })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke poll" }, { quoted: fpoll })
        }} else if (m.args[0] == "message" || m.args[0] == "14") {
        if (quotedType == "m") return setReply("Sudah active")
        if (autoQuoted == false) db.settings[m.botNumber].autoquoted = true               
        db.settings[m.botNumber].quoted = "m"
        if (replyType == "web1") {
        sock.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke message" }, { quoted: m })
        } else if (replyType == "web2") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke message" }, { quoted: m })
        } else if (replyType == "web3") {
        sock.sendMessage(m.chat, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: "https://wa.me/" + ownerNumber }}, text: "Success mengganti quoted ke message" }, { quoted: m })
        } else if (replyType == "mess") {
        sock.sendMessage(m.chat, { text: "Success mengganti quoted ke message" }, { quoted: m })
        }} else {
        setReply("\`\`\`「 SETTINGS QUOTED BOT 」\`\`\`\n\n1. toko\n2. kontak\n3. text\n4. troli\n5. location\n6. image\n7. document\n8. video\n9. audio\n10. gif\n11. vn\n12. payment\n13. poll\n14. message") 
        }
    }
}
