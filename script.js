// 1.How to compare two JSON have the same properties without order...?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age :5 , name:"Person 1"};
 
console.log(JSON.stringify(obj1)   === JSON.stringify(obj2)) 

//2.Use the rest countries `API URL ->https://restcountries.eu/rest/v2/all and display all the country flags in the console.?


var request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)

request.send()

request.onload=function() {

    var data=request.response
   var result=JSON.parse(data);

   for(var obj of result) {
      console.log(obj.flag)

}
}

//3.use the same rest countries and print all countries name, regions, sub-region and populations


var request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)

request.send()

request.onload=function() {

    var data=request.response
   var result=JSON.parse(data);

   for(var obj of result) {
      console.log(obj.countries ,obj.region, obj.subregion, obj.population)

}
}