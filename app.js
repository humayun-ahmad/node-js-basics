// console.log();
console.log("hey Humayun");

// setTimeout
setTimeout(function(){
  console.log("3 second have passed");
}, 3000);

// setInterval
var time = 0;
var timer =  setInterval(function(){
  time += 2; // becasue every 2000 ms after
  console.log(time + ' second have passed');
  if(time > 5){
    clearInterval(timer);
  }
},2000);

// console.log(timer);
// directory name
console.log(__dirname);
console.log(__filename);
