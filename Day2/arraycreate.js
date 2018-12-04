var amitabh={name:"Amitabh" , surname:"Bachhan"};
var abhishek=Object.create(amitabh);
console.log(amitabh.name);
console.log(amitabh.surname);
console.log(abhishek.surname);
console.log(__proto__);
abhishek.name="Abhishek";
console.log(abhishek.name);
