var head = prompt("enter name for heads");
var tails = prompt("enter name for tails");
var num = Math.random() * 2;
var floor = Math.floor(num);
if(floor === 0) {
  alert(tails + " " + "win");
}else {
    alert(head + " " + "wins");
}
document.write(num)
