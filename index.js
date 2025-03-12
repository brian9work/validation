let texto_de_alerta="Hola mundo";
alert(texto_de_alerta);

while(true){
    alert("Hola mundo");
}

// 1. Uso de "==" en lugar de "===" (Regla: Equality checks should not be made with "==")
function checkValue(value) {
    if (value == 10) { // SonarQube marcaría esto como un problema
        console.log("Value is 10");
    }
}

// 2. Función demasiado larga (Regla: Functions should not have too many lines)
function longFunction() {
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
    console.log("Line 4");
    console.log("Line 5");
    console.log("Line 6");
    console.log("Line 7");
    console.log("Line 8");
    console.log("Line 9");
    console.log("Line 10"); // SonarQube marcaría esto como un "code smell"
}

// 3. Uso de "eval" (Regla: "eval" should not be used)
function unsafeEvalExample(input) {
    eval(input); // SonarQube marcaría esto como una vulnerabilidad de seguridad
}

// 4. Código duplicado (Regla: Duplicated code blocks should be refactored)
function duplicateCode1() {
    let a = 10;
    let b = 20;
    let result = a + b;
    console.log(result);
}

function duplicateCode2() {
    let a = 10;
    let b = 20;
    let result = a + b;
    console.log(result); // SonarQube detectaría duplicación de código
}

// 5. Uso de "var" en lugar de "let" o "const" (Regla: "var" should not be used)
var globalVar = 100; // SonarQube marcaría esto como una mala práctica

// 6. Falta de manejo de errores (Regla: Potential exceptions should not be ignored)
function divide(a, b) {
    return a / b; // SonarQube podría sugerir manejar el caso de división por cero
}

// 7. Uso de console.log en producción (Regla: "console.log" should not be used)
console.log("Debugging message"); // SonarQube marcaría esto como un "code smell"