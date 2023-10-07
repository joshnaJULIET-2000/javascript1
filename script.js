console.log('Hi')
// alert('hello and welcome');

// variables
var a=9;
console.log(a)//block 1

{
    var a=20;
   console.log(a);          // block 2
}
let b=23;
console.log(b);
{
    let b=34;
    console.log(b);
}
b=34
console.log(b);
// const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t);
}
console.log(t);
// data types
var nam='joshna is a very nice girl';
console.log(typeof(nam));
// numbers
var count=10;
console.log(typeof(count));
// boolean
var  bb=true;
console.log(typeof(bb));
// undefined
var gtype;
console.log(typeof(gtype));
// array
let arr=['red','blue','white',10]
console.log(arr[3]);
console.log(arr.length);
arr.push('violet');
console.log(arr);
arr.pop('violet');
console.log(arr);
// javascript objects
let car={
    mileage:100,
    model:'i10',
    color:'red'
}
console.log(car);
console.log(car.model);
console.log(car.mileage);
let person=new Object();
person.gender='male';
person.height=180;
console.log(person);
//  arithmetic operaton
var a=7;
var c=8;
console.log(a+c);
// console.log(person);
var a=10;
var d=++a;
console.log(d);
console.log(a);
var a=11;
var d=++a;
console.log(a);
console.log(d);
// if else or not equal to
if (a!=b){
    console.log('a is equal to b')
} else {
    console.log('a is not equal to b')
}
if (a==b){
    console.log('a is equal to b')
}else {
    console.log('a is not equal to b')
}
// and equal to
if (a==b && a==10) {
    console.log('a is equal to b')
} else {
    console.log('a is not equal to b and a is not 10')
}
// equal to
var c=10;
d='10';
if (c===d) {
    console.log('c equal to d')
} else {
    console.log('c not equal to d')
}
var c=10;
d='10';
if (c==d) {
    console.log('c equal to d')
} else {
    console.log('c not equal to d')
}
// greater than
var j=10;
a=5;
if (j>=a) {
    console.log('j is greater than a')
} else {
    console.log('caj is not greater than a')
}
// and & greater than
var j=10;
a=5;
if (j>=10 && j==a) {
    console.log('j is greater than a')
} else {
    console.log('j is not greater than a')
}
// assignment operators
let add=6;
 add -= 3;
 console.log(add);
//  bodmas
let n=20;
let e=70;
let g=12;
let m=10
console.log(add);
var exp=n+e*(g-m)-7;
console.log (n+e*(g-m)-7)
console.log(exp);

const arr2=[
    {
        name:'alan'
    },{
        name:'joshna'
    }
]
// functions
function display(name){
    console.log('Hi' +name+'welcome to js');
}
display('joshna')//function call
function addition(t,s){
    var result=t+s;
    console.log(result);
}
addition(10,30);
console.log('the sum is'+ result)
// function substration
function sub(u,v){
    var result=u-v
    return result
    console.log('the sum is'+ result)
}
var result=sub(40,7)
console.log('the sum is'+result)
// function multiplication
function mul(p,g){
    var result=p*g
    return result
    console.log('the sum is'+result)
}
// function division
function div(w,r){
    var result=w/r
    return result
    console.log('the sum is'+result)
}
var result=div(40,10)
console.log('the rem is'+result)













