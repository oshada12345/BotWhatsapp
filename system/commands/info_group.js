const moment = require("moment-timezone")
module.exports = {
    commands: ["infogc"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    callback: async (sock, m, { isWelcome, isBanChat, isAutoResponGroup, isAutoReactGroup, isAntiViewOnce, isAntiSange, isAntiToxic, isAntiAsing, isAntiVirtex, isAntiTag, isAntiLinkTwitter, isAntiLinkTiktok, isAntiLinkWhatsapp, isAntiLinkTelegram, isAntiLinkInstagram, isAntiLinkFacebook, isAntiLinkYoutube, isAntiLink, isBotGroupAdmins, groupName, groupMembers, groupAdmins, groupOwner, groupMetadata, setReply }) => {
        let teks = "\`\`\`「  INFO GROUP  」\`\`\`\n\n"
        teks += ` *•* Name : ${groupName}\n`
        teks += ` *•* Owner : ${groupOwner !== undefined ? "@" + groupOwner.split("@")[0] : "Tidak diketahui"}\n`
        teks += ` *•* Creation : ${moment(groupMetadata.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}\n`
        teks += ` *•* Total Admins : ${groupAdmins.length}\n`
        teks += ` *•* Total Members : ${groupMembers.length}\n`
        teks += ` *•* Link Group : ${isBotGroupAdmins? "https://chat.whatsapp.com/" + await sock.groupInviteCode(m.chat) : "Botz Is Not Admin"}\n`
        teks += ` *•* Anti Link : ${isAntiLink? "ON✅" : "OFF❌"}\n`        
        teks += ` *•* Anti Link Youtube : ${isAntiLinkYoutube? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Link Facebook : ${isAntiLinkFacebook? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Link Instagram : ${isAntiLinkInstagram? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Link Telegram : ${isAntiLinkTelegram? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Link Whatsapp : ${isAntiLinkWhatsapp? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Link Tiktok : ${isAntiLinkTiktok? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Link Twitter : ${isAntiLinkTwitter? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Tag : ${isAntiTag? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Virtex : ${isAntiVirtex? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Asing : ${isAntiAsing? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Toxic : ${isAntiToxic? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti Sange : ${isAntiSange? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Anti View Once : ${isAntiViewOnce? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Auto React Group : ${isAutoReactGroup? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Auto Respon Group : ${isAutoResponGroup? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Mute Group : ${isBanChat? "ON✅" : "OFF❌"}\n`
        teks += ` *•* Welcome Group : ${isWelcome? "ON✅" : "OFF❌"}`
        await setReply(teks)
    }
}