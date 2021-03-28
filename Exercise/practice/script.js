let node = document.querySelector(" body div");
let two = document.querySelector('.box-2')
let newDiv= document.createElement("div")
node.className = 'yellowish'
 node.classList
 node.classList.add('box')
 node.classList.toggle('hide')
 node.classList.toggle('hide')
 node.classList.toggle('bluish')
 node.classList.toggle('bluish')
 two.classList.toggle('bluish')

 newDiv.classList.add('box')
 let p = newDiv.appendChild(document.createElement("p"))
p.appendChild(document.createTextNode("This is dynamically put in."))
document.querySelector('body').appendChild(newDiv)
console.log(newDiv)

function displayDate(){
      document.getElementById('demo'). innerHTML = Date();
}


// // Constructors


console.log(Date.now())

function Person(firstName, lastName, dob){
      this.lastName = lastName;
      this.firstName = firstName;
      this.dob = dob;
      this.birthday = new Date (dob)
}

const Gastt = new Person("Gbenga", "02/11/1996");

 Person.prototype.calculateAge =  function(){
      const timeDiff = Date.now() - this.birthday.getTime();
      const ageDate = new Date (timeDiff)
      return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
      return  `${this.firstName}   ${this.lastName}`
}

Person.prototype.greetings = function(){
      return `Hello There ${this.firstName} ${this.lastName }`
}

 const john = new Person("John", 'Doe', '6-12-1957')
 const mary = new Person("Mary", "Alan", "02-07-1998")
 const abdul = new Person("Abdullahi", " MongoDB")


 //  Prototypial Inheritance 

 function Customer(  firstName, lastName, phone, membership){
       Person.call(this,  firstName, lastName);
       this.phone = phone;
       this.membership = membership;
 }
//  To Inherits Person's prototype method
Customer.prototype = Object.create(Person.prototype);

//Make customer.Prototype return Customer();
Customer.prototype.constructor = Customer;



 const customer1 = new Customer("Saleem", "Zubair", "0812 345 6789", 'Elder')

 //Generating Customer's greeting
 Customer.prototype.greetings = function(){
      return `Hello There ${this.firstName} ${this.lastName }. You welcome to my world!`
 }


//  Other ways to create Objects.
  const personPrototypes = {
        greeting: function(){
              return `Hello there ${this.firstName} ${this.lastName}`;
        },

         getsMarried: function(newLastName){
              this.lastName = newLastName;
        }
    }

    const becky = Object.create(personPrototypes);
    becky.firstName = "Becky";
    becky.lastName = "Johnson";
    becky.age = 23;
    becky.getsMarried("McAnderson")

//     OR

const phillips = Object.create(personPrototypes,{
      firstName: {value: "Phillip"},
      lastName: {value: "Bahrane"},
      age: {value: 27}
})

// Using Javescript ES6 Classes

 console.log(john.getFullName())
 console.log(john.calculateAge())
 console.log(mary.getFullName())
 console.log(mary.calculateAge())
console.log(abdul.greetings())
console.log(customer1)
console.log(customer1.greetings())
console.log(becky)
console.log(phillips)



 