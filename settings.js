const fs = require('fs')
const chalk = require('chalk')

//Settings
global.owner = "6285787407598"
global.ownername = "GulbatDevloper X DarkSistemDevloper"
global.namabot = "☠️︎︎𝐋𝐞𝐭𝐭𝐲𝐂𝐡𝐢𝐚̷̨♨️︎"
global.versisc = "5.0"
global.simbol = "ネ"
global.zz = "`"
global.linkgc = "https://chat.whatsapp.com/CQd7UyUWHcMG7hZGHpwebx?mode=gi_t"
global.idGc = "@g.us"
global.linkSaluran = "https://whatsapp.com/channel/"
global.idSaluran = "@newsletter"
global.namaSaluran = "© 𝗚𝘂𝗹𝗯𝗮𝘁𝗗𝗲𝘃"

// >~~~~~~~~ Setting Message ~~~~~~~~~< //
global.msg = {
wait: "Memproses . . .", 
owner: "Fitur ini khusus untuk owner!", 
premium: "Fitur ini khusus murbug 𝐋𝐞𝐭𝐭𝐲𝐂𝐡𝐢𝐚!", 
group: "Fitur ini untuk dalam grup!", 
admin: "Fitur ini untuk admin grup!", 
botadmin: "Fitur ini hanya untuk bot menjadi admin"
}
//Thumbnail
global.imgthumb = "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})