const moment = require("moment-timezone")
module.exports = {
    commands: ["creategc"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} Anime Lovers",
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply, ofrply }) => {        
        let create = await sock.groupCreate(m.text, [])
        let code = await sock.groupInviteCode(create.id)
        let teks = "\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`\n\n"
        teks += `▸ Name : ${create.subject}\n`
        teks += `▸ Owner : @${create.owner.split("@")[0]}\n`
        teks += `▸ Creation : ${moment(create.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}\n`        
        teks += `▸ Link : https://chat.whatsapp.com/${code}`
        setTimeout(() => {
        sock.updateProfilePicture(create.id, ofrply)
        setReply(teks) 
        }, 7000)
        setTimeout(() => {
        if (m.sender !== m.botNumber) {
        sock.groupParticipantsUpdate(create.id, [m.sender], "promote")
        }
        }, 5000)
        setTimeout(() => {
        if (m.sender !== m.botNumber) {
        sock.groupParticipantsUpdate(create.id, [m.sender], "add")
        }
        }, 1000)
    }
}
