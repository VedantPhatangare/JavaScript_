class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
    static createId(){ 
        // sometime we dont want to give access of some function to all the objects which are instantiated by our class, so we use static to prevent access
        return '123'
    }
}


const vedant = new User("vedant")
vedant.logme()
// console.log(vedant.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const newTeacher = new Teacher('deshpande',"desh@PannerNode.com")

console.log(newTeacher)
newTeacher.logme()
// newTeacher.createId() 
// even inherited class objects also cant access the static function