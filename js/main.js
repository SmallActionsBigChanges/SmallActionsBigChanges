
// section
var buttonSection = document.getElementById("buttons-section");

if (localStorage.getItem("myChallenge") == undefined) {
    var info = `
        <button class="btn-survey" onclick="window.location.href='survey.html'">Empezar reto</button>
    `;
    buttonSection.innerHTML = info;
} else {
    var info = `
        <button class="btn-survey-new-survey" onclick="window.location.href='survey.html'">Empezar nuevo reto</button>
        <br>
        <button class="btn-survey" onclick="window.location.href='challengeDev.html'">Continuar reto</button>
    `;
    buttonSection.innerHTML = info;
}
