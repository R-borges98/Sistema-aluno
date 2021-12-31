let numerodealunos = 10;

for (let contador = 0; contador <= numerodealunos; contador++) {
    // console.log(contador)

if (contador == 0){
     console.log("O número atual é zero")  
}else if (contador % 2 == 0){
    console.log("O número é par " + contador + " é par" )
}else{
    console.log(`O número ${contador} é impar`)
   } 
 } 


 

 let nomedealuno = [ "Fernando", "Felipe","Luiza","Eduarda"]

 for (let nome of nomedealuno) {
     console.log(`Esta pessoa se chama ${nome}`)
 }    