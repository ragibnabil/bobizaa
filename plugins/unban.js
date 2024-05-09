let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('أصبحت ابيض البشرة!')
}
handler.help = ['unban']
handler.tags = ['']
handler.command = /^unban$/i
handler.owner = true

export default handler
