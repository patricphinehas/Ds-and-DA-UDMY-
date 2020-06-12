function reverse(str){
    if(!str || str.length<2 || typeof str!=='string'){
        return 'not cool'
    }

    const str2 = []
    for (let i=str.length-1; i >= 0; i--){
        str2.push(str[i])
    }
    return str2.join('')
}

const reverse2 = str => [...str].reverse().join('')

console.log(reverse2('patric phinehas raj'))
console.log(reverse("pokemon"))