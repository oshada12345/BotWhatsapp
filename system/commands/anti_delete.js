module.exports = {
    commands: ["antidelete"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isAntiDelete, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiDelete == true) return setReply("Sudah active")
        db.chats[m.chat].antidelete = true
        setReply("Mode anti delete telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiDelete == false) return setReply("Sudah non active")
        db.chats[m.chat].antidelete = false
        setReply("Mode anti delete telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI DELETE 」\`\`\`\n\n0. off\n1. on")
        }
    }
}