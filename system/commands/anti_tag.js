module.exports = {
    commands: ["antitag"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiTag, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiTag == true) return setReply("Sudah active")
        db.chats[m.chat].antitag = true
        setReply("Mode anti tag telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiTag == false) return setReply("Sudah non active")
        db.chats[m.chat].antitag = false
        setReply("Mode anti tag telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI TAG 」\`\`\`\n\n0. off\n1. on")
        }
    }
}