function openGame(gameName) {
    // Skryj všechny hry
    document.getElementById('games').style.display = 'none';

    // Zobraz obsah hry
    document.getElementById('game-content').style.display = 'flex';

    // Načti obsah hry
    if (gameName === 'pexeso') {
        document.getElementById('game-content').innerHTML = '<h2>Pexeso</h2><img src="pexeso-game.jpg" alt="Pexeso Game">';
    } else if (gameName === 'piskvorky') {
        document.getElementById('game-content').innerHTML = '<h2>Piškvorky</h2><img src="piskvorky-game.jpg" alt="Piškvorky Game">';
    } else {
        document.getElementById('game-content').innerHTML = '<h2>' + gameName + '</h2><p>Obsah hry není dostupný.</p>';
    }
}