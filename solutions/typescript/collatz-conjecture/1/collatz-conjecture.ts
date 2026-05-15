export function steps(count: number): unknown {
      if (count == 1){
      return 0;
    }
if (count <= 0 || !Number.isInteger(count)) {
    throw new Error("Only positive integers are allowed");
}
  let i=0;
  while (true ){
    if (count %2==0){
      count= count/2;
    }
    else {
      count= count * 3;
      count=count +1;
    }
    i++;
    if (count == 1 ){
      break;
    }
 
}
  return i; 
}