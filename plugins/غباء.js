let handler = async (m, { conn, command, text }) => {
let stupidity = `*نسبه القنط *
*نسبة القنط ${text} هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*ربنا يهديكم💙☁️*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity']
handler.tags = ['']
handler.command = /^(قنط)$/i
export default handler
