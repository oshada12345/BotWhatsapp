module.exports = {
    commands: ["antivirtex"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { isAntiVirtex, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (isAntiVirtex == true) return setReply("Sudah active")
        db.chats[m.chat].antivirtex = true
        setReply("Mode anti virtex telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (isAntiVirtex == false) return setReply("Sudah non active")
        db.chats[m.chat].antivirtex = false
        setReply("Mode anti virtex telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI VIRTEX 」\`\`\`\n\n0. off\n1. on")
        }
    }
}