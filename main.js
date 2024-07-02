const c = require("./circulo.js")
const r = require("./retangulo.js")
const t = require("./triangulo.js")

let raio = 5
let base = 2
let altura = 3

console.log("A área do circulo é " + c.areaCirculo(raio))
console.log("A área do retângulo é" + r.areaRetangulo(base, altura))
console.log("A área do triângulo é" + t.areaTriangulo(base, altura))