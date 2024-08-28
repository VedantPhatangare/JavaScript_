class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}


class Teacher extends user{
    
    constructor(username, subject ){
        // this.username = username
        super(username)
        this.subject = subject
    }

    addCourse(){
        console.log(`A New Course on subject ${this.subject} was added by Mr/Ms.${this.username}`)
    }
}

const newTeacher = new Teacher("deshpande","Mathematics")
newTeacher.logMe()
newTeacher.addCourse()




const newUser = new user("Vedant")
newUser.logMe()
// newUser.addCourse()

console.log(newTeacher instanceof Teacher)
console.log(newTeacher instanceof user)

