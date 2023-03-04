// PAINT BUCKET

// Considering a bitmap, you need to implement a bucket method that replaces
// a color with another color given as param within the shape's boundries

// Definitions:
// - bitmaps are always square
// - a color is a number 0 - 9
// - bucket(bitmat: number[][], x: number, y: number, newColor: number)

// EXAMPLE
const bitmap = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  /**
   * Given a bitmap (double dim array), fill the coordinates with newColor
   * 
   * Pseudo
   * if at the given coorodinate the value is zero, change 0 to newColor.
   * If the value is not 0, do nothing
   * Recurse with (x-1,y), (x+1,y), (x,y-1),(x,y+1)
   * 
   * @param {*} bitmap 
   * @param {*} x 
   * @param {*} y 
   * @param {*} newColor 
   */
  const bucket = (bitmap, x, y, newColor) => {
    if(!bitmap || bitmap.length === 0 || isNaN(x) || isNaN(y) || isNaN(newColor)){
      throw new Error("Invalid input");
    }
    const maxX = bitmap[0].length;
    const maxY= bitmap.length;
    if( bitmap[x][y] === newColor){
      return bitmap;
    }
   
    if( x>maxX || y > maxY || x<0 || y<0 ){
      return bitmap;
    }
    bitmap[x][y]=  (bitmap[x][y] === 0)? newColor: bitmap[x][y];
    if(y===0){
      bucket(bitmap, x++,y,newColor);
    }else if(x ===0){
      bucket(bitmap, x,y++,newColor);
    }else {
      bucket(bitmap, x--,y,newColor);
      bucket(bitmap, x++,y,newColor);
      bucket(bitmap, x,y++,newColor);
       bucket(bitmap, x,y--,newColor);
    }
    return bitmap;
  };
  
  const newBitmap = bucket(bitmap, 3, 3, 2);
  
  console.log(newBitmap.map((row) => row.join(" ")).join("\n"));
  /*
  [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 2, 2, 2, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  */
  