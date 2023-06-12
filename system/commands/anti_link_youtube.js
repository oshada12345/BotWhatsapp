module.exports = {
    commands: ["antilinkyt"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkYoutube, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkYoutube == true) return setReply("Sudah active")
        db.chats[m.chat].antilinkyt = true
        setReply("Mode anti link youtube telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkYoutube == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinkyt = false
        setReply("Mode anti link youtube telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK YOUTUBE 」\`\`\`\n\n0. off\n1. on")
        }
    }
}