module.exports = {
    commands: ["join"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<link>",
    example: "{prefix}{command} https://chat.whatsapp.com/xxxxxxxxxx",
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply }) => {
        if (!m.text.includes("https://chat.whatsapp.com/")) return setReply("Itu bukan link group")
        if (!m.text.split(".com/")[0] == "https://chat.whatsapp") return setReply("Error link")
        let jid = await sock.groupAcceptInvite(m.text.split("https://chat.whatsapp.com/")[1])
        let groupMetadata = await sock.groupMetadata(jid)
        await setReply(`Success join group ${groupMetadata.subject}`)
    }
}