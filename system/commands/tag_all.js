module.exports = {
    commands: ["tagall"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    callback: async (sock, m, { groupMembers, setReply }) => {
        let teks = "\`\`\`「  TAG ALL  」\`\`\`\n\n"
        teks += m.text !== ""? `Message : ${m.text}\n\n` : ""
        for (let x of groupMembers) {
        teks += `» @${x.split("@")[0]}\n`
        }
        setReply(teks)
    }
}