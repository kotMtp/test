let literal="Константин";
const God=2002;
function hello(name){
    alert('Привет '+name+'!');
}
function Zd4(start, end){
    let array = [];
    for (let i = Number(start); i <= Number(end); i++) {
        array.push(i);

    }
    alert(array);
}
function Zd5(start, end){
    let array = [];
    for (let i = Number(start); i <= Number(end); i++) {
        if(i%2>0) {array.push(i);}

    }
    alert(array);
}
function Zd7(start, end){
    alert (average(start,end));
}

function average(a, b){
    return Number(a)+Number(b);
}
function Zd8(start){
 alert (square(start));
}

function square(x) {
    return x*x;
}

function Zd9(start){
    alert(cube(start));
}

function cube(x) {
    return x*x*x;
}

function calculate() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let square_i = square(i);
        let cube_i = cube(i);
        let av = average(square_i, cube_i);
        arr.push(av);
    }
    return arr;
}
function Zd10(){
  alert('Итоговый массив'+ calculate());

}