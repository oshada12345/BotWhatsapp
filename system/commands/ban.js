const { calender } = require("@libs/function")
module.exports = {
    commands: ["ban"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (Object.keys(db.banned).includes(m.input)) return setReply("Sudah di ban")
        db.banned[m.input] = { date: calender, reason: "" }
        await setReply(`Success banned @${m.input.split("@")[0]}`)
    }
}