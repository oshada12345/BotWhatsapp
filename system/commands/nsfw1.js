const fs = require("fs")
const axios = require("axios")
const util = require("util") 
const { getBuffer } = require("@libs/function")
const i18n = require("i18n")
module.exports = {
    commands: ["blowjob","neko2","trap","waifu2"],
    cooldown: 13,
    isSewa: true,
    isPremium: true,
    isWait: true,
    callback: async(sock, m, { setQuoted, command }) => {
        let { data } = await axios.get("https://waifu.pics/api/nsfw/" + command == "neko2"? "neko" : command == "waifu2"? "waifu" : command)
        let buffer = await getBuffer(data.url)
        if (data.url.includes(".jpg") || data.url.includes(".jpeg") || data.url.includes(".png")) {
        sock.sendMessage(m.chat, { image: buffer, caption: util.format(i18n.__("success")), }, { quoted: setQuoted })
        } else if (data.url.includes(".gif") || data.url.includes(".mp4")) {
        sock.sendMessage(m.chat, { video: buffer, caption: util.format(i18n.__("success")), }, { quoted: setQuoted })
        }
    }
}