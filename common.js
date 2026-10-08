/* Shared helpers for the EPS 1000 Midterm 1 study app.
   Data lives in data.js as window.EPS = { topics, cards, questions }. */
(function () {
  const EPS = window.EPS || { topics: [], cards: [], questions: [] };

  // ---------- storage (never throws; app works without it) ----------
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem('eps1000:' + key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('eps1000:' + key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
    remove(key) {
      try { localStorage.removeItem('eps1000:' + key); } catch (e) { /* ignore */ }
    }
  };

  // ---------- utilities ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // Minimal markdown: paragraphs, "- " bullets, **bold**, *italic*, `code`, line breaks.
  function md(text) {
    if (!text) return '';
    const inline = s => esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/→/g, '→');
    const lines = String(text).split('\n');
    let html = '', inList = false, para = [];
    const flushPara = () => { if (para.length) { html += '<p>' + para.map(inline).join('<br>') + '</p>'; para = []; } };
    for (const line of lines) {
      const m = line.match(/^\s*[-•]\s+(.*)$/);
      if (m) {
        flushPara();
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + inline(m[1]) + '</li>';
      } else if (!line.trim()) {
        if (inList) { html += '</ul>'; inList = false; }
        flushPara();
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        para.push(line);
      }
    }
    if (inList) html += '</ul>';
    flushPara();
    return html;
  }

  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9'+\- ]+/g, ' ')
      .replace(/\s+/g, ' ');
  }

  // Each key may hold alternatives separated by "|", e.g. "decompression|pressure release".
  function keyHits(answer, keys) {
    const text = ' ' + norm(answer) + ' ';
    return (keys || []).map(k => {
      const alts = k.split('|').map(x => norm(x).trim()).filter(Boolean);
      const hit = alts.some(a => text.includes(a));
      return { key: k.split('|')[0], hit };
    });
  }

  function topicName(id) {
    const t = EPS.topics.find(t => t.id === id);
    return t ? t.name : id;
  }
  function topicShort(id) {
    const t = EPS.topics.find(t => t.id === id);
    return t ? (t.short || t.name) : id;
  }

  // Topic filter chips. onChange(selectedIds[])
  function topicChips(container, storageKey, onChange) {
    let selected = store.get(storageKey, null);
    if (!Array.isArray(selected) || !selected.length) selected = EPS.topics.map(t => t.id);
    container.innerHTML = '';
    const all = document.createElement('button');
    all.type = 'button'; all.className = 'chip'; all.textContent = 'All topics';
    container.appendChild(all);
    const chips = EPS.topics.map(t => {
      const c = document.createElement('button');
      c.type = 'button'; c.className = 'chip'; c.textContent = t.short || t.name; c.title = t.name;
      c.dataset.id = t.id;
      container.appendChild(c);
      return c;
    });
    const paint = () => {
      chips.forEach(c => c.classList.toggle('on', selected.includes(c.dataset.id)));
      all.classList.toggle('on', selected.length === EPS.topics.length);
    };
    const emit = () => { store.set(storageKey, selected); paint(); onChange && onChange(selected.slice()); };
    all.onclick = () => {
      selected = selected.length === EPS.topics.length ? [] : EPS.topics.map(t => t.id);
      emit();
    };
    chips.forEach(c => c.onclick = () => {
      const id = c.dataset.id;
      selected = selected.includes(id) ? selected.filter(x => x !== id) : selected.concat(id);
      emit();
    });
    paint();
    return () => selected.slice();
  }

  function navBar(active) {
    const links = [
      ['index.html', 'Home'],
      ['flashcards.html', 'Flashcards'],
      ['study.html', 'Study & Progress'],
      ['quizmaster.html', 'Quizmaster'],
      ['guide.html', 'Study Guide']
    ];
    const bar = document.createElement('header');
    bar.className = 'topbar';
    bar.innerHTML = '<a class="brand" href="index.html"><span class="dot"></span>EPS 1000 · Midterm 1</a><nav>' +
      links.map(([h, l]) => `<a href="${h}" class="${h === active ? 'active' : ''}">${l}</a>`).join('') +
      '</nav>';
    document.body.prepend(bar);
  }

  function toast(msg, ms = 1600) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), ms);
  }

  window.App = { EPS, store, shuffle, esc, md, norm, keyHits, topicName, topicShort, topicChips, navBar, toast };
})();
