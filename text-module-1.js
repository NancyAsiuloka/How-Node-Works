// the Es6 syntax of writing classes in JavaScript
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
//     add(a, b) {
//         return a - b;
//     }
//     multiply(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }
// we use module.exports when we want to export 1 single value
// in this case, calculator is the sigle value here

module.exports = class {
        add(a, b) {
            return a + b;
        }
        subtract(a, b) {
            return a - b;
        }
        multiply(a, b) {
            return a * b;
        }
        divide(a, b) {
            return a / b;
        }
    };
