module.exports = {
    commands: ["antilinkig"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkInstagram, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkInstagram == true) return setReply("Sudah active")
        db.chats[m.chat].antilinkig = true
        setReply("Mode anti link instagram telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkInstagram == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinkig = false
        setReply("Mode anti link instagram telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK INSTAGRAM 」\`\`\`\n\n0. off\n1. on")
        }
    }
}