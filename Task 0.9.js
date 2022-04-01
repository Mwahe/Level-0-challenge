function vowels(str) {
    const string = str.toLowerCase();
    const vow = /[aeiou]/ig;
    const match = string.match(vow);
    const result = Array.from(new Set(match)).join(',')
   
    console.log(result);
}
(vowels("aeiouAEIOUaEioU"));

