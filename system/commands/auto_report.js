module.exports = {
    commands: ["autoreport"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoReport, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoReport == true) return setReply("Sudah active")
        db.settings[m.botNumber].autoreport = true
        setReply("Mode auto report telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoReport == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autoreport = false
        setReply("Mode auto report telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO REPORT 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
