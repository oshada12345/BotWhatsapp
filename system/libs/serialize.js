const fs = require("fs")
const chalk = require("chalk") 
const moment = require("moment-timezone") 
const { default: makeWASocket, getContentType, downloadContentFromMessage, generateForwardMessageContent, generateWAMessageFromContent } = require("baileys")
const { decodeJid } = require("@libs/function")
const { ownerNumber, ownerName, limitAwal } = require("@config") 
const store = require("@store")



exports.makeWASocket = (connectionOptions) => {
const sock = makeWASocket(connectionOptions)
//=================================================//
sock.copyNForward = async(jid, message, forwardingScore = true, options = {}) => {
let m = generateForwardMessageContent(message, !!forwardingScore)
let mtype = Object.keys(m)[0]
if (forwardingScore && typeof forwardingScore == "number" && forwardingScore > 1) m[mtype].contextInfo.forwardingScore += forwardingScore
m = generateWAMessageFromContent(jid, m, { ...options, userJid: sock.user.id })
await sock.relayMessage(jid, m.message, { messageId: m.key.id, additionalAttributes: { ...options } })
return m
}
//=================================================//
sock.downloadAndSaveMediaMessage = async(msg, filename) => {
const { fromBuffer } = require("file-type")    
const messageType = ["viewOnceMessageV2","viewOnceMessage","documentWithCaptionMessage"].includes(msg.type)? getContentType(msg.message).split("Message")[0] : msg.type.split("Message")[0]
const stream = await downloadContentFromMessage(msg.message[messageType + "Message"], messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await fromBuffer(buffer)
await fs.writeFileSync(filename + "." + type.ext, buffer)
return (filename + "." + type.ext)
}
//=================================================//
sock.downloadMediaMessage = async(msg) => {
const messageType = ["viewOnceMessageV2","viewOnceMessage","documentWithCaptionMessage"].includes(msg.type)? getContentType(msg.message).split("Message")[0] : msg.type.split("Message")[0]
const stream = await downloadContentFromMessage(msg.message[messageType + "Message"], messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
//=================================================//
sock.sendContact = async (jid, number, name, quoted, options) => {
let njid = number.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name.replace(/\n/g, '\\n')}\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`
return await sock.sendMessage(jid, {
contacts: { displayName: `${name}`, contacts: [{ vcard }], ...options }}, { quoted, ...options })
}
//=================================================//
sock.sendKontak = async (jid, data, quoted, options) => {
const vcard = []
for (let x of data) {
const name = x == ownerNumber + "@s.whatsapp.net"? ownerName : Object.keys(db.users).includes(x)? db.users[x].name : x.split("@")[0]          
vcard.push({vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${name.replace(/\n/g, '\\n')}\nTEL;type=CELL;type=VOICE;waid=${x.split("@")[0]}:${x.split("@")[0]}\nEND:VCARD`}) 
}
return await sock.sendMessage(jid, { contacts: { displayName: `${vcard.length} Kontak`, contacts: vcard, ...options }}, { quoted, ...options })
}
//=================================================//
Object.defineProperty(sock, "name", {
value: { ...({}) },
configurable: true,
})
return sock
}

exports.serialize = async (sock, msg) => {
    const m = {}
    const time = {}
    if (msg.key) {
        m.key = {
                   id: msg.key.id, 
                   fromMe: msg.key.fromMe, 
                   remoteJid: msg.key.remoteJid, 
                   participant: msg?.key?.participant || ""
        }
        m.chat = m.key.remoteJid
        m.isGroup = m.chat.endsWith("@g.us")
        m.sender = decodeJid(m.key.fromMe && sock.user.id || m.key.participant || m.chat || "")
        m.senderNumber = m.sender.split("@")[0]
    }
    m.type = (!["senderKeyDistributionMessage","messageContextInfo"].includes(Object.keys(msg.message)[0]) && Object.keys(msg.message)[0]) || (Object.keys(msg.message).length >= 3 && Object.keys(msg.message)[1] !== "messageContextInfo" && Object.keys(msg.message)[1]) || Object.keys(msg.message)[Object.keys(msg.message).length - 1]
    if (Object.keys(db.message).includes(m.sender)) {
        if (m.type == "extendedTextMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key            
            db.message[m.sender].message = { extendedTextMessage: msg.message[m.type] }
        } else if (m.type == "conversation") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { conversation: msg.message[m.type] }
        } else if (m.type == "imageMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { imageMessage: msg.message[m.type] }
        } else if (m.type == "videoMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { videoMessage: msg.message[m.type] }
        } else if (m.type == "stickerMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { stickerMessage: msg.message[m.type] }
        } else if (m.type == "audioMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { audioMessage: msg.message[m.type] }
        } else if (m.type == "viewOnceMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { viewOnceMessage: msg.message[m.type] }
        } else if (m.type == "viewOnceMessageV2") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { viewOnceMessageV2: msg.message[m.type] }
        } else if (m.type == "contactMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { contactMessage: msg.message[m.type] }
        } else if (m.type == "contactsArrayMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { contactsArrayMessage: msg.message[m.type] }
        } else if (m.type == "locationMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { locationMessage: msg.message[m.type] }
        } else if (m.type == "documentMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { documentMessage: msg.message[m.type] }
        } else if (m.type == "documentWithCaptionMessage") {
            db.message[m.sender].type = m.type
            db.message[m.sender].key = m.key
            db.message[m.sender].message = { documentWithCaptionMessage: msg.message[m.type] }
        }
    } else if (!Object.keys(db.message).includes(m.sender)) {
        if (m.type == "extendedTextMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { extendedTextMessage: msg.message[m.type] }}
        } else if (m.type == "conversation") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { conversation: msg.message[m.type] }}
        } else if (m.type == "imageMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { imageMessage: msg.message[m.type] }}
        } else if (m.type == "videoMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { videoMessage: msg.message[m.type] }}
        } else if (m.type == "stickerMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { stickerMessage: msg.message[m.type] }}
        } else if (m.type == "audioMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { audioMessage: msg.message[m.type] }}
        } else if (m.type == "viewOnceMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { viewOnceMessage: msg.message[m.type] }}
        } else if (m.type == "viewOnceMessageV2") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { viewOnceMessageV2: msg.message[m.type] }}
        } else if (m.type == "contactMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { contactMessage: msg.message[m.type] }}
        } else if (m.type == "contactsArrayMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { contactsArrayMessage: msg.message[m.type] }}
        } else if (m.type == "locationMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { locationMessage: msg.message[m.type] }}
        } else if (m.type == "documentMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { documentMessage: msg.message[m.type] }}
        } else if (m.type == "documentWithCaptionMessage") {
            db.message[m.sender] = { type: m.type, key: m.key, message: { documentWithCaptionMessage: msg.message[m.type] }}
        }
    }
    if (["viewOnceMessage","viewOnceMessageV2","documentWithCaptionMessage"].includes(m.type)) {
        msg.message = msg.message[m.type].message
    }
    m.body = m.type == "conversation"? msg.message.conversation : m.type == "extendedTextMessage"? msg.message.extendedTextMessage.text : m.type == "imageMessage"? msg.message.imageMessage.caption : m.type == "videoMessage"? msg.message.videoMessage.caption : m.type == "viewOnceMessage"? msg.message[getContentType(msg.message)]?.caption : m.type == "viewOnceMessageV2"? msg.message[getContentType(msg.message)]?.caption : m.type == "documentWithCaptionMessage"? msg.message.documentMessage.caption : ""
    m.budy = m.type == "conversation"? msg.message.conversation : m.type == "extendedTextMessage"? msg.message.extendedTextMessage.text : ""
    m.args = m.body.trim().split(/ +/).slice(1)
    m.text = m?.args?.join(" ")
    m.botNumber = decodeJid(sock.user.id)
    m.listBlock = await sock.fetchBlocklist()
    m.pushName = msg.pushName
    m.timeWib = moment().tz("Asia/Jakarta").format("HH:mm:ss")
    if (m.timeWib < "23:59:00") {
        m.ucapanWaktu = "Selamat malam" 
    } 
    if (m.timeWib < "19:00:00") { 
        m.ucapanWaktu = "Selamat malam"
    } 
    if (m.timeWib < "18:00:00") { 
        m.ucapanWaktu = "Selamat sore" 
    } 
    if (m.timeWib < "15:00:00") { 
        m.ucapanWaktu = "Selamat siang"
    } 
    if (m.timeWib < "11:00:00") { 
        m.ucapanWaktu = "Selamat pagi"
    } 
    if (m.timeWib < "06:00:00") { 
        m.ucapanWaktu = "Selamat pagi"
    }
    m.mentionedJid = msg.message[m.type]?.contextInfo?.mentionedJid?.length > 0? msg.message[m.type].contextInfo.mentionedJid : []
    m.isMention = m.mentionedJid.length > 0
    if (Object.keys(db.expired).includes(m.botNumber)) {
        m.isCreator = [ownerNumber + "@s.whatsapp.net", ...Object.keys(db.expired[m.botNumber].vip)].includes(m.sender)
        m.isOwner = m.isCreator? true : Object.keys(db.expired[m.botNumber].owner).includes(m.sender)
        m.isPremium = m.isOwner? true : Object.keys(db.expired[m.botNumber].premium).includes(m.sender)
        m.isSewa = m.isPremium? true : Object.keys(db.expired[m.botNumber].sewa).includes(m.chat)? true : Object.keys(db.chats).includes(m.chat)? db.chats[m.chat].sewa.status : m.key.fromMe
    } else {
        m.isCreator = [ownerNumber + "@s.whatsapp.net"].includes(m.sender)
        m.isOwner = m.isCreator? true : false
        m.isPremium = m.isOwner? true : false
        m.isSewa = m.isPremium? true : m.key.fromMe
    }
    m.messageTimestamp = msg.messageTimestamp
    m.message = msg.message
    m.quoted = msg.message[m.type]?.contextInfo?.quotedMessage? {} : false
    if (m.quoted) {
        m.quoted.key = {
            id: msg.message[m.type].contextInfo.stanzaId,
            fromMe: msg.message[m.type].contextInfo.participant == m.botNumber,
            remoteJid: decodeJid(m.message[m.type].contextInfo.remoteJid || m.chat || m.sender),
            participant: decodeJid(msg.message[m.type].contextInfo.participant)
        }
        m.quoted.chat = m.quoted.key.remoteJid
        m.quoted.isGroup = m.quoted.chat.endsWith("@g.us")
        m.quoted.sender = m.quoted.key.participant
        m.quoted.senderNumber = m.sender.split("@")[0]
        m.quoted.type = Object.keys(msg.message[m.type].contextInfo.quotedMessage)[0]
        if (["viewOnceMessage","viewOnceMessageV2","documentWithCaptionMessage"].includes(m.quoted.type)) {
            msg.message[m.type].contextInfo.quotedMessage = msg.message[m.type].contextInfo.quotedMessage[m.quoted.type].message
        }
        m.quoted.body = m.quoted.type == "conversation"? msg.message[m.type].contextInfo.quotedMessage.conversation : m.quoted.type == "extendedTextMessage"? msg.message[m.type].contextInfo.quotedMessage.extendedTextMessage.text : m.quoted.type == "imageMessage"? msg.message[m.type].contextInfo.quotedMessage.imageMessage.caption : m.quoted.type == "videoMessage"? msg.message[m.type].contextInfo.quotedMessage.videoMessage.caption : m.quoted.type == "viewOnceMessage"? msg.message[m.type].contextInfo.quotedMessage[getContentType(msg.message)]?.caption : m.quoted.type == "viewOnceMessageV2"? msg.message[m.type].contextInfo.quotedMessage[getContentType(msg.message)]?.caption : m.type == "documentWithCaptionMessage"? msg.message[m.type].contextInfo.quotedMessage.documentMessage.caption : ""
        m.quoted.budy = m.quoted.type == "conversation"? msg.message[m.type].contextInfo.quotedMessage.conversation : m.quoted.type == "extendedTextMessage"? msg.message[m.type].contextInfo.quotedMessage.extendedTextMessage.text : ""
        m.quoted.args = m.quoted.body.trim().split(/ +/).slice(1)
        m.quoted.text = m?.quoted?.args?.join(" ")
        m.quoted.pushName = Object.keys(db.users).includes(m.quoted.sender)? db.users[m.quoted.sender].name : "No Name"
        m.quoted.timeWib = Object.keys(time).includes(m.quoted.key.id)? time[m.quoted.key.id].timeWib : ""
        if (m.quoted.timeWib < "23:59:00") {
            m.quoted.ucapanWaktu = "Selamat malam" 
        } 
        if (m.quoted.timeWib < "19:00:00") { 
            m.quoted.ucapanWaktu = "Selamat malam"
        } 
        if (m.quoted.timeWib < "18:00:00") { 
            m.quoted.ucapanWaktu = "Selamat sore" 
        } 
        if (m.quoted.timeWib < "15:00:00") { 
            m.quoted.ucapanWaktu = "Selamat siang"
        } 
        if (m.quoted.timeWib < "11:00:00") { 
            m.quoted.ucapanWaktu = "Selamat pagi"
        } 
        if (m.quoted.timeWib < "06:00:00") { 
            m.quoted.ucapanWaktu = "Selamat pagi"
        }        
        m.quoted.mentionedJid = msg.message[m.type]?.contextInfo?.quotedMessage?.contextInfo?.mentionedJid?.length > 0? msg.message[m.type].contextInfo.quotedMessage.contextInfo.mentionedJid : []
        m.quoted.isMention = m.quoted.mentionedJid.length > 0
        if (db && Object.keys(db.expired).includes(m.botNumber)) {
            m.quoted.isCreator = [ownerNumber + "@s.whatsapp.net", ...Object.keys(db.expired[m.botNumber].vip)].includes(m.quoted.sender)
            m.quoted.isOwner = m.isCreator? true : Object.keys(db.expired[m.botNumber].owner).includes(m.quoted.sender)
            m.quoted.isPremium = m.isOwner? true : Object.keys(db.expired[m.botNumber].premium).includes(m.quoted.sender)
            m.quoted.isSewa = m.isPremium? true : Object.keys(db.expired[m.botNumber].sewa).includes(m.quoted.chat)? true : Object.keys(db.chats).includes(m.quoted.chat)? db.chats[m.quoted.chat].sewa.status : m.quoted.key.fromMe
        } else {
            m.quoted.isCreator = [ownerNumber + "@s.whatsapp.net"].includes(m.quoted.sender)
            m.quoted.isOwner = m.isCreator? true : false
            m.quoted.isPremium = m.isOwner? true : false
            m.quoted.isSewa = m.isPremium? true : m.quoted.key.fromMe
        }
        m.quoted.message = msg.message[m.type].contextInfo.quotedMessage
    } 
    m.input = m.quoted? m.quoted.sender : m.isMention? m.mentionedJid[0] : m.text != "" && !isNaN(m.text.replace(new RegExp("[()+-/ +/]", "gi"), ""))? m.text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : false
    if (Object.keys(db.users).includes(m.sender) && db.users[m.sender].name !== m.pushName) { db.users[m.sender].name = m.pushName }
    if (Object.keys(db.users).includes(m.sender) && m.isPremium && db.users[m.sender].level !== "Primordial Glory") { db.users[m.sender].level = "Primordial Glory" }
    if (Object.keys(db.users).includes(m.sender) && m.isPremium && !isNaN(db.users[m.sender].limit)) { db.users[m.sender].limit = "Unlimited" }
    if (Object.keys(db.users).includes(m.sender) && m.isPremium && !isNaN(db.users[m.sender].balance)) { db.users[m.sender].balance = "Unlimited" }
    if (Object.keys(db.users).includes(m.sender) && !m.isPremium && db.users[m.sender].level == "Primordial Glory") { db.users[m.sender].level = "Low Tier" }
    if (Object.keys(db.users).includes(m.sender) && !m.isPremium && isNaN(db.users[m.sender].limit)) { db.users[m.sender].limit = limitAwal }
    if (Object.keys(db.users).includes(m.sender) && !m.isPremium && isNaN(db.users[m.sender].balance)) { db.users[m.sender].balance = 0 }
    if (!Object.keys(time).includes(m.key.id)) time[m.key.id] = { timeWib: m.timeWib }
    if (!Object.keys(store).includes(m.botNumber)) store[m.botNumber] = { chats: [m.chat] }
    if (Object.keys(store).includes(m.botNumber) && !store[m.botNumber].chats.includes(m.chat)) { store[m.botNumber].chats.push(m.chat) }
    setTimeout(() => {
    fs.writeFileSync("./store/store.json", JSON.stringify(store, null, 2))
    }, 1000)

    return m
}






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
    console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${__filename}`)
	delete require.cache[file]
	process.send("reset")
})