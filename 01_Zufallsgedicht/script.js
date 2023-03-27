"use strict";
var poem;
(function (poem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjects);
    console.log(verbs);
    console.log(objects);
    for (let i = subjects.length; i > 0; i--) {
        console.log(i);
    }
})(poem || (poem = {}));
//# sourceMappingURL=script.js.map