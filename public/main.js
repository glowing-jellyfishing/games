document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/games')
        .then(res => res.json())
        .then(games => {
            const gameList = document.getElementById('gameList');
            gameList.innerHTML = '';
            games.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <img class="game-thumb" src="${game.thumbnail}" alt="${game.title}">
                    <div class="game-info">
                        <div class="game-title">${game.title}</div>
                        <div class="game-creator">by ${game.creator}</div>
                    </div>
                `;
                gameList.appendChild(card);
            });
        });

    document.getElementById('loginBtn').onclick = function() {
        alert('Login functionality coming soon!');
    };
    document.getElementById('signupBtn').onclick = function() {
        alert('Sign up functionality coming soon!');
    };
});
