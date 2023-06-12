module.exports = {
    commands: ["delsewa"],
    cooldown: 13,
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setReply, command, groupName }) => {
        if (m.text.includes("https://chat.whatsapp.com/")) {
        if (!m.text.split(".com/")[0] == "https://chat.whatsapp") return setReply("Error link")
        let idGroup = await sock.groupAcceptInvite(m.text.split("https://chat.whatsapp.com/")[1])
        if (!Object.keys(db.expired[m.botNumber].sewa).includes(idGroup)) return setReply("Belum sewa kak")
        let groupMetadata = await sock.groupMetadata(idGroup)
        delete db.expired[m.botNumber].sewa[idGroup]
        await setReply("Success delete sewa " + groupMetadata.subject)
        } else if (m.quoted && m.quoted.budy.includes("https://chat.whatsapp.com/")) {
        if (!m.quoted.budy.split(".com/")[0] == "https://chat.whatsapp") return setReply("Error link")
        let idGroup = await sock.groupAcceptInvite(m.quoted.budy.split("https://chat.whatsapp.com/")[1])
        if (!Object.keys(db.expired[m.botNumber].sewa).includes(idGroup)) return setReply("Belum sewa kak")
        let groupMetadata = await sock.groupMetadata(idGroup)
        delete db.expired[m.botNumber].sewa[idGroup]
        await setReply("Success delete sewa " + groupMetadata.subject)
        } else if (m.isGroup) {
        if (!Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)) return setReply("Belum sewa kak")
        delete db.expired[m.botNumber].sewa[idGroup]
        await setReply("Success delete sewa " + groupName)
        } else setReply("Link group?")
    }
}