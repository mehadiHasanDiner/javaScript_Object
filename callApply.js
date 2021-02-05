const noramlPerson = {
    firstName : "Meahdi",
    lastName : "Hasan",
    salary:15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount, tips, tax){
        // console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Balam",
    lastName: "hero",
    salary:25000
}

const friendlyPerson = {
    firstName: "Golam",
    lastName: "hero",
    salary:25000
}
// console.log(noramlPerson.salary);

// noramlPerson.chargeBill();
// const heroBillCharge = 	noramlPerson.chargeBill.bind(heroPerson);
// heroBillCharge(1500);
// heroBillCharge(10000);
// console.log(heroPerson.salary);

// noramlPerson.chargeBill.call(heroPerson, 900, 100, 10);
// noramlPerson.chargeBill.call(heroPerson, 3000, 300, 30);
noramlPerson.chargeBill.apply(heroPerson, [3000,300,30]);
noramlPerson.chargeBill.apply(heroPerson, [4000,400,40]);
console.log(heroPerson.salary);
