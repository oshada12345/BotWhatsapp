module.exports = {
    commands: ["antilinkwa"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkWhatsapp, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkWhatsapp == true) return setReply("Sudah active")
        db.chats[m.chat].antilinkwa = true
        setReply("Mode anti link whatsapp telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkWhatsapp == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinkwa = false
        setReply("Mode anti link whatsapp telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK WHATSAPP 」\`\`\`\n\n0. off\n1. on")
        }
    }
}