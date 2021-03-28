 class Person(){
       constructor(firstName, lastName, dob){
             this.dob = new Date(dob);
             this.firstName = firstName;
             this.lastName =lastName;
       }

       greeting(){
             return `HELLO THERE ${firstName} ${lastName}`
       }

       calculateAge(){
             const diff = Date.now() - this.dob.getTime();
             const ageDate = new Date(diff)
             return Math.abs(ageDate.getUTCFullYear() - 1970)
       }
 }

 const mary = new Person("Mary", "Adams", "12/9/2001") 
 mary.calculateAge()

//  Inheritance

class Customer extends Person {
      constructor(firstName, lastName, phone, membership){
            super( firstName, lastName)
            this.phone  = phone;
            this.membership = membership;
      }
}