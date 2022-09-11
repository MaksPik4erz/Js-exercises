function calculateWordsInText(str) {
    let arr = [];
    let word = '';

    for (let i = 0; i <= str.length; i++) {

        if ( str[i] === ' ' || str.length === i ) {

            
            arr.push(word);
            word = ' ';
        } else {

            word += str[i];
          
        };
        
    }
    console.log(arr);
    console.log(arr.length);
}
console.log(calculateWordsInText('I got enough sleep today because I went to bed early'));
