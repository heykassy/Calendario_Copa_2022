function changePageColor(color) {
    document.body.className = color 
}

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
+
createCard('23/11', 'quarta', 
    createGameMatch('morocco', '07:00', 'croatia') + 
    createGameMatch('germany', '10:00', 'japan') + 
    createGameMatch('spain', '13:00', 'costa rica') + 
    createGameMatch('belgium', '16:00', 'canada'))
+
createCard('24/11', 'quinta', 
    createGameMatch('switzerland', '07:00', 'cameroon') + 
    createGameMatch('uruguay', '10:00', 'south korea') + 
    createGameMatch('portugal', '13:00', 'ghana') + 
    createGameMatch('brazil', '16:00', 'serbia'))
+
createCard('25/11', 'sexta', 
    createGameMatch('wales', '07:00', 'iran') + 
    createGameMatch('qatar', '10:00', 'senegal') + 
    createGameMatch('netherlands', '13:00', 'ecuador') + 
    createGameMatch('england', '16:00', 'united states'))
+
createCard('26/11', 'sábado', 
    createGameMatch('tunisia', '07:00', 'australia') + 
    createGameMatch('poland', '10:00', 'saudi arabia') + 
    createGameMatch('france', '13:00', 'denmark') + 
    createGameMatch('argentina', '16:00', 'mexico'))
+
createCard('27/11', 'domingo', 
    createGameMatch('japan', '07:00', 'costa rica') + 
    createGameMatch('belgium', '10:00', 'morocco') + 
    createGameMatch('croatia', '13:00', 'canada') + 
    createGameMatch('spain', '16:00', 'germany'))
+
createCard('28/11', 'segunda', 
    createGameMatch('cameroon', '07:00', 'serbia') + 
    createGameMatch('south korea', '10:00', 'ghana') + 
    createGameMatch('brazil', '13:00', 'switzerland') + 
    createGameMatch('portugal', '16:00', 'uruguay'))
+
createCard('29/11', 'terça', 
    createGameMatch('ecuador', '12:00', 'senegal') + 
    createGameMatch('netherlands', '12:00', 'qatar') + 
    createGameMatch('iran', '16:00', 'united states') + 
    createGameMatch('wales', '16:00', 'england'))
+
createCard('30/11', 'quarta', 
    createGameMatch('tunisia', '12:00', 'france') + 
    createGameMatch('australia', '12:00', 'denmark') + 
    createGameMatch('poland', '16:00', 'argentina') + 
    createGameMatch('saudi arabia', '16:00', 'mexico'))
+
createCard('01/12', 'quinta', 
    createGameMatch('croatia', '12:00', 'belgium') + 
    createGameMatch('canada', '12:00', 'morocco') + 
    createGameMatch('japan', '16:00', 'spain') + 
    createGameMatch('costa rica', '16:00', 'germany'))
+
createCard('02/12', 'sexta', 
    createGameMatch('south korea', '12:00', 'portugal') + 
    createGameMatch('ghana', '12:00', 'uruguay') + 
    createGameMatch('serbia', '16:00', 'switzerland') + 
    createGameMatch('cameroon', '16:00', 'brazil'))