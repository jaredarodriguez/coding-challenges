/*  Boo-Who

Check if a value is classified as boolean primitive

*/ 

function booWho(bool){
    const x = "false"; 
    if (x !== bool && typeof(bool) === "boolean"){
      return true
    } else {
      return false; 
    }
  }
