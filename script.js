function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1 = s1.toLowerCase();
    let s2 = s2.toLowerCase();
	for(let i=0 ; i<s1.length ; i++){
		let char = s1.charAt(i);
		let x=0,y=i;
		while(x <s2.length && y<s1.length && s1.charAt(x)==s2.charAt(y)){
			x++;
			y++;
		}
		if(x==s2.length){
			return y - x;
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
