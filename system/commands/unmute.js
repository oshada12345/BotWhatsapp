module.exports = {
    commands: ["unmute"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { isBanChat, setReply }) => {
        if (!isWelcome) return setReply("Sudah non active")
        db.chats[m.chat].banchat = false
        setReply("Success unmute group")
    }
}