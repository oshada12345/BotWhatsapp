module.exports = {
    commands: ["autorespon"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoRespon, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoRespon == true) return setReply("Sudah active")
        db.settings[m.botNumber].autorespon = true
        setReply("Mode auto respon telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoRespon == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autorespon = false
        setReply("Mode auto respon telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO RESPON 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
