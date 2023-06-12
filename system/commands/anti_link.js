module.exports = {
    commands: ["antilink"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiLink, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiLink == true) return setReply("Sudah active")
        db.chats[m.chat].antilink = true
        setReply("Mode anti link telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiLink == false) return setReply("Sudah non active")
        db.chats[m.chat].antilink = false
        setReply("Mode anti link telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI LINK 」\`\`\`\n\n0. off\n1. on")
        }
    }
}