module.exports = {
    commands: ["delpremium"],
    cooldown: 13,
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setReply }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (!Object.keys(db.expired[m.botNumber].premium).includes(m.input)) return setReply("User bukan premium kak")
        delete db.expired[m.botNumber].premium[m.input]
        await setReply("Success delete premium @" + input.split("@")[0])
    }
}