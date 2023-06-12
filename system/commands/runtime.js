const { runtime } = require("@libs/function")
module.exports = {
    commands: ["runtime"],
    cooldown: 13,
    isSewa: true,
    callback: async (sock, m, { setReply }) => {
        setReply(`${runtime(process.uptime())}`)
    }
}