function common(str1,str2) {
  const string1 = str1.toLowerCase();
  const string2 = str2.toLowerCase();

 let cloneCharacter = [""];
  for (let i = 0; i < string1.length; i++) {
   if (string2.indexOf(string1[i]) !== -1) {
        cloneCharacter += string1[i];
        
        
      }
    }
  
  return "Common Letters: " + [...cloneCharacter];
};

console.log(common("HomE", "home"));

