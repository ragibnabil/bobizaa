import axios from 'axios';

//api.quran.com/api/v4
const API_KEY = '//api.quran.com/api/v4';

//api.quran.com/api/v4
async function getAudioForSurah(surahNumber) {
  try {
    const response = await axios.get(`https://api.quran.com/audio/surah/${surahNumber}?audio_type=surah&content_type=audio&format=mp3&key=${API_KEY}`);
    const audioUrl = response.data.audio_url;
    // تشغيل التسجيل الصوتي في تطبيقك هنا
    console.log("Audio URL for Surah:", audioUrl);
  } catch (error) {
    console.error("Error fetching audio:", error);
  }
}

// استخدام الوظيفة للحصول على التسجيل الصوتي للسورة المحددة
getAudioForSurah(1); // مثال: سورة الفاتحة
handler.help = ['صوت']
handler.tags = ['']
handler.command = /^صوت$/i
export default handler
