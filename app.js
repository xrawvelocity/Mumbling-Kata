/*jshint esversion: 6*/

function accum(s) {
    var x = s.toLowerCase();
    var arr = Array.from(x);
    var newS = '';
    
    for(let i = 0; i < arr.length; i++){
      let el = arr[i].repeat(i+1);
      let test = el.charAt(0).toUpperCase() + el.slice(1); 
      newS = newS.concat('-',test);
    }
    
    newS = newS.substr(1);
    return newS;
  }
  
  console.log(accum("aBcda"));