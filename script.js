const h1 =document.querySelector('h1');
const input1 =document.querySelector('#calculo');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btn-Calcular');
const result=document.querySelector('.resultado');

btn.addEventListener('click',btnonclick);

function btnonclick(){
    resultado=Math.floor(input1.value) + Math.floor(input2.value);
    
    result.innerHTML="El Resultado es "+ resultado;
}
