module.exports = {
    commands: ["antilinktele"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLinkTelegram, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLinkTelegram == true) return setReply("Sudah active")
        db.chats[m.chat].antilinktele = true
        setReply("Mode anti link telegram telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLinkTelegram == false) return setReply("Sudah non active")
        db.chats[m.chat].antilinktele = false
        setReply("Mode anti link telegram telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK TELEGRAM 」\`\`\`\n\n0. off\n1. on")
        }
    }
}