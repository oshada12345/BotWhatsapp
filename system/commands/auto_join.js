module.exports = {
    commands: ["autojoin"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoJoin, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoJoin == true) return setReply("Sudah active")
        db.settings[m.botNumber].autojoin = true
        setReply("Mode auto join telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoJoin == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autojoin = false
        setReply("Mode auto join telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO JOIN 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
