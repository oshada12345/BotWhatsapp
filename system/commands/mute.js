module.exports = {
    commands: ["mute"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isBanChat, setReply }) => {
        if (isWelcome) return setReply("Sudah active")
        db.chats[m.chat].banchat = true
        setReply("Success mute group")
    }
}