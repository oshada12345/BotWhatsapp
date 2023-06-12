module.exports = {
    commands: ["antiasing"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiAsing, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiAsing == true) return setReply("Sudah active")
        db.chats[m.chat].antiasing = true
        setReply("Mode anti asing telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiAsing == false) return setReply("Sudah non active")
        db.chats[m.chat].antiasing = false
        setReply("Mode anti asing telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI ASING 」\`\`\`\n\n0. off\n1. on")
        }
    }
}