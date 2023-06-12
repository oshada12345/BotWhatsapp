module.exports = {
    commands: ["delowner"],
    cooldown: 13,
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setReply }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (!Object.keys(db.expired[m.botNumber].vip).includes(m.input) && !Object.keys(db.expired[m.botNumber].owner).includes(m.input)) return setReply("User bukan owner kak")
        if (Object.keys(db.expired[m.botNumber].vip).includes(m.input)) {
        delete db.expired[m.botNumber].vip[m.input]
        } else if (Object.keys(db.expired[m.botNumber].owner).includes(m.input)) {
        delete db.expired[m.botNumber].owner[m.input]
        }
        await setReply("Success delete owner @" + input.split("@")[0])
    }
}