module.exports = {
    commands: ["setcmd"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<command>",
    example: "{prefix}{command} menu",
    isSewa: true,
    isOwner: true,
    isMedia: {
        isQuotedMedia: {
		       	  isQuotedSticker: true
                  }
    }, 
    callback: async (sock, m, { setReply }) => {
        const fileSha256 = m.quoted.message.stickerMessage.fileSha256.toString("base64")
        if (!Object.keys(db.allcommand).includes(m.text)) return setReply("Commands not found!")        
        if (Object.keys(db.listcmd).includes(fileSha256)) return setReply("Coba pakai sticker lain")
        db.listcmd[fileSha256] = { command: m.text }
        await setReply("Success set command")
    }
}