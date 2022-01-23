const quiz = new Array();

quiz[0] = "Hedwig Eva Maria Kiesler, conocida en Hollywood como Hedy Lamarr, ¿fue la inventora del wifi?";
quiz[1] = "¿Jean E. Sammet​ desarrolló el lenguaje de programación FORMAC en 1962?";
quiz[2] = "Mary Kenneth Keller, la primera mujer doctorada en informática en Estados Unidos ¿era monja?";
quiz[3] = "Radia Joy Perlman trabajando para Intel, ¿consiguió más de 47 patentes?";
quiz[4] = "Para entrar en Factoría F5, ¿tienes que tener un título de Miss Universo?";
quiz[5] = "¿Fue Evelyn Berezin recordada como la madre de los procesadores de texto?";
quiz[6] = "Frances E. Allen, pionera en automatización de tareas paralelas y optimización de compiladores no recibió nunca un premio";
quiz[7] = "Ángela Ruiz Robles precursora del libro electrónico ¿nació en Roma?";

let answer = true;


function compareQuizAnswer() {
    if (quiz[0,1,2,3,5] == answer){

     return "Es correcto";
}
    if (quiz[4,6,7] !== answer){
        
        return "Es correcto";

    }
    else {
        return "Prueba otra vez";
    }
}




