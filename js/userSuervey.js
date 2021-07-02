
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendSuervey();
});

const sendSuervey = () => {
    // form data
    var datos = new FormData(form);
    // grade 
    var grade = 10;
    /*
    console.log(datos.get("rec1"));
    console.log(datos.get("rec2"));
    console.log(datos.get("recycling2"));
    */

    // #1 Question -> 1 point 
    if (datos.get("recycling1") == 2) {
        grade -= 1;
    }
    // #2 Question -> 1 point 
    if (datos.get("rec1") == null) {
        grade -= 0.25;
    }
    if (datos.get("rec2") == null) {
        grade -= 0.25;
    }
    if (datos.get("rec3") == null) {
        grade -= 0.25;
    }
    if (datos.get("rec4") == null) {
        grade -= 0.25;
    }
    // #3 Question -> 2 points 
    if (datos.get("waterUse") == 2) {
        grade -= 1;
    } else if (datos.get("waterUse") == 3) {
        grade -= 2;
    }
    // #4 Question -> 3 points 
    if (datos.get("shower") == 2) {
        grade -= 1;
    } else if (datos.get("shower") == 3) {
        grade -= 2;
    } else if (datos.get("shower") == 4) {
        grade -= 3;
    }
    // #5 Question -> 2 points 
    if (datos.get("products") == 2) {
        grade -= 1;
    } else if (datos.get("products") == 3) {
        grade -= 2;
    }
    // #6 Question -> 1 point 
    if (datos.get("recycling2") == 2) {
        grade -= 1;
    }
    
    createChallengeList(grade, datos.get("name"));
}