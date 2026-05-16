  export function isPaired(arrin: string[]): boolean {
  let vara= arrin.length;
  const arr :string[]=[];

  for (let i=0; i<vara ; i++){
        const char = arrin[i];

        
    if (char === '(' || char === '{' || char === '[') {
      arr.push(char);
    }

      if (char === ')') {
      if (arr.pop() !== '(') return false;
    }

     if (char === '}'){
      if (arr.pop() !== '{') return false;
    }
    
      if (char ===']'){
      if (arr.pop() !== '[') return false;

    }
    else continue;
  }
if (arr.length !=0){
  return false;
}
  return true ;
}


