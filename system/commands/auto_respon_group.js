module.exports = {
    commands: ["autorespongc"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isAutoResponGroup, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAutoResponGroup == true) return setReply("Sudah active")
        db.chats[m.chat].autorespongc = true
        setReply("Mode auto respon group telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAutoResponGroup == false) return setReply("Sudah non active")
        db.chats[m.chat].autorespongc = false
        setReply("Mode auto respon group telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO RESPON GROUP 」\`\`\`\n\n0. off\n1. on")
        }
    }
}