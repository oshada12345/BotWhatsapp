const util = require("util")
module.exports = {
    commands: ["linkgc"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isBotAdmin: true,
    callback: async (sock, m, { setReply }) => {
        setReply(util.format("https://chat.whatsapp.com/" + await sock.groupInviteCode(m.chat)))
    }
}