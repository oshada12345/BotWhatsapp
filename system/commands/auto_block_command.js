module.exports = {
    commands: ["autoblockcmd"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoBlockCmd, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoBlockCmd == true) return setReply("Sudah active")
        db.settings[m.botNumber].autoblockcmd = true
        setReply("Mode auto block command telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoBlockCmd == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autoblockcmd = false
        setReply("Mode auto block command telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO BLOCK COMMAND 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
