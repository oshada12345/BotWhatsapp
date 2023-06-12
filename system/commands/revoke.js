module.exports = {
    commands: ["revoke"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { setReply }) => {
        await sock.groupRevokeInvite(m.chat)
        setTimeout(() => {
        setReply("Success mengganti link group")
        }, 1000)
    }
}