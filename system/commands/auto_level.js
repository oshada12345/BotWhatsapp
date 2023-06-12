module.exports = {
    commands: ["autolevel"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoLevel, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoLevel == true) return setReply("Sudah active")
        db.settings[m.botNumber].autolevel = true
        setReply("Mode auto level telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoLevel == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autolevel = false
        setReply("Mode auto level telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO LEVEL 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
