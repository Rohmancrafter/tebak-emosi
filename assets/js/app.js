document.addEventListener('DOMContentLoaded', () => {
    let questions = [];
    let currentRound = 0;
    let score = 0;
  
    const EMOTION_ICONS = {
      Joy: 'https://cdn-icons-png.freepik.com/512/260/260216.png',
      Sadness: 'https://icons.veryicon.com/png/o/emoticon/simple-expression-bag/sad-13.png',
      Anger: 'https://www.pngplay.com/wp-content/uploads/12/Emoji-Angry-PNG-Pic-Background.png',
      Fear: 'https://www.svgrepo.com/show/492563/fear.svg'
    };
  
    async function loadQuestions() {
      const res = await fetch('data/questions.json');
      const all = await res.json();
      questions = all.sort(() => 0.5 - Math.random()).slice(0, 10);
    }
  
    function showSection(id) {
      ['splash', 'quiz', 'result'].forEach(sec => {
        const el = document.getElementById(sec);
        el.classList.toggle('hidden', sec !== id);
        if (sec === id) el.classList.add('fade-in');
      });
    }
  
    async function initQuiz() {
      await loadQuestions();
      currentRound = 0;
      score = 0;
      document.getElementById('score').innerText = score;
      showSection('quiz');
      renderRound();
    }
  
    function renderRound() {
      const q = questions[currentRound];
      document.getElementById('round').innerText = currentRound + 1;
      document.getElementById('sentence').innerText = q.sentence;
      const choicesEl = document.getElementById('choices');
      choicesEl.innerHTML = '';
  
      const emotions = Object.keys(EMOTION_ICONS).sort(() => 0.5 - Math.random());
      emotions.forEach(em => {
        const btn = document.createElement('button');
        btn.className = 'px-4 py-2 bg-purple-100 text-purple-800 font-medium rounded-lg shadow hover:bg-purple-200 transition transform duration-200 hover:scale-105 flex items-center justify-center';
        const img = document.createElement('img');
        img.src = EMOTION_ICONS[em]; img.alt = em; img.className = 'w-6 h-6 mr-2';
        btn.append(img, document.createTextNode(em));
        btn.onclick = () => handleAnswer(em, btn);
        choicesEl.appendChild(btn);
      });
  
      document.getElementById('btn-next').classList.add('hidden');
    }
  
    function handleAnswer(selected, btn) {
      const correct = questions[currentRound].emotion;
      document.querySelectorAll('#choices button').forEach(b => b.disabled = true);
      if (selected === correct) {
        score++;
        btn.classList.replace('bg-purple-100', 'bg-green-400');
        btn.classList.replace('text-purple-800', 'text-white');
      } else {
        btn.classList.replace('bg-purple-100', 'bg-red-400');
        btn.classList.replace('text-purple-800', 'text-white');
        Array.from(document.querySelectorAll('#choices button'))
          .find(b => b.textContent.trim() === correct)
          .classList.replace('bg-purple-100', 'bg-green-400');
      }
      document.getElementById('score').innerText = score;
      document.getElementById('btn-next').classList.remove('hidden');
    }
  
    document.getElementById('btn-next').onclick = () => {
      currentRound++;
      if (currentRound < questions.length) renderRound();
      else showResult();
    };
  
    function showResult() {
      const percent = score * 10;
      const iconEl = document.getElementById('result-icon');
      const msgEl = document.getElementById('result-message');
      let iconUrl = '';
      let message = '';
      if (percent >= 90) {
        iconUrl = 'https://www.svgrepo.com/show/380532/medal-champion-award-winner-olympic-14.svg';
        message = 'Selamat! Anda Pemenang!';
      } else if (percent >= 70) {
        iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fpRCLwbH9VRDm7LswLTTPiDIv-BEhGu5Zg&s';
        message = 'Bagus, tapi masih bisa lebih baik!';
      } else if (percent >= 50) {
        iconUrl = 'https://cdn.shopify.com/s/files/1/1061/1924/files/Eye_Roll_Emoji_large.png?v=1541768914';
        message = 'Hasil sangat kurang, ayo coba lagi!';
      } else {
        iconUrl = 'https://png.pngtree.com/png-vector/20221021/ourmid/pngtree-dangerous-cartoon-skull-icon-png-image_6377437.png';
        message = 'Hasil sangat kurang, ayo coba lagi!';
      }
      iconEl.innerHTML = `<img src="${iconUrl}" class="w-16 h-16">`;
      msgEl.textContent = message;
      document.getElementById('final-score').innerText = score;
      showSection('result');
    }
  
    document.getElementById('btn-start').onclick = initQuiz;
    document.getElementById('btn-restart').onclick = initQuiz;
  });
  