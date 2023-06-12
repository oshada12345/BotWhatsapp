module.exports = {
    commands: ["antivo"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isAntiViewOnce, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiViewOnce == true) return setReply("Sudah active")
        db.chats[m.chat].antiviewonce = true
        setReply("Mode anti view once telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiViewOnce == false) return setReply("Sudah non active")
        db.chats[m.chat].antiviewonce = false
        setReply("Mode anti view once telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI VIEW ONCE 」\`\`\`\n\n0. off\n1. on")
        }
    }
}