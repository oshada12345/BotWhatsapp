const fs = require("fs")
module.exports = {
    commands: ["delstick"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<text>",
    example: "{prefix}{command} oii",
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { text, setReply }) => {
        if (!fs.readdirSync("./temp").filter((x) => x.includes(".webp")).map((x) => x.split(".webp")[0]).includes(m.text)) return setReply("Nama tersebut tidak ada kak")
        fs.unlinkSync(`./temp/${m.text}.webp`)
        await setReply("Success delete sticker " + m.text)
    }
}