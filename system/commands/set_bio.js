module.exports = {
    commands: ["setbio"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} busy",
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply, autoBio }) => {
        if (autoBio) db.settings[m.botNumber].autobio = false
        await sock.setStatus(m.text)
        await setReply(`Success mengganti bio ke ${m.text}`)
    }
}
