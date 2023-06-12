module.exports = {
    commands: ["unban"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (!Object.keys(db.banned).includes(m.input)) return setReply("Sudah di unban")
        delete db.banned[m.input]
        await setReply(`Success unbanned @${m.input.split("@")[0]}`)
    }
}