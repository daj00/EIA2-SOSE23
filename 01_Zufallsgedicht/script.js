"use strict";
var poem;
(function (poem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let index = subjects.length; index > 0; index--) {
        let results = getVers(subjects, verbs, objects);
        console.log(results);
    }
    function getVers(_subjects, _verbs, _objects) {
        let randomnr1 = Math.floor(Math.random() * _subjects.length);
        let randomnr2 = Math.floor(Math.random() * _verbs.length);
        let randomnr3 = Math.floor(Math.random() * _objects.length);
        let vers = " ";
        vers = vers + _subjects.splice(randomnr1, 1)[0] + " ";
        vers = vers + _verbs.splice(randomnr2, 1)[0] + " ";
        vers = vers + _objects.splice(randomnr3, 1)[0] + " ";
        return vers;
    }
})(poem || (poem = {}));
//# sourceMappingURL=script.js.map