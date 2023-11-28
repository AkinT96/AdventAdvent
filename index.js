function updateAktuellesDatum() {
    return new Date();
}

const zielDatumTuer1 = new Date(2023, 10, 1);
const zielDatumTuer2 = new Date(2023, 10, 2);
const zielDatumTuer3 = new Date(2023, 10, 3);
const zielDatumTuer4 = new Date(2023, 10, 4);
const zielDatumTuer5 = new Date(2023, 10, 5);
const zielDatumTuer6 = new Date(2023, 10, 6);
const zielDatumTuer7 = new Date(2023, 10, 7);
const zielDatumTuer8 = new Date(2023, 10, 8);
const zielDatumTuer9 = new Date(2023, 10, 9);
const zielDatumTuer10 = new Date(2023, 10, 10);
const zielDatumTuer11 = new Date(2023, 10, 11);
const zielDatumTuer12 = new Date(2023, 10, 12);
const zielDatumTuer13 = new Date(2023, 10, 13);
const zielDatumTuer14 = new Date(2023, 10, 14);
const zielDatumTuer15 = new Date(2023, 10, 15);
const zielDatumTuer16 = new Date(2023, 10, 16);
const zielDatumTuer17 = new Date(2023, 10, 17);
const zielDatumTuer18 = new Date(2023, 10, 18);
const zielDatumTuer19 = new Date(2023, 10, 19);
const zielDatumTuer20 = new Date(2023, 10, 20);
const zielDatumTuer21 = new Date(2023, 10, 21);
const zielDatumTuer22 = new Date(2023, 10, 22);
const zielDatumTuer23 = new Date(2023, 10, 23);
const zielDatumTuer24 = new Date(2023, 10, 24);
const aktuellesDatum = updateAktuellesDatum();
const tuer = document.querySelectorAll(".flex-box")


//hatte keine Zeit mehr für den Umbau, aber hätte ich die würde ich noch wie folgt umbauen:
//einen großen Array mit allen events erstellen und in einer fori schleife die türen abgehen
// und gleichzeitig auch den Eventarray abgehen, dann hat man weniger codezeilen
//hätte auch eine generelle flex-box klasse gemacht, welche jede Tür zusätzlich bekommt, damit ich nicht verschiedene schleifen hab
//die Animation sieht uncool aus, wenn man viele Türen öffnet, aber man öffnet ja normalerweise jeden Tag 1, da fand ich die angebracht



//hab doch umgebaut, aber jetzt sind die if Konditionen(checken der Zeit)
//  nicht mehr drin, würde ich auch mit nem Array und der Schleife lösen


const innerHTMLArray = [
    "<a href=\"https://www.backenmachtgluecklich.de/rezepte/einfache-kekse-aus-3-zutaten.html\"><img alt='weihnachtsgebäck' class='bilder' src=\"https://www.stilartmoebel.de/zuhause-bei-sam/wp-content/uploads/2014/12/weihnachten-feiern-europa-traditionen-1024x682.jpg\"></a>\n",
    "<iframe class='bilder' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/E8gmARGvPlI?si=rKCzr_r9WmFIxRds\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    "💵",
    "🎊",
    "😍",
    "Was geht bro",
    "<a href=\"https://www.spielaffe.de/Spiel/Build-A-Snowman\">Klick nochmal</a>\n",
    "<iframe class='bilder' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/B-HVW3Vl87A?si=Fc_6-D9kqhiJQlMZ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    "Was geht bro",
    "🍩",
    "💘",
    "❤️",
    "<iframe class='bilder' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QQu1_bf1Bdo?si=oITaDavQT5RUm6Wx\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    "<iframe class='bilder' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/r6tH55syq0o?si=1Z7ibiyYpZ5QKVb6\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    "<a href=\"https://www.visit-hannover.com/Sehensw%C3%BCrdigkeiten-Stadttouren/Sehensw%C3%BCrdigkeiten\"><img class=\"bilder\" src=\"https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2021/10/1633601818_Hannover-von-oben.jpg\"></a>\n",
    "Was geht bro",
    "💞",
    "<iframe class='bilder' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OoQLoKHhohg?si=37cCCOBaFkHSG6kP\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    "<a href=\"https://www.einfachbacken.de/rezepte/zimtschnecken-einfach-selbstgemacht\">Backgutschein</a>\n",
    "🐞",
    "🍟",
    "<iframe class='bilder' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/iTwaxbQCLQo?si=n_oYFnykYkMjU2JJ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    "🌯",
    "🍫"
];

let block = document.querySelectorAll(".fuerAlle")

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener("click", function () {
        block[i].innerHTML = innerHTMLArray[i]
    })
}


document.addEventListener("DOMContentLoaded", function () {
    const tuer = document.querySelectorAll(".fuerAlle");

    function handleClick(index) {
        tuer[index].style.transform = "scale(1.2)";

    }

    tuer.forEach(function (box, index) {
        box.addEventListener("click", function () {
            handleClick(index);
        });
    });
});
