module.exports = {
    commands: ["antilinkfb"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkFacebook, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkFacebook == true) return setReply("Sudah active")
        db.chats[m.chat].antilinkfb = true
        setReply("Mode anti link facebook telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkFacebook == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinkfb = false
        setReply("Mode anti link facebook telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK FACEBOOK 」\`\`\`\n\n0. off\n1. on")
        }
    }
}