import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 السلام عليكم , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت الديني أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
╰────────────────────
*─[ https://instagram.com/00o5k ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['']
handler.command = /^(alive)$/i


export default handler
