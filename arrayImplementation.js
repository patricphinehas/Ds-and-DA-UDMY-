// understanding the array Implementations

class MyArray{
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index){
        // O(1)
        return this.data[index]
    }
    push(item){
        // O(1)
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop(){
        // O(n) or O(1)
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }
    delete(index){
        // O(n)
        const item = this.data[index]
        console.log('i am still here')
        this.shiftItems(index)
    }
    shiftItems(index){
        console.log('i am here')
        for(let i = index; i<this.length-1;i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}


// test regions
const array = new MyArray()
console.log(array)
array.push('hi')
array.push('you')
array.push('!')
array.delete(1)
console.log(array)
