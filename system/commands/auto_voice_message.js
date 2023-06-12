module.exports = {
    commands: ["autovn"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoVn, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoVn == true) return setReply("Sudah active")
        db.settings[m.botNumber].autovn = true
        setReply("Mode auto vn telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoVn == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autovn = false
        setReply("Mode auto vn telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO VN 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
