const a= ['a','b','c','x','z']
const b= ['u','v','w','y','z']

// function scanner(a,b){
//     for(let i=0;i < a.length;i++){
//         for(let j=0;j<b.length;j++){
//             if(a[i]===b[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }

// function scanner2(arr1,arr2){
//     let map = {}
//     for(let i=0; i<arr1.length; i++){
//         if(!map[i]){
//             // console.log(arr1[i])
//             const item = arr1[i]
//             map[item] = true
//         }
//     }
//     for(let j=0;j<arr2.length;j++){
//         if(map[arr2[j]]){
//             return true
//         }
//     }
//     return false
// }

function scanner3(arr1,arr2){
    return arr1.some(item => arr2.includes(item))
}

j = scanner3(a,b)

console.log(j)
