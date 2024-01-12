function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 
	  s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
	 // return s1.indexOf(s2);
      for(let i=0 ; i<s1.length ; i++){
          let x=0;
          let y=i;
          while(x<s2.length && y<s1.length && s2[x]===s1[y]){
              x++;
              y++;
          }
          if(x===s2.length){
              return y - x;
          }
      }
      return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
