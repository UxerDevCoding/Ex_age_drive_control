// console.log("hello world!");

 function userAge (age) {

    if(age >= 18){
        return "Eres mayor de edad, puedes conducir";
    } else {
        return "Eres menor de edad, no tienes permitido conducir";
    }
}

module.exports = userAge;