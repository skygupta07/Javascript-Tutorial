/*
you are creating a website for your college. Create a class user with 2 properties , name 
and email. It also has a method called viewData() that allows user to view abstract data..

*/

let DATA = "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}

let stud1 = new User("akash", "akash@gmail.com");
let stud2 = new User("sonu" , "sonu@gmail.com");

let teacher1 = new User("Dean" , "hod@gmail.com"); 


/*
create a new class called Admin which inherits from User. Add a new method called 
edit Data to Admin that allows it to edit website data.
*/

class Admin extends User{
    constructor(name, email){
        super(name,email);      // apne aap values assign kar dega using the parent class ( User here )
    }

    editData(){
        DATA = "some new value";
    }
}


let rk = new Admin("rakeshkumar" , "rk@college.com");




















