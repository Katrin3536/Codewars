function duplicateElements(m, n) { 
    return m.some(element => n.find(el => el === element));
   }