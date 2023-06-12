const fs = require("fs")
const chalk = require("chalk")
const { week, calender, toFirstCase } = require("@libs/function")
const { botName } = require("@config")
const yes = "❌"
const no = ""

const featError = (cmd) => {
return Object.keys(db.listerror).includes(cmd) 
}


const menu = (m, mode, thePrefix) => {
return `*${botName}*
${week}, ${calender} 

 ◉ Nama : ${m.pushName}
 ◉ Status : ${m.isOwner? "Owner" : m.isPremium? "Premium" : "Users"}
 ◉ Limit : ${db.users[m.sender].limit}
 ◉ Saldo : ${db.users[m.sender].balance}
 ◉ Mode : ${toFirstCase(mode)}
 ◉ Prefix : ${thePrefix}
 ◉ Time Wib : ${m.timeWib}
 ◉ Total Feature : ${Object.keys(db.allcommand).length}
 ◉ Total Error : ${Object.keys(db.listerror).length}
 ◉ Total User : ${Object.keys(db.users).length}
 ◉ User Block : ${m.listBlock.length}
 ◉ User Banned : ${Object.keys(db.banned).length}
`}

const fitur = (prefix) => {
return`
  ╭─▸ 𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}anticall ${featError("anticall")? yes : no }
  │⭔ ${prefix}antispam ${featError("antispam")? yes : no }
  │⭔ ${prefix}auto ${featError("auto")? yes : no }
  │⭔ ${prefix}autobio ${featError("autobio")? yes : no }
  │⭔ ${prefix}autoblockcmd ${featError("autoblockcmd")? yes : no }
  │⭔ ${prefix}autojoin ${featError("autojoin")? yes : no }
  │⭔ ${prefix}autolevel ${featError("autolevel")? yes : no }
  │⭔ ${prefix}autoquoted ${featError("autoquoted")? yes : no }
  │⭔ ${prefix}autoread ${featError("autoread")? yes : no }
  │⭔ ${prefix}autoreport ${featError("autoreport")? yes : no }
  │⭔ ${prefix}autorespon ${featError("autorespon")? yes : no }
  │⭔ ${prefix}autosticker ${featError("autosticker")? yes : no }
  │⭔ ${prefix}autovn ${featError("autovn")? yes : no }
  │⭔ ${prefix}ban ${featError("ban")? yes : no }
  │⭔ ${prefix}unban ${featError("unban")? yes : no }
  │⭔ ${prefix}block ${featError("block")? yes : no }
  │⭔ ${prefix}unblock ${featError("unblock")? yes : no }
  │⭔ ${prefix}blockcmd ${featError("blockcmd")? yes : no }
  │⭔ ${prefix}unblockcmd ${featError("unblockcmd")? yes : no }
  │⭔ ${prefix}bc ${featError("bc")? yes : no }
  │⭔ ${prefix}bcgc ${featError("bcgc")? yes : no }
  │⭔ ${prefix}bcpc ${featError("bcpc")? yes : no }
  │⭔ ${prefix}creategc ${featError("creategc")? yes : no }
  │⭔ ${prefix}updatefile ${featError("updatefile")? yes : no }
  │⭔ ${prefix}getfile ${featError("getfile")? yes : no }
  │⭔ ${prefix}getfitur ${featError("getfitur")? yes : no }
  │⭔ ${prefix}getfolder ${featError("getfolder")? yes : no }
  │⭔ ${prefix}getsesi ${featError("getsesi")? yes : no }
  │⭔ ${prefix}restart ${featError("restart")? yes : no }
  │⭔ ${prefix}stopped ${featError("stopped")? yes : no }
  │⭔ ${prefix}join ${featError("join")? yes : no }
  │⭔ ${prefix}leave ${featError("leave")? yes : no }
  │⭔ ${prefix}mode ${featError("mode")? yes : no }
  │⭔ ${prefix}setbio ${featError("setbio")? yes : no }
  │⭔ ${prefix}setmenu ${featError("setmenu")? yes : no }
  │⭔ ${prefix}setnamabot ${featError("setnamabot")? yes : no }
  │⭔ ${prefix}setnamaown ${featError("setnamaown")? yes : no }
  │⭔ ${prefix}setpp ${featError("setpp")? yes : no }
  │⭔ ${prefix}setnoown ${featError("setnoown")? yes : no }
  │⭔ ${prefix}setprefix ${featError("setprefix")? yes : no }
  │⭔ ${prefix}setquoted ${featError("setquoted")? yes : no }
  │⭔ ${prefix}setreply ${featError("setreply")? yes : no }
  │⭔ ${prefix}setwelcome ${featError("setwelcome")? yes : no }
  │
  ╰────────────˧

  ╭─▸ 𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}antilink ${featError("antilink")? yes : no }
  │⭔ ${prefix}antilinkfb ${featError("antilinkfb")? yes : no }
  │⭔ ${prefix}antilinkig ${featError("antilinkig")? yes : no }
  │⭔ ${prefix}antilinktele ${featError("antilinktele")? yes : no }
  │⭔ ${prefix}antilinktiktok ${featError("antilinktiktok")? yes : no }
  │⭔ ${prefix}antilinktwitter ${featError("antilinktwitter")? yes : no }
  │⭔ ${prefix}antilinkwa ${featError("antilinkwa")? yes : no }
  │⭔ ${prefix}antilinkyt ${featError("antilinkyt")? yes : no }
  │⭔ ${prefix}antiasing ${featError("antiasing")? yes : no }
  │⭔ ${prefix}antidelete ${featError("antidelete")? yes : no }
  │⭔ ${prefix}antisange ${featError("antisange")? yes : no }
  │⭔ ${prefix}antitag ${featError("antitag")? yes : no }
  │⭔ ${prefix}antivo ${featError("antivo")? yes : no }
  │⭔ ${prefix}antivirtex ${featError("antivirtex")? yes : no }
  │⭔ ${prefix}antitoxic ${featError("antitoxic")? yes : no }
  │⭔ ${prefix}autoreactgc ${featError("autoreactgc")? yes : no }
  │⭔ ${prefix}autorespongc ${featError("autorespongc")? yes : no }
  │⭔ ${prefix}welcome ${featError("welcome")? yes : no }
  │⭔ ${prefix}mute ${featError("mute")? yes : no }
  │⭔ ${prefix}unmute ${featError("unmute")? yes : no }
  │⭔ ${prefix}infogc ${featError("infogc")? yes : no }
  │⭔ ${prefix}linkgc ${featError("linkgc")? yes : no }
  │⭔ ${prefix}setppgc ${featError("setppgc")? yes : no }
  │⭔ ${prefix}setnamagc ${featError("setnamagc")? yes : no }
  │⭔ ${prefix}setdescgc ${featError("setdescgc")? yes : no }
  │⭔ ${prefix}gc ${featError("gc")? yes : no }
  │⭔ ${prefix}revoke ${featError("revoke")? yes : no }
  │⭔ ${prefix}hidetag ${featError("hidetag")? yes : no }
  │⭔ ${prefix}tagall ${featError("tagall")? yes : no }
  │⭔ ${prefix}add ${featError("add")? yes : no }
  │⭔ ${prefix}remove ${featError("remove")? yes : no }
  │⭔ ${prefix}promote ${featError("promote")? yes : no }
  │⭔ ${prefix}demote ${featError("demote")? yes : no }
  │
  ╰────────────˧

  ╭─▸ 𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}dashboard ${featError("dashboard")? yes : no }
  │⭔ ${prefix}menu ${featError("menu")? yes : no }
  │⭔ ${prefix}owner ${featError("owner")? yes : no }
  │⭔ ${prefix}runtime ${featError("runtime")? yes : no }
  │⭔ ${prefix}sewa ${featError("sewa")? yes : no }
  │⭔ ${prefix}speed ${featError("speed")? yes : no }
  │⭔ ${prefix}listgc ${featError("listgc")? yes : no }
  │⭔ ${prefix}listpc ${featError("listpc")? yes : no }
  │
  ╰────────────˧
  
  ╭─▸ 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳
  │
  │⭔ ${prefix}tiktokmp3 ${featError("tiktokmp3")? yes : no }
  │⭔ ${prefix}tiktokmp4 ${featError("tiktokmp4")? yes : no }
  │
  ╰────────────˧   
    
  ╭─▸ 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}tostick ${featError("tostick")? yes :no }
  │
  ╰────────────˧
  
  ╭─▸ 𝘙𝘢𝘯𝘥𝘰𝘮 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}awoo ${featError("awoo")? yes : no }
  │⭔ ${prefix}bite ${featError("bite")? yes : no }
  │⭔ ${prefix}blowjob ${featError("blowjob")? yes : no }
  │⭔ ${prefix}blush ${featError("blush")? yes : no }
  │⭔ ${prefix}bonk ${featError("bonk")? yes : no }
  │⭔ ${prefix}boobs ${featError("boobs")? yes : no }
  │⭔ ${prefix}bully ${featError("bully")? yes : no }
  │⭔ ${prefix}cringe ${featError("cringe")? yes : no }
  │⭔ ${prefix}cry ${featError("cry")? yes : no }
  │⭔ ${prefix}cuddle ${featError("cuddle")? yes : no }
  │⭔ ${prefix}cuddle2 ${featError("cuddle2")? yes : no }
  │⭔ ${prefix}dance ${featError("dance")? yes : no }
  │⭔ ${prefix}glomp ${featError("glomp")? yes : no }
  │⭔ ${prefix}handhold ${featError("handhold")? yes : no }
  │⭔ ${prefix}happy ${featError("happy")? yes : no }
  │⭔ ${prefix}hentai ${featError("hentai")? yes : no }
  │⭔ ${prefix}highfive ${featError("highfive")? yes : no }
  │⭔ ${prefix}hug ${featError("hug")? yes : no }
  │⭔ ${prefix}hug2 ${featError("hug2")? yes : no }
  │⭔ ${prefix}kick ${featError("kick")? yes : no }
  │⭔ ${prefix}kill ${featError("kill")? yes : no }
  │⭔ ${prefix}kill2 ${featError("kill2")? yes : no }
  │⭔ ${prefix}kiss ${featError("kiss")? yes : no }
  │⭔ ${prefix}kiss2 ${featError("kiss2")? yes : no }
  │⭔ ${prefix}lesbian ${featError("lesbian")? yes : no }
  │⭔ ${prefix}lick ${featError("lick")? yes : no }
  │⭔ ${prefix}megumin ${featError("megumin")? yes : no }
  │⭔ ${prefix}neko ${featError("neko")? yes : no }
  │⭔ ${prefix}neko2 ${featError("neko2")? yes : no }
  │⭔ ${prefix}nom ${featError("nom")? yes : no }
  │⭔ ${prefix}pat ${featError("pat")? yes : no }
  │⭔ ${prefix}pat2 ${featError("pat2")? yes : no }
  │⭔ ${prefix}poke ${featError("poke")? yes : no }
  │⭔ ${prefix}punch ${featError("punch")? yes : no }
  │⭔ ${prefix}shinobu ${featError("shinobu")? yes : no }
  │⭔ ${prefix}slap ${featError("slap")? yes : no }
  │⭔ ${prefix}slap2 ${featError("slap2")? yes : no }
  │⭔ ${prefix}smile ${featError("smile")? yes : no }
  │⭔ ${prefix}smug ${featError("smug")? yes : no }
  │⭔ ${prefix}trap ${featError("trap")? yes : no }
  │⭔ ${prefix}waifu ${featError("waifu")? yes : no }
  │⭔ ${prefix}waifu2 ${featError("waifu2")? yes : no }
  │⭔ ${prefix}waifu3 ${featError("waifu3")? yes : no }
  │⭔ ${prefix}wave ${featError("wave")? yes : no }
  │⭔ ${prefix}wink ${featError("wink")? yes : no }
  │⭔ ${prefix}wink2 ${featError("wink2")? yes : no }
  │⭔ ${prefix}yeet ${featError("yeet")? yes : no }
  │
  ╰────────────˧
  
  ╭─▸ 𝘚𝘵𝘰𝘳𝘢𝘨𝘦
  │
  │⭔ ${prefix}addowner ${featError("addowner")? yes : no }
  │⭔ ${prefix}addpremium ${featError("addpremium")? yes : no }
  │⭔ ${prefix}addsewa ${featError("addsewa")? yes : no }
  │⭔ ${prefix}addstick ${featError("addstick")? yes : no }
  │⭔ ${prefix}addvn ${featError("addvn")? yes : no }
  │⭔ ${prefix}addlimit ${featError("addlimit")? yes : no }
  │⭔ ${prefix}addbalance ${featError("addbalance")? yes : no }
  │⭔ ${prefix}delowner ${featError("delowner")? yes : no }
  │⭔ ${prefix}depremium ${featError("depremium")? yes : no }
  │⭔ ${prefix}delsewa ${featError("delsewa")? yes : no }
  │⭔ ${prefix}delstick ${featError("delstick")? yes : no }
  │⭔ ${prefix}delvn ${featError("delvn")? yes : no }
  │⭔ ${prefix}dellimit ${featError("dellimit")? yes : no }
  │⭔ ${prefix}delbalance ${featError("delbalance")? yes : no }
  │⭔ ${prefix}listowner ${featError("listowner")? yes : no }
  │⭔ ${prefix}listpremium ${featError("listpremium")? yes : no }
  │⭔ ${prefix}listsewa ${featError("listsewa")? yes : no }
  │⭔ ${prefix}liststick ${featError("liststick")? yes : no }
  │⭔ ${prefix}listvn ${featError("listvn")? yes : no }
  │
  ╰────────────˧
`}


module.exports = { menu, fitur }



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
    console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${__filename}`)
	delete require.cache[file]
	process.send("reset")
})