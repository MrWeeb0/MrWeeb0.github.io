// === SIGNUP ===
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const res = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            alert('Signup successful!');
            localStorage.setItem('user_id', data.user_id);
        } else {
            alert(data.detail || 'Signup failed');
        }
    });
}

// === LOGIN ===
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const res = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            alert('Login successful!');
            localStorage.setItem('user_id', data.user_id);
            fetchAndDisplayProgress(); // optional: fetch progress after login
        } else {
            alert(data.detail || 'Login failed');
        }
    });
}

// === CHATBOT ===
const sendButton = document.getElementById('aiChatSend');
const chatInput = document.getElementById('aiChatInput');
const chatContent = document.getElementById('mathChatContent');
const subjectSelect = document.getElementById('aiChatSubjectSelect');

if (sendButton && chatInput && chatContent && subjectSelect) {
    sendButton.addEventListener('click', async () => {
        const message = chatInput.value.trim();
        const subject = subjectSelect.value;

        if (!message) return;

        const userBubble = document.createElement('div');
        userBubble.className = 'ai-chat-bubble user';
        userBubble.textContent = message;
        chatContent.appendChild(userBubble);
        chatInput.value = '';

        try {
            const res = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, subject })
            });

            const data = await res.json();
            const botBubble = document.createElement('div');
            botBubble.className = 'ai-chat-bubble bot';
            botBubble.textContent = data.reply || 'No response.';
            chatContent.appendChild(botBubble);
        } catch (err) {
            console.error('Chat error:', err);
        }
    });
}

// === PROGRESS TRACKER ===
async function updateProgress(topicId, completed) {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
        alert("You must be logged in to save progress.");
        return;
    }

    const res = await fetch('http://localhost:8000/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, topic_id: topicId, completed })
    });

    const data = await res.json();
    console.log('Progress update:', data);
}

// === GAMIFICATION PANEL ===
const sampleProgressData = {
    xpPercent: 60,
    streak: 4,
    badges: {
        starter: true,
        streak: true,
        master: false,
        champion: false
    }
};

function updateGamificationUI(data) {
    const xpBar = document.getElementById('xpProgress');
    if (xpBar) xpBar.style.width = `${data.xpPercent}%`;

    const streakText = document.getElementById('streakCount');
    if (streakText) streakText.textContent = `${data.streak}-day streak`;

    const allBadges = document.querySelectorAll('.badge');
    allBadges.forEach(badge => {
        const badgeName = badge.getAttribute('data-badge');
        if (data.badges[badgeName]) {
            badge.classList.add('unlocked');
            badge.classList.remove('locked');
        } else {
            badge.classList.remove('unlocked');
            badge.classList.add('locked');
        }
    });
}

function fetchAndDisplayProgress() {
    // Later, replace this with actual fetch to /progress endpoint
    updateGamificationUI(sampleProgressData);
}

// === GAMIFICATION TOGGLE ===
const toggle = document.getElementById('gamificationToggle');
const panel = document.getElementById('gamificationPanel');

if (toggle && panel) {
    toggle.addEventListener('click', () => {
        panel.classList.toggle('open');
    });
}
