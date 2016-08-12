var x ="hello world!i am java script";
document.write(x)
var my_num1 = 20;
var my_num2 = 20;
if( my_num1 < my_num2)
{
alert('num1 is greater than num2');
}
else if (my_num1 == my_num2)
{
document.write("<br>");
document.write("num1 is equal to num2");
}

else
{
document.write(" num2 is greater than num1\n");
}
var day=1;
switch (day){
case 1:
document.write("<br>");
document.write("monday\n");
break;
case 2:
document.write("tuesday\n");
break;
default:
document.write("another day\n");
}