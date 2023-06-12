module.exports = {
    commands: ["setdescgc"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} Pencoli handal",
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { groupMetadata, setReply }) => {
        if (m.text == groupMetadata.desc) return setReply("Coba pakai nama lain")
        await sock.groupUpdateDescription(m.chat, m.text)
        setTimeout(() => {
        setReply("Success mengganti description group")
        }, 1000)
    }
}