
// Challenges
// Common Challenges
var commonChallenges = [
    new Challenge("No dejo grifos abiertos cuando dejo de utilizarlos",
     "Asegurarse de cerrar los grifos evita el desperdicio de este recurso. Aunque muchas veces se deje abierto involuntariamente es un problema, ya que es nuestra responsabilidad el cuido del recurso hídrico",
     "../img/png/024-save_water.png"),
    new Challenge("Cierras el grifo a la hora de lavar los trastes",
    "Una acción sencilla y evidente muchas veces es tomada de menos, sin embargo, acciones tan obvias como no cerrar el grifo al lavar los trastes marcan la diferencia",
    "../img/png/024-save_water.png"),
    new Challenge("No tiro basura en las calles para evitar que se dirijan a los drenajes y luego al mar",
        "Los desechos sólidos tambien afectan gravemente a los recursos hídricos. En este caso, se debe comprender que, al botar basura en la calle esta eventualmente llegaría al mar por medio de drenajes.",
        "../img/png/047-eco_bag.png")
];

// Regular level Challenges
var regularChallenges = [
    new Challenge("Riego las plantas cuando el sol esta oculto", 
        "El sol ocasiona la evaporacion del agua, evitando que esta no llegue completamente a las plantas.",
        "../img/png/018-sunny.png"),
    new Challenge("Me tardo menos de 10 minutos en ducharte",
        "Las duchas no deben superar los 95 litros de consumo diario, así contribuyes al uso sostenible de agua, tardarse más de 10 minutos implica un uso excesivo de agua para esta rutina",
        "../img/png/022-chronometer.png"),
    new Challenge("Utilizo bolsas reutilizables o biodegradables",
        "Para la creación de plasticos se utiliza mucha agua aunque no lo parezca, de igual manera estos materiales no son biodegradables y en grandes cantidades acaban en el mar.",
        "../img/png/025-Reusable.png"),
    new Challenge("Me aseguro que no salgan gotas después de cerrar la llave",
        "Es importante asegurarse que el grifo este completamente cerrado luego de utilizarlo, porque aunque solo se quede goteando, con el paso del tiempo será mucha agua potable desperdiciada.",
        "../img/png/024-save_water.png"),
    new Challenge("Evito comprar agua embotellada si no es necesario",
        "Se invierten muchos litros de agua en la elaboración de cada botella.",
        "../img/png/004-no_plastic_bottles.png"),
    new Challenge("Cierro el grifo a la hora de afeitarme",
        "Se requiere evitar el gasto de agua innecesaria, por ello es buena idea cerrar el grifo cuando aún no necesites agua.",
        "../img/png/024-save_water.png"),
    new Challenge("No utilizo el inodoro como papelera",
        "Muchos de los residuos que suelen acabar en el retrete son contaminantes y peligrosos. Por ejemplo, las toallitas húmedas no consiguen degradarse antes de llegar a las depuradoras.",
        "../img/png/002-trash_bin.png"),
    new Challenge("Evito lavar en los ríos o afluentes naturales",
        "Los quimicos de los jabones y detergentes pueden ser nocivos para el agua, por ello hay que evitar el uso directo de los afluentes naturales para lavar.",
        "../img/png/007-earth.png"),
    new Challenge("Cierro el grifo al cepillarme",
        "Se requiere evitar el gasto de agua innecesaria, por ello es buena idea cerrar el grifo cuando aún no necesites el agua para enjuagarte.",
        "../img/png/024-save_water.png"),
    new Challenge("Cuando lavo un coche utilizo cubetas en lugar de manguera",
        "Al evitar utilizar manguera para lavar, se ahorra hasta 12 litros de agua cada minuto.",
        "../img/png/027-earth.png")
];

// Intermedium level Challenges
var mediumChallenges = [
    new Challenge("Coloco una botella llena de arena en la cisterna con el objetivo de bajar el volumen de agua", 
        "Al reducir el volumen del agua de la cisterna de los servicios sanitarios, reduces el volumen de agua que se va con cada tirada. Algunos servicios sanitarios tienen la opción de tirar medio tanque o tanque completo dependiendo del uso, si este es tu caso es importante que lo utilices correctamente.",
        "../img/png/029-bottle.png"),
    new Challenge("Recolecto agua de lluvia para regar o limpiar zonas exteriores",
        "Utilizar el agua de lluvia para acciones de limpieza o para regar las plantas es una muy buena idea para aprovecharla.",
        "../img/png/012-plant.png"),
    new Challenge("Reutilizo el agua con la que he limpiado las verduras para el riego de las plantas",
        "El agua residual que queda al lavar las frutas y verduras no tiene nada de malo que te impida reutilizarla para regar las plantas.",
        "../img/png/005-recycle.png"),
    new Challenge("En cada lavada de ropa busco no desperdiciar agua efectivamente",
        "En promedio se requieren 4,64 metros cúbicos para lavar la ropa de los integrantes del hogar, considerandose asi la actividad promedio que se realizaen un hogar, que mas agua consume. Si se lava a mano es recomendable utilizar agua de una pila o barril y no del chorro. Para el lavado de la ropa con lavadora, es conveniente llenar la lavadora en su máxima capacidad y no con pequeñas cantidades de ropa. Trate de acumular el mayor número de prendas para lavarlas una vez a la semana.",
        "../img/png/044-shirt.png"),
    new Challenge("Evito rotundamente la utilización de plásticos de un solo uso y prefiero productos de marcas que emplean envases hechos con plástico reciclado",
        "Es importante reducir la producción desechos plásticos, debido a que estos no son biodegradables y muchos de estos, debido a una mala gestion de desechos solidos, acaban en afluentes naturales de agua. Además solo para producir el material plástico se necesita mucha agua.",
        "../img/png/006-no_plstic_bags.png"),
    new Challenge("No vierto en los drenajes ácidos, solventes o aceites",
        "Aceites, ácidos, solventes u otros compuestos químicos pueden ser nocivos para el agua, ya que en muchos casos no existen tratamientos reversibles, para el agua, ante estos contaminantes.",
        "../img/png/013-factory.png"),
    new Challenge("Me tardo 8 minutos en ducharme",
        "Las duchas no deben superar los 95 litros de consumo diario, así contribuyes al uso sostenible de agua, tardarse más de 8 minutos aún se considera excesivo en cuanto al uso del agua para esta rutina.",
        "../img/png/022-chronometer.png"),
    new Challenge("Lavo los platos utilizando agua de un barril, pila, o agua no corriente, es decir con el grifo cerrado",
        "Utilizar agua de barril, pila o aguas no corrientes es muy importante para reducir el gasto de agua en acciones de aseo en el hogar. En el caso del lavado de los platos, es indispensable tapar el desagüe y llenar de agua el lavaplatos para enjuagar, en vez de hacerlo con agua corriente.",
        "../img/png/024-save_water.png"),
    new Challenge("Utilizo un vaso para cepillarme",
        "Al tener el agua en un vaso, evitas el hecho de estar abriendo y cerrando el grifo cuando vayas a cepillarte, una accion necesaria para reducir el consumo de agua potable en el hogar.",
        "../img/png/024-save_water.png"),
    new Challenge("No contamino el mar tirando basura cuando voy a la playa",
        "Evita contaminar con desechos solidos las playas, ni ningun lugar público. El problema de contaminar una playa surge cuando el mar absorve dichos residuos debido a las mareas, así contaminandose este  por consecuencia. Limpiar el mar de desechos solidos es una tarea sumamente dificil aunque no lo parezca.",
        "../img/png/002-trash_bin.png")
];

// Hard level Challenges
var hardChallenges = [
    new Challenge("Motivo a mis familiares y a mis amigos a que sigan los hábitos ideales para el cuido del recurso hídrico",
        "Compartir las ideas que promueven un cambio positivo incitando a cuidar el agua siempre será una buena acción.",
        "../img/png/023-together.png"),
    new Challenge("Instalo en mi casa, sistemas de captación de agua de lluvia",
        "Reutilizar el agua de lluvia es una acción muy buena, existen muchos sistemas que pueden ayudar a guardar esta agua y evitar asi que se evapore en suelos impermeables.",
        "../img/png/050-earth.png"),
    new Challenge("Creo campañas para reducir, reutilizar y reciclar para así impedir que los océanos se llenen de desechos sólidos",
        "Promover el uso de las 3R (reciclar, reutilizar y reducir) es importante para que todos entendamos su importancia y peso que tienen sobre el cuido de la naturaleza en general.",
        "../img/png/032-megaphone.png"),
    new Challenge("Reparo las fugas y las filtraciones en llaves y tuberías",
        "Muchas veces en un hogar existen fugas en el sistema de agua ocasionando asi una perdida constante del recurso hídrico.",
        "../img/png/020-earth.png"),
    new Challenge("Me informo e investigo cómo cuidar el agua con el fin de aplicarlo a mi vida cotidiana",
        "Para hacer cambios positivos, primeramente es necesario saber qué se debe cambiar y qué se debe ser acambio, para ello es importante indagar en fuentes confiables y luego seguir las las recomendaciones de cuido.",
        "../img/png/038-heartbeat.png"),
    new Challenge("Me tardo 5 minutos o menos en ducharme",
        "Las duchas no deben superar los 95 litros de consumo diario, así contribuyes al uso sostenible de agua, tardarse 5 minutos en la ducha es lo mas recomendable para un buen baño y a su vez economizar el gasto del agua.",
        "../img/png/022-chronometer.png"),
    new Challenge("Instalo un lavavajillas y no lavo a mano",
        "Un estudio de la Organización de Consumidores y Usuarios muestra que usar el lavavajillas permite ahorrar más que lavar a mano. Un friegaplatos usa de media 10 litros de agua por lavado y lavar la misma cantidad de platos, a mano, hace que se gaste entre 10 y 20 veces más agua.",
        "../img/png/050-earth.png"),
    new Challenge("No contamino y recojo basura en la playa para evitar la contaminación del mar",
        "Al evitar contaminar una playa cada uno de nosotros realiza un gran cambio a largo plazo, sin embargo, el cambio es aun mejor, si además de evitar la contaminación, buscamos limpiar lo que este a nuestro alcance.",
        "../img/png/015-recycle.png"),
    new Challenge("Utilizo dispositivos ahorradores de agua para el hogar",
        "Existen muchos dispositivos no muy costosos que podemos implementar en nuestros hogares para reducir el gasto del agua. Ejemplos de estos son: las Cisternas de bajo consumo, Grifos monomando, Aireadores o Perlizadores, Válvulas reguladoras de caudal, entre otros.",
        "../img/png/050-earth.png"),
    new Challenge("Instala grifería termostática o electrónica en la cocina y el baño",
        "Si tienes los recursos necesarios implementa sistemas que regulen el consumo de agua racionalizando así el gasto de este recurso.",
        "../img/png/050-earth.png")
];

// Mixer
shuffle(commonChallenges);
shuffle(regularChallenges);
shuffle(mediumChallenges);
shuffle(hardChallenges);

var myChallengeList = []; 

// Create challenge
const createChallengeList = (grade, name) => {
    // console.log(grade);
    if (grade >= 8) {
        localStorage.setItem("category", 1);
        // Use 8 hard & 2 common challenges
        for (let i = 0; i < 8; i++) {
            myChallengeList.push(hardChallenges[i]);
        }
        for (let i = 0; i < 2; i++) {
            myChallengeList.push(commonChallenges[i]);
        }
    } else if (grade < 8 && grade >= 5) {
        localStorage.setItem("category", 2);
        // Use 8 medium & 2 common challenges
        for (let i = 0; i < 8; i++) {
            myChallengeList.push(mediumChallenges[i]);
        }
        for (let i = 0; i < 2; i++) {
            myChallengeList.push(commonChallenges[i]);
        }
    } else {
        localStorage.setItem("category", 3);
        // Use 8 regular & 2 common challenges
        for (let i = 0; i < 8; i++) {
            myChallengeList.push(regularChallenges[i]);
        }
        for (let i = 0; i < 2; i++) {
            myChallengeList.push(commonChallenges[i]);
        }
    }

    let count = 1;
    myChallengeList.map(x => {
        x.id = count
        count++;
    });

    let myChallengeListString = JSON.stringify(myChallengeList);
    localStorage.setItem("myChallenge", myChallengeListString);

    // New user name
    localStorage.setItem("userName", name);

    // alert("Lista de retos creada con exito");
    window.location.assign("challenge.html");
}
