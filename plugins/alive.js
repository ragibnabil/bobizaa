import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 السلام عليكم , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت الديني أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
╰────────────────────
*─[ https://chat.whatsapp.com/G0MYdGOwpqI2PVTKfcpy71 ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['islam']
handler.command = /^(alive)$/i


export default handler
