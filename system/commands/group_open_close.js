module.exports = {
    commands: ["gc"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { groupMetadata, setReply }) => {
        if (m.args[0] == "close" || m.args[0] == "2") {
        if (groupMetadata.announce == true) return setReply("Group sudah di tutup")
        sock.groupSettingUpdate(m.chat, "announcement")
        setReply("Success menutup group, Sekarang hanya admin yang bisa mengirim pesan")
        } else if (m.args[0] == "open" || m.args[0] == "1") {
        if (groupMetadata.announce == false) return setReply("Group sudah di buka")
        sock.groupSettingUpdate(m.chat, "not_announcement")
        setReply("Success membuka group, Sekarang semua bisa mengirim pesan")
        } else {
        setReply("\`\`\`「 GROUP OPEN/CLOSE 」\`\`\`\n\n1. open\n2. close")
        }
    }
}