module.exports = {
    commands: ["antilinktwitter"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkTwitter, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkTwitter == true) return setReply("Sudah active")
        db.chats[m.chat].antilinktwitter = true
        setReply("Mode anti link twitter telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkTwitter == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinktwitter = false
        setReply("Mode anti link twitter telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK TWITTER 」\`\`\`\n\n0. off\n1. on")
        }
    }
}