module.exports = {
    commands: ["setnamagc"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} Pencoli handal",
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { groupName, setReply }) => {
        if (m.text == groupName) return setReply("Coba pakai nama lain")
        await sock.groupUpdateSubject(m.chat, m.text)
        setTimeout(() => {
        setReply("Success mengganti nama group")
        }, 1000)
    }
}
