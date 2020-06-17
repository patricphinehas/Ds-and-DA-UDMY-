function twosum(nums, target) {
    const remainingArray = []
    // let firstIndex
    let val = []
    let rem

    // // outlier
    // if(nums.length===0){
    //     return val
    // }

    for(let i=0; i<nums.length ; i++){
        // console.log(remainingArray.find(Element => Element === rem))
        rem = target-nums[i] 
        if(remainingArray.includes(rem)){
            const firstIndex = remainingArray.findIndex(Element => Element === rem)
            // return
            val.push(firstIndex,i)
            return val
        }
        else{
            // console.log("pushed")
            remainingArray.push(nums[i])
        }

    }
    return val
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twosum(nums,target))
