 function Area(side1, side2, side3) {
	let semiPeri = 1*(side1+side2+side3)/2;
	let calArea =(Math.sqrt(semiPeri*(semiPeri-side1)*(semiPeri-side2)*(semiPeri-side3)));

  return calArea;
}

console.log(Area(12,7,12));
