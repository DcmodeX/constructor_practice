//HOMEWORK: i want to loop my students and create a tabble to display here
console.log('hello')

// Factory func
function createPerson(){
    return {
        name:"dastan"
    }
}
// Constructor func
function Student(name,lastName,email){
    this.name=name;
    this.lastName=lastName;
    this.email=email;
    this.goal="Front-end Engineer"
    this.prerequisites=['eligible to work','have internet']
    this.language="english"
    this.grade=0
    this.gitHub='gamil'
}

const newStudent=new Student('Adilet','Atambaev','adiltet@gamail.com')
const Aida=new Student('aida','aitenova','aitenova@gmail.com')
console.log(newStudent)
console.log(Aida)


const APIURL='https://crudcrud.com/api/c780babfa5554e989ce7a6e5fca5a581/students';
//THIS GOES 1
const  getStudents = async ()=>{
    const studentsListDiv= document.getElementById('students-list');
    const promise=fetch(APIURL);
    const students=await promise.then(res=>res.json());
    console.log(students)
}
getStudents()


//CREATE STUDENT 2
const createStudentForm=document.getElementById('create-user')
createStudentForm.addEventListener('submit',async(event)=>{
    event.preventDefault();
    const inputValues={}
    const formInputs=Array.from(event.target.elements)
    formInputs.filter(element=>element.name)
    .forEach(element=>{
        inputValues[element.name]=element.value
    })
    const student=new Student(inputValues.name,inputValues.lastName,inputValues.email)
    console.log(student)

  //prepare POST
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    }
    const postPromise= fetch(APIURL,options);
    const result=await postPromise.then(res=>res.json());
    console.log(result)
})

