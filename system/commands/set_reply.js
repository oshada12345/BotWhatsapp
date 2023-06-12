module.exports = {
    commands: ["setreply"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { replyType, setReply }) => {
        if (m.args[0] == "web1" || m.args[0] == "1") {
        if (replyType == "web1") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "web1"
        await setReply("Success mengganti reply ke web1")
        } else if (m.args[0] == "web2" || m.args[0] == "2") {
        if (replyType == "web2") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "web2"
        await setReply("Success mengganti reply ke web2")
        } else if (m.args[0] == "web3" || m.args[0] == "3") {
        if (replyType == "web3") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "web3"
        await setReply("Success mengganti reply ke web3")
        } else if (m.args[0] == "mess" || m.args[0] == "4") {
        if (replyType == "mess") return setReply("Sudah active")
        db.settings[m.botNumber].replytype = "mess"
        await setReply("Success mengganti reply ke mess")
        } else {
        setReply("\`\`\`「 SETTINGS REPLY BOT 」\`\`\`\n\n1. web1\n2. web2\n3. web3\n4. mess")
        }
    }
}
