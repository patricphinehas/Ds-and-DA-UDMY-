
// reference type
var object1 = { value:10}
var object2 = object1 // object2 references to object1
var object3 = { value:10} 

// the above are not same

// context vs scope
// context: "this" what object is it inside of
const object4 = {
    a:function(){
        console.log(this)
    }
}

object4.a()

// scope
function(){
    let a = 4
}



// instantiation
class Player {
    constructor(name, type){
        this.name = name
        this.type = type
    }
    introduce() {
        console.log(`hi I am ${this.name},I'm a ${this.type}`)
    }
}

class Wizard extends Player{
    constructor(name, type) {
        super(name,type)
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('starko','healer')

wizard1.play()
wizard1.introduce()
