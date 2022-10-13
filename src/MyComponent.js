import React,{useState} from "react";

function MyComponent(){


const [count, setCount] = useState(0)
const [mystate, setMystate] = useState("Aayushi")


const name = "Aayushi";
const sum = 0;
const num1 = 5;
const num2 = 10;

function getTotal(a, b){
         return a+b
}
return(
<div>
    <h1> Hello , {name}</h1>
    <h2> The total is {num1+num2} </h2>
    <h2> The total from the function is {getTotal(num1, num2)}</h2>
    <h3>The count is {count}</h3>
    <button onClick={() => setCount(count+1)}>increase</button>
    <br />
    <button onClick={() => setMystate("Aayushi")}>change name</button>
</div>
);
}
export default MyComponent;