

function addSpace(length, max) {
    var line = "";
    var space = ""
        for (var j = 1; j <= length; j++) {
        line += " ";
        }
        for (var j = 1; j <= max; j++) {
        space += "#";
        }
        return line + space + "\n";
    }
    
     function buildTriangle(length) {
     var space = "";
      for(let i=1;i<=length;i++){
      // console.log('.....', space);
      space += addSpace(i-1, length-i+1);
      }
      
      return space.split("\n").reverse().filter(d => d !=='').join('\n');
     }
    
      console.log(buildTriangle(10));