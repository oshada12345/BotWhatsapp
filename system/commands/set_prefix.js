module.exports = {
    commands: ["setprefix"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setPrefix, setReply }) => {
        if (m.args[0] == "prefix" || m.args[0] == "1") {
        if (setPrefix == "prefix") return setReply("Sudah active")
        db.settings[m.botNumber].setprefix = "prefix"
        await setReply("Success mengganti prefix ke prefix")
        } else if (m.args[0] == "noprefix" || m.args[0] == "2") {
        if (setPrefix == "noprefix") return setReply("Sudah active")
        db.settings[m.botNumber].setprefix = "noprefix"
        await setReply("Success mengganti prefix ke noprefix")
        } else if (m.args[0] == "allprefix" || m.args[0] == "3") {
        if (setPrefix == "allprefix") return setReply("Sudah active")
        db.settings[m.botNumber].setprefix = "allprefix"
        await setReply("Success mengganti prefix ke allprefix")
        } else {
        setReply("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. prefix\n2. noprefix\n3. allprefix")
        }
    }
}
