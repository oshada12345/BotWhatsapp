const { ownerNumber, botName } = require("@config")
const { menu, fitur } = require("@message/helps")
const { randomNomor } = require("@libs/function")
const fs = require("fs")
module.exports = {
    commands: ["menu"],
    cooldown: 13,
    isSewa: true,
    callback: async (sock, m, { setMenu, setQuoted, prefix, thePrefix, mode, ofrply, dfrply, kfrply, pfrply }) => {
        let menunya = menu(m, mode, thePrefix)
        let fiturnya = fitur(prefix)
        let options = {
        externalAdReply: {
        showAdAttribution: true,
        title: `hallo kak👋 ${m.pushName}`,
        body: "DONT CLICK HERE",
        mediaType: 1,
        renderLargerThumbnail: setMenu == "document" || setMenu == "context"? true : false,
        thumbnail: ofrply,
        sourceUrl: `https://wa.me/${ownerNumber}`,
        }}
        if (setMenu == "document") {
        if (sock.pickRandom(["pptx","xlsx","zip","pdf","docx"]) == "pptx") {
        var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        } else if (sock.pickRandom(["pptx","xlsx","zip","pdf","docx"]) == "xlsx") {
        var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        } else if (sock.pickRandom(["pptx","xlsx","zip","pdf","docx"]) == "zip") {
        var AppType = "application/zip"
        } else if (sock.pickRandom(["pptx","xlsx","zip","pdf","docx"]) == "pdf") {
        var AppType = "application/pdf"
        } else if (sock.pickRandom(["pptx","xlsx","zip","pdf","docx"]) == "docx") {
        var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        } 
        sock.sendMessage(m.chat, { contextInfo: options, document: fs.readFileSync("./temp/Zzzzzzzzzz@4.0.4"), mimetype: AppType, title : "Footer text", fileLength : 999999999999, pageCount: 100, fileName : botName, caption: menunya + "\n" + fiturnya, headerType: "DOCUMENT", jpegThumbnail: dfrply }, { quoted: setQuoted })
        } else if (setMenu == "context") {
        sock.sendMessage(m.chat, { text: menunya + "\n" + fiturnya, contextInfo: options }, { quoted: setQuoted })
        } else if (setMenu == "viewonce") {
        sock.sendMessage(m.chat, { image: kfrply, caption: menunya + "\n" + fiturnya, viewOnce: true, contextInfo: options }, { quoted: setQuoted })
        } else if (setMenu == "image") {
        sock.sendMessage(m.chat, { image: kfrply, caption: menunya + "\n" + fiturnya, contextInfo: options }, { quoted: setQuoted })
        } else if (setMenu == "gif") {
        sock.sendMessage(m.chat, { video: pfrply, contextInfo: options, jpegThumbnail: kfrply, caption: menunya + "\n" + fiturnya, gifPlayback: true }, { quoted: setQuoted })
        } else if (setMenu == "video") {
        sock.sendMessage(m.chat, { video: pfrply, contextInfo: options, jpegThumbnail: kfrply, caption: menunya + "\n" + fiturnya, gifPlayback: false }, { quoted: setQuoted })
        }
    }
}