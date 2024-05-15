import axios  from 'axios';

let handler = async (m, { conn, text }) => {
 conn.akira = conn.akira ? conn.akira : {};

 if (!text) throw `*للتحدث مباشرة مع البوت وبدون أوامر نكتب*\n\n.doctor تفعيل \n\n*بالنسبة إذا أردت إلغاء وضع البوت الآلي والرجوع للبوت بشكله الطبيعي فعليك كتابة هكذا*\n\n*.doctor ايقاف* `;

 if (text == "تفعيل") {
 conn.akira[m.chat] = {
 pesan: []
 }
 m.reply("🟢 *تم تفعيل وضع الرد الالي إسأل أي سؤال*")
 } else if (text == "ايقاف") {
 delete conn.akira[m.chat]
 m.reply("🔴 *تم ايقاف وضع الرد الآلي اكتب menu. لتنبتق لك جميع الأوامر*")
 }
}

handler.before = async (m, { conn }) => {
conn.akira = conn.akira ? conn.akira : {};
 if (m.isBaileys && m.fromMe) return;
 if (!m.text) return
 if (!conn.akira[m.chat]) return;

 if (
 m.text.startsWith(".") ||
 m.text.startsWith("#") ||
 m.text.startsWith("!") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return

 if (conn.akira[m.chat] && m.text) {
 let name = conn.getName(m.sender)
 await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
 const messages = [
 ...conn.akira[m.chat].pesan,
 { role: "system", content: `اسمك دكتورة ، 20 عاما ، أنت المساعد الذكي الذي يمكنه الإجابة على جميع الأسئلة ، واستخدام اللغة العربية باللهجة السعودية عند الإجابة ، والرد على جميع اللغات عند الإجابة ، واستخدام الرموز التعبيرية عندما تريد الإجابة على الأسئلة ، ولديك طبيعة خالية من الهموم ولكنها أنثوية مثل المرأة ، ونحن الان في عام 2024 ، ولديك زوج اسمه دكتر الضكران ، دكتر شخص قام بإضافتي الى واتساب كصديق لمساعدة أصدقائه ، إذا كان محتوى السؤال يتعلق بالسيره النبويه اخبرهم أن صديقك دكتور اخبرك انه لايمكنك الإجابة على الأسئلة الدينية في الاسلام ، إذا كان لديك أي أسئلة تتعلق بالترميز الذي أجبت عليه بالرفض ،  اسم المحاور الخاص بك هو *${name}*"` },
 { role: "user", content: m.text }
 ];
 try {
 const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
 messages
 });

 const responseData = response.data;
 const hasil = responseData;
 await conn.sendMessage(m.chat, { react: { text: `♥️`, key: m.key }});
 m.reply(hasil.answer)
 conn.akira[m.chat].pesan = messages
 } catch (error) {
 console.error("Error fetching data:", error);
 throw error;
 }
 }
}

handler.command = ['doctor'];
handler.tags = ["islam"]
handler.help = ['doctor']
export default handler
