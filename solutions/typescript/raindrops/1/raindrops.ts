export function convert(count : number): unknown {
  let res:String = '';
    if (count %3==0 ){
    res+='Pling'
  }
    if (count %5 ==0){
    res+='Plang'
  }
    if (count %7==0 ){
    res+='Plong'
  }

  if (res == ''){
    return `${count}`
  }
 return res;

}
