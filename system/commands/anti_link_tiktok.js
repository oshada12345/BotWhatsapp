module.exports = {
    commands: ["antilinktiktok"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkTiktok, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkTiktok == true) return setReply("Sudah active")
        db.chats[m.chat].antilinktiktok = true
        setReply("Mode anti link tiktok telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkTiktok == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinktiktok = false
        setReply("Mode anti link tiktok telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK TIKTOK 」\`\`\`\n\n0. off\n1. on")
        }
    }
}