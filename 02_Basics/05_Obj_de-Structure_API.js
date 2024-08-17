//Object destructuring
const course = {
    courseName:"js",
    price:"999",
    duration:"10days",
    instructor:"Hitesh"
}
// course.instructor //instead of this , we can use destructuring like below
// const{instructor} = course 
//used in react props passing and accesing
// console.log(instructor)//gives value of instructor property


/* no need to access course.intructor every time, as we stored it in varibale of its own name like
const{instructor} = course
 or u can give it another name like
const{instructor:instr} = course
now we can simply access instructor property of course object using "instr" keyword variable
*/ 


//use of this destructuring inReact

// const navbar = (props.comapany) => {} instead of writing props.something for accesing passed value in component,  use 
// const navbar = ({comapany}) => {}
// navbar(comapany = "WixStudio") //comapany is passed as a prop of this component
//each component has default props object in react , so to access props object properties we use "props.something", similarly we can use "{something}" directly as given above in basics of destructuring}




/************API********** */
//API are like Hotel MenuCards, we only interact with the interface , but we dont care about its implementation and backend processing, as how it is served to our website





//via api we get JSON values or Arrya according to our requests




//JSON Like Structure

/* {
    "name":"Vedant",
    "courseName":"JS",
    "Price":999
    }*/
//both keys and values are strings except numbers,boolean etc as values



//data via Array look like 
/*[
    {},
    {},
    {}
]*/
