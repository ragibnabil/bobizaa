import fetch from 'node-fetch';
import { translate } from '@vitalets/google-translate-api';

let quranSurahHandler = async (m, { conn }) => {
  try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
      throw new Error(`يرجـى كتـابة اسم السـوره او رقمهـا بعد الامر مثـال: .سوره الكوثر`);
    }

    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      throw new Error(`تعـذر العثـور على السـوره بالرقم او بالاسم"${surahInput}"`);
    }

    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`);
    }

    let json = await res.json();

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ar', autoCorrect: true });

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirArabic = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true });

    let quranSurah = `
🕌 *الـقــرآن الكــــريم*\n
📜 *ســوره ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
نـوع: ${json.data.type.ar}\n
عــدد الايـــات: ${json.data.ayahCount}\n
🔮 *تفسيـر (العربيه):*\n
${translatedTafsirUrdu.text}\n
🔮 *تفسيـر (الانجليزيه):*\n
${translatedTafsirArabic.text}`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
      conn.sendFile(m.chat, json.data.recitation.full, 'recitation.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
};

quranSurahHandler.help = ['quran [surah_number|surah_name]'];
quranSurahHandler.tags = ['quran', 'surah'];
quranSurahHandler.command = ['سورة', 'سوره']

export default quranSurahHandler;
