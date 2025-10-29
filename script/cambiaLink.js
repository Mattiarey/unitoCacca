let orari_url = "";
let moodle_url = "";


window.onload = function () {
    if (this.localStorage.getItem("orari") == null) {
        this.localStorage.setItem("orari", "https://http.cat/100");
    }
    if (this.localStorage.getItem("moodle") == null) {
        this.localStorage.setItem("moodle", "https://http.cat/100");
    }
}

function salvaNuovoLink() {
    if(document.getElementById("orario_choose").checked) {
        let nuovo_link = document.getElementById("new_link").value;
        this.localStorage.setItem("orari", nuovo_link);

        document.getElementById("new_link").value = "";
        console.log("Nuovo link orari salvato");
    }
    if(document.getElementById("moodle_choose").checked) {
        let nuovo_link = document.getElementById("new_link").value;
        this.localStorage.setItem("moodle", nuovo_link);

        document.getElementById("new_link").value = "";
        console.log("Nuovo link moodle salvato");
    }
}


function toccaOra() {
    this.document.getElementById("loghinoLoghetto").src = "../img/timetable.png";
}
function toccaMoodle() {
    this.document.getElementById("loghinoLoghetto").src = "../img/Moodle.png";
}
function apriOrari() {
    orari_url = this.localStorage.getItem("orari");
    window.open(orari_url, '_blank', 'noopener,noreferrer');
}
function apriMoodle() {
    moodle_url = this.localStorage.getItem("moodle");
    window.open(moodle_url, '_blank', 'noopener,noreferrer');
}