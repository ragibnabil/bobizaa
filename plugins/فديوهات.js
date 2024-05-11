let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `_إذا واجهتك مشكلة تواصل مع مطور البوت_\ninstagram.com/00o5k` }, { quoted: m })
	}

handler.help = ['فديوهات']
handler.tags = ['islam']
handler.command = /^(فديوهات)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/014d2e6f86e510842e445.mp4',
'https://telegra.ph/file/98971f2b8c5530118d8dd.mp4',
'https://telegra.ph/file/4c33c94379999a8212a14.mp4',
'https://telegra.ph/file/4b0a16f97f493d8d849e5.mp4',
'https://telegra.ph/file/4ecde5a456cfa97170e09.mp4',
'https://telegra.ph/file/d516bceeb22b9de99be55.mp4',
'https://telegra.ph/file/d31ac23bf8f2eb92253fd.mp4',
'https://telegra.ph/file/38d0e501240e06767b6a7.mp4',
'https://telegra.ph/file/5e7d4e7a5e5920a28b86c.mp4',
'https://telegra.ph/file/3f7b8c6159566d6be4e16.mp4',
'https://telegra.ph/file/9329739e9c3f429d4072e.mp4',
]
