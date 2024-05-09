let handler = async (m, { conn, command, text }) => {
let stupidity = `*نسبه رجولتك *
*نسبة رجولتك ${text} هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*ربنا يهديكم💙☁️*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity']
handler.tags = ['']
handler.command = /^(رجولتي)$/i
export default handler
