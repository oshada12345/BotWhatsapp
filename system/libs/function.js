const { jidDecode } = require("baileys")
const chalk = require("chalk") 
const fs = require("fs") 
const axios = require("axios") 
const path = require("path")
const jimp = require("jimp")

const decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
        return decode.user && decode.server && decode.user + "@" + decode.server || jid
        } else return jid
}



const reloadFile = (file) => {
let files = require.resolve(path.join(__dirname.split("system/libs")[0], file))
fs.watchFile(files, () => {
    fs.unwatchFile(files)
    console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${file}`)
    delete require.cache[files]
    process.send("reset")
})
}

let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})


const getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({method: "get", url, headers: { "DNT": 1,
"Upgrade-Insecure-Request": 1
},
...options,
responseType: "arraybuffer"
})
return res.data
} catch (e) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), `${e}`)
}
}



const generateProfilePicture = async (buffer) => {
try{
const Jimp = await jimp.read(buffer)
const min = Jimp.getWidth()
const max = Jimp.getHeight()
const cropped = Jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG)
}
} catch {}
}

const reSize = (buffer, ukur1, ukur2) => {
try{
return new Promise(async(resolve, reject) => {
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
} catch {}
}



const toFirstCase = (str) => {
let first = str.split(" ").map((nama) => nama.charAt(0).toUpperCase() + nama.slice(1)).join(" ")
return first
}

const runtime = (seconds) => {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? `days, ` : ` Days, `) : "";
var hDisplay = h > 0 ? h + (h == 1 ? ` hours, ` : ` Hours, `) : "";
var mDisplay = m > 0 ? m + (m == 1 ? ` minutes, ` : ` Minutes, `) : "";
var sDisplay = s > 0 ? s + (s == 1 ? ` seconds` : ` Seconds`) : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

const randomNomor = (angka) => {
return Math.floor(Math.random() * angka) + 1
}

const pickRandom = (list) => {
return list[Math.floor(Math.random() * list.length)]
}

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}



module.exports = { week, pickRandom, sleep, reSize, generateProfilePicture, randomNomor, decodeJid, reloadFile, runtime, calender, getBuffer, toFirstCase }


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
    console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${__filename}`)
	delete require.cache[file]
	process.send("reset")
})