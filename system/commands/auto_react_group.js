module.exports = {
    commands: ["autoreactgc"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isAutoReactGroup, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAutoReactGroup == true) return setReply("Sudah active")
        db.chats[m.chat].autoreactgc = true
        setReply("Mode auto react group telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAutoReactGroup == false) return setReply("Sudah non active")
        db.chats[m.chat].autoreactgc = false
        setReply("Mode auto react group telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO REACT GROUP 」\`\`\`\n\n0. off\n1. on")
        }
    }
}