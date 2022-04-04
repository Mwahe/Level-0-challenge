 function area(side1, side2, side3) {
	const semiPeri = 1*(side1+side2+side3)/2;
	const calArea =(Math.sqrt(semiPeri*(semiPeri-side1)*(semiPeri-side2)*(semiPeri-side3)));

  return calArea;
}

console.log(area(12,7,12));
