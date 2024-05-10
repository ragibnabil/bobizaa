let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `_إذا واجهتك مشكلة تواصل مع مطور البوت_\ninstagram.com/00o5k` }, { quoted: m })
	}

handler.help = ['بادر']
handler.tags = ['islam']
handler.command = /^(بادر)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/014d2e6f86e510842e445.mp4',
'https://telegra.ph/file/3f7b8c6159566d6be4e16.mp4',
'https://telegra.ph/file/9329739e9c3f429d4072e.mp4',
]
