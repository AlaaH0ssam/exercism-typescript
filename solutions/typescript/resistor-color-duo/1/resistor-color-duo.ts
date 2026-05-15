const colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

export function decodedValue(col: string[]):number{
  let x = colors.indexOf(col[0])
  let y = colors.indexOf(col[1])
  return Number(`${x}${y}`);

}
console.log(decodedValue(['brown', 'green']));
