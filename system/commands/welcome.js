module.exports = {
    commands: ["welcome"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isWelcome, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isWelcome == true) return setReply("Sudah active")
        db.chats[m.chat].welcome = true
        setReply("Welcome group telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isWelcome == false) return setReply("Sudah non active")
        db.chats[m.chat].welcome = false
        setReply("Welcome group telah non active")
        } else {
        setReply("\`\`\`「 WELCOME GROUP 」\`\`\`\n\n0. off\n1. on")
        }
    }
}