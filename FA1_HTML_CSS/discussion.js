document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('question-form');
    const threadsContainer = document.getElementById('threads');
    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');
    const usernameSpan = document.getElementById('username');
    const clearAllButton = document.getElementById('clear-all');
    
    
    let loggedIn = false;
    let username = '';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const questionText = document.getElementById('question-text').value;
        if (questionText.trim()) {
            addThread(questionText);
            form.reset();
        }
    });

    function addThread(questionText) {
        const thread = document.createElement('div');
        thread.classList.add('thread');
        thread.innerHTML = `
            <p>${questionText}</p>
            <button onclick="reply(this)">Reply</button>
            <div class="replies"></div>
        `;
        threadsContainer.appendChild(thread);
    }

    window.reply = function(button) {
        const replyText = prompt('Enter your reply:');
        if (replyText) {
            const repliesDiv = button.nextElementSibling;
            const replyDiv = document.createElement('div');
            replyDiv.classList.add('reply');
            replyDiv.textContent = replyText;
            repliesDiv.appendChild(replyDiv);
        }
    }

    loginButton.addEventListener('click', () => {
        username = prompt('Enter your username:');
        if (username) {
            loggedIn = true;
            usernameSpan.textContent = username;
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
        }
    });

    logoutButton.addEventListener('click', () => {
        loggedIn = false;
        username = '';
        usernameSpan.textContent = 'Guest';
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
    });

    clearAllButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all threads?')) {
            threadsContainer.innerHTML = '';
        }
    });
});
