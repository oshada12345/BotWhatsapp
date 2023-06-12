const fs = require("fs")
const { basename } = require("path")
const { exec } = require("child_process")
module.exports = {
    commands: ["getfolder"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} ./message",
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setQuoted, setReply }) => {
        let data = [
        ...fs.readdirSync("./").filter((x) => !x.includes(".")).map((x) => "./" + x), 
        ...fs.readdirSync("./config").filter((x) => !x.includes(".")).map((x) => "./config/" + x), 
        ...fs.readdirSync("./system").filter((x) => !x.includes(".")).map((x) => "./system/" + x)
        ]
        if (!m.text.includes("./")) return
        if (m.text.includes("node_modules")) return setReply("Sizenya gede banget kak 🙂")
        if (!data.includes(m.text)) return setReply("Filder not found")
        setTimeout(() => {
        fs.unlinkSync(m.text + ".zip")
        }, 7000)
        setTimeout(() => {
        sock.sendMessage(m.chat, { document: fs.readFileSync(m.text + ".zip"), mimetype: "application/bin", fileName: basename(m.text + ".zip") }, { quoted: setQuoted })
        }, 5000)
        setTimeout(() => {
        setReply("Sending file......")
        }, 3000)
        setReply("Folder to zip......")
        exec(`zip -r ${m.text}.zip ${m.text}`)
    }
}
