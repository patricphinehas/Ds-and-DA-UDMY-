const strings =['a','b','c','d']
// 4*4 =16 bytes as per 32 bit system

// access
console.log(strings[2])

// push
strings.push('e')
console.log(strings)

// pop
console.log(strings.pop())
console.log(strings)

// unshift
strings.unshift('x')
console.log(strings) 

// splice
strings.splice(2,0,'alien')
console.log(strings)



