module.exports = {
    commands: ["add","remove","promote","demote"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async (sock, m, { groupAdmins, participants, command, setReply }) => {
        if (!m.input) return setReply("Input nomer")
        if (m.input.startsWith("08")) return setReply("Gunakan code negara kak")
        if (command == "add") {
        if (participants.map((x) => x.id).includes(m.input)) return setReply("Sudah menjadi member group") 
        } else if (command == "remove") {
        if (!participants.map((x) => x.id).includes(m.input)) return setReply("Nomer tersebut bukan member group") 
        } else if (command == "promote") {
        if (!participants.map((x) => x.id).includes(m.input)) return setReply("Nomer tersebut bukan member group") 
        if (groupAdmins.includes(m.input)) return setReply("Nomer tersebut sudah menjadi admin") 
        } else if (command == "demote") {
        if (!participants.map((x) => x.id).includes(m.input)) return setReply("Nomer tersebut bukan member group") 
        if (!groupAdmins.includes(m.input)) return setReply("Nomer tersebut belum menjadi admin") 
        }        
        sock.groupParticipantsUpdate(m.chat, [m.input], command)
        await setReply(`Success ${command} @${m.input.split("@")[0]}`)
    }
}