import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
‌
`.trim()
  m.reply(caption)
}
handler.help = ['أذكار المساء']
handler.tags = ['islam']
handler.command = /^(ذكر الصااهباح)$/i


export default handler
