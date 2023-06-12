module.exports = {
    commands: ["unblock"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (!m.listBlock.includes(m.input)) return setReply("Sudah di unblock")
        sock.updateBlockStatus(m.input, "unblock")
        await setReply(`Success unblock @${m.input.split("@")[0]}`)
    }
}