module.exports = {
    commands: ["addsewa"],
    cooldown: 13,
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setReply, command }) => {
        if (m.text.includes("https://chat.whatsapp.com/")) {
        if (!m.text.split(".com/")[0] == "https://chat.whatsapp") return setReply("Error link")
        let idGroup = await sock.groupAcceptInvite(m.text.split("https://chat.whatsapp.com/")[1])
        if (Object.keys(db.expired[m.botNumber].sewa).includes(idGroup) && db.expired[m.botNumber].sewa[idGroup].expired == "INFINITY") {
        return setReply("Sudah sewa permanet kak")
        }
        if (Object.keys(db.database).includes(m.sender)) {
        if (db.database[m.sender].command !== command) { db.database[m.sender].command = command }
        if (db.database[m.sender].id !== idGroup) { db.database[m.sender].id = idGroup }
        if (db.database[m.sender].expired !== "") { db.database[m.sender].expired = "" }
        } else {
        db.database[m.sender] = { command, id: idGroup, expired: "" }
        }
        setReply("\`\`\`「 ADD SEWA 」\`\`\`\n\n1 = PERMANENT\n2 = YEARS\n3 = MONTHS\n4 = WEEKS\n5 = DAYS\n6 = HOURS\n7 = MINUTES\n8 = SECONDS")
        } else if (m.quoted && m.quoted.budy.includes("https://chat.whatsapp.com/")) {
        if (!m.quoted.budy.split(".com/")[0] == "https://chat.whatsapp") return setReply("Error link")
        let idGroup = await sock.groupAcceptInvite(m.quoted.budy.split("https://chat.whatsapp.com/")[1])
        if (Object.keys(db.expired[m.botNumber].sewa).includes(idGroup) && db.expired[m.botNumber].sewa[idGroup].expired == "INFINITY") {
        return setReply("Sudah sewa permanet kak")
        }
        if (Object.keys(db.database).includes(m.sender)) {
        if (db.database[m.sender].command !== command) { db.database[m.sender].command = command }
        if (db.database[m.sender].id !== idGroup) { db.database[m.sender].id = idGroup }
        if (db.database[m.sender].expired !== "") { db.database[m.sender].expired = "" }
        } else {
        db.database[m.sender] = { command, id: idGroup, expired: "" }
        }
        setReply("\`\`\`「 ADD SEWA 」\`\`\`\n\n1 = PERMANENT\n2 = YEARS\n3 = MONTHS\n4 = WEEKS\n5 = DAYS\n6 = HOURS\n7 = MINUTES\n8 = SECONDS")
        } else if (m.isGroup) {
        if (Object.keys(db.expired[m.botNumber].sewa).includes(m.chat) && db.expired[m.botNumber].sewa[m.chat].expired == "INFINITY") {
        return setReply("Sudah sewa permanet kak")
        }
        if (Object.keys(db.database).includes(m.sender)) {
        if (db.database[m.sender].command !== command) { db.database[m.sender].command = command }
        if (db.database[m.sender].id !== m.chat) { db.database[m.sender].id = m.chat }
        if (db.database[m.sender].expired !== "") { db.database[m.sender].expired = "" }
        } else {
        db.database[m.sender] = { command, id: m.chat, expired: "" }
        }
        setReply("\`\`\`「 ADD SEWA 」\`\`\`\n\n1 = PERMANENT\n2 = YEARS\n3 = MONTHS\n4 = WEEKS\n5 = DAYS\n6 = HOURS\n7 = MINUTES\n8 = SECONDS")
        } else {
        if (Object.keys(db.database).includes(m.sender)) {
        if (db.database[m.sender].command !== command) { db.database[m.sender].command = command }
        if (db.database[m.sender].id !== "") { db.database[m.sender].id = "" }
        if (db.database[m.sender].expired !== "") { db.database[m.sender].expired = "" }
        } else {
        db.database[m.sender] = { command, id: "", expired: "" }
        }
        setReply("\`\`\`「 ADD SEWA 」\`\`\`\n\n1 = PERMANENT\n2 = YEARS\n3 = MONTHS\n4 = WEEKS\n5 = DAYS\n6 = HOURS\n7 = MINUTES\n8 = SECONDS")
        }
    }
}