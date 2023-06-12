module.exports = {
    commands: ["antispam"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { antiSpam, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (antiSpam == true) return setReply("Sudah active")
        db.settings[m.botNumber].antispam = true
        setReply("Mode anti spam telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (antiSpam == false) return setReply("Sudah non active")
        db.settings[m.botNumber].antispam = false
        setReply("Mode anti spam telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI SPAM 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
