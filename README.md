**Tebak Emosi**

Tebak Emosi adalah mini‑game berbasis web yang menantang pemain untuk menebak emosi dari kalimat pendek. Aplikasi ini sepenuhnya statis, bebas biaya, dan mudah di‑deploy di GitHub Pages atau Netlify.
🎯 Deskripsi Singkat
* Pemain dihadapkan pada 10 ronde kalimat emosi (Joy, Sadness, Anger, Fear).
* Setiap ronde menampilkan satu kalimat dan empat pilihan emosi.
* Skor dihitung dan feedback diberikan secara real‑time.
* Hasil akhir memberikan pesan dan ikon berbeda berdasarkan persentase benar.
  
🛠️ Teknologi & Tools

* **HTML5** & **Tailwind CSS** (CDN) untuk struktur dan styling.
* **Vanilla JavaScript** untuk logika game (fetch, event handling, DOM manipulation).
* **SVG Icons** diambil dari svgrepo.com untuk tampilan profesional.
* **GitHub Pages** atau **Netlify** untuk hosting gratis.

✨ Fitur Utama

1. **Splash Screen** dengan animasi fade-in dan tombol mulai.
2. **Quiz Screen**:

   * Dynamic loading `data/questions.json` (10 soal acak).
   * Buttons pilihan dengan hover efek dan scale-up.
   * Indikator ronde & skor real-time.
3. **Result Screen**:

   * Feedback visual (trophy, thumbs-up, thumbs-down).
   * Pesan berbeda sesuai persentase skor:

     * ≥90%: Pemenang 🎉
     * 70–89%: Bagus 👍
     * 50–69%: Kurang 👎
4. **Responsive Design**: mobile & desktop.


##  AI Support Explanation

Selama pengembangan, saya memanfaatkan **ChatGPT** untuk mempercepat berbagai tahap:

1. **Generate Soal Emosi**
   * **Prompt**:
     > "Generate 40 short Indonesian sentences that each clearly expresses one of four emotions: Joy, Sadness, Anger, Fear."
   * **Manfaat**: Mendapatkan kalimat bervariasi tanpa menulis manual.

2. **Styling & Animasi**
   * **Prompt**:
     > "Write HTML/CSS using Tailwind to create a fade-in animation and responsive button hover effects."
   * **Manfaat**: Mendapatkan snippet CSS @keyframes dan utility classes Tailwind.

3. **Debugging CORS & File Load**
   * **Prompt**:
     > "Why fetch local JSON from file protocol is blocked and how to fix using Live Server or Python HTTP server?"
   * **Manfaat**: Solusi cepat mengatasi error CORS pada `fetch('data/questions.json')`.

Semua snippet dan ide styling diadaptasi dari respons ChatGPT, yang kemudian saya integrasikan dan kustomisasi sesuai kebutuhan.
