function isPalindrome(x: number): boolean {

    if ((x<0) || (x%10===0 && x!==0)){
        return false;
    }
    
    let revHalf:number = 0
    while (x > revHalf){
        revHalf = (revHalf*10)+(x%10)
        x = Math.floor(x/10)
    }
    // console.log(x, revHalf)
    return (revHalf===x) || (x===Math.floor(revHalf/10))
};

console.log(isPalindrome(121))  //true

//Another approach
function isPalindrome2(x: number): boolean {

    if (x<0) {
        return false
    }

    const str:string = x.toString()

    const rev:string = str.split('').reverse().join('')

    return str === rev
}