module.exports = {
    commands: ["autobio"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoBio, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoBio == true) return setReply("Sudah active")
        db.settings[m.botNumber].autobio = true
        setReply("Mode auto bio telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoBio == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autobio = false
        setReply("Mode auto bio telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO BIO 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
