var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var submit = document.getElementById("submit");
//'submit' is possibly 'null' thats why ***HTMLElemnt*** add to button 
//'num2' is possibly 'null'. thats why ***HTMLInputElement**** add to input control
submit.addEventListener("click", function () {
    // alert ("btn clicked")
    var n1 = num1.value;
    var n2 = num2.value;
    console.log(n1 + n2); // without + that is string considered
    console.log(+n1 + +n2); // ++ add to add number
});
var obj = {
    fname: "sachin",
    lname: "shelke",
    age: 20,
    contact: 2145222 //incase this input string is assign there is erroe occured
};
console.warn(obj);
var x;
//x ="sachin" //Type 'string' is not assignable to type 'number'.
x = 10;
