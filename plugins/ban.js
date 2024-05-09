let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('رسميا لا يمكنك استخدام البوت لانك اسود البشرة🚫')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['ban']
handler.tags = ['']
handler.command = /^ban$/i

handler.owner = true

export default handler
