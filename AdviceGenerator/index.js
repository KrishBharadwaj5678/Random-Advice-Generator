// DOM

let advice_number=document.querySelector("span.adviceNumber");

let advice=document.querySelector("p.advice_idea");

let generate_btn=document.querySelector("div.bottom-part");

let url="https://api.adviceslip.com/advice";

async function getAdvice(){
    let data=await fetch(url);
    let result=await data.json();
    advice_number.innerText=`#${result["slip"]["id"]}`;
    advice.innerText=`"${result["slip"]["advice"]}"`;

}


generate_btn.addEventListener("click",()=>{
    getAdvice();

})

window.addEventListener("load",()=>{

    getAdvice();

})


