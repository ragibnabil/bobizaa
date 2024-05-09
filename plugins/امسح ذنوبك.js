let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`'.*امسح ذنوبك ونام*
*عن أبي هريرة ـ رضي الله عنه ـ عن النبي صلى الله عليه وسلم قال: من قال حين يأوي إلى فراشه: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، لا حول ولا قوة إلا بالله، سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر، غفر الله ذنوبه أو خطاياه ـ شك مسعر ـ وإن كان مثل زبد البحر.*
ً'`])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.customPrefix = /امسح ذنوبك|أمسح ذنوبك/i 
handler.tags = ['islam']
handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
