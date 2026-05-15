export const colorCode = (color:string) => {


for(var i=0; i<COLORS.length;i++){
 if (color == COLORS[i])
    {
        return i;
    }
  }
    return undefined
}  




export const COLORS = ['black','brown','red',
                      'orange','yellow','green',
                       'blue', 'violet','grey','white'
                      ];
