module.exports = {
    commands: ["blockcmd"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<command>",
    example: "{prefix}{command} menu",
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply }) => {
        if (!Object.keys(db.allcommand).includes(m.text)) return setReply("Commands not found!")        
        if (db.blockcmd.includes(m.text)) return setReply("Command sudah di block")
        db.blockcmd.push(m.text)
        await setReply(`Success block command ${m.text}`)
    }
}
