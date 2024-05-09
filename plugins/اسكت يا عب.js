let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `[❗] سننننندلو لي\n\n*—◉ مثال :*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*[❗] تم حظر  فقاع البيض*\n*—◉ رسسسميا تم حظر فقاع البيض*')    }
handler.command = /^اسكت يا عب$/i
handler.rowner = true
export default handler
