module.exports = {
    commands: ["setwelcome"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setWelcome, setReply }) => {
        if (m.args[0] == "location" || m.args[0] == "1") {
        if (setWelcome == "location") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "location"
        setReply("Success mengganti tampilan welcome ke location")
        } else if (m.args[0] == "image" || m.args[0] == "2") {
        if (setWelcome == "image") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "image"
        setReply("Success mengganti tampilan welcome ke image")
        } else if (m.args[0] == "gif" || m.args[0] == "3") {
        if (setWelcome == "gif") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "gif"
        setReply("Success mengganti tampilan welcome ke gif")
        } else if (m.args[0] == "video" || m.args[0] == "4") {
        if (setWelcome == "video") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "video"
        setReply("Success mengganti tampilan welcome ke video")
        } else {
        setReply("\`\`\`「 SETTINGS WELCOME BOT 」\`\`\`\n\n1. location\n2. image\n3. gif\n4. video")
        }
    }
}
