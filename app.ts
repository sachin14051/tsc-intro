const num1 = document.getElementById("num1")! as HTMLInputElement
const num2 = document.getElementById("num2")! as HTMLInputElement
const submit = document.getElementById("submit") as HTMLElement
//'submit' is possibly 'null' thats why ***HTMLElemnt*** add to button 

//'num2' is possibly 'null'. thats why ***HTMLInputElement**** add to input control



submit.addEventListener("click", ()=>{
 // alert ("btn clicked")
    let n1 = num1.value;
  let n2 = num2.value;
 console.log(n1 + n2 ) // without + that is string considered
 console.log(+n1 + +n2 ) // ++ add to add number



})













type Person = {
    fname :string,
    lname :string,
    age : number,
    contact : number
}

let obj : Person = {
    fname :"sachin", //this time number is assign error occcured
    lname : "shelke",
    age : 20,
    contact : 2145222 //incase this input string is assign there is erroe occured
}

console.warn(obj)


let x : number

//x ="sachin" //Type 'string' is not assignable to type 'number'.
x = 10