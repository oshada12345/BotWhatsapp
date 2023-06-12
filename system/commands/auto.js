module.exports = {
    commands: ["auto"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { auto, setReply }) => {
        if (m.args[0] == "recording" || m.args[0] == "1") {
        if (auto == "recording") return setReply("Sudah active")
        db.settings[m.botNumber].auto = "recording"
        setReply("Mode auto recording telah active")
        } else if (m.args[0] == "typing" || m.args[0] == "2") {
        if (auto == "typing") return setReply("Sudah active")
        db.settings[m.botNumber].auto = "typing"
        setReply("Mode auto typing telah active")
        } else if (m.args[0] == "available" || m.args[0] == "3") {
        if (auto == "available") return setReply("Sudah active")
        db.settings[m.botNumber].auto = "available"
        setReply("Mode auto available telah active")
        } else {
        setReply("\`\`\`「 MODE AUTO 」\`\`\`\n\n1. recording\n2. typing\n3. available")
        }
    }
}