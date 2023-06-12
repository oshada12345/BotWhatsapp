const fs = require("fs")
const { basename } = require("path")
module.exports = {
    commands: ["getfitur"],
    cooldown: 13,
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setQuoted, setReply }) => {
        if (!Object.keys(db.allcommand).includes(m.text)) return setReply("Commands not found!")
        if (db.allcommand[m.text].tempFile !== "case") {
        sock.sendMessage(m.chat, { document: fs.readFileSync(db.allcommand[m.text].tempFile), mimetype: "application/bin", fileName: basename(db.allcommand[m.text].tempFile) }, { quoted: setQuoted })
        } else {
        setReply("case " + `"${m.text}"` + fs.readFileSync("./message/msg.js").toString().split("case \"" + m.text + "\"")[1].split("break")[0] + "break") 
        }
    }
}
