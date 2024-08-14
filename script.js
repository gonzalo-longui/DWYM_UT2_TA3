function removeFromArray(array, item) {
    let indice = array.indexOf(item);
    if (indice != -1) {
        array.splice(indice, 1);
        console.log(array);
    } else {
        console.log("El item no se encuentra en el array.")
    }
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let item = 3;
removeFromArray(array, item)