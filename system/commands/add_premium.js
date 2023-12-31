module.exports = {
    commands: ["addpremium"],
    cooldown: 13,
    isSewa: true,
    isVip: true,
    callback: async (sock, m, { setReply, command }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (Object.keys(db.expired[m.botNumber].premium).includes(m.input) && db.expired[m.botNumber].premium[m.input].expired == "INFINITY") {
        return setReply("User sudah menjadi premium")
        }
        if (Object.keys(db.database).includes(m.sender)) {
        if (db.database[m.sender].command !== command) { db.database[m.sender].command = command }
        if (db.database[m.sender].id !== m.input) { db.database[m.sender].id = m.input }
        if (db.database[m.sender].expired !== "") { db.database[m.sender].expired = "" }
        } else {
        db.database[m.sender] = { command, id: m.input, expired: "" }
        }        
        setReply("\`\`\`「 ADD PREMIUM 」\`\`\`\n\n1 = PERMANENT\n2 = YEARS\n3 = MONTHS\n4 = WEEKS\n5 = DAYS\n6 = HOURS\n7 = MINUTES\n8 = SECONDS")
    }
}