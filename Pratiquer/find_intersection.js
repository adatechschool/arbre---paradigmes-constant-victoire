// Version de Constant (en trichant (mais seulement à moitié))

function FindIntersection(strArr) { 

    // code goes here
    const firstStr = strArr[0].split(", ");
    const secondStr = strArr[1].split(", ");
  
    const intersectionArr = firstStr.filter(v => secondStr.find(a => a == v));
    return intersectionArr; 
  
  }
  
