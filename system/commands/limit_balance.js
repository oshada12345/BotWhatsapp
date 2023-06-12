module.exports = {
    commands: ["addlimit","addbalance","dellimit","delbalance"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setReply, command }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (Object.keys(db.database).includes(m.sender)) {
        if (db.database[m.sender].command !== command) { db.database[m.sender].command = command }
        if (db.database[m.sender].id !== m.input) { db.database[m.sender].id = m.input }
        if (db.database[m.sender].expired !== "") { db.database[m.sender].expired = "" }
        } else {
        db.database[m.sender] = { command, id: m.input, expired: "" }
        }
        setReply("Jumlah?") 
    }
}