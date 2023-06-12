module.exports = {
    commands: ["mode"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { mode, setReply }) => {
        if (m.args[0] == "public" || m.args[0] == "1") {
        if (mode == "public") return setReply("Sudah active")
        db.settings[m.botNumber].mode = "public"
        setReply("Public mode is active")
        } else if (m.args[0] == "self" || m.args[0] == "2") {
        if (mode == "self") return setReply("Sudah active")
        db.settings[m.botNumber].mode = "self"
        setReply("Self mode is active")
        } else if (m.args[0] == "group" || m.args[0] == "3") {
        if (mode == "group") return setReply("Sudah active")
        db.settings[m.botNumber].mode = "group"
        setReply("Group mode is active")
        } else if (m.args[0] == "private" || m.args[0] == "4") {
        if (mode == "private") return setReply("Sudah active")
        db.settings[m.botNumber].mode = "private"
        setReply("Private mode is active")
        } else {
        setReply("\`\`\`「 MODE BOT 」\`\`\`\n\n1. public\n2. self\n3. group\n4. private")
        }
    }
}