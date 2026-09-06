(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1544557931247308822';

  /* =========================================================
     DATA
     ========================================================= */
  const FEATURES = [
    { icon: '💰', title: 'Economy', desc: 'A complete virtual economy with coins, bank, daily, weekly, work and pay.', tags: ['zcash', 'zdaily', 'zwork', 'zpay'] },
    { icon: '🎮', title: 'Games', desc: 'A whole arcade of interactive games you can play directly in Discord.', tags: ['zubj', 'zslots', 'zdice'] },
    { icon: '🃏', title: 'Blackjack', desc: 'Hit, stand, double and bet virtual coins against the dealer.', tags: ['zubj all'] },
    { icon: '🎰', title: 'Slots', desc: 'Spin the reels and try your luck with virtual coins.', tags: ['zslots 100k'] },
    { icon: '🪙', title: 'Coinflip', desc: 'A simple heads-or-tails betting game.', tags: ['zcf'] },
    { icon: '🎲', title: 'Dice', desc: 'Multiple dice game modes to bet and win.', tags: ['zdice'] },
    { icon: '💣', title: 'Mines', desc: 'An interactive minefield with buttons and a cash-out system.', tags: ['zmines'] },
    { icon: '🌲', title: 'Hunting', desc: 'Explore the wilderness to discover animals, items and rewards.', tags: ['zhunt'] },
    { icon: '🐾', title: 'Animals', desc: 'Collect animals across common, rare, epic, legendary and mythic rarities.', tags: ['zzoo'] },
    { icon: '⚔️', title: 'Battle', desc: 'Fight other players or NPCs using your pets and animals.', tags: ['zbattle'] },
    { icon: '🐉', title: 'World Boss', desc: 'Server-wide boss fights where the whole community joins in.', tags: ['zboss'] },
    { icon: '🎒', title: 'Inventory', desc: 'Store items, materials, weapons, crates and collectibles.', tags: ['zinv'] },
    { icon: '🛒', title: 'Shop', desc: 'Buy and sell items using your coins.', tags: ['zshop'] },
    { icon: '📜', title: 'Quests', desc: 'Complete daily quests and earn extra rewards.', tags: ['zquest'] },
    { icon: '🏆', title: 'Achievements', desc: 'Unlock achievements as you play the bot.', tags: ['zachievements'] },
    { icon: '📊', title: 'Leaderboard', desc: 'Compete for the top spot against other members.', tags: ['zleaderboard'] },
    { icon: '❤️', title: 'Social', desc: 'Fun interaction commands to use with friends.', tags: ['zhug', 'zpat'] },
    { icon: '💍', title: 'Marriage', desc: 'Create relationships and marry other Discord users.', tags: ['zmarry'] },
    { icon: '🎵', title: 'Music', desc: 'Play music together in Discord voice channels.', tags: ['zplay'] },
    { icon: '🤖', title: 'AI', desc: 'Chat directly with an AI through the bot.', tags: ['zai'] },
    { icon: '🎤', title: 'AI Voice', desc: 'Talk with AI naturally inside a Discord voice channel.', tags: ['zvoice'] },
    { icon: '🛡️', title: 'Moderation', desc: 'Tools for managing and protecting your Discord server.', tags: ['zwarn', 'zkick'] },
  ];

  const GAMES = [
    { icon: '🃏', name: 'Blackjack', desc: 'Challenge the dealer and try to beat 21.', cmd: 'zubj all' },
    { icon: '🎰', name: 'Slots', desc: 'Spin for a matching combination.', cmd: 'zslots 100k' },
    { icon: '🪙', name: 'Coinflip', desc: 'Call it — heads or tails.', cmd: 'zcf 50k heads' },
    { icon: '🎲', name: 'Dice', desc: 'Roll against the house in several modes.', cmd: 'zdice 20k' },
    { icon: '💣', name: 'Mines', desc: 'Reveal safe tiles and cash out before it blows.', cmd: 'zmines 30k' },
    { icon: '🔢', name: 'Guess', desc: 'Guess the number to win the pot.', cmd: 'zguess' },
    { icon: '🎟️', name: 'Lottery', desc: 'Buy a ticket for a shot at the jackpot.', cmd: 'zlottery buy' },
    { icon: '🌲', name: 'Hunting', desc: 'Head into the wild for animals and loot.', cmd: 'zhunt' },
    { icon: '⚔️', name: 'Battle', desc: 'Send your animals into combat.', cmd: 'zbattle @user' },
    { icon: '🐉', name: 'World Boss', desc: 'Team up on a server-wide boss fight.', cmd: 'zboss attack' },
  ];

  const WHY = [
    { icon: '⚡', label: 'Fast' }, { icon: '🎮', label: 'Fun' }, { icon: '💰', label: 'Economy' },
    { icon: '🤖', label: 'AI' }, { icon: '🎤', label: 'Voice AI' }, { icon: '🎵', label: 'Music' },
    { icon: '🛡️', label: 'Moderation' }, { icon: '🏆', label: 'Progression' }, { icon: '📦', label: 'All-in-one' },
  ];

  const FAQ = [
    { q: 'What is Zeetasi?', a: 'Zeetasi is an all-in-one Discord bot designed to make your server more fun, interactive and powerful — with games, economy, AI, voice AI, music and moderation in one place.' },
    { q: 'How do I add Zeetasi?', a: 'Click any "Add to Discord" button on this page to open the official Discord invite and choose a server to add Zeetasi to.' },
    { q: 'Is Zeetasi free?', a: 'Zeetasi is free to add and use. Check inside the bot for any optional extras.' },
    { q: 'What is the command prefix?', a: 'Zeetasi uses the "z" prefix, so commands look like zcash, zhunt or zprofile — no slash required.' },
    { q: 'Does Zeetasi have games?', a: 'Yes — Blackjack, Slots, Coinflip, Dice, Mines, Guess, Lottery, Hunting, Battle and World Boss are all built in.' },
    { q: 'Does Zeetasi have AI?', a: 'Yes, Zeetasi includes an AI chat feature you can talk to directly in your server.' },
    { q: 'Can Zeetasi talk in voice channels?', a: 'Yes — join a voice channel and Zeetasi can hold a natural spoken AI conversation with you.' },
    { q: 'Does Zeetasi have music?', a: 'Yes, Zeetasi can play, pause, skip, loop, shuffle and queue music in your voice channels.' },
    { q: 'What games are available?', a: 'Blackjack, Slots, Coinflip, Dice, Mines, Guess, Lottery, Hunting, Battle and World Boss.' },
  ];

  const SHOWCASE = {
    Economy: [
      ['zcash', 'Coins: 600,000 · Bank: 100,000'],
      ['zdaily', 'Claim your daily coin reward'],
      ['zwork', 'Work a job to earn coins'],
      ['zpay @user 5000', 'Send coins to another member'],
    ],
    Games: [
      ['zubj all', 'Start a Blackjack round, bet all-in'],
      ['zslots 100k', 'Spin the slots for 100,000 coins'],
      ['zmines 30k', 'Start a Mines round'],
    ],
    Animals: [
      ['zzoo', 'View your animal collection'],
      ['zhunt', 'Go hunting for new animals'],
      ['zrelease', 'Release an animal from your zoo'],
    ],
    Battle: [
      ['zbattle @user', 'Challenge another player'],
      ['zboss attack', 'Attack the active world boss'],
    ],
    Social: [
      ['zmarry @user', 'Propose marriage to a user'],
      ['zprofile', 'View your Zeetasi profile'],
    ],
    Music: [
      ['zplay song name', 'Play a track in your voice channel'],
      ['zqueue', 'View the current music queue'],
    ],
    AI: [
      ['zai hello', 'Chat with the AI'],
      ['zvoice join', 'Start an AI voice conversation'],
    ],
    Moderation: [
      ['zwarn @user reason', 'Warn a member'],
      ['zlogs', 'View the server log channel'],
    ],
  };

  const HERO_CYCLE = [
    { cmd: 'zcash', res: '💰 BALANCE\nCoins: <b>600,000</b>\nBank: <b>100,000</b>\nLevel: <b>12</b>' },
    { cmd: 'zubj all', res: 'Blackjack started — betting all-in.' },
    { cmd: 'zhunt', res: 'You went hunting and found a rare animal!' },
    { cmd: 'zslots 100k', res: 'Spinning the slots for 100,000 coins…' },
    { cmd: 'zprofile', res: 'Opened your Zeetasi profile card.' },
  ];

  const LIVE_CYCLE = [
    { cmd: 'zcash', res: 'Coins: 600,000 · Bank: 100,000' },
    { cmd: 'zubj all', res: 'Dealt a new Blackjack hand.' },
    { cmd: 'zhunt', res: 'Exploring the forest…' },
    { cmd: 'zslots 100k', res: 'Reels are spinning…' },
    { cmd: 'zprofile', res: 'Level 12 · Rank #348' },
    { cmd: 'zleaderboard', res: 'Showing the server leaderboard.' },
  ];

  /* =========================================================
     RENDER STATIC-ISH CONTENT FROM DATA
     ========================================================= */
  const featureGrid = document.getElementById('featureGrid');
  featureGrid.innerHTML = FEATURES.map(f => `
    <article class="feature-card reveal">
      <div class="feature-card__icon" aria-hidden="true">${f.icon}</div>
      <h3 class="feature-card__title">${f.title}</h3>
      <p class="feature-card__desc">${f.desc}</p>
      <div class="feature-card__tags">${f.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </article>
  `).join('');

  const gameGrid = document.getElementById('gameGrid');
  gameGrid.innerHTML = GAMES.map(g => `
    <article class="game-card reveal">
      <div class="game-card__icon" aria-hidden="true">${g.icon}</div>
      <h3 class="game-card__name">${g.name}</h3>
      <p class="game-card__desc">${g.desc}</p>
      <code class="game-card__cmd">${g.cmd}</code>
    </article>
  `).join('');

  const whyGrid = document.getElementById('whyGrid');
  whyGrid.innerHTML = WHY.map(w => `
    <div class="why-card reveal"><span class="why-card__icon" aria-hidden="true">${w.icon}</span><span>${w.label}</span></div>
  `).join('');

  const faqList = document.getElementById('faqList');
  faqList.innerHTML = FAQ.map((f, i) => `
    <div class="faq__item reveal" data-index="${i}">
      <button class="faq__q" aria-expanded="false" aria-controls="faqA${i}">
        <span>${f.q}</span><span class="faq__q-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq__a" id="faqA${i}"><p>${f.a}</p></div>
    </div>
  `).join('');

  /* =========================================================
     NAVBAR: sticky background + hamburger + active link
     ========================================================= */
  const navbar = document.getElementById('navbar');
  const onScrollNav = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleMenu = (open) => {
    const next = open ?? !mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', next);
    hamburgerBtn.classList.toggle('is-active', next);
    hamburgerBtn.setAttribute('aria-expanded', String(next));
  };
  hamburgerBtn.addEventListener('click', () => toggleMenu());
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* smooth scroll for in-page links */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
      window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });

  /* active nav state on scroll */
  const sections = ['home','features','games','ai','music','faq'].map(id => document.getElementById(id)).filter(Boolean);
  const navlinks = Array.from(document.querySelectorAll('.navlink'));
  const setActive = () => {
    const navH = document.getElementById('navbar').offsetHeight + 8;
    let current = sections[0];
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top - navH <= 0) current = sec;
    }
    navlinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current.id));
  };
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });

  /* =========================================================
     BACK TO TOP
     ========================================================= */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));

  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */
  if ('IntersectionObserver' in window && !reducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* =========================================================
     TYPING TERMINAL ANIMATION (hero + live section)
     ========================================================= */
  function runTerminal(bodyEl, cycle, opts = {}) {
    const { typeSpeed = 55, holdTime = 1600, restart = true } = opts;
    let i = 0;
    let cancelled = false;

    function typeLine(text, el, cb) {
      let j = 0;
      if (reducedMotion) { el.textContent = text; cb(); return; }
      const timer = setInterval(() => {
        if (cancelled) { clearInterval(timer); return; }
        j++;
        el.textContent = text.slice(0, j);
        if (j >= text.length) { clearInterval(timer); cb(); }
      }, typeSpeed);
    }

    function step() {
      if (cancelled) return;
      const entry = cycle[i % cycle.length];
      const line = document.createElement('div');
      line.className = 'terminal__line';
      line.innerHTML = '<span class="terminal__prompt">&gt;</span> <span class="terminal__cmd"></span><span class="terminal__cursor"></span>';
      bodyEl.appendChild(line);
      const cmdEl = line.querySelector('.terminal__cmd');

      typeLine(entry.cmd, cmdEl, () => {
        line.querySelector('.terminal__cursor')?.remove();
        const resp = document.createElement('div');
        resp.className = 'terminal__response';
        resp.innerHTML = entry.res;
        bodyEl.appendChild(resp);

        while (bodyEl.children.length > 6) bodyEl.removeChild(bodyEl.firstChild);

        i++;
        setTimeout(() => {
          if (!cancelled) step();
        }, holdTime);
      });
    }
    step();
    return () => { cancelled = true; };
  }

  const heroTerminalBody = document.getElementById('heroTerminalBody');
  if (heroTerminalBody) runTerminal(heroTerminalBody, HERO_CYCLE, { typeSpeed: 60, holdTime: 1700 });

  const liveTerminalBody = document.getElementById('liveTerminalBody');
  if (liveTerminalBody) runTerminal(liveTerminalBody, LIVE_CYCLE, { typeSpeed: 50, holdTime: 1400 });

  /* =========================================================
     COMMAND SHOWCASE TABS
     ========================================================= */
  const showcaseTabs = document.getElementById('showcaseTabs');
  const showcaseBody = document.getElementById('showcaseBody');
  const showcaseLabel = document.getElementById('showcaseLabel');
  const categories = Object.keys(SHOWCASE);

  function renderShowcase(cat) {
    showcaseLabel.textContent = cat.toLowerCase();
    showcaseBody.innerHTML = SHOWCASE[cat].map(([cmd, res]) => `
      <div class="showcase__row"><code>${cmd}</code><span>${res}</span></div>
    `).join('');
  }

  showcaseTabs.innerHTML = categories.map((cat, i) => `
    <button class="showcase__tab${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-cat="${cat}">${cat}</button>
  `).join('');

  showcaseTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.showcase__tab');
    if (!btn) return;
    showcaseTabs.querySelectorAll('.showcase__tab').forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
    renderShowcase(btn.dataset.cat);
  });

  renderShowcase(categories[0]);

  /* =========================================================
     FAQ ACCORDION
     ========================================================= */
  faqList.addEventListener('click', (e) => {
    const q = e.target.closest('.faq__q');
    if (!q) return;
    const item = q.closest('.faq__item');
    const answer = item.querySelector('.faq__a');
    const isOpen = item.classList.contains('is-open');

    faqList.querySelectorAll('.faq__item.is-open').forEach(open => {
      if (open !== item) {
        open.classList.remove('is-open');
        open.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        open.querySelector('.faq__a').style.maxHeight = null;
      }
    });

    item.classList.toggle('is-open', !isOpen);
    q.setAttribute('aria-expanded', String(!isOpen));
    answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
  });

  /* =========================================================
     STAT COUNTERS (only for real numeric values)
     ========================================================= */
  const counters = document.querySelectorAll('[data-count]');
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reducedMotion) { el.textContent = target + suffix; return; }
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const val = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
  } else {
    counters.forEach(animateCounter);
  }

  /* keep invite links consistent even if markup is edited later */
  document.querySelectorAll('a[href*="discord.com/oauth2/authorize"]').forEach(a => {
    a.href = INVITE_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
