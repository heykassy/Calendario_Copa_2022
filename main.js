function createGameMatch(team1, hour, team2) {
    return `
    <li>
        <img src="./assets/Bandeiras dos países/icon=${team1}.svg" alt="Bandeira ${team1}">
        <strong>${hour}</strong>
        <img src="./assets/Bandeiras dos países/icon=${team2}.svg" alt="Bandeira ${team2}">
    </li>
    `
}

let delay = 0;
function createCard(date, day, match) {
    delay += 0.4;
    return `
    <div class="card"style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${match}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML =
createCard('20/11', 'domingo', 
    createGameMatch('qatar', '13:00', 'ecuador'))
+
createCard('21/11', 'segunda', 
    createGameMatch('england', '10:00', 'iran') + 
    createGameMatch('senegal', '13:00', 'netherlands') + 
    createGameMatch('united states', '16:00', 'wales'))
+
createCard('22/11', 'terça', 
    createGameMatch('argentina', '07:00', 'saudi arabia') + 
    createGameMatch('denmark', '10:00', 'tunisia') + 
    createGameMatch('mexico', '13:00', 'poland') + 
    createGameMatch('france', '16:00', 'australia'))