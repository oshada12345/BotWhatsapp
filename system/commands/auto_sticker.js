module.exports = {
    commands: ["autosticker"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoSticker, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoSticker == true) return setReply("Sudah active")
        db.settings[m.botNumber].autosticker = true
        setReply("Mode auto sticker telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoSticker == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autosticker = false
        setReply("Mode auto sticker telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO STICKER 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
