let n = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function pyramid(n) {

 

    for(let i=1; i<= n; i++){
  
      let str = ' '.repeat(n-i);
  
      let str2 = '*'.repeat(i*2 -1)
  
      console.log(str + str2) ;
  
    }
  
  }
  
  pyramid(n);