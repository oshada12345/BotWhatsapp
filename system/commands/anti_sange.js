module.exports = {
    commands: ["antisange"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiSange, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiSange == true) return setReply("Sudah active")
        db.chats[m.chat].antisange = true
        setReply("Mode anti sange telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiSange == false) return setReply("Sudah non active")
        db.chats[m.chat].antisange = false
        setReply("Mode anti sange telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI SANGE 」\`\`\`\n\n0. off\n1. on")
        }
    }
}