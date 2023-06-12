module.exports = {
    commands: ["autoread"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoRead, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoRead == true) return setReply("Sudah active")
        db.settings[m.botNumber].autoread = true
        setReply("Mode auto read telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoRead == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autoread = false
        setReply("Mode auto read telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO READ 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
