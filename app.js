"use strict";
//HOW TO ASSIGN DATA TYPE IN OBJECT
let moblieInfo = {
    mobilename: "vivo",
    model: "Y12A",
    price: 40000,
    warenty: "2years",
    ram: "12GB",
    phonestorage: "32GB"
};
// console.log(moblieInfo);
//NEATED  OBJECT AND ASSIGN A DATA TYPES
// let Info: {
//   PersonalName: string;
//   age: number;
//   address: {
//     city: string;
//     street: number;
//     houseNumber: string | number;
//     country: string;
//   };
// } = {
// 	PersonalName: "Fatima",
// 	age: 17,
// 	address: {
// 		city: "karachi",
// 		street:12,
// 		houseNumber: 2333,
// 		country:"Pakistan"
// 	}
//}
// 	console.log( Info);
// 	let Data = {
//     PersonalName: "Ayesha",
//     age: 17,
//     address: {
//       city: "hydrabad",
//       street: 15,
//       houseNumber: 2663,
//       country: "Pakistan",
//     },
// };
// console.log(Data);
// console.log(Data.address.city);
// console.log(Data.address.country);
// // type intersection
// type ChemistryLab= {
// 	chemicalName : string,
// 	concentration: number | string,
// 	symbolicFormula: string | number,
// }
// type ChemistryInfo= {
// 	Chemicalprice: number,
// 	Quntity: "small" | "large" | "medium",
// }
// type MixInfo = ChemistryLab & ChemistryInfo
// let mixdata: MixInfo = {
// 	chemicalName: "sulphuric acid ",
// 	concentration: "20 mol/dm3",
// 	symbolicFormula: "h2so4",
// 	Chemicalprice: 2000,
// 	Quntity: "medium"
// }
// console.log(mixdata);
// console.log(mixdata.symbolicFormula);
// // interface
// interface PersonalData {
// 	name: string,
// 	age: Number,
// 	city: string
// 	rollno : number
// }
// let Myname : PersonalData = {
// 	name: "sadia",
// 	age: 17,
// 	city: "karachi",
// 	rollno:4567
// }
// console.log(Myname);
// console.log(Myname.age);
// //interface in neated object
// interface Student {
// 	studentName: string
// 	age: number
// 	course: {
// 		courseName: string
// 		batchNo:number
// 		ID :number
// 	}
// }
// let StudentData: Student = {
// 	studentName: "emaan",
// 	age: 18,
// 	course: {
// 		courseName: "typeScript",
// 		batchNo: 1,
//     ID:23344
// 	}
// }
// console.log(StudentData);
// console.log(StudentData.course.courseName);
// interface user {
// 	name: string,
// 	rollno: Number,
// 	email: string | number,
// 	grade: string,
// 	courses: {
// 		course_name: string,
// 		id :number
// 	}
// }
// let user2: user = {
// 	name: "sadia",
// 	rollno: 23445,
// 	email: "example@gmail.com",
// 	grade: "A",
// 	courses: {
// 		course_name: "typscript",
// 		id:3456
// }
// }
//----------------------29-may-2024-----------
// interface
// interface slip {
// 	name: string,
// 	timestamp:string
// }
// let bill: slip = {
// 	name: "haseeb",
// 	timestamp:"12:05pm"
// }
// console.log(bill.name,bill.timestamp);
//type literals
// let juice: "small" | "large" | "medium"
//loop ;
//1) for loop 2) while loop 3) do while loop
//for loop
// starting point --initialization
//ending point ---condition
//increment or decrement      i=i+5
// for (let i = 5; i <= 25; i += 5){
// 	console.log(i);
// }
// for (let a = 5; a >= 1;a--){
// 	console.log(a);
// }
// for (let a = 5; a >= 1;a--){
// console.log(a);
//}
//while loop
// let abc = 1
// while (abc <=15) {
// 	console.log(abc);
// 	abc++
// } // abc =abc + 3
// let abcd = 1
// while (abcd <=15) {
// 	console.log(abcd);
// 	abcd = abcd + 3
// }  // abcd =abcd + 3
//length method
// let fruit = ["apple", "banana", "peach","orange"]
// console.log(fruit.length);
// let fruit = ["apple", "banana", "peach", "orange"];
// for (let i = 0; i <= 3;i++){
// console.log(fruit[i]);
// }
// let fruit = ["apple", "banana", "peach", "orange", "strewberry", "kiwi"];
// fruit.push("began")
// fruit.push("moli")
//  for (let i = 0; i < fruit.length;i++){
// 	console.log(fruit[i]);
// }
// for (let phal of fruit){  //for of loop only for array
// console.log(phal);
// }
//-----------------------------------------------
//enum
// enum direction{
// 	north="north",
// 	south="south",
// 	east="east",
// 	west="west"
// }
// console.log(direction.north);
// console.log(direction.east);
// console.log(direction.south)
// console.log(direction.west);
//-------------------------------------
// enum timeslot {
// 	morning = "9 to 12",
// 	afternoon = "2 to 5",
// 	evening = "7 to 10",
// 	phonenumber= 987654
// }
// console.log(timeslot.morning);
// console.log(timeslot.evening);
// console.log(timeslot.afternoon);
// console.log(timeslot.phonenumber);//another way to console
// console.log(timeslot[2]); //error bcz value assign hai agr value assign nhi hogi then index ayga;
// enum timeslot {
// 	morning1,
// 	afternoon2,
// 	evening3,
// 	phonenumber4
// }
// console.log(timeslot[0]); // value aygi like morn even and after and numb
// console.log(timeslot[1]);
// console.log(timeslot[2]);
// console.log(timeslot[3]);
// console.log(timeslot); // value with index
//---------turple----
// type DataBase = [number, string, number];
// const empData: DataBase[] = [[45, "sadia", 90000],[11,"fatima",7000],[33,"emaan",98888]]
// //console.log(empData[0][1]);
// console.log(empData);
// //using for of loop
// for (let manager of empData) {
// 	console.log(manager[0],manager[1],manager[2]);
//}
//loop. for loop, while loop ,for of loop
//enum
//tuple
// type  myName={
// 	name: string,
// 	age: number,
// 	address: {
// 		city: string,
// 		country: string,
// 		area:string
// 	},
// 	exp:number
// }
// let myname:myName= {
// 	name: "sadia",
// 	age: 23,
// 	address: {
// 		city: "karachi",
// 		country: "pak",
// 		area:"phase 2",
// 	},
// 	exp:3
// }
// console.log(myname.address.city);
// type ifo = {
// 	name: string,
// 	age: number | string,
// 	address:{
// 		city: String,
// 		street:number|string
// 	},
// 	country:string
// }
// let myperson : ifo ={
// 	name: "sadia",
// 	age: 98,
// 	address:{
// 		city: "karachai",
// 		street:45
// 	},
// 	country:"pak"
// }
// console.log(myperson.address.city);
// type stationary= {
// 	pencil: "pen" | "ballpen" | "linkpen",
// 	erase: number,
// 	bookName:string
// }
// type school = {
// 	uniform: "blue" | "green" | "white",
// 	shoes: string,
// 	watchPrice:number
// }
// type Mixinfo = stationary & school
// let myinfo: Mixinfo = {
// 	pencil: "pen",
// 	erase: 67,
// 	bookName: "the best book",
// 	uniform: "white",
// 	shoes: "new shoes",
//  watchPrice:2000
// }
// console.log(myinfo.pencil);
// interface myname {
//   name: string;
//   age: number;
//   cousres: {
//     cousresName: string;
//     cousresPrice:number
// 	},
// 	exp:number
// }
// interface moredata{
// 	rollno: number,
//    field:string
// }
// let getdata: myname = {
// 	name: "sadia",
// 	age: 87,
// 	cousres: {
// 		cousresName: "typescript",
// 		cousresPrice: 8900,
// 	},
// 	exp:6
// }
// console.log(getdata.cousres.cousresPrice);
// let a = 2;
// for (let i = C; i <= 10;i++){
// 	console.log(`${a} * ${i} = ${a*i}`);
// }
// let a = 2
// while (a <=10 ) {
// 	console.log(`${a} * ${a} =${a*a}`);
// 	a++
// }
let fruit = ["apple", "banana", "peach", "orange"];
for (let i = 0; i <= 3; i++) {
    console.log(fruit[i]);
}
;
